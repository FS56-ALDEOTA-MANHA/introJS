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
let nota1 = Number(prompt("digite a primeira nota"))
let nota2 = Number(prompt("digite a segunda nota"))
let nota3 = Number(prompt("digite a terceira nota"))

let media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

if (media >= 7) {
  alert(`Aluno aprovado ${media}`)
} else if (media < 7 && media >= 5) {
  alert(`Aluno em recuperação ${media}`)
} else {
  alert(`Aluno reprovado ${media}`)
}


//Pergunte ao usuário se ele possui habilitação e é maior de 18 anos

//caso ele seja menor de 18 anos -> ele não pode tirar habilitação

//caso ele tenha 18 anos ou mais e não possui habilitação -> ele pode tentar a prova do detran
//caso ele tenha 18 ou mais e possui habilitação -> ele pode dirigir