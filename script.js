let button = document.createElement('button');
button.className = 'myButton';
button.innerHTML = '<u>Add</u>';

document.body.append(button);

let buttonDelete = document.createElement('button');
buttonDelete.className = 'myButtonDelete';
buttonDelete.innerHTML = '<u>Delete</u>';

document.body.append(buttonDelete);

button.addEventListener('click', sayHi);


function sayHi () {
    console.log('hi');
}

let div = document.createElement('div');
div.className = 'myDiv';
document.body.append(div);

function addImg () {
    let img = document.createElement('img');
    img.src = './hi.jpg';
    img.className = 'myImg';
    div.appendChild(img);
}

button.addEventListener('click', addImg);

function deleteItem () {
    if (document.querySelector('img') !== null ) {
        let linkImg = document.querySelector('img');
        div.removeChild(linkImg);
    }   
}

buttonDelete.addEventListener('click', deleteItem);




// Навигация по DOM-элементам

// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

// Решение

// function getElement () {
//     let firstChild = document.body.children[0];
//     console.log(firstChild);
//     let secondChild = document.body.children[1];
//     console.log(secondChild);
//     let secondChildInUl = document.body.children[1].children[1];
//     console.log(secondChildInUl);
// }

// getElement();



// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

// Решение

// let table = document.querySelector('#my-table');
//     let rows = table.rows;

// for (let i = 0; i < rows.length; i++) {
// 	rows[i].cells[i].style.background = 'red';
// }

// let text = "The_stealth_warrior";

// function convert (str) {
//     if (typeof str !== 'string') {
//         return null;
//     }

//     let newText = '';

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '-' || str[i] == '_') {
//             newText = newText + str[i + 1].toUpperCase();
//             i++;
//         } else {
//             newText = newText + str[i];
//         }
//     }
//     return newText;
// }

// console.log(convert(text));



