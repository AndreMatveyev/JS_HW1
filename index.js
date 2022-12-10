// Создать цикл на 10 итераций. На каждой итерации если i четное,
// то вывести в консоль слово Fiz, если i не четное, то вывести в 
// консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

const numberIteration = 10;
for (let i = 1; i <= numberIteration; i++) {
    if (i % 3 === 0) {
        console.log('FizBuz');
    } else if (i % 2 === 0) {
        console.log('Fiz');
    } else {console.log('Buz');}
}

// Написать логику нахождения факториала числа 10.

const inputNumber = 10;
let factorial = 1;
for (let i = 1; i <= inputNumber; i++) {
    factorial *= i;
}
console.log(factorial);

// В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. 
// Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?

const weekConsumptionPaper = 1200;
const paperInPack = 500;
const weekNumber = 8;
const restOfPaper = (weekConsumptionPaper * weekNumber) % paperInPack;
let numberOfPack;
if (restOfPaper === 0) {
    numberOfPack = (weekConsumptionPaper * weekNumber) / paperInPack;
} else {
    numberOfPack = (weekConsumptionPaper * weekNumber - restOfPaper) / paperInPack + 1;
}
console.log(numberOfPack);

// Создать функцию, которая выведет в консоль номер этажа и номер подъезда 
// по номеру квартиры. Этажей у нас 9, квартир на этаже по 3

// Вариант 1 - через const floor - короче, но менее понятный
// const roomsOnFloor = 3;
// const floors = 9;
// const roomNumber = 456;
// const roomInLastPorch = roomNumber % (floors * roomsOnFloor) + floors * roomsOnFloor * (roomNumber % (floors * roomsOnFloor) === 0);
// const floor = (roomInLastPorch - (roomInLastPorch % roomsOnFloor)) / roomsOnFloor + (roomInLastPorch % roomsOnFloor > 0);
// const porch = (roomNumber - roomInLastPorch) / (floors * roomsOnFloor) + 1;
// console.log('floor :' + floor + ' porch :' + porch);

// Вариант 2 - через let floor - более читабельный
// const roomsOnFloor = 3;
// const floors = 9;
// const roomNumber = 456;
// let roomInLastPorch;
//  if (roomNumber % (floors * roomsOnFloor) === 0) {
//     roomInLastPorch = floors * roomsOnFloor;
//  } else {
//     roomInLastPorch = roomNumber % (floors * roomsOnFloor);
//  } 
// //  console.log(roomInLastPorch);
//  let floor;
// if (roomInLastPorch % roomsOnFloor === 0) {
//     floor = roomInLastPorch / roomsOnFloor;
// } else {
//     floor = (roomInLastPorch - (roomInLastPorch % roomsOnFloor)) / roomsOnFloor + 1;
// }
// const porch = (roomNumber - roomInLastPorch) / (floors * roomsOnFloor) + 1;
// console.log('floor :' + floor + ' porch :' + porch);

// Вариант 3 - придумал последним. Вот почему нужно считать с 0!
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
const roomInLastPorch = (roomNumber -1) % (floors * roomsOnFloor);
const floor = (roomInLastPorch - (roomInLastPorch % roomsOnFloor)) / roomsOnFloor + 1;
const porch = (roomNumber - 1 - roomInLastPorch) / (floors * roomsOnFloor) + 1;
console.log('floor :' + floor + ' porch :' + porch);

// Вывести в консоль пирамиду. 
// Переменная указывает количество строк из которых построится пирамида. 

const medianNumber = 6;
for (let i = 1; i <= medianNumber; i++) {
    let oneRow = '';
    for (let j = 1; j < medianNumber * 2; j++) {
        if (j <= medianNumber - i || j >= medianNumber + i) {
            oneRow += '-';
        } else {
            oneRow += '#';
        }
    }

    console.log(oneRow);
}