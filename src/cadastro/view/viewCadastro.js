function completaCamposCEP(cep) {
  
  cepsmall.text('')
  rua.val(cep.logradouro)
  rua.attr('readonly', '')
  bairro.val(cep.bairro)
  bairro.attr('readonly', '')
  cidade.val(cep.localidade)
  cidade.attr('readonly', '')
  estado.val(cep.uf)
  estado.attr('readonly', '')
}

function limpaCamposCEP() {
  rua.val('')

  bairro.val('')

  cidade.val('')

  estado.val('')
}
