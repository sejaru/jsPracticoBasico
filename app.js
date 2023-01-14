const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('resultado');
const form = document.getElementById('form');

btn.addEventListener('click', sumarValores);


function sumarValores(){
    const sumaInput = Number(input1.value ) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInput;
}
