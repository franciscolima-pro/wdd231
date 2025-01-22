let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const conteiner = document.getElementById('companies');

let buttonGrid = document.getElementById('grid')
buttonGrid.addEventListener('click', function(){
    conteiner.classList.add('grid-view')
    conteiner.classList.remove('list-view')
})

let buttonList = document.getElementById('list')
buttonList.addEventListener('click', function(){
    conteiner.classList.add('list-view')
    conteiner.classList.remove('grid-view')
})

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

async function loadData(){
    try{
            const response = await fetch('/chamber/data/members.json'); // Espera pela resposta do fetch
            const data = await response.json();  
            
            for (company of data){
                const companyDiv = document.createElement('div');
                companyDiv.classList.add('company'); // Adiciona uma classe ao <div>
                companyDiv.innerHTML = `
                <img src="/chamber/images/companhia.png" alt="Company icon" width="100">
                <p>${company.address}</p>
                <p>${company.phone}</p>
                <p>${company.url}</p>`;
                conteiner.appendChild(companyDiv);
            }
    }catch(error){
        console.log("Erro:", error)
    }
}

loadData()