
function llenarSeidel() {
    var datosIdeal = ObtenerA("ideal");
    var resIdeal = calcularIteracionesSeidel(datosIdeal.matrizA, datosIdeal.vectorB);
    repartirEnTablaS(resIdeal.matriz, "ideal");
    var campo_error_ideal = document.getElementById("e_rel_sei_ideal");
    var campo_error_ideal_por = document.getElementById("e_rel_sei_por_ideal")
    campo_error_ideal.innerText = resIdeal.errorFinal;
    campo_error_ideal_por.innerText = resIdeal.errorFinal * 100;

    var datosEstres = ObtenerA("estres");
    var resEstres = calcularIteracionesSeidel(datosEstres.matrizA, datosEstres.vectorB);
    repartirEnTablaS(resEstres.matriz, "estres");
    var campo_error_estres = document.getElementById("e_rel_sei_estres");
    var campo_error_estres_por = document.getElementById("e_rel_sei_por_estres")
    campo_error_estres.innerText = resEstres.errorFinal;
    campo_error_estres_por.innerText = resEstres.errorFinal *100;

    var datosMal = ObtenerA("mal");
    var resMal = calcularIteracionesSeidel(datosMal.matrizA, datosMal.vectorB);
    repartirEnTablaS(resMal.matriz, "mal");
    var campo_error_mal = document.getElementById("e_rel_sei_mal");
    var campo_error_mal_por = document.getElementById("e_rel_sei_por_mal")
    campo_error_mal.innerText = resMal.errorFinal;
    campo_error_mal_por.innerText = resMal.errorFinal *100;

    
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
