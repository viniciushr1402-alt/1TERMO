# Exercicio: crie uma aplicação que faça um calculo de idade de pessoas, deve perguntar o nome da pessoa e o ano de nascimento 
from tkinter import *
from tkinter import messagebox

def calcular_idade():
    nome = entrada_nome.get()
    ano_nascimento = int(entrada_ano.get())

    idade = 2026 - ano_nascimento

    messagebox.showinfo("Resultado",f"Olá, {nome}! Sua idade é {idade} anos.")

janela = Tk()
janela.title("Cálculo de Idade")
janela.geometry("300x150")

Label(janela, text="Nome:").grid(row=0, column=0, padx=5, pady=5)
entrada_nome = Entry(janela)
entrada_nome.grid(row=0, column=1)

Label(janela, text="Ano de nascimento:").grid(row=1, column=0, padx=5, pady=5)
entrada_ano = Entry(janela)
entrada_ano.grid(row=1, column=1)

Button(
    janela,
    text="Calcular Idade",
    command=calcular_idade
).grid(row=2, column=0, columnspan=2, pady=10)

janela.mainloop()