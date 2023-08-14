import './style.css';
import displayNavbar from "./navbar";
import displayHomeContent from './homePage';
import githubIcon from './logo-github.svg';
import displayContactContent from './contactContent';
import displayMenuContent from './menu';

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

function clearContent() {
    const content = document.getElementById('content');
    content.replaceChildren();
}

function displayPage(displayContent) {
    clearContent();
    displayHeader();
    const navBarContainer = document.querySelector('.navbar-container');
    if (displayContent === displayHomeContent) {
        (navBarContainer.childNodes)[0].classList.add('selected');
    } else if (displayContent === displayMenuContent) {
        (navBarContainer.childNodes)[1].classList.add('selected');
    } else {
        (navBarContainer.childNodes)[2].classList.add('selected');
    }
    displayContent();
    displayFooter();
    assignEventListeners();
}

function assignEventListeners() {
    const navBarContainer = document.querySelector('.navbar-container');
    (navBarContainer.childNodes)[0].addEventListener('click', () => {displayPage(displayHomeContent)});
    (navBarContainer.childNodes)[1].addEventListener('click', () => {displayPage(displayMenuContent)});
    (navBarContainer.childNodes)[2].addEventListener('click', () => {displayPage(displayContactContent)});
}


displayPage(displayHomeContent);