// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "boolean") {
        return ("Hello, World!")
    } else {
        return ("Hello, " + input + "!");
    }
}
function isFive(x) {
    if (x === 5) {
        return 5
    } else {
        return (typeof x === "boolean")
    }
}

function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else if (x == true || x == false) {
        return false;
    } else {
        return (typeof x === "boolean")
    }
}

function isVowel(x) {
    if (['a','e','i','o','u',"A", "E", "I", "O", "U"].includes(x)) {
        return true;
    } else {
        return (typeof x === "boolean")
    }
}