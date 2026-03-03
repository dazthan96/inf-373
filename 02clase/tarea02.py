f=750
l=9
e=7.5*(10**9)
i=0.0005
delta_f=30
delta_l=0.03
delta_e=5*(10**7)
delta_i=0.000005
valor_inicial=(f*(l**4))/(8*e*i)
print(f"valor inicial: {valor_inicial}")
parcial_f=(l**4)/(8*e*i)
parcial_l=(f*(l**3))/(2*e*i)
parcial_e=(f*(l**4))/(8*(e**2)*i)
parcial_i=(f*(l**4))/(8*e*(i**2))
print(f"valor de derivada F: {parcial_f}")
print(f"valor de derivada L: {parcial_l}")
print(f"valor de derivada E: {parcial_e}")
print(f"valor de derivada I: {parcial_i}")
print("Obteniendo el valor del error")
error=delta_f*parcial_f+delta_l*parcial_l+delta_e*parcial_e+delta_i*parcial_i
print(f"El error es: {round(error, 8)}")
print(f"Y = {valor_inicial} +- {round(error,8)}")

#el titulo la actividad serie de taylor y propagacion del error
