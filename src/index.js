import pageLoad from './pageLoad';
import homeTab from './homeTab';
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

  const contactBtn = document.getElementById('contact');
  contactBtn.addEventListener('click', () => {
    emptyTab();
    // contactTab();
  });
}

pageLoad();
tabSwitcher();
