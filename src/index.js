import pageLoad from './pageLoad';
import homeTab from './homeTab';
import openingHrsTab from './openingHrsTab';
import './style.css';

function tabSwitcher() {
  function emptyTab() {
    const content = document.getElementById('content');
    content.replaceChildren();
  }

  const homeBtn = document.getElementById('home');
  homeBtn.addEventListener('click', () => {
    emptyTab();
    homeTab();
  });

  const openingHrsBtn = document.getElementById('opening-hrs');
  openingHrsBtn.addEventListener('click', () => {
    emptyTab();
    openingHrsTab();
  });
}

pageLoad();
tabSwitcher();
