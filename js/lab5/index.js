function practice1() {
    let numbers = [];

    for (let i = 0; i < 10; i++) {
        const num = parseInt(prompt(`Введите число номер ${i}: `));
        numbers.push(num);
    }

    console.log(sortArray(numbers));
}

function practice2() {
    let text = "Вася любит информатику и Вася любит петь";
    text = text.split(" ");

    text[0] = "Александр";
    text[4] = "Александр";

    console.log(text.join(" "));
}

function practice4() {
    console.log(calculateLength(...[1, 2, 4, 6]));
}

function practice5() {
    let userChoice = prompt("Задай вопрос!");

    const textResponse = [
        "звучит неплохо",
        "да, это определенно надо сделать",
        "не думаю,что это хорошая идея",
        "может, не сегодня",
        "компьютер говорит нет",
    ];

    alert(textResponse[Math.floor((Math.random()*textResponse.length))]);
}

function practice6() {
    const userText = prompt("Введите предложение для перевода: ").toLocaleLowerCase();

    let dictionary = [
        ["dog","собака"],["сat","кошка"],
        ["apple","яблоко"],
        ["home","дом"],["pen","ручка"],
        ["laptop","ноутбук"],["day","день"],
        ["month","месяц"],["watch","часы"],
    ];

    function translationWords(words, dictionary){
        let translationWord = Object.fromEntries(dictionary);

        console.log(translationWord);

        return words.map(item => {
            return translationWord[item] ? translationWord[item] : "?";
        }).join(" ");
    }

    alert(`Ваш перевод: ${translationWords(userText.split(" "), dictionary)}`);
}

function sortArray(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                const temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }

    return list;
}

function calculateLength(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
