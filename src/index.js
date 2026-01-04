import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const btnHome = document.getElementById('btn-home');
const btnMenu = document.getElementById('btn-menu');
const btnContact = document.getElementById('btn-contact');
const content = document.getElementById('content');

function clearContent() {
    content.innerHTML = '';
}

btnHome.addEventListener('click', () => {
    clearContent();
    content.appendChild(loadHome());
});

btnMenu.addEventListener('click', () => {
    clearContent();
    content.appendChild(loadMenu());
});

btnContact.addEventListener('click', () => {
    clearContent();
    content.appendChild(loadContact());
}); 

content.appendChild(loadHome());

