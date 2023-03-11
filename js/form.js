const app = {

    generateCircles(num) {
      const divCirclesElement = document.querySelector('.cercles-card');
      const generateCircles = document.createElement('div');
      generateCircles.className = `circle-${num}`;
      divCirclesElement.append(generateCircles);
    },
  
    inputSelected() {
      const inputElement = document.getElementById('form');
  
      inputElement.addEventListener('focus', (event) => {
        event.target.style.border = "2px solid";
        event.target.style.borderColor = "green";
      },true);
  
      inputElement.addEventListener('blur', (event) => {
        event.target.style.borderColor = "";
      },true);  
    },
  
    showNameOnCard() {
      const nameCardElement =document.getElementById('nameCard');
      nameCardElement.textContent = "YOUR NAME HERE";
  
      const cardHolderNameElement = document.getElementById('cardholderName');
      cardHolderNameElement.addEventListener('input', (event) => {
  
      }); 
    },
  
    changeName(event) {
      event
    },
      
    init() {
      app.generateCircles('one');
      app.generateCircles('two');
      app.inputSelected();
      app.showNameOnCard();
    },
  
  }
  
  
  app.init();
  