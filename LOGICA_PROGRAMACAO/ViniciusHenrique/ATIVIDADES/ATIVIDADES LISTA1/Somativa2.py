# # Exercício 1 - Registro de operador

# import tkinter as tk
# from tkinter import messagebox

# def registrar():
#     nome = entrada_nome.get()
#     turno = entrada_turno.get()

#     messagebox.showinfo("Registro",f"Operador {nome} registrado no Turno {turno}. Boa jornada!")
# janela = tk.Tk()
# janela.title("Registro de Operador")
# janela.geometry("400x250")
# janela.configure(bg="#dbeafe")

# tk.Label(janela,text="Registro de Operador",font=("Arial",16,"bold"),bg="#dbeafe").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Nome:",bg="#dbeafe").grid(row=1,column=0,padx=10,pady=10)
# entrada_nome = tk.Entry(janela)
# entrada_nome.grid(row=1,column=1,padx=10,pady=10)
# tk.Label(janela,text="Turno (A, B ou C):",bg="#dbeafe").grid(row=2,column=0,padx=10,pady=10)

# entrada_turno = tk.Entry(janela)
# entrada_turno.grid(row=2,column=1,padx=10,pady=10)
# tk.Button(janela,text="Registrar",bg="#2563eb",fg="white",command=registrar).grid(row=3,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 2 - Cálculo de produção

# import tkinter as tk
# from tkinter import messagebox

# def calcular_producao():
#     pecas = int(entrada_pecas.get())
#     total = pecas * 8
#     messagebox.showinfo("Resultado",f"Em 8 horas serão produzidas {total} peças.")
# janela = tk.Tk()
# janela.title("Cálculo de Produção")
# janela.geometry("400x250")
# janela.configure(bg="#dcfce7")

# tk.Label(janela,text="Cálculo de Produção",font=("Arial",16,"bold"),bg="#dcfce7").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Peças por hora:",bg="#dcfce7").grid(row=1,column=0,padx=10,pady=10)
# entrada_pecas = tk.Entry(janela)
# entrada_pecas.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Calcular",bg="#16a34a",fg="white",command=calcular_producao).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 3 - Conversor de unidade

# import tkinter as tk
# from tkinter import messagebox

# def converter():
#     bar = float(entrada_bar.get())
#     psi = bar * 14.5

#     messagebox.showinfo("Resultado",f"Pressão em PSI: {psi:.2f}")
# janela = tk.Tk()
# janela.title("Conversor de Unidade")
# janela.geometry("400x250")
# janela.configure(bg="#fef3c7")
# tk.Label(janela,text="Conversor Bar PSI",font=("Arial",16,"bold"),bg="#fef3c7").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Pressão em Bar:",bg="#fef3c7").grid(row=1,column=0,padx=10,pady=10)

# entrada_bar = tk.Entry(janela)
# entrada_bar.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Converter",bg="#f59e0b",fg="white",command=converter).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 4 - Média de qualidade

# import tkinter as tk
# from tkinter import messagebox

# def calcular_media():
#     nota1 = float(entrada_nota1.get())
#     nota2 = float(entrada_nota2.get())
#     nota3 = float(entrada_nota3.get())

#     media = (nota1 + nota2 + nota3) / 3

#     messagebox.showinfo("Resultado",f"Média das inspeções: {media:.2f}")
# janela = tk.Tk()
# janela.title("Média de Qualidade")
# janela.geometry("400x300")
# janela.configure(bg="#e0f2fe")

# tk.Label(janela,text="Média de Qualidade",font=("Arial",16,"bold"),bg="#e0f2fe").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Nota 1:",bg="#e0f2fe").grid(row=1,column=0,padx=10,pady=10)
# entrada_nota1 = tk.Entry(janela)
# entrada_nota1.grid(row=1,column=1,padx=10,pady=10)

# tk.Label(janela,text="Nota 2:",bg="#e0f2fe").grid(row=2,column=0,padx=10,pady=10)
# entrada_nota2 = tk.Entry(janela)
# entrada_nota2.grid(row=2,column=1,padx=10,pady=10)

