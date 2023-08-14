import './style.css';

export default function displayContactContent() {
    const content = document.getElementById('content');
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contactContainer');
    
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '111-111-1111';

    const email = document.createElement('p');
    email.textContent = 'totalyrealemail@nothing.com';

    contactContainer.append(contactHeader, phoneNumber, email);
    content.appendChild(contactContainer);
}