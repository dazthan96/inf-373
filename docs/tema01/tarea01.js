
var valor_real = 100;
var valores_observados = [92, 95, 97, 101, 99, 105, 110, 85, 120, 88, 93, 98, 102, 107, 115, 90, 96, 100, 104, 112];

function llenar_datos() {
    var tabla = document.getElementById("tabla-cuerpo");

    tabla.innerHTML = "";

    for (var i = 0; i < valores_observados.length; i++) {
        
        var observado = valores_observados[i];

        // Cálculos matemáticos simples
        var error_abs = Math.abs(valor_real - observado);
        var error_rel = error_abs / valor_real;
        var error_porc = error_rel * 100;

        // Crear la fila de texto HTML
        var fila = "<tr>";
        fila = fila + "<td>" + (i + 1) + "</td>";
        fila = fila + "<td>" + observado + "</td>";
        fila = fila + "<td>" + error_abs + "</td>";
        fila = fila + "<td>" + error_rel.toFixed(4) + "</td>";
        fila = fila + "<td>" + error_porc.toFixed(2) + "%</td>";
        fila = fila + "</tr>";


        tabla.innerHTML = tabla.innerHTML + fila;
    }

    var suma_valores = 0;
    for (var j = 0; j < valores_observados.length; j++) {
        suma_valores = suma_valores + valores_observados[j];
    }
    var promedio = suma_valores / valores_observados.length;
    var error_promedio_porc = (Math.abs(valor_real - promedio) / valor_real) * 100;

    var exactitud = "";
    if (error_promedio_porc < 5) {
        exactitud = "Alta (Promedio cercano al real)";
    } else {
        exactitud = "Baja (Promedio alejado del real)";
    }
    document.getElementById("txt-exactitud").innerHTML = exactitud;

    var maximo = Math.max.apply(null, valores_observados);
    var minimo = Math.min.apply(null, valores_observados);
    var rango = maximo - minimo;

    var precision = "";
    if (rango < 20) {
        precision = "Alta (Datos muy agrupados)";
    } else {
        precision = "Baja (Datos muy dispersos)";
    }
    document.getElementById("txt-precision").innerHTML = precision;

}

window.onload = llenar_datos;
