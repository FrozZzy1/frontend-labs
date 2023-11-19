function practice1() {
    let planets = [
        {name: "Меркурий", distance: 0.39}, {name: "Венера", distance: 0.72},
        {name: "Земля", distance: 1}, {name: "Марс", distance: 1.52},
        {name: "Юпитер", distance: 5.2}, {name: "Сатурн", distance: 9.58},
        {name: "Уран", distance: 19.22}, {name: "Нептун", distance: 30.05},
    ];

    planets.forEach(item => {
        if (item.distance <= 1) {
            alert(`Расстояние от солнца не более одной единицы ${item.name}`);
        }
    })
}


function practice2() {
    const players = [
        {lastName: "Иванов", height: 192, weight: 78},
        {lastName: "Петров", height: 188, weight: 82},
        {lastName: "Сидоров", height: 195, weight: 75},
        {lastName: "Кузнецов", height: 185, weight: 79},
        {lastName: "Морозов", height: 198, weight: 81}
    ]

    players.forEach(player => {
        if (player.height > 190 && player.weight < 80) {
            console.log(player.lastName);
        }
    })
}


function practice3() {
    const calorieCounter = {
        "Яйцо": {name: "Яйцо", weight: 75, calories: 50},
        "Томат": {name: "Томат", weight: 120, calories: 10},
        "Морковь": {name: "Морковь", weight: 200, calories: 40},
        "Тыква": {name: "Тыква", weight: 90, calories: 100},
        "Творог": {name: "Творог", weight: 100, calories: 180},
        "Куриная грудка": {name: "Куриная грудка", weight: 150, calories: 165},
        "Гречневая крупа": {name: "Гречневая крупа", weight: 100, calories: 300}
    }

    let minCalories = Infinity;
    let firstProduct;
    let secondProduct;

    for (let keyOne in calorieCounter) {
        for (let keyTwo in calorieCounter) {
            if (keyOne !== keyTwo) {
                const currentCalories = calorieCounter[keyOne].calories + calorieCounter[keyTwo].calories;

                if (currentCalories < minCalories) {
                    minCalories = currentCalories;
                    firstProduct = keyOne;
                    secondProduct = keyTwo;
                }
            }
        }
    }

    console.log(`${calorieCounter[firstProduct].name} ${calorieCounter[secondProduct].name}`);
    console.log(`${calorieCounter[firstProduct].weight + calorieCounter[secondProduct].weight}`);
}


function practice4() {
    const calorieCounter = {
        "Яйцо": {name: "Яйцо", weight: 75, calories: 50},
        "Томат": {name: "Томат", weight: 120, calories: 10},
        "Морковь": {name: "Морковь", weight: 200, calories: 40},
        "Тыква": {name: "Тыква", weight: 90, calories: 100},
        "Творог": {name: "Творог", weight: 100, calories: 180},
        "Куриная грудка": {name: "Куриная грудка", weight: 150, calories: 165},
        "Гречневая крупа": {name: "Гречневая крупа", weight: 100, calories: 300}
    };

    let minCalories = Infinity;
    let firstProduct;
    let secondProduct;
    let thirdProduct;

    for (let first in calorieCounter) {
        for (let second in calorieCounter) {
            for (let third in calorieCounter) {
                if (first !== second && first !== third && third !== second) {
                    const currentCalories = calorieCounter[first].calories +
                        calorieCounter[second].calories +
                        calorieCounter[third].calories

                    if (currentCalories < minCalories) {
                        minCalories = currentCalories;
                        firstProduct = first;
                        secondProduct = second;
                        thirdProduct = third;
                    }
                }
            }
        }
    }

    console.log(`${calorieCounter[firstProduct].name} ${calorieCounter[secondProduct].name} ${calorieCounter[thirdProduct].name}`);
    console.log(`${calorieCounter[firstProduct].weight + calorieCounter[secondProduct].weight + calorieCounter[thirdProduct].weight}`);
}
