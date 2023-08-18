function calcular() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;

    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case '%':
            resultado = numero1 % numero2;
            break;
        default:
            resultado = 'Error';
            break;
    }

    document.getElementById('resultado').value = resultado;
}