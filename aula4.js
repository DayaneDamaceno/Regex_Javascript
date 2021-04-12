const { html } = require('./base');

console.log(html);
// greedy -> padrão das regex, ela tenta ir até o final da expressão
console.log(html.match(/<.+>.+<\/.+>/g));

// non-greedy -> seleciona o mínimo possível que ele conseguir
console.log(html.match(/<.+?>.+?<\/.+?>/g)); 
