var x = 1.5;
var a = 0;
var iteraciones = 4;


function calcularFactorial(numero) {
    if (numero === 0) return 1;
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

var sumaAcumulada = 0;
function llenar_datos(){
    var tabla = document.getElementById("tabla-taylor");
    for (var n = 0; n < iteraciones; n++) {
        var numerador = Math.pow(x - a, n);
        var denominador = calcularFactorial(n);
        var valorTermino = numerador / denominador;
        

        sumaAcumulada = sumaAcumulada + valorTermino;

        var fila = "<tr>";
        fila = fila + "<td>" + n + "</td>";
        fila = fila + "<td>" + "(1 / " + denominador + ") * " + numerador.toFixed(2) + "</td>";
        fila = fila + "<td>" + valorTermino.toFixed(4) + "</td>";
        fila = fila + "<td class='fw-bold'>" + sumaAcumulada.toFixed(4) + "</td>";
        fila = fila + "</tr>";

        tabla.innerHTML = tabla.innerHTML + fila;
    }
}

window.onload =llenar_datos;