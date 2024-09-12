//Simple IIFE
(function () {
    var localVar = "I am local!";
    console.log(localVar);
})();

var localVar = "I am global!";
console.log(localVar);
//Basic Counter with IIFE
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
})();

counter.increment();
console.log(counter.getCount()); 

//Simple Configuration Object
const config = (function () {
    const settings = {
        color: "blue",
        fontSize: "14px",
    };

    return {
        getConfig: function () {
            return settings;
        },
    };
})();

console.log(config.getConfig()); 
// ADVANCED EXERCISES
//Private Variable with IIFE
const module = (function () {
    let privateVar = 0;
    return {
        getVar: function () {
            return privateVar;
        },
        setVar: function (value) {
            privateVar = value;
        },
    };
})();

console.log(module.getVar()); 
module.setVar(42);
console.log(module.getVar()); 
//Singleton Pattern with IIFE
const singleton = (function () {
    let instance;
    function createInstance() {
        return { name: "Singleton Instance" };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const obj1 = singleton.getInstance();
const obj2 = singleton.getInstance();
console.log(obj1 === obj2); 

//Module Pattern
const myModule = (function () {
    function privateMethod() {
        console.log("Private method");
    }

    return {
        publicMethod: function () {
            console.log("Public method");
            privateMethod();
        },
    };
})();

myModule.publicMethod();

//Lazy Initialization
const lazyInit = (function () {
    let initialized = false;

    return function () {
        if (!initialized) {
            console.log("Initializing...");
            initialized = true;
        } else {
            console.log("Already initialized");
        }
    };
})();

lazyInit(); // Output: Initializing...
lazyInit(); // Output: Already initialized

//Configuration Module
const config2 = (function () {
    const settings = {
        theme: "light",
    };

    return {
        set: function (key, value) {
            settings[key] = value;
        },
        get: function (key) {
            return settings[key];
        },
    };
})();

config2.set("theme", "dark");
console.log(config2.get("theme")); // Output: dark

//CLOSURES
//Simple Counter
function createSimpleCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
const counter2 = createSimpleCounter();
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2

//Greeting Generator
function greet(name) {
    return function (message) {
        console.log(`${message}, ${name}!`);
    };
}

const greetJohn = greet("John");
greetJohn("Hello");

//Multiplier Function
function createMultiplier(n) {
    return function (x) {
        return x * n;
    };
}

const double = createMultiplier(2);
console.log(double(5)); 

//Advanced Exercises
//Memoization Function
function memoize(fn) {
    const cache = {};
    return function (arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const slowSquare = (n) => {
    for (let i = 0; i < 1000000000; i++) {} // Simulate slow computation
    return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // Slow on first call
console.log(fastSquare(5)); // Fast on second call

//Private Counter with Reset
function createCounter() {
    let count = 0;

    return {
        increment: function () {
            return ++count;
        },
        reset: function () {
            count = 0;
        },
    };
}

const counter3 = createCounter();
console.log(counter3.increment()); // Output: 1
console.log(counter3.increment()); // Output: 2
counter3.reset();
console.log(counter3.increment()); // Output: 1

//Once Function
function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    };
}

const logOnce = once((msg) => console.log(msg));
logOnce("Hello!"); // Output: Hello!
logOnce("Hello again!"); // No output

//Curry Function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6

//Function Composition

function compose(...fns) {
    return function (x) {
        return fns.reduceRight((v, fn) => fn(v), x);
    };
}

const add1 = (x) => x + 1;
const double2 = (x) => x * 2;
const subtract3 = (x) => x - 3;

const composed = compose(subtract3, double2, add1);
console.log(composed(5)); // Output: 9

//Higher-Order Functions
// Basic Callback Example
function withDelay(callback, delay) {
    setTimeout(callback, delay);
}

withDelay(() => console.log("This is delayed"), 1000); // Output after 1 second: "This is delayed"

//Simple Array Filter

function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, (x) => x % 2 === 0);
console.log(evens);

//Function Timer

function timeFunction(fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`Function took ${end - start}ms to execute.`);
}

timeFunction(() => {
    for (let i = 0; i < 1000000; i++) {} 
});

//Advanced Exercises
//Function Debouncing

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

const log1 = debounce(() => console.log("Debounced!"), 500);
log1();
log1();
log1();

//Throttle Function
function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            fn(...args);
        }
    };
}

const log2 = throttle(() => console.log("Throttled!"), 500);
log2();
log2();

//Custom Map Function

function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const numbers2 = [1, 2, 3];
const doubled = customMap(numbers2, (x) => x * 2);
console.log(doubled); // Output: [2, 4, 6]

//Compose Functions
function compose(...fns) {
    return function (x) {
        return fns.reduceRight((v, fn) => fn(v), x);
    };
}

const add2 = (x) => x + 1;
const double3 = (x) => x * 2;

const composed3 = compose(add2, double3);
console.log(composed3(5)); // Output: 11 (double(5) => 10, add1(10) => 11)

//Partial Application

function partial(fn, ...presetArgs) {
    return function (...args) {
        return fn(...presetArgs, ...args);
    };
}

const add4 = (a, b, c) => a + b + c;
const add5 = partial(add4, 5);

console.log(add5(10, 15)); // Output: 30 (5 + 10 + 15)

//Recursion Exercises
//Factorial Calculation
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(3)); // Output: 6 (3! = 3 * 2 * 1)
//Fibonacci Sequence

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)

//Sum of Array

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30

//Advanced Recursion
//Flatten Nested Arrays
function flatten(arr) {
    let result = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(
    flatten([
        [1, 2],
        [3, [4, [5]]],
    ])
); // Output: [1, 2, 3, 4, 5]