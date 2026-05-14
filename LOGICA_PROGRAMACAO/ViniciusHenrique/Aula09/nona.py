# def nome():
#     nome = input("Digite seu nome: ")
#     return nome 
# print(F"Olá, {nome()}!")

# def valores():
#     print("Digite tres valores:")
#     a = int(input("Digite o primeiro valor:"))
#     b = int(input("Digite o segundo valor:"))
#     c = int(input("Digite o terceiro valor:"))
#     return a, b, c
# print(F"O maior valor é: {max(valores())}")


# nome()
# valores()
# def é usado para definir/criar uma função em Python.
# Funções servem para organizar códigos que podem ser reutilizados.

# return é usado para retornar um valor dentro de uma função.
# Ele envia o resultado da função para ser usado em outra parte do código.
#-----------------------------------------------------------------------------------------------------------------------------------------------------
# def: indica o inicio da definição da função.
# Nome: Identifica a função para voce chama-la depois.
# Parametros: Dados que a função recebe 
# Return: Envia o resultado de volta para quem chamou a função


def calcular_dobro(numero):
    return numero * 2
# Como usar: resultado = calcular_dobro(5)
print(calcular_dobro(5))

# def verificar_reciclagem(ano_treinamento):
#    ano_atual = 2026

#    if ano_atual - ano_treinamento > 2:
#                                 return "Treinamento Vencido! Encaminhar para reciclagem."
#    else:
#                     return "Treinamento valido"