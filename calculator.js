// find first/second digit, and operator elements and run button from html.
let eleFirst = document.getElementById('firstDigit')
let eleSecond = document.getElementById('secondDigit')
let operator = document.getElementById('operators')
// find the div with results id
let resValue = document.getElementById('result')


//inspect the button pressed returned value
function funKeyGet (evt) {
    switch(evt.key) {
        case '+':
            operator.options[operator.selectedIndex].value === '+'
            break;
        case '-':
            operator.options[operator.selectedIndex].value === '-'
            break;
        case '*':
            operator.options[operator.selectedIndex].value === '*'
            break;
        case '/':
            operator.options[operator.selectedIndex].value === '/'
            break;
        case 'Enter':
            document.getElementById('runner').click()
    }
    console.log('keyPress',evt.key)
}

//inspect the operator value
function funOperatorGet (evt) {
    console.log('operator', operator.options[operator.selectedIndex].value)
}

//calculate the results
function calculate () {
    if((!isNaN (eleFirst.value)) && (!isNaN (eleSecond.value))) {
    switch (operator.options[operator.selectedIndex].value) {
        case '+':
            resValue.value = parseInt(eleFirst.value) + parseInt(eleSecond.value)
            break;
        case "-":
            resValue.value = eleFirst.value - eleSecond.value
            break;
        case "*":
            resValue.value = eleFirst.value * eleSecond.value
            break;
        case "/":
            resValue.value = eleFirst.value / eleSecond.value
            break;
        default:
            break;
        // default:
        //     resValue.innerHTML = 'Empty';
    }
    eleName.innerText += eleFirst.value.concat(operator.options[operator.selectedIndex].value).concat(eleSecond.value).concat('=').concat(resValue.value).concat('\n')
    }
}
// debugger
//add eventListener
document.addEventListener('keydown',funKeyGet)
document.addEventListener('change',funOperatorGet)

//add result history to the next line

// create element h3
var eleName = document.createElement('div')

let resultHistory = document.getElementById('history')

//set style with blue color
eleName.setAttribute('style','color:blue;font-size:40px;')
//append.
resultHistory.append(eleName)
