export function formatCurrency(value: number, currency: 'EUR' | 'USD' | 'BRL') {
  let symbol
  switch (currency) {
    case 'EUR':
      symbol = '€'
      break;
    case 'USD':
      symbol = 'US$'
      break
    case 'BRL':
      symbol = 'R$'
  }
  return `${Number(value).toFixed(2)} ${symbol}`
}