somar(1000, 2000)

// Funções

// função sem parâmetro e sem retorno
function dizerOla() {
  console.log("Olá");
}

dizerOla()
dizerOla()
dizerOla()
dizerOla()


//funções com parâmetro e com retorno

function somar (num1, num2) {
  let soma = num1 + num2
  console.log(soma)
  return soma
}

somar(25, 1000)

function inverter(num) {
  return -num
}

//função de callback

function subtrair (num1, num2, funcao) {
  let num3 = funcao(num2)
  console.log(somar(num1,num3))
}
subtrair(4, 10, inverter)


// funcao de seta (arrow function)

const contarAlunos = array => {
  return array.length
}


console.log(contarAlunos(["Zenith", "Matheus", "Jacqueline", "Felipe"]))

// function somar () {
//   console.log("Outra função somar")
// }

//arrow function com callback
const funcaoComCallback = (funcao) => {
  funcao()
}

//funcao de callback anônima
funcaoComCallback(() => {
  console.log("Executando callback")
})
