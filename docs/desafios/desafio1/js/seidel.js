// jacobi.js
function calcularIteracionesSeidel(A, b) {
    var resultados = [];
    var x = 0, y = 0, z = 0;

    // Iteración 0
    resultados.push([x, y, z]);

    for (var k = 1; k <= 10; k++) {
        x = (b[0] - (A[0][1] * y) - (A[0][2] * z)) / A[0][0];
        y = (b[1] - (A[1][0] * x) - (A[1][2] * z)) / A[1][1];
        z = (b[2] - (A[2][0] * x) - (A[2][1] * y)) / A[2][2];

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



