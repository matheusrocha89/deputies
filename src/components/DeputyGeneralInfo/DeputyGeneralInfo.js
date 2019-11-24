import React from 'react';
import {gql} from 'apollo-boost';
import {Card, CardItem, Text} from 'native-base';

export const DeputyGeneralInfo = ({deputy}) => {
  return (
    <Card>
      <CardItem header bordered>
        <Text>{deputy.nomeCivil}</Text>
      </CardItem>
      <CardItem header>
        <Text>Dados Pessoais</Text>
      </CardItem>
      <CardItem>
        <Text>{`CPF: ${deputy.cpf}`}</Text>
      </CardItem>
      <CardItem>
        <Text>{`Data Nascimento: ${deputy.dataNascimento}`}</Text>
      </CardItem>
      {deputy.dataFalecimento && (
        <CardItem>
          <Text>{`Data Falecimento: ${deputy.dataFalecimento}`}</Text>
        </CardItem>
      )}
      <CardItem>
        <Text>{`Grau de escolaridade: ${deputy.escolaridade}`}</Text>
      </CardItem>
      <CardItem>
        <Text>
          {`Local de Nascimento: ${deputy.municipioNascimento} - ${deputy.ufNascimento}`}
        </Text>
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
