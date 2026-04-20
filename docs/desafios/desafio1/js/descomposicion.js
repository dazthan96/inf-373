class CalculadoraLU {
    constructor(matrizA, vectorB) {
        this.A = matrizA;
        this.b = vectorB;
        this.n = matrizA.length;

        // Inicializamos las estructuras vacías
        this.L = this.crearMatrizVacia(this.n);
        this.U = this.crearMatrizVacia(this.n);
    }

    // --- FUNCIÓN 1: OBTENER MATRICES L Y U ---
    factorizarLU() {
        for (var i = 0; i < this.n; i++) {
            this.L[i][i] = 1; // Diagonal de L siempre es 1

            // Calcular fila de U
            for (var k = i; k < this.n; k++) {
                var suma = 0;
                for (var j = 0; j < i; j++) {
                    suma += (this.L[i][j] * this.U[j][k]);
                }
                this.U[i][k] = this.A[i][k] - suma;
            }

            // Calcular columna de L
            for (var k = i + 1; k < this.n; k++) {
                var suma = 0;
                for (var j = 0; j < i; j++) {
                    suma += (this.L[k][j] * this.U[j][i]);
                }
                this.L[k][i] = (this.A[k][i] - suma) / this.U[i][i];
            }
        }
    }

    // --- FUNCIÓN 2: RESOLVER Ld = b (Sustitución hacia adelante) ---
    obtenerVectorD(L, b) {
        var n = b.length;
        var d = new Array(n);
        for (var i = 0; i < n; i++) {
            var suma = 0;
            for (var j = 0; j < i; j++) {
                suma += L[i][j] * d[j];
            }
            d[i] = b[i] - suma;
        }
        return d;
    }

    // --- FUNCIÓN 3: RESOLVER Ux = d (Sustitución hacia atrás) ---
    obtenerVectorX(U, d) {
        var n = d.length;
        var x = new Array(n);
        for (var i = n - 1; i >= 0; i--) {
            var suma = 0;
            for (var j = i + 1; j < n; j++) {
                suma += U[i][j] * x[j];
            }
            x[i] = (d[i] - suma) / U[i][i];
        }
        return x;
    }

    // --- FUNCIÓN 4: OBTENER INVERSA (Usa las sustituciones anteriores) ---
    obtenerInversa(M, tipo) {
        var n = M.length;
        var inversa = this.crearMatrizVacia(n);
        for (var j = 0; j < n; j++) {
            // Creamos un vector columna de la identidad (e_j)
            var e = new Array(n);
            for (var k = 0; k < n; k++) {
                e[k] = (k === j) ? 1 : 0;
            }

            // Resolvemos el sistema para esa columna
            var columnaResultante;
            if (tipo === "L") {
                // Para L, usamos sustitución hacia adelante (L * y = e)
                columnaResultante = this.obtenerVectorD(M, e);
            } else {
                // Para U, usamos sustitución hacia atrás (U * x = e)
                columnaResultante = this.obtenerVectorX(M, e);
            }
            
            for (var i = 0; i < n; i++) {
                inversa[i][j] = columnaResultante[i];
            }
        }
        return inversa;
    }

    // --- FUNCIÓN 5: MULTIPLICAR MATRIZ POR VECTOR (Verificación) ---
    multiplicarMatrizVector(M, v) {
        var n = M.length;
        var resultado = new Array(n);
        for (var i = 0; i < n; i++) {
            var suma = 0;
            for (var j = 0; j < n; j++) {
                suma += M[i][j] * v[j];
            }
            resultado[i] = suma;
        }
        return resultado;
    }

    // Auxiliar para inicializar
    crearMatrizVacia(n) {
        var mat = new Array(n);
        for (var i = 0; i < n; i++) {
            mat[i] = new Array(n);
            for (var j = 0; j < n; j++) mat[i][j] = 0;
        }
        return mat;
    }
}
