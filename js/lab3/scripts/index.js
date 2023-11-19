function practice1(s = '') {
    let string = "каК Я лЮблю уЧиться";

    return string[0].toLocaleUpperCase() + string.slice(1).toLocaleLowerCase();
}

function practice2_3() {
    myWeightInKilograms = parseInt(prompt("Введите свой вес в килограммах: ", ""));

    const pood = myWeightInKilograms / 16;
    const pounds = myWeightInKilograms / 0.4;

    alert(`Ваш вес в пудах: ${pood} | Ваш вес в фунтах: ${pounds}`);
}

practice2_3();
