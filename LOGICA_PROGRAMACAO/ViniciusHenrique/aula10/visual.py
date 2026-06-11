from tkinter import *

def cadastrar():
    nome = entrada_nome.get()
    setor = entrada_setor.get()
    nr10 = entrada_nr10.get()
    nr35 = entrada_nr35.get()
    brigada = entrada_brigada.get()
    ano = int(entrada_ano.get())

    texto = "DADOS DO FUNCIONÁRIO\n\n"
    texto += f"Nome: {nome}\n"
    texto += f"Setor: {setor}\n"
    texto += f"NR-10: {nr10}\n"
    texto += f"NR-35: {nr35}\n"
    texto += f"Brigada: {brigada}\n\n"
    texto += "EPIs OBRIGATÓRIOS\n"
    if setor.lower() == "elétrica":
        texto += "- Luvas de alta tensão\n"
        texto += "- Botas dielétricas\n"
    elif setor.lower() == "trabalho em altura":
        texto += "- Cinturão de segurança\n"
        texto += "- Talabarte\n"
    else:
        texto += "Setor sem EPIs cadastrados.\n" 
    texto += "\nRECICLAGEM\n"
    ano_atual = 2026
    if ano_atual - ano > 2:
        texto += "Treinamento vencido!"
    else:
        texto += "Treinamento válido!"

    resultado.config(text=texto)

janela = Tk()
janela.title("Cadastro de Funcionário")
janela.geometry("500x600")
janela.config(bg="#d9d9d9")

titulo = Label(
    janela,
    text="Cadastro de Funcionário",
    font=("Arial", 18, "bold"),
    bg="#d9d9d9"
)
titulo.pack(pady=10)

Label(janela, text="Nome", bg="#d9d9d9").pack()
entrada_nome = Entry(janela, width=35)
entrada_nome.pack(pady=5)

Label(janela, text="Setor", bg="#d9d9d9").pack()
entrada_setor = Entry(janela, width=35)
entrada_setor.pack(pady=5)

Label(janela, text="Possui NR-10?", bg="#d9d9d9").pack()
entrada_nr10 = Entry(janela, width=35)
entrada_nr10.pack(pady=5)

Label(janela, text="Possui NR-35?", bg="#d9d9d9").pack()
entrada_nr35 = Entry(janela, width=35)
entrada_nr35.pack(pady=5)

Label(janela, text="Possui Brigada?", bg="#d9d9d9").pack()
entrada_brigada = Entry(janela, width=35)
entrada_brigada.pack(pady=5)

Label(janela, text="Ano do treinamento", bg="#d9d9d9").pack()
entrada_ano = Entry(janela, width=35)0
entrada_ano.pack(pady=5)


Button(
    janela,
    text="Cadastrar",
    command=cadastrar,
    bg="#4CAF50",
    fg="white",
    font=("Arial", 11, "bold"),
    width=20
).pack(pady=15)

resultado = Label(
    janela,
    text="",
    justify=LEFT,
    bg="#d9d9d9",
    font=("Arial", 11)
)
resultado.pack(pady=10)

janela.mainloop()