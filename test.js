window.onload = function(){
    const display_expression = document.getElementById('disp1');
    const display_ans = document.getElementById('disp2')
    const buttons_digit = document.querySelectorAll(".btn.digit")
    const buttons_operation = document.querySelectorAll('.btn.operator')
    var arg_first = ''
    var arg_second = ''
    var operation = ''
    var expression = ''
    console.log(expression)
    buttons_digit.forEach(el=>{
            el.onclick=function(){on_button_press(el)
                display_expression.innerHTML = expression
                                    }
                                }
                            )

    buttons_operation.forEach(el=>{
            el.onclick=function(){on_button_press(el)
                                    if(expression == ''){
                                        no_digit_exception();
                                    }
                                    else{
                                        display_expression.innerHTML = expression
                                    }
                                }
                            }
                        )

    function on_button_press(btn){
        expression+=btn.id
        if(is_digit_button(btn.id)){
            if(operation === 0){
                arg_first+=btn.id
            }
            else if (expression === ''){
                no_digit_exception()
            }
            else{
                operation+=btn.id
            }
        }
        else if(is_operation_button(btn)){
            operation+=btn.id
            operation = operation === 0 ? 1 : 0
        }
        else if(btn.id === '='){
            console.log(calculate());
        }
    }

    function is_digit_button(btn){
        if(btn.id === '+' || btn.id === '-' || btn.id === '*' ||btn.id === '/' || btn.id ==='='){
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
        console.log(arg1)
        switch(operation){
            case '+':
                return arg1 + parseFloat(arg_second)
            case '-':
                return arg1 - parseFloat(arg_second)
            case '*':
                return arg1 * parseFloat(arg_second)
            case '/':
                return arg1 / parseFloat(arg_second)
        }
    }
    function no_digit_exception(){
        alert('You must enter the digits firstly')
    }
}