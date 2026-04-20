function ejecutarLU(){
    var casos = ["ideal", "estres", "mal"]
    for (let i = 0; i < casos.length; i++) {
        var nombre_caso = casos[i];
        
        var datos = ObtenerA(nombre_caso);

        var calc = new CalculadoraLU(datos.matrizA, datos.vectorB);

        
        calc.factorizarLU();
        var l_1 = calc.obtenerInversa(calc.L, "L")
        var u_1 = calc.obtenerInversa(calc.U, "U")

        var d = calc.obtenerVectorD(calc.L, datos.vectorB);
        var x = calc.obtenerVectorX(calc.U, d);
        escribirResultadosLU(calc, d, x, l_1, u_1, nombre_caso);
    }
}
// Función que se encarga de buscar tus IDs específicos
function escribirResultadosLU(calc, d, x, Linv, Uinv, caso) {
    var n = calc.n;

    for (var i = 0; i < n; i++) {
        var f = i + 1; // Fila para el ID

        // Escribir vectores d y x (Patrón: d1_lu_ideal, x1_lu_estres)
        insertarEnTD("d" + f + "_lu_" + caso, d[i]);
        insertarEnTD("x" + f + "_lu_" + caso, x[i]);

        for (var j = 0; j < n; j++) {
            var c = j + 1; // Columna para el ID

            // Matrices L y U (Patrón: l11_lu_ideal)
            insertarEnTD("l" + f + c + "_lu_" + caso, calc.L[i][j]);
            insertarEnTD("u" + f + c + "_lu_" + caso, calc.U[i][j]);

            // Inversas (Patrón: l1_11_lu_ideal_inversa)
            insertarEnTD("l1_" + f + c + "_lu_" + caso, Linv[i][j]);
            insertarEnTD("u1_" + f + c + "_lu_" + caso, Uinv[i][j]);
        }
    }
}

// Función auxiliar para seguridad
function insertarEnTD(id, valor) {
    var el = document.getElementById(id);
    if (el) {
        el.innerText = valor.toFixed(4);
    }
}