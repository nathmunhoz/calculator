const result = document.getElementById('result');
let firstNumber = '';
let operator = '';
let secondNumber = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // maximum digits
        maximum = firstNumber.length + operator.length + secondNumber.length;
        if (maximum >= 12 && value !== 'clear'){
            // prevent further input
            return;
        };

        // if it's clear
        if(value === 'clear'){
            firstNumber = '';
            secondNumber = '';
            operator = '';
            result.textContent = '';
            return;
        };

        // if it's equal 
        if(value ===  '='){
            if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
                let total;

                if (operator === '+'){
                    total = Number(firstNumber) + Number(secondNumber);
                };
                if (operator === '-'){
                    total = Number(firstNumber) - Number(secondNumber);
                };
                if (operator === '*'){
                    total = Number(firstNumber) * Number(secondNumber);
                };
                if (operator === '/'){
                    total = secondNumber === '0' ? 'Error' : Number(firstNumber) / Number(secondNumber);
                };
                if (operator === '%'){
                    total = Number(firstNumber) * Number(secondNumber) / 100;
                };
                if (operator === '√'){
                    total = Math.sqrt(Number(firstNumber));
                };

                let display = total.toString();

                if (display.length > 12){
                    display = display.slice(0, 12);
                }

                result.textContent = display;

                firstNumber = total.toString();
                secondNumber = '';
                operator = '';

            };
            return;
        };

        // if it's a number
        if(!isNaN(value)){
            if(operator === ''){
                firstNumber += value;
            } else {
                secondNumber += value;
            };
            result.textContent = firstNumber + operator + secondNumber;
            return;
        }; 

        // if it's a dot
        if (value === '.'){
            if (operator === ''){
                if (firstNumber !== '' && !firstNumber.includes('.')){
                    firstNumber += '.';
                } ;
            } else {
                if (secondNumber !== '' && !secondNumber.includes('.')){
                    secondNumber += '.';
                } ;
            };
            result.textContent = firstNumber + operator + secondNumber;
        };

        // if it's a operator
        if(['√', '%', '/', '*', '-', '+'].includes(value)){
            if(firstNumber !== '' && operator === ''){
                operator = value;
                result.textContent = firstNumber + operator + secondNumber;
            };
        };

    });
});