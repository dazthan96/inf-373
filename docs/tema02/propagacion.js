var f = 750;
var l = 9;
var e = 7.5*(10**9);
var i = 0.0005;
var delta_f=30;
var delta_l=0.03;
var delta_e = 5*(10**7);
var delta_i = 0.000005;
function llenar_datos(){
    var y= (f*(l**4))/(8*e*i);
    parcial_f=(l**4)/(8*e*i);
    parcial_l=(f*(l**3))/(2*e*i);
    parcial_e=(f*(l**4))/(8*(e**2)*i);
    parcial_i=(f*(l**4))/(8*e*(i**2));
    error_f=delta_f*parcial_f;
    error_l=delta_l*parcial_l;
    error_e=delta_e*parcial_e;
    error_i=(delta_i*parcial_i);
    error = (error_f+error_l+error_e+error_i).toFixed(6);
    document.getElementById("res-funcion-1").innerHTML =y;
    document.getElementById("res-funcion-2").innerHTML =y;
    document.getElementById("delta-f").innerHTML = parcial_f;
    document.getElementById("delta-l").innerHTML = parcial_l;
    document.getElementById("delta-e").innerHTML = parcial_e;
    document.getElementById("delta-i").innerHTML = parcial_i;
    document.getElementById("multi-f").innerHTML=error_f;
    document.getElementById("multi-l").innerHTML=error_l;
    document.getElementById("multi-e").innerHTML=error_e.toFixed(6);
    document.getElementById("multi-i").innerHTML=error_i.toFixed(5);
    document.getElementById("error").innerHTML=error;
}
window.onload = llenar_datos;

