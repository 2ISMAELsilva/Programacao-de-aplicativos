// Exemplo com vetor de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5, 6 ,7, 8 ,9 ,10]

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados como uma classe
const listaDeUsuarios = [
  {nome: "Ana", idade: 25},
  {nome: "Maria", idade: 35},
  {nome: "Joana", idade: 45},
  {nome: "Mariolaele", idade: 15},
  {nome: "Maria", idade: 12},
  {nome: "Mario", idade: 13}
]

// Percorrendo e exibindo os elementos do vetor
// forEach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor.")
listaDeUsuarios.forEach(usuarios => {
  console.log(`${usuarios.nome} tem ${usuarios.idade} anos`)
})


for (let i = 0; i < listaDeUsuarios.length; i++) {
  console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")

// filtrando maiores de idade
const maioridade = listaDeUsuarios.filter(usuarios => usuarios.idade >= 18)
maioridade.forEach(usuario => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log('\nFiltrando menores de 18.')
const menoridade = listaDeUsuarios.filter(usuarios => usuarios.idade < 18)
menoridade.forEach(usuario => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

// Filtrando apenas números pares
console.log('\nFiltrando apenas números pares')
const numerosPares = listaDeNumeros.filter(numero => numero % 2 === 0)
console.log(numerosPares)

console.log('\nApenas os nomes.')
listaDeNomes.forEach(nome => {
  console.log(nome)
})

console.log('\n Na lista de usuarios, Encontre um usuario.')
const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.nome === "Mario")
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)


console.log('\nNa lista de usuarios, encontre um usuario com idade 45.')
const usuarioidade = listaDeUsuarios.find(usuario => usuario.idade === 45)
console.log(`Nome: ${usuarioidade.nome} \nIdade: ${usuarioidade.idade}`)


console.log("\nNa lista de usuarios, some todas as idades.")
const somaidade = listaDeUsuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaidade)
