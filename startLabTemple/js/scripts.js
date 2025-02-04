import {temples} from '../data/temples.js';
console.log(temples);

import {urlpath} from '../data/temples.js';
console.log(urlpath);

const images = document.getElementById('showHere');
const myModal = document.getElementById('mydialog');
const closeButton = document.querySelector('#mydialog button');
const myTitle = document.querySelector('#mydialog h2');
const desc = document.querySelector('#mydialog p');

// closeButton.addEventListener('click', () => { modal.close(); });

//----------------- Looping through the array of json items

function displayTemples(data){
    for(let i of data){
        const image = document.createElement('img');
        image.src = `${urlpath}${i.path}`
        image.alt = i.name;
        image.addEventListener('click', ()=> showStuff(i))
        images.appendChild(image);
    }
}

function showStuff(i){
    myTitle.innerHTML = i.name
    desc.innerHTML = `Dedicated at ${i.dedicated} by ${i.person} as temple number ${i.number}`
    myModal.showModal()
}

closeButton.addEventListener('click', ()=>{
    myModal.close();
})

displayTemples(temples)