function validarEmail(emaill) {
    let validacao = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emaill)
    let emailSmall = document.getElementById('msgerror');
    
    if (validacao == false) {
      
      emailSmall.innerText='E-mail inválido';
      
    } else{ 
      emailSmall.innerText='';
    }
  }

  