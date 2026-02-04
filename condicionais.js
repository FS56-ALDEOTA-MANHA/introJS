// let compra = parseFloat(prompt("digite o valor da compra"))
// let frete = 20
// let valorFinal;

// if (compra >= 200) {
//   alert("Frete grátis")
//   frete = 0
// }

// valorFinal = compra + frete

// alert(`o valor final da compra é ${valorFinal} com frete: ${frete}`)


// mais de uma condição -> else if

//exemplo: situação de aluno
// let nota1 = Number(prompt("digite a primeira nota"))
// let nota2 = Number(prompt("digite a segunda nota"))
// let nota3 = Number(prompt("digite a terceira nota"))

// let media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

// if (media >= 7) {
//   alert(`Aluno aprovado ${media}`)
// } else if (media < 7 && media >= 5) {
//   alert(`Aluno em recuperação ${media}`)
// } else {
//   alert(`Aluno reprovado ${media}`)
// }


//Pergunte ao usuário se ele possui habilitação e é maior de 18 anos
//const idade = Number(prompt("Digite sua idade"))
// const idade = prompt("É maior de 18 anos? Responda: sim ou não").toLowerCase()

// //caso ele seja menor de 18 anos -> ele não pode tirar habilitação
// let possuiHabilitacao
// if (idade === "não") {
//   alert("Não pode tirar habilitação")
// } else if (idade === "sim") {
//   possuiHabilitacao = prompt("Possui habilitação? Responda: sim ou não").toLowerCase()
// } else {
//   alert("Resposta inválida")
// }

// if (possuiHabilitacao === "não") {
//   alert("ele pode tentar a prova do detran")
// } else if (possuiHabilitacao === "sim") {
//   alert("ele pode dirigir")
// } else if (!!possuiHabilitacao) {
//   alert("Resposta inválida")
// }

//caso ele tenha 18 anos ou mais e não possui habilitação -> ele pode tentar a prova do detran
//caso ele tenha 18 ou mais e possui habilitação -> ele pode dirigir


//switch case

// Verificar dia da semana
// domingo = 1, segunda = 2...

const diaDaSemana = Number(prompt("Digite o dia da semana de 1 a 7")) //4

switch (diaDaSemana) {
  case 1:
    alert("Hoje é domingo")
    break;
  case 2:
    alert("Hoje é segunda")
    break;
  case 3:
    alert("Hoje é terça")
    break;
  case 4:
    alert("Hoje é quarta")
    break;
  case 5:
    alert("Hoje é quinta")
    break;
  case 6:
    alert("Hoje é sexta")
    break;
  case 7:
    alert("Hoje é sábado")
    break;
  default:
    alert("Valor inválido")
    break;
}
