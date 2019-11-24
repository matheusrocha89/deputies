import React from 'react';
import {FlatList} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {Spinner, Container} from 'native-base';

import {DeputyItem} from '../../components';

const QUERY = gql`
  query GetDeputies($cursor: String) {
    deputados(first: 30, after: $cursor) {
      pageInfo {
        endCursor
      }
      edges {
        node {
          ...DeputyItem
        }
      }
    }
  }

  ${DeputyItem.fragments.deputy}
`;

const ListDeputies = ({navigation}) => {
  const {loading, error, data, fetchMore} = useQuery(QUERY);

  const renderFooter = isLoading => {
    if (isLoading) {
      return <Spinner color="green" />;
    }

    return null;
  };

  const renderItem = ({item}) => {
    return <DeputyItem deputy={item.node} navigation={navigation} />;
  };

  const getMoreDeputies = () => {
    return fetchMore({
      query: QUERY,
      notifyOnNetworkStatusChange: true,
      variables: {cursor: data.deputados.pageInfo.endCursor},
      updateQuery: (previousResult, {fetchMoreResult}) => {
        const oldDeputies = previousResult.deputados.edges;
        const newDeputies = fetchMoreResult.deputados.edges;
        const newPageInfo = fetchMoreResult.deputados.pageInfo;

        return {
          deputados: {
            ...fetchMoreResult.deputados,
            pageInfo: newPageInfo,
            edges: [...oldDeputies, ...newDeputies],
          },
        };
      },
    });
  };

  const listFooterComponent = renderFooter(loading);

  if (error) {
    console.error(error);
    return null;
  }

  const {edges} = data ? data.deputados : {};

  return (
    <Container>
      <FlatList
        data={edges}
        keyExtractor={item => item.node.id}
        renderItem={renderItem}
        ListFooterComponent={listFooterComponent}
        onEndReached={getMoreDeputies}
        onEndReachedThreshold={0.4}
      />
    </Container>
  );
};

ListDeputies.navigationOptions = {
  title: 'Deputados',
};

export default ListDeputies;
