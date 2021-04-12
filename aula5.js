const { alfabeto } = require('./base');

// Conjunto 
// [abc] e [0-9] ...
// [^] -> Negação
// [min-max ...] 
// [^min-max ...] -> Tudo menos isso
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));

console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação

console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode

/*
 * \w = [a-zA-Z0-9_]  \W = [^a-zA-Z0-9_]
 * \d = todos os números \D = tudo menos os números
 * \s = todos espaços \S = tudo menos espaços
 */
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));