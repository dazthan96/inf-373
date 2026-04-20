function generarEscenarios() {
    // 1. Obtener los valores del Caso Ideal
    let matrizA = [];
    let vectorB = [];

    for (let i = 1; i <= 3; i++) {
        let fila = [];
        for (let j = 1; j <= 3; j++) {
            fila.push(parseFloat(document.getElementById(`a${i}${j}_ideal`).value));
        }
        matrizA.push(fila);
        vectorB.push(parseFloat(document.getElementById(`b${i}_ideal`).value));
    }

    // 2. Lógica para CASO ESTRÉS (Simular saturación de red: triplicar todo)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`a${i+1}${j+1}_estres`).value = (matrizA[i][j] * 3).toFixed(2);
        }
        document.getElementById(`b${i+1}_estres`).value = (vectorB[i] * 3).toFixed(2);
    }

    // 3. Lógica para CASO MAL CONDICIONADO (Servidores Espejo)
    // Forzamos que la Fila 2 sea casi igual a la Fila 1 para crear hiperplanos paralelos
    for (let j = 0; j < 3; j++) {
        // Fila 1 se copia igual
        document.getElementById(`a1${j+1}_mal`).value = matrizA[0][j];
        // Fila 2 es casi idéntica a la 1 (sumamos un epsilon de 0.0001)
        document.getElementById(`a2${j+1}_mal`).value = (matrizA[0][j] + 0.0001).toFixed(4);
        // Fila 3 se mantiene del ideal para dar un punto de apoyo
        document.getElementById(`a3${j+1}_mal`).value = matrizA[2][j];
    }
    document.getElementById(`b1_mal`).value = vectorB[0];
    document.getElementById(`b2_mal`).value = (vectorB[0] + 0.0001).toFixed(4);
    document.getElementById(`b3_mal`).value = vectorB[2];
}
