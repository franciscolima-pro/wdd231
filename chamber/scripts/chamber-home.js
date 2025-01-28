let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Chamando API

const icon = document.getElementById('weather-icon');
const ctemp = document.getElementById('ctemp');
const weather = document.getElementById('weather');
const high = document.getElementById('high');
const low = document.getElementById('low');
const humild = document.getElementById('humild');
const sunr = document.getElementById('sunr');
const suns = document.getElementById('suns');

const tdTemp = document.getElementById('tdtemp');
const wedTemp = document.getElementById('wedtemp');
const thursTemp = document.getElementById('thurstemp');

const container = document.getElementById('members');

const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-25.42627&lon=-49.25784&appid=3c84c10ac1ef9db1531604790eda690e';
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=-25.42627&lon=-49.25784&appid=3c84c10ac1ef9db1531604790eda690e`
 //A query string é a parte da URL onde você especifica os parâmetros de busca. Ela sempre começa com o ?
 //Os parâmetros adicionais são adicionados à URL com o caractere &.
  
async function apiFetch(){
    try {
        const [response, response2] = await Promise.all([fetch(url), fetch(url2)]);  // Fazendo a requisição para a URL e armazenando na variável `response`

        // Verificando se a resposta foi bem-sucedida
        if(response.ok && response2.ok){
            // Convertendo os dados para JSON e armazenando na variável `data`
            const data = await response.json();
            const data2 = await response2.json();

            console.log(data);
            console.log(data2);
            displayResults(data, data2);
        }
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
};

async function loadData(){
    try {
        const response = await fetch('/chamber/data/members.json');
        const data = await response.json();

        for(let i = 0; i < data.length; i++){
            const level = data[i].level;
            if(level >= 2){
                const companyDiv = document.createElement('div');
                companyDiv.innerHTML = `
                <div class="memberstitle">
                    <h3>${data[i].name}</h3>
                </div>
                
                <div class="spotlight">
                    <img src="images/companhia.png" alt="company logo">
                    <div>
                        <p><b>Phone:</b><span id='phone'>${data[i].phone}</span></p>
                        <p><b>Address:</b><span id="add">${data[i].address}</span></p>
                        <p><b>site:</b> <span id="site">${data[i].url}</span></p>
                        <p><b>Level:</b> <span id="level">${data[i].level}</span></p>
                    </div>
                </div>
                `;
                container.appendChild(companyDiv);
            }
        }
    } catch (error) {
        console.log("Erro:", error);
    }
}



function displayResults(data, data2){
    //***Data Forest***                   list[7] dia terça - list[15] wednesday - thurday list[23]
    // const time = data2.list[23].dt;    **Somente para descobrir o dia certo
    // const date2 = new Date(time * 1000); // Multiplicando por 1000 para converter para milissegundos
    // const date = date2.toLocaleString(); // Obtém a data formatada

    const tuesday = data2.list[7].main.temp - 273.15;
    tdTemp.innerHTML = `${tuesday.toFixed(2)}°C`;

    const wednesday = data2.list[15].main.temp - 273.15;
    wedTemp.innerHTML = `${wednesday.toFixed(2)}°C`;

    const thursday = data2.list[23].main.temp - 273.15;
    thursTemp.innerHTML = `${thursday.toFixed(2)}°C`;


    //***Data Current Time***
    const sunsetTime = new Date(data.sys.sunrise * 1000); //conversão de segundos para milisegundos
    const sunrisetime = new Date(data.sys.sunrise * 1000);

    // Obtém as horas e os minutos
    const sunsetHours = sunsetTime.getHours().toString().padStart(2, '0'); // Adiciona o zero inicial, se necessário
    const SunsetMinutes = sunsetTime.getMinutes().toString().padStart(2, '0');

    const sunriseHours = sunrisetime.getHours().toString().padStart(2, '0'); // Adiciona o zero inicial, se necessário
    const sunriseMinutes = sunrisetime.getMinutes().toString().padStart(2, '0');

    const sunset = `${sunsetHours}:${SunsetMinutes}`;
    const sunrise = `${sunriseHours}:${sunriseMinutes}`;

    ctemp.innerHTML = `${data.main.temp}&deg;C`;    // Atualiza a temperatura no elemento do HTML;
    weather.innerHTML = data.weather[0].description;
    high.innerHTML = `${data.main.temp_max}°C`;
    low.innerHTML = `${data.main.temp_min}°C`;
    humild.innerHTML = `${data.main.humidity}%`;
    sunr.innerHTML = `${sunrise} am`;
    suns.innerHTML = `${sunset} pm`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;  // Cria o caminho completo para o ícone do clima
    let desc = data.weather[0].description;
    // Atualiza o atributo 'src' e 'alt' da imagem do ícone
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc)
    // caption.textContent = `${desc}`
};

// Chamando a função para executar
apiFetch();
loadData();