// VARIABLES
let nome = $('#nome')
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
let cadastroMsg = $('#cadastroMsg')
let validCPF = false
let validEmail = false
let validSenha = false
let validCEP = false

// EVENTS

cep.on('blur', funCEP)
cpfInput.on('blur', validaCPF)
email.on('blur', validaEmail)
confirmaEmail.on('blur', ViewCadastro.validarConfimaEmail)
confirmaSenha.on('blur', ViewCadastro.validarConfirmaSenha)
button.click(cadastrar)

// FUNCTIONS

async function funCEP() {
  var cepValor = cep.val()
  try {
    let dadosCep = await ModelCadastro.consultaCep(cepValor)
    if (dadosCep.erro) {
      cepSmall.text('CEP não encontrado!')
      validCEP = false
      ViewCadastro.limpaCamposCEP()
    } else {
      ViewCadastro.completaCamposCEP(dadosCep)
      validCEP = true
    }
  } catch {
    cepSmall.text('Valor do CEP inválido!')
    ViewCadastro.limpaCamposCEP()
    validCEP = false
  }
}

function validaCPF() {
  ViewCadastro.validarCPF(cpfInput.val())
}

function validaEmail() {
  ViewCadastro.validarEmail(email.val())
}

function cadastrar(e) {
  e.preventDefault()
  if (validCEP && validCPF && validSenha && validEmail ) {
    ViewCadastro.limpaCamposCEP()
    ViewCadastro.limpaCamposCadastro()

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        nomeCad: nome.val(),
        senhaCad: senha.val(),
        emailCad: email.val()
      }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))


    cadastroMsg.removeClass('text-danger')
    cadastroMsg.addClass('text-success')
    cadastroMsg.text('Cadastrando usuário...')

    setTimeout(() => {
      cadastroMsg.text('Usuário cadastrado com sucesso! Você será redirecionado para a página de login!')
    }, 2000)

    

    setTimeout(() => {
      window.location.assign('../../../index.html')
    }, 5000)

    
  } else {
    cadastroMsg.removeClass('text-success')
    cadastroMsg.addClass('text-danger')
    cadastroMsg.text('Por favor, preencher todos os campos corretamente!')
  }
}


