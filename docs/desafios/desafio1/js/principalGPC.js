
function llenarGPC() {
    var datosIdeal = ObtenerA("ideal");
    var resIdeal = ejecutarPCG(datosIdeal.matrizA, datosIdeal.vectorB);
    repartirEnTablaGCP(resIdeal.matriz, "ideal");
    

    var datosEstres = ObtenerA("estres");
    var resEstres = ejecutarPCG(datosEstres.matrizA, datosEstres.vectorB);
    repartirEnTablaGCP(resEstres.matriz, "estres");
    

    var datosMal = ObtenerA("mal");
    var resMal = ejecutarPCG(datosMal.matrizA, datosMal.vectorB);
    repartirEnTablaGCP(resMal.matriz, "mal");
    
    
}

function repartirEnTablaGCP(matrizResultados, sufijo) {
    
    for (var i = 0; i <= 10; i++) {
        for (var j = 1; j <= 3; j++) {
            var idBuscado = "gpc_" + i + j + "_" + sufijo;
            var celda = document.getElementById(idBuscado);
            
            if (celda) {
                celda.innerText = Number(matrizResultados[i][j-1]).toFixed(4);
            }
        }
    }
}
