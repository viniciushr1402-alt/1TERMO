# 1TERMO
Material de Aula - LOPAL/SOP/LER/ARI

# LOPAL 
Linguagem de programação em python

## SOP 
Sistemas operacionais linux e windows e ios

# 🎓 Repositório de Aulas Tecnológicas: Do Hardware ao Software

Este repositório centraliza os planos de aula, códigos práticos, roteiros de laboratório e materiais didáticos para quatro disciplinas essenciais nos cursos de tecnologia e engenharia.

---

## 🏗️ 1. Arquitetura de Sistemas IoT
Focado na integração end-to-end entre hardware físico (borda) e processamento local de dados (gateway).
* **Camada de Borda (C++ / Arduino):** Programação de firmware, leitura e tratamento de sinais elétricos de sensores e amostragem temporal eficiente via `millis()`.
* **Camada de Integração (Python / Middleware):** Construção de Gateways de comunicação, captura de streams seriais em tempo real (`pyserial`), tratamento de erros e estruturação de payloads em formato JSON padronizado para nuvem.

---

## 📋 2. Engenharia e Levantamento de Requisitos
Aborda o ciclo de vida inicial do desenvolvimento de software, transformando necessidades de negócio em especificações técnicas.
* **Técnicas de Elicitação:** Processos de entrevistas semiestruturadas com stakeholders e sessões de cocriação via *Brainstorming*.
* **Análise de Escopo:** Divisão clara entre Requisitos Funcionais (RF - o que o sistema faz) e Requisitos Não Funcionais (RNF - critérios de qualidade, desempenho e segurança).
* **Modelagem e Artefatos:** Criação de Diagramas de Casos de Uso (UML/Mermaid), prototipagem de interfaces (baixa e alta fidelidade) e relatórios técnicos formais (SRS).

---

## 💻 3. Lógica de Programação e Ambiente de Desenvolvimento
Introdução ao pensamento computacional e configuração das ferramentas fundamentais do desenvolvedor moderno.
* **Lógica Estrutural:** Declaração de variáveis, tipos de dados primitivos, estruturas condicionais de decisão e laços de repetição.
* **Infraestrutura Windows:** Domínio do Prompt de Comando (CMD) e PowerShell para navegação de diretórios, gerenciamento de arquivos e execução de scripts via terminal.
* **Versionamento (Git/GitHub):** Fluxo de trabalho de controle de versão através dos comandos fundamentais (`init`, `status`, `add`, `commit` e `push`).

---

## 🖥️ 4. Sistemas Operacionais em Larga Escala
Estudo comparativo e conceitual das três principais plataformas arquiteturais do mercado global.
* **Microsoft Windows:** Arquitetura de núcleo híbrido (NT Kernel), funcionamento do registro do sistema e o ecossistema voltado para desktops corporativos.
* **Linux:** Filosofia Unix, kernel monolítico com módulos carregáveis, gerenciamento de privilégios nativos e sua dominância no mercado de servidores e nuvem.
* **Apple iOS:** Otimização móvel baseada no kernel XNU/Darwin, foco em eficiência energética, criptografia em hardware e isolamento obrigatório de aplicativos (*Sandboxing*).

---

## 🛠️ Pré-requisitos para os Laboratórios Práticos
Para executar os códigos e projetos contidos nas subpastas deste repositório, você precisará de:
1. **Ambiente Windows** configurado com acesso ao terminal.
2. **Arduino IDE** ou **VS Code** instalado.
3. **Interpretador Python 3.x** e pacote `pyserial` instalado via terminal (`pip install pyserial`).
4. **Git** configurado para clonagem e envio de alterações.