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
function ejercicio11() {
    let num = parseInt(prompt("Ingresa un número."));

    if (num % 3 == 0 && num % 5 !== 0) {
        console.log("Bing");
    } else if (num % 5 == 0 && num % 3 !== 0) {
        console.log("Bong");
    } else if (num % 5 == 0 || num % 3 == 0) {
        console.log("BingBong");
    } else {
        console.log(num);
    }
}
function ejercicio12() {
    let frase = prompt("Ingresa un frase");
    for (let i = 0; i < 10; i++) {
        console.log(frase);
    }
}
function ejercicio13() {
    let frase = prompt("Ingresa un frase");
    let num = prompt("Ingresa un número");
    for (let i = 0; i < num; i++) {
        console.log(i + ") " + frase);
    }
}
function ejercicio14() {
    let num = prompt("Ingresa un número");
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
function ejercicio15() {
    let suma = 0;
    let num = prompt("Ingresa un número");
    for (let i = 1; i <= num; i++) {
        suma = suma + i;
    }
    console.log(suma);
}
function ejercicio16() {
    let num1 = prompt("Ingresa el primer número");
    let num2 = prompt("Ingresa el segundo número");
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            console.log(i);
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            console.log(i);
        }
    }
}
function ejercicio17() {
    let aleatorio = parseInt(Math.random() * 100) + 1;
    let num = parseInt(prompt("Intenta adivinar el número."));
    while (num !== aleatorio) {
        // console.log("Lo siento, intenta nuevamente!");
        if (aleatorio < num) {
            console.log("el número es menor");
        } else {
            console.log("el número es mayor");
        }
        num = parseInt(prompt("Intenta adivinar el número."));
    }
    console.log("Felicitaciones, ese era!");
}
function ejercicio18() {
    let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
    console.log("Arreglo Original", nombres);
    let nombre = prompt("Ingresa un nombre");
    nombres.push(nombre);
    let nombre2 = prompt("Ingresa otro nombre");
    nombres[2] = nombre2;
    nombres.map((name) => console.log(name));
    console.log("Arreglo Modificado", nombres);
}
function ejercicio19() {
    let numeros = new Array();
    let elementos = prompt("Ingresa un número");
    for (let i = 1; i <= elementos; i++) {
        numeros.push(i);
    }
    numeros = numeros.filter((value, index) => index !== 1 && value);
    console.log(numeros);
}
function ejercicio20() {
    const mat = [
        ["Pablo", "Maria", "Pedro"],
        ["Diana", "Juan", "Federico"],
        ["Roberto", "Daniel", "Sandra"],
    ];
    mat.forEach((grupo, index) => {
        console.log(`Grupo ${index + 1}:`);
        grupo.forEach((nombre) => {
            console.log(`  ${nombre}`);
        });
    });
}
function ejercicio21() {
    const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];
    nums.forEach((num) => {
        if (num > 10) console.log(num);
    });
}
function ejercicio22() {
    const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
    let cantidad = 0;
    nums.forEach((num) => (num == 1 ? cantidad++ : cantidad));
    console.log(cantidad);
}
function ejercicio23() {
    const frase = prompt("Ingresa una frase");
    console.log(frase.toLocaleUpperCase());
}
function ejercicio24() {
    const frase = prompt("Ingresa una frase");
    let cantA = frase.lower().count("a");
    console.log(`La frase tiene ${cantA} caracteres "a"`);
}
function ejercicio25() {
    const frase = prompt("Ingresa una frase");
    console.log(
        frase
            .toLowerCase()
            .replace(/ /g, "")
            .replace(/a/g, "4")
            .replace(/e/g, "3")
            .replace(/i/g, "1")
            .replace(/o/g, "0")
    );
}

