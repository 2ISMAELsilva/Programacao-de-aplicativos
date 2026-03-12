// Novos Recursos

// Vetor de numeros
const listanumeros = [1,2,3,4,5]

console.log('Exibindo numeros do vetor: ')
console.log(listanumeros)

console.log('Multiplicando numeros do vetor: ')
const dobrados = listanumeros.map(n => n * 2)
console.log(dobrados)

console.log("\nFiltrar numeros pares no vetor. ")
const pares = listanumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("\nSomar todos os numeros do vetor. ")
const somar = listanumeros.reduce((soma, atual) => soma + atual, 0)
console.log(somar)
