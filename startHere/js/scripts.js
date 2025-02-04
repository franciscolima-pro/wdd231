const currentUrl = window.location.href;
const everything = currentUrl.split('?');

let formData = everything[1].split('&');

function show(cup){
    formData.forEach((i)=>{
        console.log(i)
        if(i.startsWith(cup)){
            result = i.split('=')[1].replace('%40','@');
        }
    })
    return(result)
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<b>An appointment for</b> ${show('first')} ${show('last')} at: <p>${show('fecha')}</p>
<p>Your email is: <a href="mailto:${show('email')}">${show('email')}</a></p> 
`  // tranforma o email em um link que envia o cliente para sua caixa pessoal do email padrão do dispositivo já como o seu email aberto para uma mensagem.

