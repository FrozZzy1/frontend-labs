function practice1() {
    function getMedal(points) {
        if (points < 10) {
            return "Нет медали";
        } else if (points <= 15) {
            return "Бронзовая медаль";
        } else if (points <= 20) {
            return "Серебряная медаль";
        } else {
            return "Золотая медаль";
        }
    }

    const userPoints = prompt("Введите количество набранных очков: ");
    const points = parseInt(userPoints);

    console.log(getMedal(points));
}


function practice2() {
    function areArraysSame(listOne, listTwo) {
        if (listOne.length !== listTwo.length) {
            return false;
        }

        for (let i = 0; i < listOne.length; i++) {
            if (listOne[i] !== listTwo[i]) {
                return false;
            }
        }

        return true;
    }

    console.log(areArraysSame([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
}
