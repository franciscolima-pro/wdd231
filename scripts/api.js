const temp = document.getElementById('current-temp');
const icon = document.getElementById('weather-icon');
const caption = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=49.75115&lon=6.63983&appid=3c84c10ac1ef9db1531604790eda690e';
 //A query string é a parte da URL onde você especifica os parâmetros de busca. Ela sempre começa com o ?
 //Os parâmetros adicionais são adicionados à URL com o caractere &.
  
async function apiFetch(){
    try {
        const response = await fetch(url);  // Fazendo a requisição para a URL e armazenando na variável `response`

        // Verificando se a resposta foi bem-sucedida
        if(response.ok){
            // Convertendo os dados para JSON e armazenando na variável `data`
            const data = await response.json();

            console.log(data);
            displayResults(data);
        }
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
};

function displayResults(data){
    temp.innerHTML = `${data.main.temp}&deg;C`;    // Atualiza a temperatura no elemento do HTML;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;  // Cria o caminho completo para o ícone do clima
    let desc = data.weather[0].description;
    // Atualiza o atributo 'src' e 'alt' da imagem do ícone
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc)
    caption.textContent = `${desc}`
};

// Chamando a função para executar
apiFetch();