# tk.Label(janela,text="Nota 3:",bg="#e0f2fe").grid(row=3,column=0,padx=10,pady=10)
# entrada_nota3 = tk.Entry(janela)
# entrada_nota3.grid(row=3,column=1,padx=10,pady=10)
# tk.Button(janela,text="Calcular Média",bg="#0284c7",fg="white",command=calcular_media).grid(row=4,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 5 - Termostato inteligente

# import tkinter as tk
# from tkinter import messagebox

# def verificar_temperatura():
#     temperatura = float(entrada_temperatura.get())

#     if temperatura < 40:
#         resultado = "Baixa carga"
#     elif temperatura <= 70:
#         resultado = "Normal"
#     else:
#         resultado = "ALERTA: Resfriamento Ativado!"

#     messagebox.showinfo("Resultado",resultado)
# janela = tk.Tk()
# janela.title("Termostato Inteligente")
# janela.geometry("400x250")
# janela.configure(bg="#fee2e2")

# tk.Label(janela,text="Termostato Inteligente",font=("Arial",16,"bold"),bg="#fee2e2").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Temperatura (°C):",bg="#fee2e2").grid(row=1,column=0,padx=10,pady=10)
# entrada_temperatura = tk.Entry(janela)
# entrada_temperatura.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Verificar",bg="#dc2626",fg="white",command=verificar_temperatura).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 6 - Classificador de lotes

# import tkinter as tk
# from tkinter import messagebox

# def classificar():
#     codigo = entrada_codigo.get()

#     if codigo[0] == "A":
#         resultado = "Alimentos"
#     elif codigo[0] == "E":
#         resultado = "Eletrônicos"
#     else:
#         resultado = "Desconhecido"

#     messagebox.showinfo("Resultado",resultado)
# janela = tk.Tk()
# janela.title("Classificador de Lotes")
# janela.geometry("400x250")
# janela.configure(bg="#f3e8ff")

# tk.Label(janela,text="Classificador de Lotes",font=("Arial",16,"bold"),bg="#f3e8ff").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Código do Produto:",bg="#f3e8ff").grid(row=1,column=0,padx=10,pady=10)
# entrada_codigo = tk.Entry(janela)
# entrada_codigo.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Classificar",bg="#7c3aed",fg="white",command=classificar).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 7 - Segurança de operação

# import tkinter as tk
# from tkinter import messagebox

# def verificar():
#     sensor = entrada_sensor.get()
#     emergencia = entrada_emergencia.get()

#     if sensor == "fechada" and emergencia == "desligado":
#         resultado = "Máquina pode iniciar"
#     else:
#         resultado = "Máquina não pode iniciar"

#     messagebox.showinfo("Resultado",resultado)
# janela = tk.Tk()
# janela.title("Segurança de Operação")
# janela.geometry("400x300")
# janela.configure(bg="#d1fae5")

# tk.Label(janela,text="Segurança de Operação",font=("Arial",16,"bold"),bg="#d1fae5").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Sensor da Porta:",bg="#d1fae5").grid(row=1,column=0,padx=10,pady=10)
# entrada_sensor = tk.Entry(janela)
# entrada_sensor.grid(row=1,column=1,padx=10,pady=10)

# tk.Label(janela,text="Botão Emergência:",bg="#d1f5fa").grid(row=2,column=0,padx=10,pady=10)
# entrada_emergencia = tk.Entry(janela)
# entrada_emergencia.grid(row=2,column=1,padx=10,pady=10)
# tk.Button(janela,text="Verificar",bg="#059669",fg="white",command=verificar).grid(row=3,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 8 - Cálculo de descarte

# import tkinter as tk
# from tkinter import messagebox

# def calcular():
#     total = int(entrada_total.get())
#     defeituosas = int(entrada_defeituosas.get())

#     percentual = (defeituosas / total) * 100

#     if percentual > 5:
#         resultado = "Revisar Processo"
#     else:
#         resultado = "Processo Otimizado"

#     messagebox.showinfo("Resultado",resultado) 
# janela = tk.Tk()
# janela.title("Cálculo de Descarte")
# janela.geometry("400x300")
# janela.configure(bg="#fef9c3")

