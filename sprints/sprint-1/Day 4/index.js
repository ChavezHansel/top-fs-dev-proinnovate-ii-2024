
function ejercicio1() {
    let inputFrase = prompt("Ingresa una frase.");
    console.log(inputFrase);
}
function ejercicio2() {
    let inputName = prompt("Ingresa tu nombre.");
    console.log(`Hola ${inputName}!.`);
}
function ejercicio3() {
    let num1 = Number(prompt("Ingresa primer número.") || 0);
    let num2 = Number(prompt("Ingresa segundoo número.") || 0);
    console.log(`Suma: ${num1 + num2}`);
}
function ejercicio4() {
    let fechaNac = new Date(prompt("Ingresa año de Nacimiento."));
    let edad = new Date().getFullYear() - fechaNac.getFullYear();
    console.log(`Tienes ${edad} años`);
}
function ejercicio5() {
    let peso = parseFloat(prompt("Ingresa su peso. Ejm 65"));
    let altura = parseFloat(prompt("Ingresa su altura. Ejm 1.8"));
    let imc = peso / (altura * altura);
    console.log(`Tu BMI es ${imc}.`);
}
function ejercicio6() {
    let num = parseInt(prompt("Ingresa un número."));
    if (num > 10) {
        console.log("El número es mayor a 10");
    } else {
        console.log("El número es menor o igual a 10");
    }
}
function ejercicio7() {
    let aleatorio = parseInt(Math.random() * 10) + 1;
    let num = parseInt(prompt("Intenta adivinar el número."));
    while (num !== aleatorio) {
        console.log("Lo siento, intenta nuevamente!");
        num = parseInt(prompt("Intenta adivinar el número."));
    }
    console.log("Felicitaciones, ese era!");
}
function ejercicio8() {
    let num = parseInt(prompt("Ingresa un número."));
    if (num % 5 == 0) {
        console.log("Si, el número x es múltiplo 5");
    } else {
        console.log("No, el número x no es múltiplo de 5");
    }
}
function ejercicio9() {
    let num = parseInt(prompt("Ingresa un número."));
    if (num > 10) {
        console.log("El número es mayor a 10");
    } else if (num == 10) {
        console.log("El número es igual a 10");
    } else {
        console.log("El número es menor que 10");
    }
}
function ejercicio10() {
    let peso = parseFloat(prompt("Ingresa su peso. Ejm 65"));
    let altura = parseFloat(prompt("Ingresa su altura. Ejm 1.8"));
    let imc = peso / (altura * altura);
    console.log(`Tu BMI es ${imc}.`);
    if (imc < 18.5) {
        console.log("Bajo de peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Normal");
    } else if (imc > 24.9 && imc <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obeso");
    }
}
