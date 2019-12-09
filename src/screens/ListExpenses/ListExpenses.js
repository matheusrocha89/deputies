import React from 'react';
import {FlatList} from 'react-native';
import {Container, Spinner} from 'native-base';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import {ExpensesInfo} from '../../components';

const QUERY = gql`
  query DeputyExpenses($deputyId: ID!, $cursor: String) {
    deputadoDespesas(
      id: $deputyId
      first: 20
      after: $cursor
      ordenarPor: "dataDocumento"
      ordem: "desc"
    ) {
      pageInfo {
        endCursor
      }
      edges {
        node {
          ...ExpensesInfo
        }
      }
    }
  }
  ${ExpensesInfo.fragments.expensesInfo}
`;

const ListExpenses = ({navigation}) => {
  const deputyId = navigation.getParam('deputyId');
  const {data, loading, error, fetchMore} = useQuery(QUERY, {
    variables: {
      deputyId,
      cursor: '',
    },
  });

  const renderFooter = isLoading => {
    if (isLoading) {
      return <Spinner color="green" />;
    }

    return null;
  };

  if (loading) {
    return <Spinner color="green" />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const renderItem = ({item}) => {
    return <ExpensesInfo expense={item.node} />;
  };

  const keyExtractor = item => {
    return `${item.node.numDocumento}-${item.node.cnpjCpfFornecedor}`;
  };

  const getMoreExpenses = () => {
    return fetchMore({
      query: QUERY,
      notifyOnNetworkStatusChange: true,
      variables: {
        deputyId,
        cursor: data.deputadoDespesas.pageInfo.endCursor,
      },
      updateQuery: (previousResult, {fetchMoreResult}) => {
        const oldExpenses = previousResult.deputadoDespesas.edges;
        const newExpenses = fetchMoreResult.deputadoDespesas.edges;
        const newPageInfo = fetchMoreResult.deputadoDespesas.pageInfo;

        return {
          deputadoDespesas: {
            ...fetchMoreResult.deputadoDespesas,
            pageInfo: newPageInfo,
            edges: [...oldExpenses, ...newExpenses]
          },
        };
      },
    });
  };

  const {edges} = data ? data.deputadoDespesas : {};

  const ListFooterComponent = renderFooter(loading);

  return (
    <Container>
      <FlatList
        data={edges}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
        onEndReached={getMoreExpenses}
        onEndReachedThreshold={0.4}
      />
    </Container>
  );
};

ListExpenses.navigationOptions = {
  title: 'Despesas',
};

export default ListExpenses;
