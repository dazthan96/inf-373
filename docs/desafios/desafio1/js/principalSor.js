
function llenarSor() {
    var datosIdeal = ObtenerA("ideal");
    var resIdeal = calcularIteracionesSor(datosIdeal.matrizA, datosIdeal.vectorB);
    repartirEnTablaSor(resIdeal.matriz, "ideal");
    

    var datosEstres = ObtenerA("estres");
    var resEstres = calcularIteracionesSor(datosEstres.matrizA, datosEstres.vectorB);
    repartirEnTablaSor(resEstres.matriz, "estres");
    

    var datosMal = ObtenerA("mal");
    var resMal = calcularIteracionesSor(datosMal.matrizA, datosMal.vectorB);
    repartirEnTablaSor(resMal.matriz, "mal");
    

    
}

function repartirEnTablaSor(matrizResultados, sufijo) {
    
    for (var i = 0; i <= 10; i++) {
        for (var j = 1; j <= 3; j++) {
            var idBuscado = "sor_" + i + j + "_" + sufijo;
            var celda = document.getElementById(idBuscado);
            
            if (celda) {
                celda.innerText = Number(matrizResultados[i][j-1]).toFixed(4);
            }
        }
    }
}
