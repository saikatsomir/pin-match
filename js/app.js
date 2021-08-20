function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('get three digit pin', pin);
        return getPin();
    }
}

function getGeneratePin() {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin').value = pin
    let displayPinText = displayPin.value
    displayPinText = pin;
    // console.log(pin);
}

document.getElementById('key-board').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('panaled-control');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }
})

function getRightPin() {
    const displayPin = document.getElementById('display-pin').value;
    const panaledControl = document.getElementById('panaled-control').value;
    const wrongMassage = document.getElementById('trying-fail');
    const rightMassage = document.getElementById('trying-success')
    if (displayPin == panaledControl) {
        rightMassage.style.display = 'block'
        wrongMassage.style.display = 'none'
    }
    else {
        wrongMassage.style.display = 'block'
        rightMassage.style.display = 'none'
    }
}