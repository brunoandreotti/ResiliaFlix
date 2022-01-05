class ViewCadastro {
  static completaCamposCEP(cep) {
    cepSmall.text('')
    rua.val(cep.logradouro)
    rua.attr('readonly', '')
    bairro.val(cep.bairro)
    bairro.attr('readonly', '')
    cidade.val(cep.localidade)
    cidade.attr('readonly', '')
    estado.val(cep.uf)
    estado.attr('readonly', '')
  }

  static limpaCamposCEP() {
    rua.val('')

    bairro.val('')

    cidade.val('')

    estado.val('')
  }

  static limpaCamposCadastro() {
    nome.val('')
    $('#sobrenome').val('')
    email.val('')
    confirmaEmail.val('')
    senha.val('')
    confirmaSenha.val('')
    cpfInput.val('')
    $('#rg').val('')
  }

  static validarCPF(Objcpf) {
    var cpf = Objcpf
    var exp = /\.|\-/g
    cpf = cpf.toString().replace(exp, '')
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10))
    var soma1 = 0,
      soma2 = 0
    var vlr = 11

    for (let i = 0; i < 9; i++) {
      soma1 += eval(cpf.charAt(i) * (vlr - 1))
      soma2 += eval(cpf.charAt(i) * vlr)
      vlr--
    }
    soma1 = (soma1 * 10) % 11 == 10 ? 0 : (soma1 * 10) % 11
    soma2 = ((soma2 + 2 * soma1) * 10) % 11

    var digitoGerado = soma1 * 10 + soma2
    if (digitoGerado != digitoDigitado) {
      cpfSmall.text('CPF inválido!')
      validCPF = false
    } else {
      validCPF = true
      cpfSmall.text('')
    }
  }

  static validarEmail(emaill) {
    let validacao = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emaill)

    if (validacao == false) {
      emailSmall.removeClass('text-muted')
      emailSmall.addClass('text-danger')
      emailSmall.text('E-mail inválido')
      validEmail = false
    } else {
      emailSmall.removeClass('text-danger')
      emailSmall.addClass('text-muted')
      emailSmall.text('Nunca compartilharemos seu e-mail com mais ninguém.')
      validEmail = true
    }
  }

  static validarConfimaEmail() {
    if (email.val() != confirmaEmail.val()) {
      confirmaEmailSmall.text('Confirmação do e-mail inválida!')
      validEmail = false
    } else {
      confirmaEmailSmall.text('')
      validEmail = true
    }
  }

  static validarConfirmaSenha() {
    if (senha.val() != confirmaSenha.val()) {
      confirmaSenhaSmall.text('Confirmação da senha inválida!')
      validSenha = false
    } else {
      confirmaSenhaSmall.text('')
      validSenha = true
    }
  }
}


