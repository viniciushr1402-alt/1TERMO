# Aula: Sistemas Operacionais em Larga Escala — Windows, Linux e iOS

## 🎯 Objetivos da Aprendizagem
* Analisar as diferenças estruturais entre núcleos (kernels) monolíticos e híbridos.
* Compreender os modelos de gerenciamento de processos, memória e permissões.
* Mapear o ecossistema técnico e os casos de uso industriais de cada plataforma.

---

## 🪟 1. Ecossistema Microsoft Windows
O Windows baseia-se em uma arquitetura de subsistemas projetada para compatibilidade de hardware e retrocompatibilidade de software empresarial.

* **Núcleo (Kernel):** Híbrido (NT Kernel). Combina a velocidade de um kernel monolítico com a modularidade de um microkernel.
* **Sistema de Arquivos Nativo:** NTFS (suporta criptografia BitLocker, permissões avançadas e journaling).
* **Gerenciamento de Processos:** Baseado em Threads e Prioridades Preemptivas Dinâmicas.
* **Características Principais:** 
  * Camada de Abstração de Hardware (HAL) isola o núcleo de variações físicas de placas.
  * Registro do Windows (Registry) centraliza todas as configurações do sistema e drivers.

---

## 🐧 2. Ecossistema Linux
O Linux é um ecossistema de código aberto baseado na filosofia Unix, focado em estabilidade, segurança de servidores e automação.

* **Núcleo (Kernel):** Monolítico. Todos os serviços do sistema (drivers, rede, sistemas de arquivos) rodam no mesmo espaço de memória do kernel para máxima performance, mas utilizam módulos carregáveis (LKM).
* **Sistema de Arquivos Nativo:** ext4, Btrfs, XFS.
* **Gerenciamento de Processos:** Modelo Fork/Exec. Processos leves que compartilham recursos de forma eficiente através do escalonador CFS (Completely Fair Scheduler).
* **Características Principais:**
  * Tudo é um arquivo (dispositivos de hardware, processos e conexões de rede são mapeados no diretório `/dev` ou `/proc`).
  * Isolamento rígido de permissões nativas (Usuário Root vs. Usuários Comuns).

---

## 🍏 3. Ecossistema Apple iOS
O iOS é um sistema de código fechado altamente otimizado para dispositivos móveis, focado em segurança de hardware, eficiência energética e restrição de sandbox.

* **Núcleo (Kernel):** Híbrido (XNU - *X is Not Unix*), baseado no Mach e componentes do FreeBSD (Darwin).
* **Sistema de Arquivos Nativo:** APFS (Apple File System), otimizado para armazenamento Flash/SSD com criptografia forte nativa.
* **Gerenciamento de Processos:** Escalonador focado em eficiência energética. Processos em segundo plano são congelados ou suspensos agressivamente para preservar a bateria.
* **Características Principais:**
  * *Sandboxing* obrigatório: cada aplicativo roda em um contêiner isolado e não pode acessar dados de outros apps sem permissão explícita.
  * Arquitetura de segurança integrada com coprocessadores de hardware (Secure Enclave).

---

## 📊 Matriz Comparativa de Arquitetura



| Critério Técnico | Microsoft Windows | Linux (Distribuições) | Apple iOS |
| :--- | :--- | :--- | :--- |
| **Tipo de Kernel** | Híbrido (NT) | Monolítico | Híbrido (XNU/Darwin) |
| **Licença de Uso** | Proprietária / Comercial | Código Aberto (GPL) | Proprietária / Fechada |
| **Público Alvo** | Desktops corporativos e jogos | Servidores, Nuvem e Sistemas Embarcados | Dispositivos móveis (iPhone) |
| **Interface Padrão** | GUI (Graphical User Interface) | CLI (Linha de Comando via Bash/Zsh) | Toque Multi-touch (Cocoa Touch) |
| **Segurança Base** | Controle de Conta de Usuário (UAC) | Permissões POSIX e sudo | Sandbox e Boot Seguro (Hardware) |

---

## 🧠 Desafio Prático / Laboratório de Análise
1. **Atividade de Comando:** Abra o terminal do seu sistema atual. Se estiver no Windows, execute `tasklist` no CMD. Se estiver no Linux ou MacOS/iOS (via SSH), execute `ps aux` ou `top`. 
2. **Análise de Processos:** Identifique qual processo está consumindo mais memór