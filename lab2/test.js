var arg_first = ''
var arg_second = ''
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
            el.onclick=function(){on_button_press(el)}
                                }
                            )

    buttons_operation.forEach(el=>{
            el.onclick=function(){on_button_press(el)}
                            }
                        )

    function on_button_press(btn){
        if(is_digit_button(btn) & btn.id !== 'cls'){
            if(arg_switch === 0){
                expression+=btn.id
                arg_first+=btn.id
            }
            else{
                expression+=btn.id
                arg_second+=btn.id;
            }
            display_expression.innerHTML = expression
        }
        else if(is_operation_button(btn)){
            if(arg_first === '' && (btn.id === '-' || btn.id === '+')){
                expression+=btn.id
                first_operation = first_operation === '-' ? '+' : '-';
            }
            else{
                operation += btn.id;
                expression+=btn.id
            }
            if(isNext === 0){
                arg_switch = arg_switch === 0 ? 1 : 0
            }
            display_expression.innerHTML = expression
        }
        else if(btn.id === 'cls'){
            clear_expression()
        }
        else if(btn.id === '='){
            calc = calculate()
            display_ans.innerHTML = expression
            display_expression.innerHTML = calc;
            expression = calc
            arg_first = calc
            arg_second = ''
            operation = ''
            isNext = 1
        }
        else{
            changeBackground()
        }
    }

    function is_digit_button(btn){
        if(btn.id === '+' || btn.id === '-' || btn.id === '*' ||btn.id === '/' || btn.id ==='=' || btn.id === 'ct' || btn.id === 'cls'){
            return false;
        }
        return true;
    }

    function is_operation_button(btn){
        if(btn.id === '+' || btn.id === '-' || btn.id === '*' || btn.id === '/'){
            return true;
        }
        return false;
    }

    function calculate(){
        arg1 = parseFloat(arg_first)
        if(first_operation === '-'){
            arg1*=-1;
        }
        arg2 = parseFloat(arg_second)
        ans = 0
        switch(operation){
            case '+':
                ans = arg1+arg2
                break;
            case '-':
                ans = arg1-arg2
                break;
            case '*':
                ans = arg1*arg2
                break;
            case '/':
                ans = arg1/arg2
                break;
        }
        return String(ans)
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
}