#calculatrice python 
print("sélectionner l'option de calcul :\nC : calcul standard\nE : équation\nS : suite\nD : dérivée\nDIV : diviseur, PGCD, nobre premier")
type = input("entrez le type de calcul que vous voulez : ")
if type == "C":
	choix = input("calcul +/-/*///**/R/= : ")
	a = float(input("entrez un nombre : "))	
	b = float(input("entrez un nombre : "))
	if choix == "+":
		result = a + b
		print(result) 
	elif choix == "-":
		result = a - b
		print(result)
	elif choix == "*":
		result = a * b
		print(result)
	elif choix == "/":
		resultvirg = a / b 
		result = a // b
		reste = a % b 
		print(resultvirg, result, reste)
	else :
		result = a ** b 
		print(result)
	while True :
		choix = input("calcul +/-/*///**/R/= : ")
		if choix == "=":
			print(result)
			break
		else : 
			c = float(input("entrez un nombre : "))
			if choix == "+":
				result = result + c
				print(result)
			elif choix == "-":
				result = result - c 
				print(result)
			elif choix == "*":		
				result = result * c 
				print(result)
			elif choix == "/":
				result = result / c 
				print(result)
			elif choix == "**":
				result = result ** c 
				print(result)
elif type == "E" :
	print("choisissez le type :\n1 : premier degrès\n2 : second degrès")
	équation = input("type d'équation :")
	if équation == "1" :
		a = float(input("Entrez la valeur de a : "))
		b = float(input("Entrez la valeur de b : "))
		if a == 0 and b == 0 :
			print("il y a uen infinité de solutions")
		else : 
			x = -b / a 
			print("la solution est : ", x)
	elif équation == "2" : 
		a = float(input("Entrez la valeur de a : "))
		b = float(input("Entrez la valeur de b : "))
		c = float(input("Entrez la valeur de c : "))
		delta = b**2 - 4 * a * c 
		if delta > 0 :
			r1 = (-b - (delta**0.5)) / (2 * a)
			r2 = (-b + (delta**0.5)) / (2 * a)
			print(r1, r2)
		elif delta == 0 :
			r = -b / (2 * a)
			print(r)
		else : 
			print("l'équation n'a pas de solution réel")

elif type == "S":
	suite = []
	print("choisissez le type de suite :\n1 : suite arithmétique\n2 : suite géométrique") 
	suitetype = input("type de suite : ")
	if suitetype == "1":
		premierterme = float(input("Entrez le premier terme : "))
		raison = float(input("Entrez la raison : "))
		nombretermes = int(input("Entrez le nombres de termes : "))
		for i in range(nombretermes): 
			terme = premierterme + i * raison
			suite.append(terme)
		print(suite)
	elif suitetype == "2":
		premierterme = float(input("Entrez le premier terme : "))
		raison = float(input("Entrez la raison : "))
		nombretermes = int(input("Entrez le nombres de termes : "))
		for i in range(nombretermes):
			terme = premierterme * (raison ** i)
			suite.append(terme)
		print(suite)

else : 
	print("pas encore coder")