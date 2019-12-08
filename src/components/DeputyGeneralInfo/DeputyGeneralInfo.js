import React, {Fragment} from 'react';
import {gql} from 'apollo-boost';
import {Card, CardItem, Text} from 'native-base';

import {formatToBrazilianDate} from '../../utils';
import {textStyles} from '../../styles';

export const DeputyGeneralInfo = ({deputy}) => {
  const birthDateFormatted = formatToBrazilianDate(deputy.dataNascimento);
  const deathDateFormatted = formatToBrazilianDate(deputy.dataFalecimento);

  return (
    <Card>
      <CardItem header bordered>
        <Text>{deputy.nomeCivil}</Text>
      </CardItem>
      <CardItem header>
        <Text>Dados Pessoais</Text>
      </CardItem>

      <CardItem>
        <Text styles={textStyles.cardInfoLabel}>CPF:</Text>
      </CardItem>
      <CardItem>
        <Text>{deputy.cpf}</Text>
      </CardItem>

      <CardItem>
        <Text styles={textStyles.cardInfoLabel}>Data Nascimento:</Text>
      </CardItem>
      <CardItem>
        <Text>{birthDateFormatted}</Text>
      </CardItem>

      {deputy.dataFalecimento && (
        <Fragment>
          <CardItem>
            <Text styles={textStyles.cardInfoLabel}>Data Falecimento:</Text>
          </CardItem>
          <CardItem>
            <Text>{deathDateFormatted}</Text>
          </CardItem>
        </Fragment>
      )}

      <CardItem>
        <Text styles={textStyles.cardInfoLabel}>Grau de escolaridade:</Text>
      </CardItem>
      <CardItem>
        <Text>{deputy.escolaridade}</Text>
      </CardItem>

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Local de Nascimento:</Text>
      </CardItem>
      <CardItem>
        <Text>{`${deputy.municipioNascimento} - ${deputy.ufNascimento}`}</Text>
      </CardItem>
    </Card>
  );
};

DeputyGeneralInfo.fragments = {
  generalInfo: gql`
    fragment DeputyGeneralInfo on Deputado {
      id
      cpf
      dataNascimento
      dataFalecimento
      escolaridade
      municipioNascimento
      nomeCivil
      ufNascimento
    }
  `,
};
