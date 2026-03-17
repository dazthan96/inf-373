import math

lectura_sensor = 0.2

def algoritmo_sensor_rapido(x):
    t0 = 1              
    t1 = x              
    t2 = (x**2) / 2     
    t3 = (x**3) / 6     
    return t0, t1, t2, t3

p0, p1, p2, p3 = algoritmo_sensor_rapido(lectura_sensor)
temp_aprox = p0 + p1 + p2 + p3

print(f"--- Procesamiento del Sensor (Lectura: {lectura_sensor}) ---")
print(f"Paso 1 (Base):      {p0:.6f}")
print(f"Paso 2 (Lineal):    {p1:.6f}")
print(f"Paso 3 (Cuadrático): {p2:.6f}")
print(f"Paso 4 (Ajuste):    {p3:.6f}")
print("-" * 40)
print(f"Temperatura calculada: {temp_aprox:.6f}")
print(f"Temperatura real:      {math.exp(lectura_sensor):.6f}")

error_x = 0.01

derivada_aprox = p0 + p1 + p2 
error_temperatura = abs(derivada_aprox) * error_x
print("---------------------------------------")
print(f"Margen de error en grados: ±{error_temperatura:.6f}")
print(f"Lectura final sensor: {temp_aprox:.6f} ± {error_temperatura:.6f}")
