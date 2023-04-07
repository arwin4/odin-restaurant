import foodOverhead from './food-overhead.jpg';

function pageLoad() {
  // Create title
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Eat the food';

  // Create main image
  const foodImage = document.createElement('img');
  foodImage.src = foodOverhead;
  foodImage.alt = 'Plates of tasty food on a table, overhead';
  foodImage.classList.add('main-image');

  // Create paragraph
  const paragraph = document.createElement('p');
  paragraph.classList.add('description');
  paragraph.textContent = `You will come to the restaurant and eat the food at 
  the restaurant. It will be delicious and you will enjoy it. This we will make
  sure. The chef will cook food for the guests. And they will eat it. And you 
  will be one of those guests. Bon appetit!`;

  const body = document.querySelector('body');
  body.appendChild(title);
  body.appendChild(foodImage);
  body.appendChild(paragraph);
}

export default pageLoad;
