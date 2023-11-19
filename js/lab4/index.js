const path = [
    "ст. Черепаново",
    "Электричка Чер-НСК",
    "Станция Бердск",
    "Остановка пл. Горького",
    "Маршрутка 27",
    "остановка НииСистем",
    "500 метров на запад",
    "ВКИ"
]

function practice1() {
    // var WayVKI = [];
    // WayVKI.push("ст. Черепаново");
    // WayVKI.push("Электричка Чер-НСК");
    // WayVKI.push("Станция Бердск");
    // WayVKI.push("Остановка пл. Горького");
    // WayVKI.push("Маршрутка 27");
    // WayVKI.push("остановка НииСистем");
    // WayVKI.push("500 метров на запад");
    // WayVKI.push("ВКИ");

    print(path);
    print(getReversed(path));
}

function practice2() {
    path.splice(-2, 2, '2 км на восток', 'Гигант');

    printPath(path);
    printPath(getReversedPath(path));
}

function practice3() {
    let reversedWayToCollege = getReversedPath(path);

    reversedWayToCollege.splice(2, 0, 'Перейти дорогу');

    console.log(reversedWayToCollege);
}


function practice4() {
    const n = parseInt(prompt("Конец интервала:", ""));

    label:
        for (let oneIndex = 3; oneIndex <= n; oneIndex++) {
            for (let twoIndex = 2; twoIndex ** 2 <= oneIndex; twoIndex++)
                if (oneIndex % twoIndex === 0)
                    continue label;

            console.log(oneIndex);
        }
}


function printPath(list) {
    for (const element of list) {
        console.log(element);
    }
}

function getReversedPath(list) {
    return list.toReversed().map((el) => {
        switch (true) {
            case el.includes('запад'):
                el = el.replace('запад', 'восток');
                break;
            case el.includes('восток'):
                el = el.replace('восток', 'запад');
                break;
            case el.includes('север'):
                el = el.replace('север', 'юг');
                break;
            case el.includes('юг'):
                el = el.replace('юг', 'север');
                break;
        }
        return el;
    })
}