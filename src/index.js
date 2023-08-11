import './style.css';
import displayNavbar from "./navbar";

function displayRestaurantName() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');

    header.textContent = 'The Ultimate Protein Restaurant';
    header.classList.add('header');
    content.appendChild(header);
}

displayRestaurantName();
displayNavbar();
const navBarContainer = document.querySelector('.navbar-container');
(navBarContainer.childNodes)[0].classList.add('selected');