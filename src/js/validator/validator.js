export default function isValid(value) {
  const cardNumber = {
    'visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
    'mastercard': /^5[1-5][0-9]{14}$/,
    'unionpay': /^(62|88)\d+$/,
    'jcb': /^(?:2131|1800|35\d{3})\d{11}$/,
    'mir': /^220[0-4]\d{12}$/,
  };

  let type = 'Неправильный номер карты';
  const result = luhnChecking(value);
  // console.log(value);
  if (result) {
    for (let cardSystem in cardNumber) {
      if (value.toString().match(cardNumber[cardSystem])) {
        return { result, type: cardSystem };
      }
    }
  }
  return { result, type };
}

function luhnChecking(value) {
  const digits = Array.from(value.toString()).map((e) => Number(e));
  // console.log(digits);
  const numDigits = digits.length;
  let sum = 0;
  for (let i = 1; i < numDigits; i++) {
    if (i % 2 === 0) {
      sum += sumDigit(digits[i - 1]);
    } else {
      sum += sumDigit(2 * digits[i - 1]);
    }
  }
  return digits[numDigits - 1] === (10 - (sum % 10)) % 10;
}

function sumDigit(value) {
  const sumD = Array.from(value.toString()).reduce((digitSumm, digit) => digitSumm + Number(digit), 0);
  return sumD;
}

