import "./style.css";
import chickenSandwich from "./chickenSandwich.jpg";
import chickenSalad from "./chickenSalad.jpg";
import proteinBurger from "./proteinBurger.jpg";
import proteinFries from "./proteinFries.jpg";
import proteinShake from "./proteinShake.jpg";
import proteinWaffle from "./proteinWaffle.jpg";



const displayMenuContent = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const chickenSandwichContainer = document.createElement('div');
    chickenSandwichContainer.classList.add('menu-item');
    const chickenSandwichTitle = document.createElement('h1');
    chickenSandwichTitle.textContent = 'Chicken Sandwich';
    const chickenSandwichPic = new Image();
    chickenSandwichPic.src = chickenSandwich;
    const chickenSandwichInfo = document.createElement('p');
    chickenSandwichInfo.textContent = 'Protein packed chicken sandwich topped with buffalo sauce, chives, and pickles all on a protein packed bun.';
    const chickenSandwichInfoPicCont = document.createElement('div');
    chickenSandwichInfoPicCont.append(chickenSandwichPic, chickenSandwichInfo);
    chickenSandwichInfoPicCont.classList.add('info-pic');
    chickenSandwichContainer.append(chickenSandwichTitle, chickenSandwichInfoPicCont);

    const chickenSaladContainer = document.createElement('div');
    chickenSaladContainer.classList.add('menu-item');
    const chickenSaladTitle = document.createElement('h1');
    chickenSaladTitle.textContent = 'Chicken Salad';
    const chickenSaladPic = new Image();
    chickenSaladPic.src = chickenSalad;
    const chickenSaladInfo = document.createElement('p');
    chickenSaladInfo.textContent = 'Protein packed chicken sald with tomatos, spinach, and eggs topped with italian dressing.';
    const chickenSaladInfoPicCont = document.createElement('div');
    chickenSaladInfoPicCont.classList.add('info-pic');
    chickenSaladInfoPicCont.append(chickenSaladPic, chickenSaladInfo);
    chickenSaladContainer.append(chickenSaladTitle, chickenSaladInfoPicCont);
    
    const proteinBurgerContainer = document.createElement('div');
    proteinBurgerContainer.classList.add('menu-item');
    const proteinBurgerTitle = document.createElement('h1');
    proteinBurgerTitle.textContent = 'Protein Burger';
    const proteinBurgerPic = new Image();
    proteinBurgerPic.src = proteinBurger;
    const proteinBurgerInfo = document.createElement('p');
    proteinBurgerInfo.textContent = 'Protein packed burger topped with cheese, pickles, tomatoes, onions, and thousand island dressing.';
    const proteinBurgerInfoPicCont = document.createElement('div');
    proteinBurgerInfoPicCont.classList.add('info-pic');
    proteinBurgerInfoPicCont.append(proteinBurgerPic, proteinBurgerInfo);
    proteinBurgerContainer.append(proteinBurgerTitle, proteinBurgerInfoPicCont);

    const proteinFriesContainer = document.createElement('div');
    proteinFriesContainer.classList.add('menu-item');
    const proteinFriesTitle = document.createElement('h1');
    proteinFriesTitle.textContent = 'Protein Fries';
    const proteinFriesPic = new Image();
    proteinFriesPic.src = proteinFries;
    const proteinFriesInfo = document.createElement('p');
    proteinFriesInfo.textContent = 'Protein packed fries topped with chives and served with protein infused ketchup.';
    const proteinFriesInfoPicCont = document.createElement('div');
    proteinFriesInfoPicCont.classList.add('info-pic');
    proteinFriesInfoPicCont.append(proteinFriesPic, proteinFriesInfo);
    proteinFriesContainer.append(proteinFriesTitle, proteinFriesInfoPicCont);

    const proteinShakeContainer = document.createElement('div');
    proteinShakeContainer.classList.add('menu-item');
    const proteinShakeTitle = document.createElement('h1');
    proteinShakeTitle.textContent = 'Protein Shake';
    const proteinShakePic = new Image();
    proteinShakePic.src = proteinShake;
    const proteinShakeInfo = document.createElement('p');
    proteinShakeInfo.textContent = 'Protein packed strawberry shake topped with fresh strawberries.';
    const proteinShakeInfoPicCont = document.createElement('div');
    proteinShakeInfoPicCont.classList.add('info-pic');
    proteinShakeInfoPicCont.append(proteinShakePic, proteinShakeInfo);
    proteinShakeContainer.append(proteinShakeTitle, proteinShakeInfoPicCont);

    const proteinWaffleContainer = document.createElement('div');
    proteinWaffleContainer.classList.add('menu-item');
    const proteinWaffleTitle = document.createElement('h1');
    proteinWaffleTitle.textContent = 'Protein Waffle';
    const proteinWafflePic = new Image();
    proteinWafflePic.src = proteinWaffle;
    const proteinWaffleInfo = document.createElement('p');
    proteinWaffleInfo.textContent = 'Protein packed waffles infused with whey protein and served with a side of blueberries.';
    const proteinWaffleInfoPicCont = document.createElement('div');
    proteinWaffleInfoPicCont.classList.add('info-pic');
    proteinWaffleInfoPicCont.append(proteinWafflePic, proteinWaffleInfo);
    proteinWaffleContainer.append(proteinWaffleTitle, proteinWaffleInfoPicCont);

    menuContainer.append(chickenSandwichContainer, chickenSaladContainer, proteinBurgerContainer, proteinFriesContainer, proteinShakeContainer, proteinWaffleContainer);
    content.append(menuContainer);
};

export default displayMenuContent;