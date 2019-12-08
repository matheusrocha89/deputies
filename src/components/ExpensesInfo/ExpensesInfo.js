import React, {Fragment} from 'react';
import {gql} from 'apollo-boost';
import {Card, CardItem, Text} from 'native-base';

import {formatToCurrency, formatToBrazilianDate} from '../../utils';
import {textStyles} from '../../styles';

export const ExpensesInfo = ({expense}) => {
  const expenseDateFormatted = formatToBrazilianDate(expense.dataDocumento);

  return (
    <Card>
      <CardItem header bordered>
        <Text>{expense.tipoDespesa}</Text>
      </CardItem>

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>CPF/CNPJ:</Text>
      </CardItem>
      <CardItem>
        <Text>{expense.cnpjCpfFornecedor}</Text>
      </CardItem>

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Tipo de documento:</Text>
      </CardItem>
      <CardItem>
        <Text>{expense.tipoDocumento}</Text>
      </CardItem>

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Número do documento:</Text>
      </CardItem>
      <CardItem>
        <Text>{expense.numDocumento}</Text>
      </CardItem>

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Data:</Text>
      </CardItem>
      <CardItem>
        <Text>{expenseDateFormatted}</Text>
      </CardItem>

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Fornecedor: </Text>
      </CardItem>
      <CardItem>
        <Text>{expense.nomeFornecedor}</Text>
      </CardItem>

      {!!expense.numRessarcimento && (
        <Fragment>
          <CardItem>
            <Text style={textStyles.cardInfoLabel}>
              Número de ressarcimento:
            </Text>
          </CardItem>
          <CardItem>
            <Text>{expense.numRessarcimento}</Text>
          </CardItem>
        </Fragment>
      )}

      {expense.parcela > 0 && (
        <Fragment>
          <CardItem>
            <Text style={textStyles.cardInfoLabel}>Parcela:</Text>
          </CardItem>
          <CardItem>
            <Text>{expense.parcela}</Text>
          </CardItem>
        </Fragment>
      )}

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Valor do documento:</Text>
      </CardItem>
      <CardItem>
        <Text>{`R$ ${formatToCurrency(expense.valorDocumento)}`}</Text>
      </CardItem>

      {expense.valorGlosa > 0 && (
        <Fragment>
          <CardItem>
            <Text style={textStyles.cardInfoLabel}>Valor glosa:</Text>
          </CardItem>
          <CardItem>
            <Text>{`R$ ${formatToCurrency(expense.valorGlosa)}`}</Text>
          </CardItem>
        </Fragment>
      )}

      <CardItem>
        <Text style={textStyles.cardInfoLabel}>Valor líquido:</Text>
      </CardItem>
      <CardItem>
        <Text>{`R$ ${formatToCurrency(expense.valorLiquido)}`}</Text>
      </CardItem>
    </Card>
  );
};

ExpensesInfo.fragments = {
  expensesInfo: gql`
    fragment ExpensesInfo on Despesa {
      cnpjCpfFornecedor
      dataDocumento
      idDocumento
      idLote
      nomeFornecedor
      numDocumento
      numRessarcimento
      parcela
      tipoDespesa
      tipoDocumento
      urlDocumento
      valorDocumento
      valorGlosa
      valorLiquido
    }
  `,
};
