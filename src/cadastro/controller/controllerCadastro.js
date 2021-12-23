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
    let dadosCep = await ModelCadastro.consultaCep(cepValor)
    if (dadosCep.erro) {
      cepsmall.text('CEP não encontrado!')
      ViewCadastro.limpaCamposCEP()
    } else {
      ViewCadastro.completaCamposCEP(dadosCep)
    }
  } catch {
    cepsmall.text('Valor do CEP inválido!')
    ViewCadastro.limpaCamposCEP()
  }
}
