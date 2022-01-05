class ViewInfoFilme {
  rederizaInfoFilme(data) {
    divPoster.html(`<img src="${data.Poster}" alt="">`)
    nomeFilme2.text(`Nome: ${data.Title}`)
    anoFilme.text(`Ano: ${data.Year}`)
    duracaoFilme.text(`Duração: ${data.Runtime}`)
    elencoFilme.text(`Elenco: ${data.Actors}`)
    sinopseFilme.text(`Sinopse: ${data.Plot}`)
    notaFilme.text(`Nota: ${data.imdbRating}`)
    $('#erro').text(``)
  }

  limpaInfoFilme(){
    divPoster.html(``)
    nomeFilme2.text(``)
    anoFilme.text(``)
    duracaoFilme.text(``)
    elencoFilme.text(``)
    sinopseFilme.text(``)
    notaFilme.text(``)
  }
}