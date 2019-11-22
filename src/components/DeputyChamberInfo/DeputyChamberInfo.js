import React, {Fragment} from 'react';
import {gql} from 'apollo-boost';
import {Card, CardItem, Text} from 'native-base';

export const DeputyChamberInfo = ({deputy}) => {
  const {ultimoStatus: lastStatus} = deputy;
  const {gabinete: chamber} = lastStatus;

  return (
    <Fragment>
      <Card>
        <CardItem header bordered>
          <Text>Dados do Eleitorais</Text>
        </CardItem>
        <CardItem>
          <Text>{`Condição eleitoral: ${lastStatus.condicaoEleitoral}`}</Text>
        </CardItem>
        <CardItem>
          <Text>{`Data: ${lastStatus.data}`}</Text>
        </CardItem>
        {lastStatus.descricaoStatus && (
          <CardItem>
            <Text>{`Situação: ${lastStatus.descricaoStatus}`}</Text>
          </CardItem>
        )}
      </Card>

      <Card>
        <CardItem header bordered>
          <Text>Dados do Gabinete</Text>
        </CardItem>
        <CardItem>
          <Text>{`Prédio: ${chamber.predio}`}</Text>
        </CardItem>
        <CardItem>
          <Text>{`Andar: ${chamber.andar}`}</Text>
        </CardItem>
        <CardItem>
          <Text>{`Sala: ${chamber.sala}`}</Text>
        </CardItem>
        <CardItem>
          <Text>{`Nome: ${chamber.nome}`}</Text>
        </CardItem>
        <CardItem>
          <Text>{`Telefone: ${chamber.telefone}`}</Text>
        </CardItem>
        <CardItem>
          <Text>{`Email: ${chamber.email}`}</Text>
        </CardItem>
      </Card>
    </Fragment>
  );
};

DeputyChamberInfo.fragments = {
  chamberInfo: gql`
    fragment DeputyChamberInfo on Deputado {
      ultimoStatus {
        condicaoEleitoral
        data
        descricaoStatus
        gabinete {
          andar
          email
          nome
          predio
          sala
          telefone
        }
      }
    }
  `,
};
