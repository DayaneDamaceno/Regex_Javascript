const { texto } = require('./base');
const regExp1 = /João|Maria/gi;

console.log(texto);

// Match -> retorna em um array todas as ocorrências que atendem a regex
console.log(texto.match(regExp1));


// Grupos são definidos por parênteses e a contagem deles é sequencial
// (...( () ) )(...)(...)  $1 $2 $3 $4 $5
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));

// Replace -> a cada ocorrência que atende a regex podemos alterar seu valor
console.log(texto.replace(/(João|Maria)/gi, function(input) {
  return ' ############## ' + input.toUpperCase() + ' ############## ';
}));