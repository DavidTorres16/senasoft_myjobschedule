


#Día actual
now = datetime.now()



print("El día actual es {}".format(now.day))
print("El mes actual es {}".format(now.month))
print("El año actual es {}".format(now.year))
year=now.year
mes=now.month

print(eomday(year,mes))

print(eomday(year,mes)-now.day)

