const consultaCep = (cepValor) => 
  new Promise((resolve, reject) => {
    $.ajax({
      url: `https://viacep.com.br/ws/${cepValor}/json/`,

      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',

      success: data => {
        resolve(data)
      },
      error: error => {
        reject(error)
      }
    })
  })

