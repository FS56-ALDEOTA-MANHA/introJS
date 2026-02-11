
//Padrões de repetição 

//for -> usado quando sabemos a quantidade de vezes a ser executado

//for (inicializador, condição, incrementador) {
//  bloco de código a ser repetido
//}


let cursos = ["Desenvolvimento Fullstack", "Marketing Digital", "Design UX/UI", "Curso FullCycle"]

for (let index = 0; index <= cursos.length; index++) {
  console.log(cursos[index]);
}

let alunos = ["Zenith", "Angelo", "Felipe", "Mário", "Yasmin"]


// decremento i--
// for (let i = 4;i >= 0 ;i--) {
//   console.log(alunos[i])
// }


// let i = 4

// for (;i >= 0;) {
//   console.log(alunos[i])
//   i--
// }


//while usado quando não sabemos a quantidade de repetições
let produtos = [
  {
    nome: "Tênis NanoX",
    marca: "Reebok", 
    preco: 400.00,
    categoria: "Calçado"
  },
  {
    nome: "Blusa",
    marca: "Nike",
    preco: 100.00,
    categoria: "Roupa"
  }, 
  {
    nome: "Mochila",
    marca: "Adidas",
    preco: 199.90,
    categoria: "Bolsa"
  }, 
]

let i = 0
while (i < produtos.length) {
  console.log(produtos[i])
  i++
}


let usuarios = [
  {
    id: 1,
    nome: "Nayara Queiroz",
    email: "queiroz.14@hotmail.com",
    senha: "1234"
  }
]



//   let email = prompt("Digite seu email")
//   let senha = prompt("Digite sua senha")

// while (email !== usuarios[0].email || senha !== usuarios[0].senha) {
//   alert("Email ou senha incorretos")
//   email = prompt("Digite seu email")
//   senha = prompt("Digite sua senha")
// }

// if (email === usuarios[0].email && senha === usuarios[0].senha) {
//   alert("Login efetuado com sucesso")
// }

//do...while

//cuidado: mesmo a condição sendo falsa, o bloco do executa pelo menos 1x



// let pensamento = 7
// let resposta;

// do {
//   resposta = Number(prompt("Advinhe o que estou pensando"))
// } while (resposta !== 7);



let email;
let senha;


do {
  (email !== undefined) && alert("Email ou senha incorretos")
  email = prompt("Digite seu email")
  senha = prompt("Digite sua senha")
} while (email !== usuarios[0].email || senha !== usuarios[0].senha);

alert("Login efetuado com sucesso")

