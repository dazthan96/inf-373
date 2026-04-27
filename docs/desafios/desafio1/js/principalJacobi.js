
function llenarJacobi() {
    var datosIdeal = ObtenerA("ideal");
    var resIdeal = calcularIteracionesJacobi(datosIdeal.matrizA, datosIdeal.vectorB);
    repartirEnTabla(resIdeal.matriz, "ideal");

    var datosEstres = ObtenerA("estres");
    var resEstres = calcularIteracionesJacobi(datosEstres.matrizA, datosEstres.vectorB);
    repartirEnTabla(resEstres.matriz, "estres");

    var datosMal = ObtenerA("mal");
    var resMal = calcularIteracionesJacobi(datosMal.matrizA, datosMal.vectorB);
    repartirEnTabla(resMal.matriz, "mal");
    
}

function repartirEnTabla(matrizResultados, sufijo) {
    
    for (var i = 0; i <= 10; i++) {
        for (var j = 1; j <= 3; j++) {
            var idBuscado = "jac_" + i + j + "_" + sufijo;
            var celda = document.getElementById(idBuscado);
            
            if (celda) {
                celda.innerText = Number(matrizResultados[i][j-1]).toFixed(4);
            }
        }
    }
}
