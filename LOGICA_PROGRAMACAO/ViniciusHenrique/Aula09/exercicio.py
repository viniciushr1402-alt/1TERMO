# def cadastrar_funcionario():
#     nome = input("Digite o nome do funcionário: ")
#     setor = input("Digite o setor do funcionário: ")


#     print("RESPONDA AS PERGUNTAS ABAIXO COM SIM OU NÃO!")

#     nr10 = input("Possui treinamento NR-10? : ")
#     nr35 = input("Possui treinamento NR-35? : ")
#     brigada = input("Possui treinamento de Brigada? : ")

#     print("=== DADOS DO FUNCIONÁRIO ===")
#     print("Nome:", nome)
#     print("Setor:", setor)
#     print("NR-10:", nr10)
#     print("NR-35:", nr35)
#     print("Brigada:", brigada)

#     return setor
# print(cadastrar_funcionario())
#----------------------------------------------------------------------------------------------------------------------------------------------------#

# def verificar_setor():

#      print("=== EPIs OBRIGATÓRIOS ===")

#      setor = input("Digite o Setor")

#      if setor == "elétrica":
#         print("Luvas de alta tensão")
#         print("Botas dielétricas")

#      elif setor() == "trabalho em altura":
#             print("Cinturão de segurança")
#             print("Talabarte")

#      else:
#            print("Setor sem EPIs cadastrados.")
# print(verificar_setor())
#======================================================================================================================================================
# def verificar_reciclagem(ano_treinamento):
#     ano_atual = 2026

#     if ano_atual - ano_treinamento > 2:
#         return "Treinamento Vencido! Encaminhar para reciclagem."
#     else:
#         return "Treinamento válido"


# print(verificar_reciclagem(2023))
#================================================================================================

def resumo():
    total = int(input("Quantidade de funcionários: "))
    em_dia = 0

    for i in range(total):
        treino = input("Treinamento em dia? (S/N): ").upper()

        if treino == "S":
            em_dia += 1

    print("\nResumo")
    print("Total de funcionários:", total)
    print("Treinamentos em dia:", em_dia)

resumo()