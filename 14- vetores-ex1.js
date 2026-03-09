// Exerciocio
// Crie um vetor com o nome dos seus familiares
// Com seis nomes.
// Use todos os comandos vistos em vetores apos cria a lista

const listanomes = ["Ismael","Rebeca","Antony","Eric",]

console.log("Exibindo dados. ")
console.log(listanomes)

console.log("Adicionando dados.")
listanomes.push("")
console.log(listanomes)

console.log("Removendo dados.")
listanomes.splice(0,1)
console.log(listanomes)

console.log("Removendo apenas o ultimo dado.")
listanomes.pop()
console.log(listanomes)

console.log("Remove apenas o primeiro elemento")
listanomes.shift()
console.log(listanomes)