function ejercicio26() {
    const frase = prompt("Ingresa una frase");
    console.log(
        frase
            .split(" ")
            .map(
                (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)
            )
            .join(" ")
    );
}
function ejercicio27() {
    const frase = prompt("Ingresa una frase");
    frase.split(" ").forEach((palabra) => console.log(palabra));
}
function ejercicio28() {
    const frase1 = prompt("Ingresa una frase 1");
    const frase2 = prompt("Ingresa una frase 2");
    const frase1Charts = frase1.split("");
    const frase2Array = frase2.split("");
    let comunes = new Array();
    frase1Charts.forEach((char1) => {
        frase2Array.forEach((char2) => {
            if (char1 == char2) {
                if (char1 == " ") return;
                if (comunes.includes(char1)) return;
                comunes.push(char1);
                return;
            }
        });
    });

    if (comunes.length > 0) {
        console.log("Los caracteres en común son:", comunes.join(", "));
    } else {
        console.log("No se encontraron caracteres en común");
    }
    console.log(comunes);
}
function ejercicio29() {
    function suma(a, b) {
        return a + b;
    }
    console.log(suma(1, 2)); // 3
    console.log(suma(0, 0)); // 0
    console.log(suma(245, 923)); // 1168
}
// Código de prueba

function ejercicio30() {
    function hola(nombre) {
        return `Hola ${nombre}!`;
    }
    console.log(hola("Pedro")); // "Hola Pedro!"
    console.log(hola("Juan")); // "Hola Juan!"
    console.log(hola("")); // "Hola !"
}

// Código de prueba