# tk.Label(janela,text="Cálculo de Descarte",font=("Arial",16,"bold"),bg="#fef9c3").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Total Produzido:",bg="#fef9c3").grid(row=1,column=0,padx=10,pady=10)
# entrada_total = tk.Entry(janela)
# entrada_total.grid(row=1,column=1,padx=10,pady=10)

# tk.Label(janela,text="Defeituosas:",bg="#fef9c3").grid(row=2,column=0,padx=10,pady=10)
# entrada_defeituosas = tk.Entry(janela)
# entrada_defeituosas.grid(row=2,column=1,padx=10,pady=10)
# tk.Button(janela,text="Calcular",bg="#ca8a04",fg="white",command=calcular).grid(row=3,column=0,columnspan=2,pady=20)

# Exercício 9 - Validação de medida

# import tkinter as tk
# from tkinter import messagebox

# def validar():
#     medida = float(entrada_medida.get())
#     if medida < 9.8:
#         resultado = "Abaixo da tolerância"
#     elif medida > 10.2:
#         resultado = "Acima da tolerância"
#     else:
#         resultado = "Dentro da tolerância"

#     messagebox.showinfo("Resultado",resultado)
# janela = tk.Tk()
# janela.title("Validação de Medida")
# janela.geometry("400x250")
# janela.configure(bg="#dbeafe")

# tk.Label(janela,text="Validação de Medida",font=("Arial",16,"bold"),bg="#dbeafe").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Medida da Peça:",bg="#dbeafe").grid(row=1,column=0,padx=10,pady=10)
# entrada_medida = tk.Entry(janela)
# entrada_medida.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Validar",bg="#2563eb",fg="white",command=validar).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 10 - Contagem Regressiva de Setup

# import tkinter as tk
# from tkinter import messagebox

# def iniciar():
#     texto = ""

#     for i in range(10,0,-1):
#         texto = texto + f"{i} "

#     messagebox.showinfo("Resultado",f"{texto}Prensa Ativada!")
# janela = tk.Tk()
# janela.title("Contagem Regressiva")
# janela.geometry("400x250")
# janela.configure(bg="#fee2e2")

# tk.Label(janela,text="Contagem Regressiva",font=("Arial",16,"bold"),bg="#fee2e2").grid(row=0,column=0,pady=20)
# tk.Button(janela,text="Iniciar",bg="#dc2626",fg="white",command=iniciar).grid(row=1,column=0,pady=20)

# janela.mainloop()

# Exercício 11 - Soma de produção

# import tkinter as tk
# from tkinter import messagebox

# total = 0

# def somar():
#     global total

#     peso = float(entrada_peso.get())
#     if peso == 0:
#         messagebox.showinfo("Resultado",f"Peso total acumulado: {total}")
#     else:
#         total = total + peso
#         messagebox.showinfo("Resultado",f"Total acumulado: {total}")
# janela = tk.Tk()
# janela.title("Soma de produção")
# janela.geometry("400x250")
# janela.configure(bg="#dcfce7")

# tk.Label(janela,text="Soma de produção",font=("Arial",16,"bold"),bg="#dcfce7").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Peso da Caixa:",bg="#dcfce7").grid(row=1,column=0,padx=10,pady=10)
# entrada_peso = tk.Entry(janela)
# entrada_peso.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Adicionar peso",bg="#16a34a",fg="white",command=somar).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 12 - Múltiplas Leituras

# import tkinter as tk
# from tkinter import messagebox

# def verificar():
#     t1 = float(entrada1.get())
#     t2 = float(entrada2.get())
#     t3 = float(entrada3.get())
#     t4 = float(entrada4.get())
#     t5 = float(entrada5.get())

#     maior = t1
#     if t2 > maior:
#         maior = t2

#     if t3 > maior:
#         maior = t3
#     if t4 > maior:
#         maior = t4
#     if t5 > maior:
#         maior = t5

#     messagebox.showinfo("Resultado",f"Maior temperatura: {maior}")


# janela = tk.Tk()
# janela.title("Múltiplas leituras")
# janela.geometry("400x350")
# janela.configure(bg="#fedbfc")

