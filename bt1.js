function calculator(number1, number2, operator) {
    var result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw new RangeError('the operator must be an +,-,*,/');
    }
    return result;
}
// } catch (e) {
//     if (e instanceof RangeError) {
//         console.log(e.message)
//     }
//
console.log(calculator(3, 9, '%'));
