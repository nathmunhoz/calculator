const result = document.getElementById('result');
let firstNumber = '';
let operator = '';
let secondNumber = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // add maximum type

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
                    total = Number(firstNumber) % Number(secondNumber);
                };
                if (operator === '√'){
                    total = Math.sqrt(Number(firstNumber));
                };

                result.textContent = total;

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