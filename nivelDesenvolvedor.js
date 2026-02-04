

function verificarNivel() {
  const resposta = document.getElementById("resposta")
  const nivelSelecionado = document.querySelector("input[name='nivel']:checked")

  if (!nivelSelecionado) {
    resposta.innerHTML = "<span style='color:red;'>Nível é obrigatório.</span>"
    return
  }

  const nivel = nivelSelecionado.value

  switch (nivel) {
    case "trainee":
      resposta.innerHTML = "Seu nível é trainee"
      break;
    case "jr":
      resposta.innerHTML = "Seu nível é júnior"
      break;
    case "pl":
      resposta.innerHTML = "Seu nível é pleno"
      break;
    case "sr":
      resposta.innerHTML = "Seu nível é sênior"
      break;
  }

  console.log(resposta)
  console.log(nivelSelecionado)

}