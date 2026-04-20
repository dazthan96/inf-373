// jacobi.js
function calcularIteracionesJacobi(A, b) {
    var resultados = [];
    var x = 0, y = 0, z = 0;

    // Iteración 0
    resultados.push([x, y, z]);

    for (var k = 1; k <= 10; k++) {
        var xAnt = x, yAnt = y, zAnt = z;

        x = (b[0] - (A[0][1] * yAnt) - (A[0][2] * zAnt)) / A[0][0];
        y = (b[1] - (A[1][0] * xAnt) - (A[1][2] * zAnt)) / A[1][1];
        z = (b[2] - (A[2][0] * xAnt) - (A[2][1] * yAnt)) / A[2][2];

        resultados.push([Number(x.toFixed(4)), Number(y.toFixed(4)), Number(z.toFixed(4))]);
    }
    var v9 = resultados[9];
    var v10 = resultados[10];
    
    var diffX = Math.abs(v10[0] - v9[0]);
    var diffY = Math.abs(v10[1] - v9[1]);
    var diffZ = Math.abs(v10[2] - v9[2]);

    var diferenciaMax = Math.max(diffX, diffY, diffZ);
    
    return {
        matriz: resultados,
        errorFinal: diferenciaMax.toFixed(4)
    };
}



