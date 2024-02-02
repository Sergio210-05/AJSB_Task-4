import './validator-form.css';
import isValid from '../validator/validator';

export default class ValidatorForm {
  constructor(container, systemNum=5) {
    this.cardSystemList = ['visa', 'mastercard', 'unionpay', 'jcb', 'mir'];
    const field = document.createElement('div');
    field.classList.add('card-validator');
    this.field = field;
    container.appendChild(field);

    // Изображения платёжных систем
    const paymentSystemList = document.createElement('div');
    paymentSystemList.classList.add('payment-system-list');
    this.paymentSystemList = paymentSystemList;
    field.appendChild(paymentSystemList);

    for (let i = 0; i < systemNum; i++) {
      let system = document.createElement('div');
      let cardSystem = this.cardSystemList[i];
      system.classList.add('payment-system');
      system.classList.add(`payment-system-${cardSystem}`);
      paymentSystemList.appendChild(system);
    }

    // Форма валидации
    const validatingContainer = document.createElement('div');
    validatingContainer.classList.add('validating-container');
    this.validatingContainer = validatingContainer;
    field.appendChild(validatingContainer);

    const validatingForm = document.createElement('form');
    validatingForm.classList.add('validating-form');
    validatingContainer.appendChild(validatingForm);

    const inputForm = document.createElement('input');
    inputForm.type = 'text';
    inputForm.pattern = '[0-9]*';
    inputForm.maxLength = 16;
    inputForm.classList.add('input-text-form');
    validatingForm.appendChild(inputForm);

    const validateButton = document.createElement('button');
    validateButton.innerText = 'Validate';
    validateButton.classList.add('validate-button');
    validatingForm.appendChild(validateButton);

    this.checkingCard = this.checkingCard.bind(this);
    this.field.addEventListener('submit', this.checkingCard);
    
  }

  checkingCard(e) {
    e.preventDefault();
    const cartNumber = e.target.closest('.validating-form').querySelector('input').value;
    console.log(cartNumber);
    const valid = isValid(cartNumber);
    console.log(valid);
    const cardSystemList = Array.from(document.querySelectorAll('.payment-system'));
    cardSystemList.map((e) => e.classList.remove('valid-type'));
    const inputForm = document.querySelector('.input-text-form');
    inputForm.classList.remove('invalid-type-form');
    if (valid['result']) {
      const cardSystemValid = document.querySelector(`.payment-system-${valid['type']}`);
      console.log(cardSystemValid);
      cardSystemValid.classList.add('valid-type');
    } else {
      inputForm.classList.add('invalid-type-form');
    }
  }
}
