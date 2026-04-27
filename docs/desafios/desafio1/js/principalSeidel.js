
function llenarSeidel() {
    var datosIdeal = ObtenerA("ideal");
    var resIdeal = calcularIteracionesSeidel(datosIdeal.matrizA, datosIdeal.vectorB);
    repartirEnTablaS(resIdeal.matriz, "ideal");
    

    var datosEstres = ObtenerA("estres");
    var resEstres = calcularIteracionesSeidel(datosEstres.matrizA, datosEstres.vectorB);
    repartirEnTablaS(resEstres.matriz, "estres");
    

    var datosMal = ObtenerA("mal");
    var resMal = calcularIteracionesSeidel(datosMal.matrizA, datosMal.vectorB);
    repartirEnTablaS(resMal.matriz, "mal");
    

    
}

function repartirEnTablaS(matrizResultados, sufijo) {
    
    for (var i = 0; i <= 10; i++) {
        for (var j = 1; j <= 3; j++) {
            var idBuscado = "sei_" + i + j + "_" + sufijo;
            var celda = document.getElementById(idBuscado);
            
            if (celda) {
                celda.innerText = Number(matrizResultados[i][j-1]).toFixed(4);
            }
        }
    }
}
