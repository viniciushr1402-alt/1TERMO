# Aula: Fundamentos de Lógica e Controle de Versão com GitHub

## 🎯 Objetivos da Aprendizagem
* Compreender o fluxo de execução de algoritmos estruturados.
* Resolver problemas utilizando lógica condicional e laços de repetição.
* Versionar o código-fonte local utilizando Git e hospedá-lo no GitHub.

---

## 🧠 1. Fundamentos de Lógica de Programação

### 📦 Variáveis e Operadores
Variáveis reservam espaço na memória para armazenar dados. Operadores realizam as manipulações matemáticas e lógicas.
* **Operadores Relacionais:** `>`, `<`, `>=`, `<=`, `==` (Igualdade), `!=` (Diferença).
* **Operadores Lógicos:** `E` (AND), `OU` (OR), `NÃO` (NOT).

### ⚡ Estruturas Condicionais (Se / Senão)
Direcionam o fluxo do software com base no resultado de uma expressão booleana.
```text
SE (idade >= 16 E possui_titulo == Verdadeiro) ENTÃO
    ESCREVA("Pode votar nesta eleição.")
SENÃO
    ESCREVA("Não está apto a votar.")
FIM_SE
```

### 🔄 Estruturas de Repetição (Laços)
Executam tarefas repetitivas de forma automatizada até atingir uma condição de parada.
```text
PARA i DE 1 ATÉ 10 FAÇA
    ESCREVA("Tabuada do 2: 2 x " + i + " = " + (2 * i))
FIM_PARA
```

---

## 🐙 2. Controle de Versão com Git & GitHub
O Git gerencia o histórico de alterações do código. O GitHub funciona como o servidor em nuvem para hospedar e compartilhar esses repositórios.

### 🛠️ Comandos Essenciais do Terminal (Fluxo de Trabalho)

1. **Inicializar o Repositório Local:**
   ```bash
   git init
   ```
2. **Verificar o Status dos Arquivos:**
   ```bash
   git status
   ```
3. **Adicionar Arquivos para o Próximo Commit:**
   ```bash
   git add nome_do_arquivo.ext
   # Ou para adicionar todos os arquivos modificados: git add .
   ```
4. **Gravar a Alteração no Histórico Local:**
   ```bash
   git commit -m "Explicação curta e clara sobre o que foi feito no código"
   ```
5. **Conectar ao Servidor Remoto (GitHub):**
   ```bash
   git remote add origin github.com
   ```
6. **Enviar os Arquivos para o GitHub:**
   ```bash
   git push -u origin main
   ```

---

## 🚀 Desafio Prático Combinado
1. **Lógica:** Crie um algoritmo que leia a temperatura atual. Se for maior que 30, exiba "Clima Quente". Caso contrário, exiba "Clima Agradável".
2. **GitHub:** Salve seu script em uma pasta, abra o terminal nesta pasta e execute os comandos Git para criar um commit. Envie o resultado final para um repositório público no seu perfil do GitHub.