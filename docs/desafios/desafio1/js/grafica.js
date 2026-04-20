
function iniciarGraficacion() {
    var casos = ["ideal", "estres", "mal"];

    casos.forEach(function(sufijo) {
        // 1. Obtener solución "real" desde tus etiquetas HTML de LU
        // Asegúrate que los IDs existan: lu_x_ideal, lu_y_ideal, etc.
        var lu = [
            parseFloat(document.getElementById("x1_lu_" + sufijo).innerText),
            parseFloat(document.getElementById("x2_lu_" + sufijo).innerText),
            parseFloat(document.getElementById("x3_lu_" + sufijo).innerText)
        ];

        // 2. Extraer los coeficientes A y b de la tabla HTML correspondiente
        // (Aquí debes usar tu función actual de extracción)
        var datos = ObtenerA(sufijo); 

        // 3. Ejecutar todos los métodos (Matrices de 11x3)
        var resJac = calcularIteracionesJacobi(datos.matrizA, datos.vectorB).matriz;
        var resSei = calcularIteracionesSeidel(datos.matrizA, datos.vectorB).matriz;
        var resSor = calcularIteracionesSor(datos.matrizA, datos.vectorB, 1.2).matriz;
        var resPcg = ejecutarPCG(datos.matrizA, datos.vectorB).matriz;

        // 4. Llamar a la Maestra para crear el bloque de 3 gráficas (X, Y, Z)
        crearBloqueGraficas(sufijo, resJac, resSei, resSor, resPcg, lu);
    });
}

/**
 * Función Maestra: Define qué variable va en qué canvas
 */
function crearBloqueGraficas(sufijo, jac, sei, sor, pcg, lu) {
    configurarGrafica("chartX_" + sufijo, 0, jac, sei, sor, pcg, lu[0]);
    configurarGrafica("chartY_" + sufijo, 1, jac, sei, sor, pcg, lu[1]);
    configurarGrafica("chartZ_" + sufijo, 2, jac, sei, sor, pcg, lu[2]);
}

/**
 * Función de Dibujo: Configura Chart.js para cada variable
 */
function configurarGrafica(canvasId, idx, jac, sei, sor, pcg, valorReal) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    
    // Preparar vectores de error absoluto
    var prepararErrores = function(metodo) {
        return metodo.map(iter => Math.abs(parseFloat(iter[idx]) - valorReal));
    };

    // Destruir gráfica anterior si existe (para poder recalcular)
    if (window[canvasId] instanceof Chart) {
        window[canvasId].destroy();
    }

    window[canvasId] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [
                { label: 'Jacobi', data: prepararErrores(jac), borderColor: '#0d6efd', tension: 0.2 },
                { label: 'Seidel', data: prepararErrores(sei), borderColor: '#198754', tension: 0.2 },
                { label: 'SOR', data: prepararErrores(sor), borderColor: '#ffc107', tension: 0.2 },
                { label: 'PCG', data: prepararErrores(pcg), borderColor: '#dc3545', tension: 0.2 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { 
                    type:'linear',
                    //beginAtZero:true,
                    //type: 'logarithmic', // Escala logarítmica recomendada para ver errores pequeños
                    title: { display: true, text: 'Error Absoluto' } 
                }
            },
            plugins: {
                legend: { labels: { boxWidth: 12, font: { size: 10 } } }
            }
        }
    });
}
