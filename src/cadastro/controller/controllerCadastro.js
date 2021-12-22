// VARIABLES

let button = $('#button')
let cep = $('#cep')
let rua = $('#rua')
let bairro = $('#bairro')
let cidade = $('#cidade')
let estado = $('#uf')
let cepsmall = $('#cepHelp')

// EVENTS

cep.on('blur', funCEP)

// FUNCTIONS

async function funCEP() {
  var cepValor = cep.val()
  try {
    let dadosCep = await consultaCep(cepValor)
    if (dadosCep.erro) {
      cepsmall.text('CEP não encontrado!')
      limpaCamposCEP()
    } else {
      completaCamposCEP(dadosCep)
    }
  } catch {
    cepsmall.text('Valor do CEP inválido!')
    limpaCamposCEP()
  }
}
