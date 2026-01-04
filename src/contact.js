export function loadContact() {
  const contactContent = document.createElement('div');
  contactContent.classList.add('contact');

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = "CONTACT US";

  const contact1 = document.createElement('div');
  contact1.classList.add('contact-item');

  const name1 = document.createElement('h4');
  name1.textContent = "Hilwa Yummy";

  const phone1 = document.createElement('p');
  phone1.textContent = "Phone: (123) 456-7890";

  const email1 = document.createElement('p');
  email1.textContent = "Email: yummy@kitchen.com";
  contact1.append(name1, phone1, email1);

  const contact2 = document.createElement('div');
  contact2.classList.add('contact-item');

  const name2 = document.createElement('h4');
  name2.textContent = "Chef Flavor";

  const phone2 = document.createElement('p');
  phone2.textContent = "Phone: (987) 654-3210";

  const email2 = document.createElement('p');
  email2.textContent = "Email: customer@kitchen.com";

  contact2.append(name2, phone2, email2);
  contactContent.append(contactTitle, contact1, contact2);

  return contactContent;
}
