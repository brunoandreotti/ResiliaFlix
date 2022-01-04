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

if (nomeFilme) {
  catalogo.buscaFilme('t', nomeFilme).then(data => {
    console.log(data)

    viewInfo.rederizaInfoFilme(data)

    localStorage.removeItem('nomeFilme')
  })
}

button.click(e => {
  e.preventDefault()
  if (pesquisaInput.val() != '') {
    catalogo.buscaFilme('t', pesquisaInput.val()).then(data => {
      console.log(data)

      viewInfo.rederizaInfoFilme(data)
    })
  }
})
