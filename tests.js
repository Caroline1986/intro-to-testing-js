// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
       expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!")
    })
    it('should return true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
})

describe('isFive', function () {
    it('should assert isFive exists as a function', function () {
       expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return 5', function () {
        expect(isFive(5)).toBe(5)
    });
    it('should be false if string', function () {
        expect(isFive("5")).toBe(false)
    });
})

describe('isEven', function () {
    it('should return a boolean no matter input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true if 2',function () {
        expect(isEven(2)).toBe(true)
    })
    it('should return true if -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false if 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false if "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false if Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false if input is true or false', function () {
        expect(isEven(true || false)).toBe(false)
    });
})

describe('isVowel', function () {
    it('should return boolean no matter input', function () {
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should return true if "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true if "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false if "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false if 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false if input is "true" or "false"', function () {
        expect(isVowel('true' || 'false')).toBe(false)
    });
    it('should return false if "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false if no input', function () {
        expect(isVowel('')).toBe(false)
    });
})