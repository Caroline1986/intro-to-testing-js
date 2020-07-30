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
    if (x == 5) {
        return 5
    } else {
        return (typeof x === "boolean")
    }
}