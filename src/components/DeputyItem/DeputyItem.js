import React from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {Left, Thumbnail, ListItem, Body, Text} from 'native-base';

export const DeputyItem = ({deputy, navigation}) => {
  const navigateToDeputyDetailsScreen = () => {
    navigation.navigate('DeputyDetails', {
      deputyId: deputy.id,
      deputyUrlPhoto: deputy.urlFoto,
      deputyName: deputy.nome,
    });
  };

  return (
    <ListItem avatar onPress={navigateToDeputyDetailsScreen}>
      <Left>
        <Thumbnail source={{uri: deputy.urlFoto}} />
      </Left>
      <Body>
        <Text>{deputy.nome}</Text>
        <Text note>{deputy.siglaPartido}</Text>
      </Body>
    </ListItem>
  );
};

DeputyItem.fragments = {
  deputy: gql`
    fragment DeputyItem on DeputadoSimples {
      id
      nome
      siglaPartido
      urlFoto
    }
  `,
};

DeputyItem.propTypes = {
  deputy: PropTypes.shape({
    id: PropTypes.string,
    nome: PropTypes.string,
    siglaPartido: PropTypes.string,
    urlFoto: PropTypes.string,
  }),
};
