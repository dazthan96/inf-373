var punto_x = 0.3491
var punto_h= 15
var delta_x=0.0175
var delta_h = 0.02
function llenar_datos_2(){
    var cot_x= 1/Math.tan(punto_x);
    var res = punto_h*cot_x;
    var derivada_h = Math.abs(cot_x);
    var derivada_x = Math.abs(-punto_h/(Math.sin(punto_x)**2));
    var error_total = Math.sqrt((derivada_h*delta_h)**2 + (derivada_x*delta_x)**2);
    document.getElementById("error_y_2").innerHTML = error_total.toFixed(6);
    document.getElementById("der_parcial_h").innerHTML = derivada_h.toFixed(6)
    document.getElementById("der_parcial_x").innerHTML = derivada_x.toFixed(6)
    document.getElementById("res-funcion").innerHTML = res.toFixed(6);
    document.getElementById("res-funcion-3").innerHTML = res.toFixed(6);
    document.getElementById("error_2").innerHTML = error_total.toFixed(6);
    
}