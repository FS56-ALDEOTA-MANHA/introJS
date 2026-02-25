
//Arrays - listas 

let alunos = ["Mateus", "Samuel", "Mario"]

console.log(alunos)

alunos[3] = "Zenith"

console.log(alunos)

alunos[1] = "Nayara"

console.log(alunos)

let produtos = [
  {
    id: 1,
    nome: "Tênis",
    categoria: ["Casual", "Masculino"],
    marca: "Nike",
    tamanho: [40, 41, 42], 
    cor: ["Preto", "Branco", "Bege"],
    preco: 499.90, 
  },
  {
    id: 2,
    nome: "Tênis",
    categoria: ["Casual", "Masculino"],
    marca: "Adidas",
    tamanho: [40, 41, 42], 
    cor: ["Preto", "Branco", "Bege"],
    preco: 499.90, 
  },
  {
    id: 3,
    nome: "Tênis",
    categoria: ["Casual", "Masculino"],
    marca: "Mizuno",
    tamanho: [40, 41], 
    cor: ["Preto", "Branco", "Bege"],
    preco: 499.90, 
  },
  {
    id: 4,
    nome: "Tênis",
    categoria: ["Casual", "Masculino"],
    marca: "Reebok",
    tamanho: [40, 41, 43], 
    cor: ["Preto", "Branco", "Bege"],
    preco: 499.90, 
  }
]

let numerosPares = [2,4,6,8,10]

//insere item no final do array
numerosPares.push(12)

console.log(numerosPares)

//retira item no final do array
numerosPares.pop()

console.log(numerosPares)

//retirar item do inicio do array
numerosPares.shift()

console.log(numerosPares)

//adiciona item no inicio do array
numerosPares.unshift()

console.log(numerosPares)

//retirar e adicionar itens no array
// array.splice(start, deleteCount, item1, item2,..)

console.log("variavel antes do splice:", numerosPares)

numerosPares.splice(0,2)

console.log("variavel depois do splice:", numerosPares)

//filter - filtrar itens do array
//retorna um novo array com os itens filtrados

//array.filter((item) => ( verificação da condição/comparação de filtro ))
//para guardar o novo array de retorno do filter, recebemos o resultado dentro de uma variável (let ou const)

const produtosFiltrados = produtos.filter(item => item.marca === "Nike")

console.log(produtosFiltrados)

const prodPorTamanho = produtos.filter(item => item.tamanho.includes(42))

console.log(prodPorTamanho)

//método find() retorna apenas o primeiro item encontrado
const findProd = produtos.find(item => item.tamanho.includes(42))

console.log(findProd)

//forEach - passa por cada item do array e transforma em um novo array, sem retorno
//map - passa por cada item e gera um novo array, com retorno

const numeros = [20, 40, 60]
numeros.forEach((item, index, array) => (
  array[index] += item * 2
))

console.log(numeros)

produtos.forEach((item, index, array) => (
  array[index] = {
    id: item.id,
    nome: item.nome
  }
))

console.log("produtos:", produtos)


const items = produtos.map((item)=> (
  {
  id:item.id, 
  nome: item.nome
  }
))

console.log(items)


