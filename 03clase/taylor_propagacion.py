import math

def calculo_valor(n:int,angulo:int):
    residuo = n%4
    if residuo==0:
        return math.sin(angulo)
    elif residuo == 1:
        return math.cos(angulo)
    elif residuo ==2:
        return -math.sin(angulo)
    else:
        return -math.cos(angulo)
def taylor_angulo(iteracion:int):
    print(f"#\tfuncion\t\ttermino\t\tderi")
    sum = 0
    for i in range(0,iteracion):
        k=i+1
        valor_derivada = calculo_valor(k,0)
        factorial_k = math.factorial(k)
        termino = (valor_derivada*(1-0)**k)/(factorial_k)
        print(f"{i}\t{sum:.6f}\t{termino:.6f}\t{valor_derivada:.6f}")
        sum = sum + termino

def propagacion(h, x_deg, error_x, error_h):
    cot_x = 1/math.tan(x_deg)
    D = h * cot_x
    der_h = abs(cot_x)
    der_x = abs(-h / (math.sin(x_deg)**2))
    error_d = math.sqrt((der_h *error_h)**2 + (der_x*error_x)**2)
    return D,error_d
h_val = 15
x_val = 0.3491
e_h=0.02
e_x=0.0175
D, error = propagacion(h_val,x_val,e_h, e_x)
print(f"y = {D:.6f} +- {error:.6f}")
valor_inicial = math.sin(0)
valor_final = round(math.sin(1),6)
print(f"Conocido: {valor_inicial}")
print(f"Objeivo: {valor_final}")
taylor_angulo(11)