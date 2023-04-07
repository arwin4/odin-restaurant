import foodOverhead from './food-overhead.jpg';

function homeTab() {
  // Create secondary title
  const title2 = document.createElement('h2');
  title2.classList.add('title2');
  title2.textContent = 'Come eat food with us';

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

  // Add everything to content
  const content = document.querySelector('#content');
  content.appendChild(title2);
  content.appendChild(foodImage);
  content.appendChild(paragraph);
}

export default homeTab;
