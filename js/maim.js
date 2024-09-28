'use strict';






// первое задание
// let a = prompt('Введите первое число','');
// let b = prompt('Введите второе число','');

// for (a; a < b; a++) {
//     if(a % 2 != 0) continue;
//     alert(a);
// }



// второе задание
// let i = 0;
// while (i<3) {
//     alert(`numbers ${i}!`);
//     i++
// }

// третье задание
// let a = promt('Введите число, большее 10', '');

// while (true) {
//     2
// }


function numbers() {
    let a = +prompt('первое чсло');
    let b = +prompt('второе чсло');
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
                alert(i);
            }
        }
    } else {
        alert('Первое должно быть меньш второго');
    }
}
numbers();


let i = 0;
while(i<3) {
    alert(`number ${i}`);
    i++
}


let number = +prompt("Введит число");
do {
    number = +prompt("еще раз");
} while(number < 10 && number) 



let x = +prompt('первое число', 6);
let y = +prompt('второе число', 12);

function Min(x,y) {
    if(x>y) {
        alert(y);
    } else if(y>x) {
        alert(x);
    }
}

Min(x,y);


let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились!"),
    () => alert("Вы отменили")
);


let age = +prompt('возраст');
let checkAge = age => age >18 || confirm('лол родители разрешили?');
checkAge(age)




  


























