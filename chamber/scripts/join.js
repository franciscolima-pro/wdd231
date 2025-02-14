import {data} from './join-data.js';

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


export const myModal = document.getElementById('myModal');
export const modalTitle = document.querySelector('#myModal h2');
export const modalDesc = document.querySelector('#myModal ul');
export const modalButton = document.querySelectorAll('.learnMore');
const closeModal = document.querySelector('#myModal button')

export function showData(i){
    modalTitle.innerHTML = i.title;
    modalDesc.innerHTML = i.desc;
}


modalButton[0].addEventListener('click',()=>{
    showData(data[0])
    myModal.showModal();
});
modalButton[1].addEventListener('click',()=>{
    showData(data[1])
    myModal.showModal();
});
modalButton[2].addEventListener('click',()=>{
    showData(data[2])
    myModal.showModal();
});
modalButton[3].addEventListener('click',()=>{
    showData(data[3])
    myModal.showModal();
});

closeModal.addEventListener('click', ()=>{[
    myModal.close()
]})


// showData()