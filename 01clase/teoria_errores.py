import math

valor_real = 100
valores_obs = [92, 95, 97, 101, 99, 105, 110, 85, 120, 88, 93, 98, 102, 107, 115, 90, 96, 100, 104, 112]

error_abs=[]
error_relativo=[]
error_rel_porc=[]
print("Valor\tError Abs\tError Rel\tError Rel %")
for i in range(len(valores_obs)):
    error_abs.append(abs(valor_real - valores_obs[i]))
    error_relativo.append(round(error_abs[i]/abs(valor_real),4))
    error_rel_porc.append(round(error_relativo[i]*100,3))
    
for i in range(len(valores_obs)):
    print(f"{valores_obs[i]}\t\t{error_abs[i]}\t\t{error_relativo[i]}\t\t{error_rel_porc[i]}%")
#print(valores_obs)
#print(error_abs)
#print(error_relativo)
#print(error_rel_porc)