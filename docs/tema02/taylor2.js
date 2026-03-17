var sumaAcumulada2 = 0 
function calcularFactorial2(numero) {
    if (numero === 0) return 1;
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}
function calculo_valor(n, angulo){
    residuo = n%4
    if (residuo == 0){
        return Math.sin(angulo);
    }else if(residuo == 1){
        return Math.cos(angulo);
    }else if(residuo == 2){
        return -Math.sin(angulo);
    }else{
        return -Math.cos(angulo);
    }
}
function llenar_datos_taylor(){
    var tabla = document.getElementById("tabla-taylor-ii");
    for (var i =0; i<11; i++){
        k = i+1
        valor_derivada = calculo_valor(k,0);
        factorial_k = calcularFactorial2(k);
        termino = (valor_derivada*(1-0)**k)/(factorial_k);
        var fila = "<tr>";
        fila = fila +"<td>"+i+"</td>";
        fila = fila + "<td>"+sumaAcumulada2.toFixed(6)+"</td>";
        fila = fila +"<td>"+termino.toFixed(6)+"</td>";
        fila = fila + "<td>"+valor_derivada.toFixed(6)+"</td>";
        fila = fila + "</tr>";
        sumaAcumulada2 = sumaAcumulada2+termino;
        tabla.innerHTML = tabla.innerHTML+fila;
        
    }
}
