export const formatToCurrency = intNumber => {
  return intNumber
    .toFixed(2)
    .toString()
    .replace('.', ',');
};
