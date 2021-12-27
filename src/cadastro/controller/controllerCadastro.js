// VARIABLES
let button = $('#button')
let cep = $('#cep')
let rua = $('#rua')
let bairro = $('#bairro')
let cidade = $('#cidade')
let estado = $('#uf')
let cepSmall = $('#cepHelp')
let cpfInput = $('#cpf')
let cpfSmall = $('#cpfHelp')
let email = $('#email')
let emailSmall = $('#emailHelp')
let confirmaEmail = $('#emailConfirm')
let confirmaEmailSmall = $('#emailConfirmHelp')
let senha = $('#senha')
let confirmaSenha = $('#senhaConfirm')
let confirmaSenhaSmall = $('#senhaConfirmHelp')

// EVENTS

cep.on('blur', funCEP)
cpfInput.on('blur', validaCPF)
email.on('blur', validaEmail)
confirmaEmail.on('blur', ViewCadastro.validarConfimaEmail)
confirmaSenha.on('blur', ViewCadastro.validarConfirmaSenha)

// FUNCTIONS

async function funCEP() {
  var cepValor = cep.val()
  try {
    let dadosCep = await ModelCadastro.consultaCep(cepValor)
    if (dadosCep.erro) {
      cepSmall.text('CEP não encontrado!')
      ViewCadastro.limpaCamposCEP()
    } else {
      ViewCadastro.completaCamposCEP(dadosCep)
    }
  } catch {
    cepSmall.text('Valor do CEP inválido!')
    ViewCadastro.limpaCamposCEP()
  }
}

function validaCPF() {
  ViewCadastro.validarCPF(cpfInput.val())
}

function validaEmail() {
  ViewCadastro.validarEmail(email.val())
}


