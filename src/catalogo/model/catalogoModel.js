class catalogoAPI {
  api_key = '34ffd4e1';
  url = `http://www.omdbapi.com/?apikey=${this.api_key}&`;

  buscaFilme(p, nomeFilme) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: `${this.url}${p}=${nomeFilme}`,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
}


class Catalogo {
  constructor() {
    this.criaCatalogo();
  }

  #catalogo = [];

  #baseFilmes = [
    'tt0816692',
    'tt3896198',
    'tt3480822',
    'tt0468569',
    'tt0898266',
    'tt5753856',
    'tt2442560',
    'tt4574334',
    'tt9679542',
    'tt0388629',
    'tt4925000',
    'tt0421357',
    
  ];

  criaCatalogo() {
    this.#catalogo = [];
    while (this.#catalogo.length < 12) {
      let id = this.randomID();
      if (this.#catalogo.indexOf(this.#baseFilmes[id]) == -1) {
        this.#catalogo.push(this.#baseFilmes[id]);
      }
    }
  }

  randomID() {
    return Math.floor(Math.random() * this.#baseFilmes.length);
  }

  getCatalogo() {
    return this.#catalogo;
  }
}



