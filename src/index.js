import './style.css';
import displayNavbar from "./navbar";
import displayHomePage from './homePage';
import githubIcon from './logo-github.svg';

function displayRestaurantName() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');

    header.textContent = 'GainStop';
    header.classList.add('header');
    content.appendChild(header);
}

function displayHeader() {
    displayRestaurantName();
    displayNavbar();
}

function displayFooter() {
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    const copyrightSpan = document.createElement('span');
    copyrightSpan.textContent = 'Copyright @ 2023 DeveloperDave17';
    footer.appendChild(copyrightSpan);

    const githubImage = new Image();
    githubImage.src = githubIcon;
    footer.appendChild(githubImage);

    content.appendChild(footer);
}

displayHeader();
const navBarContainer = document.querySelector('.navbar-container');
(navBarContainer.childNodes)[0].classList.add('selected');
displayHomePage();
displayFooter();