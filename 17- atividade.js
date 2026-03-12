const listaDeAlunos = [
  { nome: "Ana", nota: 5.0 },
  { nome: "Bruno", nota: 10.0 },
  { nome: "Carla", nota: 2.0 },
  { nome: "Andrea", nota: 7.0 },
  { nome: "Marta", nota: 6.0 }
];

console.log("\nEncontre a aluna Marta e mostra o nome e a média dela.")
const usuarioEncontrado = listaDeAlunos.find(usuario => usuario.nome === "Marta")
console.log(`Nome: ${usuarioEncontrado.nome} \nNota: ${usuarioEncontrado.nota}`)

console.log("\nMostre a média geral da turma.")
const somanota = listaDeAlunos.reduce((total, usuario) => total + usuario.nota, 0)
const mediaGeral = somanota / listaDeAlunos.length 
console.log(`A média da turma é: ${mediaGeral}`)

console.log("\nMostre o nome e a nota dos alunos com nota abaixo de 7.0.")
const menornota = listaDeAlunos.filter(usuario => usuario.nota < 7.0)
menornota.forEach(usuario => {
  console.log(`${usuario.nome} tem ${usuario.nota}`)
})

console.log("\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0.")
const nota7 = listaDeAlunos.filter(usuario => usuario.nota >= 7.0) 
nota7.forEach(usuario => { 
  console.log(`${usuario.nome}`) 
})
