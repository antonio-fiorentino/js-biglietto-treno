var km = prompt('Benvenuto su TreniItaglia, quanti chilometri deve percorrere?');
console.log(km + ' Km');
var age = prompt('Quanti anni ha?');
console.log(age + ' anni');
var costo = (km * 0.21);

if (age < 18) {
  var container = document.getElementById('container');
  container.innerText = ('Il costo del viaggio è: ' + (costo - (costo * 20) / 100) + '€');
}else if (age >= 65) {
  var container = document.getElementById('container');
  container.innerText = ('Il costo del viaggio è: ' + (costo - (costo * 40) / 100) + '€');
}else {
  var container = document.getElementById('container');
  container.innerText = ('Il costo del viaggio è: ' + costo + '€');
}
