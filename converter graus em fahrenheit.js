var prompt = require('prompt-sync')();
 var c;
 var f;

 c = Number(prompt("Entre com  a temperatura em graus celsius :"));

 f = (c * 9 / 5) + 32;

 console.log("A temperatura em Fahrenheit e: " + f);