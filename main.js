/* 
****************************************
|         *Calculator Program*         |
|                                      |
| Create Web Application For A Simple  |
|                                      |
| Calculator Program                   |
|                                      |
****************************************
*/

// *Start* 
// --------------------------------------

// *Declare The Component in our Calculator* 

// Screen 
const screenResult = document.getElementById('output');
// Inputs contains Number and Opearations 
const inputs = document.querySelectorAll('.input');

// *Custom Variables* 
const calculator = document.querySelector('.calculator');

// *Logic Code* 
// First We Should Show The Inputs On Our Screen When Clicking on any of Inputs 
inputs.forEach((input) => {
    input.addEventListener('click',(e) => {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = screenResult.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        const calculate = (n1, operator, n2) => {
            const firstNum = parseFloat(n1);
            const secondNum = parseFloat(n2);
            if (operator === 'sum') {
                    return firstNum + secondNum;
                }
                
                if (operator === 'minus') {
                    return firstNum - secondNum;
                }
                
                if (operator === 'multi') {
                    return firstNum * secondNum;
                }
                
                if (operator === 'div') {
                    return firstNum / secondNum;
                }
        }

        if(!action || action === 'decimal' || action === 'sum' || action === 'minus' || action === 'multi' || action === 'div'){
            if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'){
                screenResult.textContent = keyContent;
            }else {
                screenResult.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number';
        }

        // if( action === 'sum' ||
        //     action === 'multi' ||
        //     action === 'div' ||
        //     action === 'minus'
        // ){
        //     const firstValue = calculator.dataset.firstValue;
        //     const operator = calculator.dataset.operator;
        //     const secondValue = displayedNum;

        //     // if (
        //     //     firstValue &&
        //     //     operator &&
        //     //     previousKeyType !== 'operator'
        //     // ) {
        //     //     const calcValue = calculate(firstValue, operator, secondValue);
        //     //     screenResult.textContent = calcValue;
                
        //     // // Update calculated value as firstValue
        //     //     calculator.dataset.firstValue = calcValue;
        //     // } else {
        //     //     // If there are no calculations, set displayedNum as the firstValue
        //     //     calculator.dataset.firstValue = displayedNum;
        //     // }

        //     if (
        //         firstValue &&
        //         operator &&
        //         previousKeyType !== 'operator' &&
        //         previousKeyType !== 'calculate'
        //     ) {
        //         const calcValue = calculate(firstValue, operator, secondValue);
        //         screenResult.textContent = calcValue;
        //         calculator.dataset.firstValue = calcValue;
        //     } else {
        //         calculator.dataset.firstValue = displayedNum;
        //     }
            
        //     key.classList.add('is-depressed');
        //     calculator.dataset.previousKeyType = 'operator';
        //     calculator.dataset.operator = action;
        // }

        if (action === 'clear'){
            screenResult.textContent = '';
        }
            
        //     screenResult.textContent = 0;
        //     calculator.dataset.previousKeyType = 'clear';
        // }


        if (action === 'equal'){
            screenResult.textContent = eval(displayedNum);
        }
            
        //     // Set modValue attribute
        //     calculator.dataset.modValue = secondValue;
        //     calculator.dataset.previousKeyType = 'calculate';
        // }

        // if (action === 'decimal') {
        //     if (!displayedNum.includes('.')) {
        //         screenResult.textContent = displayedNum + '.';
        //     } else if (
        //         previousKeyType === 'operator' ||
        //         previousKeyType === 'calculate'
        //     ) {
        //         screenResult.textContent = '0.';
        //     }
            
        //     calculator.dataset.previousKeyType = 'decimal';
        // }

        // Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    });
});


