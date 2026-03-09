// Vetores

const listadenomes = ['Marta', 'jose','Maria']

console.log('Exibindo todos os dados')
console.log(listadenomes)

console.log('\nExibindo apenas o primeiro numero: ')
console.log(listadenomes[0])

// Adicionando daos
console.log('\nAdicionando dados: ')
listadenomes.push('Marilia', 'Rebeca', 'ismael')
console.log(listadenomes)

// console.log('\nAdicionando dados: ')
// listadenomes.push('ismael')
// console.log(listadenomes)

// Removendo dados
console.log('Removendo dados')
listadenomes.splice(0,2)
console.log(listadenomes)

console.log('Removendo apenas o ultimo dado: ')
listadenomes.pop()
console.log(listadenomes)

