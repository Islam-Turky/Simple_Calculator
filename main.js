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

        if (action === 'clear'){
            screenResult.textContent = '';
        }

        if (action === 'equal'){
            screenResult.textContent = eval(displayedNum);
        }

        if (action === 'delete'){
            screenResult.textContent = displayedNum.slice(0, -1);
        }
    });
});


