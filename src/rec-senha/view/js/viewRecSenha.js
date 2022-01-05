function validarEmail(emaill) {
  let validacao = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emaill)
  let emailSmall = document.getElementById('msgerror')

  if (validacao == false) {
    emailSmall.innerText = 'E-mail inválido'
  } else {
    emailSmall.innerText = ''
  }
}

function exibeAviso() {
  let emailSmall = document.getElementById('msgerror')

  const campoEmail = $('#floatingInput')

  if (emailSmall.innerText == 'E-mail inválido') {
    emailSmall.innerText = 'Digite um e-mail válido'
  } else if (campoEmail.val() != '' && emailSmall.innerText == '') {
    emailSmall.innerText = 'Recupereção de senha enviada para o e-mail!'
  }
}
