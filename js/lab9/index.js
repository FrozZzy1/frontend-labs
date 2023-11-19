function practice1() {
    function doubleNumbers(type) {
        let numbers = [];

        let start = (type === "четные") ? 2 : 1;

        for (let i = 0; i < 10; i++) {
            numbers.push(start);
            start += 2;
        }

        return numbers.map(num => num * 2);
    }

    const userInput = prompt("Какие числа удваивать: четные или нечетные?").toLowerCase();

    const result = doubleNumbers(userInput);
    console.log(result);
}


function practice2() {
    function calculateSum(type) {
        let sum = 0;
        let start = (type === "четные") ? 2 : 1;

        for (let i = 0; i < 10; i++) {
            sum += start;
            start += 2;
        }

        return sum;
    }

    const userInput = prompt("Какие числа складывать: четные или нечетные?").toLowerCase();

    const result = calculateSum(userInput);
    console.log(result);
}
