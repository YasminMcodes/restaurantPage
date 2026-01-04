export function loadHome() {

    const homeContent = document.createElement('div');
    homeContent.classList.add('home');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');

    const title = document.createElement('h1');
    title.textContent = "Welcome to Yummy's Kitchen";

    welcome.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('description');

    const p1 = document.createElement('p');
    p1.textContent = "Yummy's Kitchen is a place where you can find the best food in town. Our chefs use only the freshest ingredients to create delicious dishes that will satisfy your cravings.";

    const p2 = document.createElement('p');
    p2.textContent = "Explore our menu and discover your new favorite meal today!";

    description.append(p1, p2);

    const time = document.createElement('div');
    time.classList.add('time');

    const hoursTitle = document.createElement('h4');
    hoursTitle.textContent = "Operating Hours";

    const ul = document.createElement('ul');
    ['Monday - Friday: 9am - 9pm',
        'Saturday: 10am - 10pm',
        'Sunday: 10am - 8pm'].forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });

    time.append(hoursTitle, ul);

    const location = document.createElement('div');
    location.classList.add('location');

    const locationTitle = document.createElement('h4');
    locationTitle.textContent = "Location";

    const address = document.createElement('p');
    address.textContent = "123 Foodie Lane, Flavor Town, FT 45678";

    location.append(locationTitle, address);
    homeContent.append(welcome, description, time, location);

    return homeContent;
}