var arg_first = ''
var arg_second = ''

var first_value = 0
var second_value = 0

var operation = ''

var arg_switch = 0

var expression = ''

var isNext = 0

var color_switch = 0

var first_operation = '+';

window.onload = function(){
    const display_expression = document.getElementById('disp1');
    const display_ans = document.getElementById('disp2')
    const buttons_digit = document.querySelectorAll(".btn.digit")
    const buttons_operation = document.querySelectorAll('.btn.operator')
    var calc = ''
    
    buttons_digit.forEach(el=>{
            el.onclick=function(){updateDisplay(el, true)}
                                }
                            )

    buttons_operation.forEach(el=>{
            el.onclick=function(){updateDisplay(el, false)}
                            }
                        )

    function calculate(){
        switch(operation){
            case '+':
                return String(first_value + second_value)
            case '-':
                return String(first_value - second_value)
            case '*':
                return String(first_value * second_value)
            case '/':
                return String(first_value / second_value)
            case '%':
                return String(first_value * second_value / 100)
            case 'sqrt':
                return String(Math.pow(first_value, 1/2));
            case 'pow':
                return String(Math.pow(first_value, 2))
            case 'fac':
                return String(factorial(first_value))
        }
    }
    function changeBackground() {
        if(color_switch === 1){
            document.body.style.background = "white";
            color_switch = 0;
        }
        else{
            document.body.style.background = "black";
            color_switch = 1;
        }
    }
    //полная очистка введенных и рассчитаных данных
    function clear_expression(){
        first_operation = '+';
        isNext = 0
        arg_first = ''
        arg_second = ''
        operation = ''
        arg_switch = 0
        expression = ''
        display_ans.innerHTML = ''
        display_expression.innerHTML = '0'
        calc = ''
    }
    function onDigitButtonPress(btn){
        if(operation !== ''){
            arg_second+=btn.id;
            second_value = parseFloat(arg_second)
            expression = arg_first + operation + arg_second
        }
        else{
            arg_first+=btn.id;
            first_value = parseFloat(arg_first);
            expression = arg_first
        }
    }
    function onOperatorButtonPress(btn){
        switch(btn.id){
            case "+":
                operation = "+";
                expression = arg_first + operation
                break;
            case "-":
                operation = "-";
                expression = arg_first + operation
                break;
            case "*":
                operation = "*";
                expression = arg_first + operation
                break;
            case "/":
                operation = "/";
                expression = arg_first + operation
                break;
            case "=":
                calc = calculate();
                display_ans.innerHTML = expression;
                expression = calc;
                arg_first = calc
                first_value = parseFloat(calc);
                arg_second = '';
                second_value = 0;
                operation = '';
                break;
            case "%":
                operation = "%"
                expression = arg_first + operation
                break;
            case "sign":
                if(arg_second === ''){
                   first_value*=-1
                   arg_first = String(first_value)
                   expression = first_value
                }
                break;
            case ".":
                break;
            case "ct":
                changeBackground();
                break;
            case "cls":
                clear_expression();
                break;
            case "sqrt":
                one_num_calc('sqrt')
                break;
            case 'pow':
                one_num_calc('pow')
                break;
            case 'fac':
                one_num_calc('fac')
                break;
        }
       
        return true;
    }
    function updateDisplay(btn, isDigit){
        if(isDigit){
            onDigitButtonPress(btn)
        }
        else {
            onOperatorButtonPress(btn)
        }
        display_expression.innerHTML = expression;
    }
    function factorial(val){
        let ans = 1;
        for(i = 1; i <= val; i++){
            ans*=i
        }
        return ans;
    }
    function one_num_calc(oper){
        operation = oper;
        display_ans.innerHTML = expression;
        calc = calculate()
        expression = calc;
        arg_first = calc
        first_value = parseFloat(calc);
        arg_second = '';
        second_value = 0;
        operation = '';
    }
}