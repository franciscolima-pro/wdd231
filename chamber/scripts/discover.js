import {data} from './discover-data.js';
console.log(data)

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", ()=>{
    const dateNow = Date.now();

    const lastvisit = localStorage.getItem('lastvisit');

    const modal = document.querySelector("#allvisits");

    if(!lastvisit){
        modal.innerHTML = `
        <h1>Welcome! Let us know if you have any questions.  <button id="close-button">✖</button></h1>`
        modal.showModal();
    }else{
        const lastvisitTime = parseInt(lastvisit);
        const timeDifference = dateNow -lastvisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Converte ms para dias
 
        if(daysDifference < 1){
            modal.innerHTML = `
            <h1>Back so soon! Awesome!.  <button id="close-button">✖</button></h1>`
            modal.showModal();
        }else{
            modal.innerHTML = `
            <h1>You last visited ${daysDifference} days ago.  <button id="close-button">✖</button></h1>` 
            modal.showModal();
        }
    };
    localStorage.setItem("lastvisit", dateNow);

    const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", ()=>{
    modal.close();
});
});

const conteiner = document.getElementById('places');

function showData(){
    for (let company of data){
        const companyDiv = document.createElement('div');
        companyDiv.classList.add('company'); // Adiciona uma classe ao <div>
        companyDiv.innerHTML = `
        <h2>${company.name}</h2>
        <div class="data">
            <img src="/chamber/images/${company.img}" alt="Place image">
            <div class="desc">
                <p>${company.description}</p>
                <p>${company.address}</p>
            </div>
        </div>
        <button>learn more</button>`;
        conteiner.appendChild(companyDiv);
    };
};

showData();