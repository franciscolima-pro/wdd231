let url = window.location.href;

url = url.split('?')[1];

const urlArray = url.split('&');
console.log(urlArray)

function showdata(key){
    for(let i of urlArray){
        if(i.startsWith(key)){
            const result = i.split('=')[1].replace('%40','@').replace('+',' ');
            return result
        }   
    }
}

const timestampInput = document.getElementById('timestamp');
let date = new Date();
let dateDay = date.toLocaleDateString("en-US");
let dateTime = date.toLocaleTimeString("en-US");
date = dateDay+' '+dateTime;
if (timestampInput) {
    timestampInput.value = date;
}

const showInfo = document.getElementById('results');
showInfo.innerHTML = `
<h1>Data</h1>
<p><b>Name:</b> ${showdata('userfname')} ${showdata('userlname')}</p>
<p><b>Email:</b> ${showdata('useremail')}</p>
<p><b>Phone:</b> ${showdata('userphone')}</p>
<p><b>Organization:</b> ${showdata('userorg')}</p>
<p><b>Submission Date:</b> ${date}</p>`

 //funcionou, agora é só mostrar os dados na tela -> ajustar pra mobile -> e se sobrar tempo validar melhor os campos do forms


