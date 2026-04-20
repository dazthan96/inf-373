
function llenarSor() {
    var datosIdeal = ObtenerA("ideal");
    var resIdeal = calcularIteracionesSor(datosIdeal.matrizA, datosIdeal.vectorB);
    repartirEnTablaSor(resIdeal.matriz, "ideal");
    var campo_error_ideal = document.getElementById("e_rel_sor_ideal");
    var campo_error_ideal_por = document.getElementById("e_rel_sor_por_ideal")
    campo_error_ideal.innerText = resIdeal.errorFinal;
    campo_error_ideal_por.innerText = resIdeal.errorFinal * 100;

    var datosEstres = ObtenerA("estres");
    var resEstres = calcularIteracionesSor(datosEstres.matrizA, datosEstres.vectorB);
    repartirEnTablaSor(resEstres.matriz, "estres");
    var campo_error_estres = document.getElementById("e_rel_sor_estres");
    var campo_error_estres_por = document.getElementById("e_rel_sor_por_estres")
    campo_error_estres.innerText = resEstres.errorFinal;
    campo_error_estres_por.innerText = resEstres.errorFinal *100;

    var datosMal = ObtenerA("mal");
    var resMal = calcularIteracionesSor(datosMal.matrizA, datosMal.vectorB);
    repartirEnTablaSor(resMal.matriz, "mal");
    var campo_error_mal = document.getElementById("e_rel_sor_mal");
    var campo_error_mal_por = document.getElementById("e_rel_sor_por_mal")
    campo_error_mal.innerText = resMal.errorFinal;
    campo_error_mal_por.innerText = resMal.errorFinal *100;

    
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
