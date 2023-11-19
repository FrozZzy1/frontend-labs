function practice1() {
  const array = [1, 3, 5, 1, 8, 9, 0, 3, 5];
  console.log(array.at(-1));
}

function practice2() {
  let animals = [];
  animals.push("Кот");
  animals.push("Пес");
  animals.push("Ежик");
  const lastIndex = animals.length - 1;
  console.log(animals);
  [animals[0], animals[lastIndex]] = [animals[lastIndex], animals[0]];
  console.log(animals);
}

function practice3() {
  let animals = ['Слон', 'Жираф', 'Зебра', 'Лев', 'Тигр'];

  console.log(animals);

  animals.unshift('Алексей');
  const last = animals.pop();
  animals.push(animals.shift());

  console.log(animals);
}


function practice4() {
  let victims = ['Слон', 'Жираф', 'Зебра'];
  let predators = ['Лев', 'Тигр', 'Леопард'];
  console.log(victims, predators);

  let union = victims.concat(predators);
  console.log(union);
  const last = union.length - 1;
  [union[0], union[last]] = [union[last], union[0]];
  console.log(union)
  console.log(victims, predators);
  console.log('Не изменились');
}

function practice5() {
  let name = ['Иванов', 'Иван', 'Иванович'];
  name.unshift('Господин');
  name = name.slice(0, -2);
  console.log(name.join('@'))

}
