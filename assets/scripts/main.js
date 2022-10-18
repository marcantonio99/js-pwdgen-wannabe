let name = prompt('Scrivimi il tuo nome:');
console.log(name);

let surname = prompt('Scrivimi il tuo cognome:');
console.log(surname);

let preferitColor = prompt('Scrivimi il tuo colore preferito:')
console.log(preferitColor);

let number = prompt('aggiungi un numero');
console.log(number);

let password = `${name + surname + preferitColor + number}`;
console.log(password);

let frase = `la tua password insicurissima è : ${password}`;
document.getElementById('passwordGen').innerHTML = `la tua password insicurissima è : ${password}`;