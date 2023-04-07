import homeTab from './homeTab';

function pageLoad() {
  // Create site title
  const title = document.createElement('h1');
  title.textContent = 'Eat the Food - 5***** Michelin star restaurant';

  // Create nav buttons
  const homeBtn = document.createElement('h2');
  homeBtn.textContent = 'Home';

  // Add static elements to page
  const content = document.querySelector('#content');

  content.appendChild(title);
  content.appendChild(homeBtn);

  const home = homeTab();
  content.appendChild(home);
}

export default pageLoad;
