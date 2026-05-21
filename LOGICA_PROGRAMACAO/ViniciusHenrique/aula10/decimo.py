# TKINTER

#tk: Tk() # janela 
#lb: Label() # Rotulo
#bt: Button() #Botão
#et: Entry() #Caixa de texto

# import tkinter as tk
# from tkinter import messagebox 

# # 1. criar janela principal
# janela = tk.Tk()
# janela.title("Minha primeira Janela GUI")
# janela.geometry("750x750") #Largura x altura
# janela.configure(bg="#2d1bd1")
# # 2. Criar a função do botão (evento)
# def mostrar_mensagem():
#     messagebox.showinfo("Sucesso!",   "Você clicou no botão!")
# # 3. Criar componentes 
# lbl_titulo = tk.Label(janela, text="Bem vindo a nossa aula de Tkinter", font=("Arial", 14, "bold"))
# btn_clique = tk.Button(janela, text="Clique Aqui", font=("Arial", 11),bg="#2eaccc", fg="white", command=mostrar_mensagem)
# btn_close = tk.Button(janela, text="Fechar", font=("Arial", 14,"bold"), bg="#cc2e2e", command=janela.destroy)
# # 4. Posicionar os componentes
# lbl_titulo.pack(pady=20) # 'pady' adiciona um espaçamento vertical
# btn_clique.pack(pady=10)
# btn_close.pack(pady=5)
# # 5. Rodar o loop da interface
# janela.mainloop()
 

# import tkinter as tk
# from tkinter import messagebox 

# def saudar_usuario():
#     # get(). serve para buscar o texto que vamos digitar

#     nome = campo_nome.get()

#     if nome == "":
#         messagebox.showwarning("Aviso", "Por favor digite seu nome!")
#     else:
#         messagebox.showwarning("Saudações Alunos", f"Olá, {nome}! Seja bem-vindo ao mundo das interfaces graficas")

# # Configurações da janela 
# app = tk.Tk
# app.title("Exenplo 1")
# app.geometry("350x200")

# # Componentes 
# lbl_instrucao= tk.label(app, text="Digite seu nome abaixo:")
# lbl_instrucao.pack(pady=10)

# campo_nome = tk.Entry(app, font=("Arial", 12))
# campo_nome.pack(pady=5)

# btn_enviar = tk.Button(app, text="Enviar", command=saudar_usuario)
# btn_enviar.pack(pady=15)

# app.mainloop()

#Exercicio: Crie uma interface grafica que calcule a media de três notas digitadas pelo usuario. 
# A interface deve conter campos para o usuario inserir as notas e um botão para calcular a media. Ao clicar mo botão, a media deve ser exibida em uma mensagem 
# faça simples


from tkinter import *


def calcular_media():
    n1 = float(entrada1.get())
    n2 = float(entrada2.get())
    n3 = float(entrada3.get())

    media = (n1 + n2 + n3) / 3

    resultado.config(text=f"Média: {media:.2f}")

janela = Tk()
janela.title("Calculadora de Média")
janela.geometry("750x375")

Label(janela, text="Nota 1").pack()
entrada1 = Entry(janela)
entrada1.pack()

Label(janela, text="Nota 2").pack()
entrada2= Entry(janela)
entrada2.pack()

Label(janela, text="Nota 3").pack()
entrada3= Entry(janela)
entrada3.pack()

Button(janela, text="Calcular Média", command=calcular_media).pack(pady=10)

resultado = Label(janela, text="")
resultado.pack()

janela.mainloop()