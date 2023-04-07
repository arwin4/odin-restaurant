function openingHrsTab() {
  const paragraph = document.createElement('p');
  paragraph.textContent = `Monday - Thursday: 9am - 10pm 
  Friday: 9am - 11pm
  Saturday: 10am - 11pm
  Sunday: 10am - 9pm`;

  const content = document.querySelector('#content');
  content.appendChild(paragraph);
}

export default openingHrsTab;