function ejercicio31() {
    function bmi(peso, altura) {
        return peso / altura ** 2;
    }
    // Código de prueba
    console.log(bmi(65, 1.8)); // 20.061728395061728
    console.log(bmi(72, 1.6)); // 28.124999999999993
    console.log(bmi(52, 1.75)); // 16.979591836734695
}
function ejericico32() {
    function calcularColor(num) {
        let color;
        if (num === 1) {
            color = "negro";
        } else if (num === 2) {
            color = "blanco";
        } else if (num === 3) {
            color = "azul";
        } else {
            color = "verde";
        }

        return "El color es " + color;
    }

    // Código de prueba
    console.log(calcularColor(1)); // "El color es negro"
    console.log(calcularColor(2)); // "El color es blanco"
    console.log(calcularColor(3)); // "El color es azul"
    console.log(calcularColor(8)); // "El color es verde"
}
function ejercicio33() {
    function capitalizar(cadena) {
        return cadena
            .split(" ")
            .map(
                (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)
            )
            .join(" ");
    }

    // Código de prueba
    console.log(capitalizar("pedro perez")); // "Pedro Perez"
    console.log(capitalizar("make it real")); // "Make It Real"
}
function ejercicio34() {
    function promedio(numeros) {
        const suma = numeros.reduce((acum, num) => acum + num, 0);
        return suma / numeros.length;
    }

    // Código de prueba
    console.log(promedio([1, 2, 3, 4])); // 2.5
    console.log(promedio([7, 8, 9])); // 8
    console.log(promedio([300, 100])); // 200
}
function ejercicio35() {
    const pedro = {
        nombre: "Pedro Perez",
        edad: 30,
        activo: true,
        hobbies: ["programar", "squash", "piano"],
    };
    console.log(pedro.edad);
    pedro.estatura = 1.8;
    delete pedro.activo;
    for (const [llave, valor] of Object.entries(pedro)) {
        console.log(`${llave}: ${valor}`);
    }
}
function ejercicio36() {
    function saludar(persona) {
        let saludo = `Hola ${persona.nombre}`;
        if (persona.edad) {
            saludo += `, tienes ${persona.edad} años`;
        }
        return saludo;
    }

    // Código de prueba
    const pedro = { nombre: "Pedro", edad: 23 };
    console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

    const maria = { nombre: "Maria", edad: 35 };
    console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

    const juan = { nombre: "Juan" };
    console.log(saludar(juan)); // "Hola Juan"
}
function ejercicio37() {
    function buscarProducto(productos, id) {
        return productos.find((producto) => producto.id === id) || null;
    }
    let productos = [
        { id: 1, nombre: "A" },
        { id: 2, nombre: "B" },
    ];
    console.log(buscarProducto(productos, 1)); // { id: 1, nombre: "A" }
    productos = [
        { id: 1, nombre: "A" },
        { id: 2, nombre: "B" },
    ];
    console.log(buscarProducto(productos, 566)); // null
}
function ejercicio38() {
    function descifrar(cadena, mapa) {
        return cadena
            .split("")
            .map((char) => mapa[char] || char)
            .join("");
    }
    console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
    console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
    console.log(descifrar("igual", { h: "n" })); // "igual"
}
function ejercicio39() {
    function frecuencias(cadena) {
        return cadena
            .split("")
            .filter((char) => char !== " ")
            .reduce((acum, char) => {
                acum[char] = (acum[char] || 0) + 1;
                return acum;
            }, {});
    }
    console.log(frecuencias("hola mundo"));
    console.log(frecuencias("anita lava la tina"));
}
function ejercicio40() {
    const persona = {
        peso: 65,
        estatura: 1.8,
        bmi() {
            return this.peso / this.estatura ** 2;
        },
    };
    console.log(persona.bmi()); // 20.061728395061728
}
function ejercicio41() {
    const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];
    arr.forEach((elemento) => console.log(elemento));
}
function ejercicio42() {
    function pares(numeros) {
        return numeros.filter((num) => num % 2 === 0);
    }
    console.log(pares([0, 1, 2, 3, 4])); // [0, 2, 4]
    console.log(pares([120, 876, 934, 1298])); // [120, 876, 934, 1298]
    console.log(pares([7, 921, 43, 9649])); // []
}
function ejercicio43() {
    function posPares(arr) {
        return arr.filter((_, index) => index % 2 === 0);
    }
    console.log(posPares(["a", "b", "c"])); // ["a", "c"]
    console.log(posPares([0, 1, 2, 3, 4])); // [0, 2, 4]
    console.log(posPares([])); // []
}
function ejercicio44() {
    function multiplicar(arr, num) {
        return arr.map((element) => element * num);
    }
    console.log(multiplicar([1, 2, 3], 2)); // [2, 4, 6]
    console.log(multiplicar([7, 4], 3)); // [21, 12]
    console.log(multiplicar([], 10)); // []
}
function ejercicio45() {
    function productosBaratos(arr) {
        return arr
            .filter((product) => product.precio >= 5 && product.precio <= 10)
            .map((product) => product.nombre);
    }

    let prods = [
        { nombre: "Arroz", precio: 5 },
        { nombre: "Pan", precio: 3 },
        { nombre: "Tomate", precio: 8 },
        { nombre: "Leche", precio: 15 },
    ];
    console.log(productosBaratos(prods));
}
function ejercicio46() {
    const hola = (name = "Pedro") => `Hola ${name}!`;
    console.log(hola());
    console.log(hola("Maria"));
}
function ejercicio47() {
    const arr = [1, 2, 3, 4];
    const [first, second] = arr;
    console.log(first);
    console.log(second);
    const person = {
        name: "Pedro",
        age: 20,
    };
    const { name, age } = person;
    console.log(name);
    console.log(age);
}
function ejercicio48() {
    const auto = {
        velocidad: 0,
        acelerar() {
            this.velocidad++;
        },
        frenar() {
            this.velocidad--;
        },
    };
    console.log(auto.velocidad);
    auto.acelerar();
    console.log(auto.velocidad);
    auto.frenar();
    console.log(auto.velocidad);
}
function ejercicio49() {
    const obtenerImpares = (arr) => arr.filter((num) => num % 2 !== 0);
    console.log(obtenerImpares([1, 2, 3, 4, 5]));
    console.log(obtenerImpares([64, 35, 27]));
    console.log(obtenerImpares([]));
}
function ejercicio50() {
    const max = (arr) => arr.reduce((a, b) => (a > b ? a : b));
    console.log(max([1, 2, 3, 4]));
    console.log(max([63, 85, 39, 24, 3]));
}
function ejercicio51() {
    const max = (...nums) => nums.reduce((a, b) => (a > b ? a : b));
    console.log(max(1, 2, 3, 4));
    console.log(max(63, 85, 39, 24, 3));
}
//EJERCICIOS FUNDAMENTALES
function exercise1() {
    /*function add(a, b) {
        return a + b;
    }*/
    const add = (a, b) => a + b;
}
function exercise2() {
    const numbers = [1, 2, 3, 4, 5];
    const includesThree = numbers.includes(3);
    console.log(includesThree);
}
function exercise3() {
    const square = (num) => num * num;
    console.log(square(4));
}
function exercise4() {
    function createCallCounter() {
        let count = 0;

        return function () {
            count += 1;
            return count;
        };
    }
    const counter = createCallCounter();
    console.log(counter());
    console.log(counter());
    console.log(counter());
}
function exercise5() {
    async function fetchPublicData() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    fetchPublicData();
} // main.js
function exercise6() {
    
    console.log(calculateArea(5, 10)); // Output: 50
}
