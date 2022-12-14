// Gerando um novo array com todos os itens multiplicados por 2

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2 )

console.log(doubleNumbers)

// Gerando um novo array com desconto de 50% nos preços dos produtos

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

console.log(salePrices)

// Preços acima de R$ 30,00 recebem 50% de desconto

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

  const sale = products.map(product => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    }
    return product
  })

  console.log(sale)