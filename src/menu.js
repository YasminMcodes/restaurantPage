import mahiberawif from './images/mahiberawi.jpg';
import beyayenetf from './images/beyaynet.jpg';
import kitfof from './images/kitfo.jpg';
import tibsf from './images/tibs.jpg';

export function loadMenu() {
    const menuContent = document.createElement('div');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = "OUR MENU";

    menu.appendChild(title);

    const menuitems = document.createElement('div');
    menuitems.classList.add('menuitems');


    const food1 = document.createElement('div');
    food1.classList.add('food-item');
    const mahiberawi = document.createElement('img');
    mahiberawi.src = mahiberawif;
    mahiberawi.alt = "Mahiberawi";

    const name = document.createElement('h4');
    name.textContent = "Mahiberawi ";

    const price = document.createElement('p');
    price.textContent = "$12.99";
    food1.append(name, mahiberawi, price);

    const food2 = document.createElement('div');
    food2.classList.add('food-item');
    const beyayenet = document.createElement('img');
    beyayenet.src = beyayenetf;
    beyayenet.alt = "Beyayenet";

    const name2 = document.createElement('h4');
    name2.textContent = "Beyayenet ";

    const price2 = document.createElement('p');
    price2.textContent = "$10.99";
    food2.append(name2, beyayenet, price2);

    const food3 = document.createElement('div');
    food3.classList.add('food-item');
    const kitfo = document.createElement('img');
    kitfo.src = kitfof;
    kitfo.alt = "Kitfo";

    const name3 = document.createElement('h4');
    name3.textContent = "Kitfo ";

    const price3 = document.createElement('p');
    price3.textContent = "$14.99";

    food3.append(name3, kitfo, price3);

    const food4 = document.createElement('div');
    food4.classList.add('food-item');
    const tibs = document.createElement('img');
    tibs.src = tibsf;
    tibs.alt = "Tibs";

    const name4 = document.createElement('h4');
    name4.textContent = "Tibs ";

    const price4 = document.createElement('p');
    price4.textContent = "$13.99";

    food4.append(name4, tibs, price4);



    menuitems.append(food1, food2, food3, food4);

    menuContent.append(menu, menuitems);
    return menuContent;
}