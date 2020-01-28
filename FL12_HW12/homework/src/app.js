const mainScreen = document.querySelector('.main-screen');
const addNewTerm = document.querySelector('.add-new-button');
const addNewScreen = document.querySelector('.add-new-screen');
const modifyScreen = document.querySelector('.modify-screen');

addNewTerm.addEventListener('click', () => {
    location.hash = 'add-page';
    displayAddNewScreen();
})

function displayAddNewScreen() {
  window.location.hash = '#add';
  addNewScreen.style.display = 'block';
  modifyScreen.style.display = 'none';
  mainScreen.style.display = 'none';
}