# tk.Label(janela,text="Múltiplas leituras",font=("Arial",16,"bold"),bg="#fedbfc").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Sensor 1:",bg="#fedbfc").grid(row=1,column=0,padx=10,pady=5)
# entrada1 = tk.Entry(janela)
# entrada1.grid(row=1,column=1)

# tk.Label(janela,text="Sensor 2:",bg="#fedbfc").grid(row=2,column=0,padx=10,pady=5)
# entrada2 = tk.Entry(janela)
# entrada2.grid(row=2,column=1)

# tk.Label(janela,text="Sensor 3:",bg="#fedbfc").grid(row=3,column=0,padx=10,pady=5)
# entrada3 = tk.Entry(janela)
# entrada3.grid(row=3,column=1)

# tk.Label(janela,text="Sensor 4:",bg="#fedbfc").grid(row=4,column=0,padx=10,pady=5)
# entrada4 = tk.Entry(janela)
# entrada4.grid(row=4,column=1)

# tk.Label(janela,text="Sensor 5:",bg="#dbeafe").grid(row=5,column=0,padx=10,pady=5)
# entrada5 = tk.Entry(janela)
# entrada5.grid(row=5,column=1)
# tk.Button(janela,text="Verificar",bg="#2563eb",fg="white",command=verificar).grid(row=6,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 13 - Painel de Login

# import tkinter as tk
# from tkinter import messagebox

# tentativas = 3

# def verificar():
#     global tentativas
#     senha = entrada_senha.get()
#     if senha == "admin123":
#         messagebox.showinfo("Resultado","Acesso permitido")
#     else:
#         tentativas = tentativas - 1
#         if tentativas > 0:
#             messagebox.showinfo("Resultado",f"Acesso Negado. Restam {tentativas} tentativas.")
#         else:
#             messagebox.showinfo("Resultado","Painel bloqueado")
# janela = tk.Tk()
# janela.title("Painel de Login")
# janela.geometry("400x250")
# janela.configure(bg="#f3e8ff")

# tk.Label(janela,text="Painel de login",font=("Arial",16,"bold"),bg="#f3e8ff").grid(row=0,column=0,columnspan=2,pady=20)
# tk.Label(janela,text="Senha:",bg="#f3e8ff").grid(row=1,column=0,padx=10,pady=10)
# entrada_senha = tk.Entry(janela,show="*")
# entrada_senha.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Entrar",bg="#7c3aed",fg="white",command=verificar).grid(row=2,column=0,columnspan=2,pady=20)

# janela.mainloop()

# Exercício 14 - Simulador de Estoque

# import tkinter as tk
# from tkinter import messagebox

# estoque = 100

# def adicionar():
#     global estoque

#     quantidade = int(entrada.get())
#     estoque = estoque + quantidade
#     messagebox.showinfo("Estoque",f"Estoque atual: {estoque}")
# def remover():

#     global estoque
#     quantidade = int(entrada.get())
#     estoque = estoque - quantidade
#     if estoque < 10:
#         messagebox.showinfo("Aviso","Estoque crítico!")
#     messagebox.showinfo("Estoque",f"Estoque atual: {estoque}")
# janela = tk.Tk()
# janela.title("Simulador de estoque")
# janela.geometry("400x300")
# janela.configure(bg="#fef9c3")

# tk.Label(janela,text="Simulador de estoque",font=("Arial",16,"bold"),bg="#fef9c3").grid(row=0,column=0,pady=20)
# tk.Label(janela,text="Quantidade:",bg="#fef9c3").grid(row=1,column=0,padx=10,pady=10)
# entrada = tk.Entry(janela)
# entrada.grid(row=1,column=1,padx=10,pady=10)
# tk.Button(janela,text="Adicionar",bg="#16a34a",fg="white",command=adicionar).grid(row=2,column=0,pady=20)
# tk.Button(janela,text="Remover",bg="#dc2626",fg="white",command=remover).grid(row=2,column=1,pady=20)

# janela.mainloop()

# Exercício 15 - Relatório de turno completo

