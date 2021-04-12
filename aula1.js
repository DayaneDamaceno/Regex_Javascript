// g - global (encontra todas as ocorrências)
// i - insensitive 
// (()()) grupos
// | ou
// .test - retorna true ou false se a Regex for valida

const { texto } = require('./base');

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}