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
      const nameCardElement = document.getElementById('nameCard');
      nameCardElement.textContent = "YOUR NAME HERE";
  
      const cardHolderNameElement = document.getElementById('cardholderName');
      cardHolderNameElement.addEventListener('input', (event) => {
        if(cardHolderNameElement.value === ''){
          nameCardElement.textContent = "YOUR NAME HERE";
        }else{
          nameCardElement.textContent = cardHolderNameElement.value;
        }
      }); 
    },
    
    showCardValidity() {
      const expirationCardMonthElement = document.getElementById('expirationCardMonth');
      const expirationCardYearElement = document.getElementById('expirationCardYear');

      const expMonthElement = document.getElementById('expMonth');
      expMonthElement.addEventListener('input', () => {
        if(expMonthElement.value === ''){
          expirationCardMonthElement.textContent = "XX";
        }else{
          expirationCardMonthElement.textContent = expMonthElement.value;
        }
      });

      const expYearElement = document.getElementById('expYear');
      expYearElement.addEventListener('input', () => {
        if(expYearElement.value === ''){
          expirationCardYearElement.textContent = "XX";
        }else{
          expirationCardYearElement.textContent = expYearElement.value;
        }
      });

    },

    cvcRectoCardNumbers() {
      const numbersVersoCardElement = document.getElementById('numbersVersoCard');

      const cvcCodeElement = document.getElementById('cvcCode');
      cvcCodeElement.addEventListener('input', () => {
        if(cvcCodeElement.value === ''){
          numbersVersoCardElement.textContent = "XXX";
        }else{
          numbersVersoCardElement.textContent = cvcCodeElement.value;
        }
      });
    },


    cardRectoNumbers() {
      const cardNumbersElement = document.getElementById('cardNumbers');

      const cardNumberInputElement = document.getElementById('cardNumberInput');
      cardNumberInputElement.addEventListener('input', () => {
        cardNumbersElement.textContent = cardNumberInputElement.value;
      });

    },


      
    init() {
      app.generateCircles('one');
      app.generateCircles('two');
      app.inputSelected();
      app.showNameOnCard();
      app.showCardValidity();
      app.cvcRectoCardNumbers();
      app.cardRectoNumbers();
    },
  
  }
  
  
  app.init();
  