function practice1() {
    let text = " !!!! приВЕдд, Я мЕДвед!!!";

    text
        .replace(/!/g, '')
        .trim()
        .split(' ')
        .map(word => (
            word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
        ))
        .join(' ') + '!'
}

function practice2() {
    const a = true;
    const b = false;
    const c = true;

    console.log(!a || a || b || c);
}

function practice3() {
    const dino = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];

    console.log(`Длина: ${dino.length}`);
    console.log(dino[2][1], dino[1]);
}

