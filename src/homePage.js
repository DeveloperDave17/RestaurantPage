import './style.css';
import mainPicImage from './muscleMan.png';

export default function displayHomePage(){
    const content = document.querySelector('#content');
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-page-container');

    const restaurantInfo = document.createElement('p');
    restaurantInfo.textContent = 'Fuel your gains with our protein packed meals.'
    homeContainer.appendChild(restaurantInfo);

    const mainPic = new Image();
    mainPic.src = mainPicImage;
    homeContainer.appendChild(mainPic);

    const closingMessage = document.createElement('p');
    closingMessage.textContent = 'Your gains are waiting, stop by now!';
    homeContainer.appendChild(closingMessage);

    content.appendChild(homeContainer);
}
