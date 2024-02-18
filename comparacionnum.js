var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

function ordenarAscendente(a, b) {
    return a - b;
}

function ordenarDescendente(a, b) {
    return b - a;
}

var numeros = [numero1, numero2, numero3];
numeros.sort(ordenarAscendente);
var menor = numeros[0];
var centro = numeros[1];
var mayor = numeros[2];


console.log("Se ordenan de mayor a menor: " + mayor + ", " + centro + ", " + menor);

console.log("Se ordenan de menor a mayor: " + menor + ", " + centro + ", " + mayor);

if (menor === centro && centro === mayor) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números no son iguales.");
}
