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
    return (typeof x === "boolean")
}