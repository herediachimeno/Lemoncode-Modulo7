// VALIDACIÓN IBAN

console.log("Validación número IBAN cuenta bancaria:");

const ibanValues = [
  "ES8119003020966631117899",
  "ES81 1900 3020 9666 3111 7899",
];

const ibanExample1 = /^((ES)\d{22})|((ES)\d{2}\s?(\d{4}\s?){4}\d{4})$/;
const ibanExample2 = /^(ES)\d{2}/;

console.log("Caso 1 y 2:");
ibanValues.forEach((value) => {
  console.log("Es correcto " + value + "? ->", ibanExample1.test(value));
});

console.log("Caso 3");
ibanValues.forEach((value) => {
  console.log("Es correcto " + value + "? ->", ibanExample2.exec(value));
});

// VALIDACIÓN MATRÍCULA.

console.log("Validación matrícula coche:");

const idMatriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

const idExample = /^\d{4}\s?(-|\s|_)?[A-Z]{3}$/;
const idPartExample = /^(\d{4})/;
const chartPartExample = /[A-Z]{3}$/;

console.log("Case 1");
idMatriculas.forEach((value) => {
  console.log("Es correcto " + value + "? ->", idExample.test(value));
});

console.log("Case 2");
idMatriculas.forEach((value) => {
  console.log(
    "Es correcto? ->",
    idPartExample.exec(value),
    chartPartExample.exec(value)
  );
});
