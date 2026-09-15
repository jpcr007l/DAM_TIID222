

console.log("Hola Node.js");

let edad1 = 20;
let edad2 = 11;

console.log("Edad Promedio: ")
console.log((edad1 + edad2)/2);

//cd Introjs
//node holaNode.js 



//Medir el tiempo de un proceso 

console.time("proceso");
    for (let i=0; i< 10000000; i++){}
    console.timeEnd("proceso")
