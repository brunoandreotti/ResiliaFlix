let email = document.getElementById('email');
let buttonlogin = document.getElementById('buttonlogin')

buttonlogin.addEventListener('click', entrar)


function entrar(){
    let usuario = document.querySelector('#email');
    let senha = document.querySelector('#senha');

    let msgEmail = document.querySelector('#msgerror');
    let listaUser = [];

    let userValid = {
        nome:'',
        senha: '',
        email: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value == item.emailCad && senha.value == item.senhaCad){
            
            userValid = {
                nome: item.nomeCad,
                senha: item.senhaCad,
                email: item.emailCad
            }
        }
    })

    if(usuario.value <= 0 && senha.value <= 0){
        usuario.setAttribute('style', 'border-color: red');
        senha.setAttribute('style', 'border-color: red');
        msgEmail.innerHTML = 'Insira um usuário e senha válidos'
        usuario.focus()
    }else if(usuario.value == userValid.email && senha.value == userValid.senha){
        window.location.assign('../../catalogo/view/catalogo.html')

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else{
        usuario.setAttribute('style', 'border-color: red');
        senha.setAttribute('style', 'border-color: red');
        msgEmail.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }


}


