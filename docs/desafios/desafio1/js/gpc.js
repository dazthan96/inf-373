// Producto punto entre dos vectores
function dot(v1, v2) {
    return v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2];
}

// Multiplicación Matriz (3x3) x Vector (3x1)
function multMV(A, v) {
    return [
        dot(A[0], v),
        dot(A[1], v),
        dot(A[2], v)
    ];
}
function ejecutarPCG(A, b) {
    var resultados = [];
    var x = [0, 0, 0]; // Vector inicial
    
    // Funciones internas rápidas
    var dot = (v1, v2) => v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2];
    var multMV = (Mat, v) => [
        Mat[0][0]*v[0] + Mat[0][1]*v[1] + Mat[0][2]*v[2],
        Mat[1][0]*v[0] + Mat[1][1]*v[1] + Mat[1][2]*v[2],
        Mat[2][0]*v[0] + Mat[2][1]*v[1] + Mat[2][2]*v[2]
    ];

    // r = b - A*x
    var Ax0 = multMV(A, x);
    var r = [b[0] - Ax0[0], b[1] - Ax0[1], b[2] - Ax0[2]];
    
    // Precondicionador Jacobi (M^-1 es 1/diagonal)
    var z = [r[0]/A[0][0], r[1]/A[1][1], r[2]/A[2][2]];
    var p = [...z];
    
    resultados.push([...x]); // Iteración 0

    for (var k = 1; k <= 10; k++) {
        var xAnt = [...x]; // Guardamos para el error final
        var Ap = multMV(A, p);
        
        var r_z_viejo = dot(r, z);
        var alfa = r_z_viejo / dot(p, Ap);
        
        // Actualizar x
        x[0] += alfa * p[0];
        x[1] += alfa * p[1];
        x[2] += alfa * p[2];

        resultados.push([...x]);

        // Actualizar r
        r[0] -= alfa * Ap[0];
        r[1] -= alfa * Ap[1];
        r[2] -= alfa * Ap[2];

        // Nuevo z
        z = [r[0]/A[0][0], r[1]/A[1][1], r[2]/A[2][2]];

        // beta y nueva p
        var beta = dot(r, z) / r_z_viejo;
        p[0] = z[0] + beta * p[0];
        p[1] = z[1] + beta * p[1];
        p[2] = z[2] + beta * p[2];
    }

    // --- CÁLCULO DEL ERROR FINAL (Iteración 10 vs 9) ---
    var v9 = resultados[9];
    var v10 = resultados[10];
    
    var diffX = Math.abs(v10[0] - v9[0]);
    var diffY = Math.abs(v10[1] - v9[1]);
    var diffZ = Math.abs(v10[2] - v9[2]);

    var diferenciaMax = Math.max(diffX, diffY, diffZ);

    return {
        matriz: resultados,
        errorFinal: diferenciaMax.toFixed(8) // Más precisión para Gradiente
    };
}
