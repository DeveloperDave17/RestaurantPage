import './style.css';

export default function displayNavbar() {
    const content = document.querySelector("#content");
    const navBarContainer = document.createElement('div');
    navBarContainer.classList.add('navbar-container');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    
    navBarContainer.appendChild(homeButton);
    navBarContainer.appendChild(menuButton);
    navBarContainer.appendChild(contactButton);
    content.appendChild(navBarContainer);
};