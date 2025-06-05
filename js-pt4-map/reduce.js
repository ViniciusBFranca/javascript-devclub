

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)





const companies = [
    {
        name: 'Samsung',
        marketValue: 50,
        CEO: 'Kim Hyun Suk',
        foundedOn: 1938
    },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975
    },
    {
        name: 'Intel',
        marketValue: 117,
        CEO: 'Brian Krzanich',
        foundedOn: 1698
    },
    {
        name: 'Facebook',
        marketValue: 117,
        CEO: 'Mark Zuckenberg',
        foundedOn: 2004
    },
    {
        name: 'Spotify',
        marketValue: 30,
        CEO: 'Daniel Ek',
        foundedOn: 2006
    },
    {
        name: 'Apple',
        marketValue: 845,
        CEO: 'Tim Cook',
        foundedOn: 1976
    }
]

const cart = [
    {productName: 'Abóbora', pricePerKg: 5, kg: 1},
    {productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    {productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    {productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    {productName: 'Morango', pricePerKg: 11.9, kg: 3 },
]

const finalValue = cart.reduce( (acc, value) => {
    const result =  value.pricePerKg * value.kg
    return acc + result 
}, 0)

console.log(`A sua compra ficou no total de: ${finalValue}`)