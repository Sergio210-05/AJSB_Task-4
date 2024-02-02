import isValid from "../validator";

const carts = [
  ["visa", true, ["4532205464321540", "4024007139738370", "4929857723384940"]],
  ["mastercard", true, ["5551818788746730", "5195132711778337", "5176037594913666"]],
  ["unionpay", true, ["6242741175485782", "6248414821531664", "6258076673166704"]],
  ["jcb", true, ["3532959735751719", "3539574024807768", "3545425741868959"]],
  ["mir", true, ["2201382000000013", "2200000000000053", "2200720101432661"]],
  ['Неправильный номер карты', false, ["1505236589745685", "9988564515785649", "0028173949348506"]],
];

const handler = test.each(carts);
handler("test validator %s", (system, valid, numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const { result, type } = isValid(numbers[i]);
    expect(result).toBe(valid);
    expect(type).toBe(system);
  }
});