function ObtenerA(caso){
    let matrizA = [];
    let vectorB = [];
    for (let i = 1; i<=3; i++){
        let fila = [];
        for (let j = 1; j <=3; j++) {
            let idInput = "a"+i+j+"_"+caso;
            fila.push(parseFloat(document.getElementById(idInput).value));
            //fila.push(parseFloat(document.getElementById(`a${i}${j}_${caso}`).value));
        }
        let idB= "b"+i+"_"+caso;
        matrizA.push(fila);
        vectorB.push(parseFloat(document.getElementById(idB).value));
        //vectorB.push(parseFloat(document.getElementById(`b${i}_${caso}`).value));
    }
    return {
        matrizA:matrizA,
        vectorB:vectorB
    }
}