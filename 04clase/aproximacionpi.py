import math
def aproxpi1(n:int):
    sum = 0
    print("iter\tvalor")
    for i in range(1,n+1,1):
        sum = sum + (1/i**2)
        res = math.sqrt(6*sum)
    return res

print(aproxpi1(80))
