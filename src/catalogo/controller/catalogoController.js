const catalog = new Catalogo()
const api = new CatalogoAPI()
const pesquisaInput = $('#pesquisar')
const pesquisaButton = $('#pesquisarButton')

//FUNCTIONS

function preencheFilme() {
  return new Promise((resolve, reject) => {
    let filmes = catalog.getCatalogo()

    async function buscaApi() {
      for (let i = 0; i < filmes.length; i++) {
        let filme = await api.buscaFilme('i', filmes[i])
        
        $('#filmes')
          .append(`<div data-id="${filme.imdbID}" class="filme-item card my-2 mx-2" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src="${filme.Poster}" class="card-img-top" style="height: 350px ; alt="...">
        
      </div>`)
      }

      resolve()
    }

    buscaApi()
  })
}

preencheFilme().then(() => {
  $('.filme-item').click(e => {
    let f = api.buscaFilme('i', e.currentTarget.attributes[0].value)
    f.then(data => {
      console.log(data)
      $('#exampleModalLabel').text(`${data.Title}`)
      $('#modal-img').attr('src', `${data.Poster}`)
      $('#sinopse').html(`<b>Sinopse:</b> ${data.Plot}`)
      $('#ano').html(`<b>Ano:</b> ${data.Year}`)
      $('#nota').html(`<b>Nota:</b> ${data.imdbRating}`)
      $('#elenco').html(`<b>Elenco:</b> ${data.Actors}`)

    })
  })
})

function busca(e) {
  e.preventDefault()
  if(pesquisaInput.val() != '') {
    localStorage.setItem('nomeFilme', pesquisaInput.val())
    pesquisaInput.val('')
    window.location.assign('../../info-filme/view/info-filme.html')
  }
  
}

// EVENTS

pesquisaButton.click(busca)





