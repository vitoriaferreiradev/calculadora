const buttons = document.querySelectorAll('.btn')
let display = document.querySelector('#calc')
const result = document.querySelector('#result')
const clean = document.querySelector('.clean')
const erase = document.querySelector('.erase')
const equal = document.querySelector('.equal')

buttons.forEach(btn => {
    btn.onclick = function insert(){
        display.value += btn.textContent
    }
})

clean.onclick = function cleanAll() {
    display.value = ''
    result.value = ''
}

erase.onclick = function cleanLastDigit() {
    let input = display.value
    display.value = input.substr(0, input.length - 1)
}

equal.onclick = function calc() {
    let calc = eval(display.value)
    if (isNaN(calc)) {
        result.value = 'Err'
    } else if (display.value) {
        result.value = calc
        display.value = calc
    } else {
        result.value = 0
    }

}










