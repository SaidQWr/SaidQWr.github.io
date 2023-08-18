const btnCalcular = document.getElementById('calcular');
const inputTotal = document.getElementById('total');
const inputPorcentaje = document.getElementById('porcentaje');
const divResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
  const total = parseFloat(inputTotal.value);
  const porcentaje = parseFloat(inputPorcentaje.value);

  if (isNaN(total) || isNaN(porcentaje)) {
    divResultado.innerHTML = 'Por favor ingrese valores numéricos';
    return;
  }

  const propina = total * (porcentaje / 100);
  const totalConPropina = total + propina;

  divResultado.innerHTML = `
    La propina es: $${propina.toFixed(2)}<br>
    El total a pagar con propina es: $${totalConPropina.toFixed(2)}
  `;
});