import React from 'react';
import {Content, Spinner, Button, Text} from 'native-base';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import {
  DeputyGeneralInfo,
  DeputyChamberInfo,
  ProgressiveImage,
} from '../../components';

const QUERY = gql`
  query DeputyDetails($deputyId: ID!) {
    deputado(id: $deputyId) {
      ...DeputyGeneralInfo
      ...DeputyChamberInfo
    }
  }
  ${DeputyGeneralInfo.fragments.generalInfo}
  ${DeputyChamberInfo.fragments.chamberInfo}
`;

const DeputyDetails = ({navigation}) => {
  const deputyId = navigation.getParam('deputyId');
  const deputyUrlPhoto = navigation.getParam('deputyUrlPhoto');
  const {data, loading, error} = useQuery(QUERY, {
    variables: {deputyId},
  });

  const navigateToListExpenses = () => {
    navigation.navigate('ListExpenses', {
      deputyId,
    });
  };

  if (loading) {
    return <Spinner color="green" />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Content>
      <ProgressiveImage source={{uri: deputyUrlPhoto}} />
      <DeputyGeneralInfo deputy={data.deputado} />
      <DeputyChamberInfo deputy={data.deputado} />
      <Button block success onPress={navigateToListExpenses}>
        <Text>Despesas</Text>
      </Button>
    </Content>
  );
};

DeputyDetails.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('deputyName'),
});

export default DeputyDetails;
