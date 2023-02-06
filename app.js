// const number1 = Document.getElementsByClassName('1')

// const display = document.querySelector('.display')
// const number = document.querySelector(".one")
//
//
// display.innerHTML = '_'
//
// function addnum(){
// if (display.innerHTML === '_')
//    display.innerHTML = number.innerHTML,
//     console.log(display)
//     else {
//     display.innerHTML += number.innerHTML,
//
//     console.log(display)
// }
// }
//
//     number.onclick = function () {
//     addnum()
//     }
//
//------------------------------------------------

const screen = document.querySelector(".display")
const btns = document.querySelectorAll(".btn")


btns.forEach((el) => {
    el.onclick = () => {
        if (el.id === "AC") {
            screen.innerHTML = ""}

            else if (el.id != "" && el.id != "=") {
                screen.innerHTML += el.id
            }
            else if (el.id === "=") {
                let equation = eval(screen.innerHTML);
                screen.innerHTML = equation;
        }
        }
})













// btns.forEach((el) => {
//     el.onclick = () => {
//         if (el.id === "AC") {
//             screen.innerHTML = ""
//         }
//         console.log(el.id)
//     };
//
// });

