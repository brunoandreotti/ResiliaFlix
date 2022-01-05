const catalogo = new CatalogoAPI()
const viewInfo = new ViewInfoFilme()
const nomeFilme = localStorage.getItem('nomeFilme')
const divPoster = $('#info')
const nomeFilme2 = $('#nome')
const anoFilme = $('#ano')
const duracaoFilme = $('#duracao')
const elencoFilme = $('#elenco')
const sinopseFilme = $('#sinopse')
const notaFilme = $('#nota')
const pesquisaInput = $('#pesquisaInput')
const button = $('#button')
const userLogado = JSON.parse(localStorage.getItem('userLogado'))
const nomeLogado = $('#nomeUser')
const sairButton = $('#sair')

nomeLogado.text(`Olá, ${userLogado.nome}`)

if (nomeFilme) {
  catalogo.buscaFilme('t', nomeFilme).then(data => {
    if (data.Error) {
      viewInfo.limpaInfoFilme()
      $('#erro').text(`Filme não encontrado :(`)
    } else {
      viewInfo.rederizaInfoFilme(data)
      localStorage.removeItem('nomeFilme')
    }
  })
}

//EVENTS
sairButton.click(sair)

button.click(e => {
  e.preventDefault()

  if (pesquisaInput.val() != '') {
    catalogo.buscaFilme('t', pesquisaInput.val()).then(data => {
      if (data.Error) {
        viewInfo.limpaInfoFilme()
        $('#erro').text(`Filme não encontrado :(`)
      } else {
        console.log(data)

        viewInfo.rederizaInfoFilme(data)
      }
    })
  }
})

//FUNCTIONS

function sair(e){
  e.preventDefault()
  window.location.assign('../../../index.html')
}