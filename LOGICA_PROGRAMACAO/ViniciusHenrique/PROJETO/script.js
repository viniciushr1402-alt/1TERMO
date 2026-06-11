// BANCO DE DADOS INTEGRAL DE CURSOS (6 OPÇÕES INSTITUCIONAIS COMPLETAS)
const listaCursos = {
    ti: {
        nome: "Tecnologia da Informação",
        icone: "fa-code",
        descricao: "Desenvolvimento de sistemas integrados, gerenciamento de infraestrutura cloud, segurança cibernética corporativa e arquitetura de banco de dados orientada a processos industriais.",
        habilidades: ["Lógica de Programação Avançada", "Estrutura de Redes Computacionais", "Segurança da Informação", "Desenvolvimento Web & Mobile"],
        grade: ["Algoritmos e Estruturas", "Arquitetura Cloud", "Banco de Dados SQL/NoSQL", "DevOps e Integração Contínua"],
        techs: ["VS Code", "Python / JavaScript", "Docker & Kubernetes", "Git / GitHub"],
        atuacao: ["Fábricas Inteligentes (I4.0)", "Empresas de Software", "Bancos", "Consultorias de Segurança"],
        salario: "R$ 3.800,00 a R$ 9.500,00",
        diretriz: "O código robusto governa as engrenagens digitais e os fluxos de dados do ecossistema corporativo.",
        cargaHoraria: "1200h"
    },
    mecanica: {
        nome: "Fabricação Mecânica",
        icone: "fa-gears",
        descricao: "Processos complexos e integrados de usinagem física industrial, conformação de materiais de alta resistência, modelagem de alta precisão em softwares CAD/CAM e programação de comandos CNC.",
        habilidades: ["Leitura e Interpretação de Desenho Técnico", "Cálculo Técnico de Precisão", "Programação de Torno CNC", "Metrologia Industrial"],
        grade: ["Desenho Técnico Mecânico", "Tecnologia dos Materiais", "Usinagem de Elementos", "Sistemas Hidráulicos e Pneumáticos"],
        techs: ["SolidWorks", "AutoCAD", "Comandos CNC Siemens / Fanuc", "Paquímetros / Micrômetros"],
        atuacao: ["Indústrias Metalmecânicas", "Fábricas de Autopeças", "Setor Aeroespacial", "Montadoras Automotivas"],
        salario: "R$ 3.200,00 a R$ 7.800,00",
        diretriz: "A precisão matemática milimétrica esculpe o metal estrutural que dá suporte à infraestrutura do futuro.",
        cargaHoraria: "1200h"
    },
    automotiva: {
        nome: "Manutenção Automotiva",
        icone: "fa-car",
        descricao: "Diagnósticos eletroeletrônicos automotivos complexos, manutenção preventiva e corretiva de sistemas veiculares mecânicos estruturais e atuação especializada em sistemas de injeção eletrônica e redes embarcadas.",
        habilidades: ["Diagnóstico Computadorizado Veicular", "Análise de Circuitos Elétricos", "Reparação de Motores Térmicos", "Sistemas de Transmissão Automatizada"],
        grade: ["Eletricidade Automotiva", "Sistemas de Injeção Eletrônica", "Mecânica de Chassis", "Gerenciamento Térmico Veicular"],
        techs: ["Scanners Automotivos Bosch", "Osciloscópios Técnicos", "Elevadores Hidráulicos", "Gases de Exaustão"],
        atuacao: ["Concessionárias Corporativas", "Centros Automotivos", "Empresas de Transporte Logístico", "Frotas Industriais"],
        salario: "R$ 2.900,00 a R$ 6.800,00",
        diretriz: "A mecânica fina aliada à eletroeletrônica mantém a mobilidade comercial ativa e segura.",
        cargaHoraria: "1000h"
    },
    gestao: {
        nome: "Administração e Gestão",
        icone: "fa-chart-pie",
        descricao: "Planejamento estratégico corporativo, gerenciamento contábil e de custos industriais, controle estatístico de fluxos organizacionais, gestão de suprimentos e liderança estratégica de cadeias produtivas.",
        habilidades: ["Gestão de Fluxos de Caixa", "Planejamento de Produção (PCP)", "Liderança de Equipes Multidisciplinares", "Análise Estatística de Processos"],
        grade: ["Contabilidade Geral e Industrial", "Logística de Suprimentos", "Gestão da Qualidade Total", "Comportamento Organizacional"],
        techs: ["Sistemas ERP (SAP / Totvs)", "Microsoft Excel Avançado", "Power BI dashboards", "Trello / Jira"],
        atuacao: ["Escritórios de Planejamento", "Setores de Suprimentos Industriais", "Recursos Humanos", "Controle de Qualidade"],
        salario: "R$ 2.700,00 a R$ 6.500,00",
        diretriz: "A gestão lógica e a tomada de decisões corporativas estruturadas guiam a eficiência e lucratividade da operação.",
        cargaHoraria: "800h"
    },
    eletrica: {
        nome: "Eletrotécnica Industrial",
        icone: "fa-bolt",
        descricao: "Planejamento, instalação e manutenção de sistemas elétricos prediais e industriais de alta e baixa tensão, seguindo rigorosas normas técnicas e de segurança operacional.",
        habilidades: ["Interpretação de Diagramas Elétricos", "Montagem de Painéis de Comando", "Manutenção de Motores Elétricos", "Análise de Redes de Alta Tensão"],
        grade: ["Circuitos Elétricos CA/CC", "Instalações Elétricas Industriais", "Máquinas Elétricas Rotativas", "Automação com CLPs"],
        techs: ["Multímetros / Alicates Amperímetros", "Softwares CAD Elétrico", "Controladores Lógicos Programáveis", "Disjuntores Caixa Moldada"],
        atuacao: ["Subestações Elétricas", "Fábricas de Grande Porte", "Empresas de Geração/Distribuição", "Manutenção Industrial"],
        salario: "R$ 3.400,00 a R$ 8.200,00",
        diretriz: "A energia elétrica controlada com segurança alimenta o progresso contínuo e a automação global.",
        cargaHoraria: "1200h"
    },
    quimica: {
        nome: "Química Industrial",
        icone: "fa-flask-vial",
        descricao: "Operação, monitoramento e controle físico-químico de processos industriais laboratoriais, análise qualitativa de matérias-primas e desenvolvimento controlado de formulações químicas.",
        habilidades: ["Análise Laboratorial Quantitativa", "Controle de Reações Químicas", "Operação de Instrumentação Analítica", "Tratamento de Efluentes Industriais"],
        grade: ["Química Analítica e Inorgânica", "Operações Unitárias Industriais", "Controle de Processos Químicos", "Segurança Química e Microbiologia"],
        techs: ["Espectrofotômetros", "Medidores de pH Digitais", "Balanças Analíticas de Alta Precisão", "Vidraria Laboratorial Avançada"],
        atuacao: ["Indústrias Petroquímicas", "Fábricas de Alimentos e Bebidas", "Estações de Tratamento de Água", "Laboratórios de Controle de Qualidade"],
        salario: "R$ 3.100,00 a R$ 7.400,00",
        diretriz: "A transformação molecular consciente converte elementos em insumos indispensáveis para a sociedade moderna.",
        cargaHoraria: "1000h"
    }
};

// BANCO DE DADOS DE PERGUNTAS (15 QUESTÕES DE ALTA RESOLUÇÃO)
const perguntasQuiz = [
    {
        pergunta: "Em um projeto prático de equipe, qual função você assume de maneira totalmente instintiva e de foco pessoal?",
        opcoes: [
            { texto: "Coordenar o cronograma geral, delegar tarefas estruturais e liderar as frentes.", curso: "gestao" },
            { texto: "Estruturar a lógica interna, programar os códigos core e mitigar bugs técnicos.", curso: "ti" },
            { texto: "Projetar os componentes físicos, gerar desenhos de corte e simular mecânica.", curso: "mecanica" },
            { texto: "Analisar a alimentação de energia, balanceamento de cargas e malha de força.", curso: "eletrica" }
        ]
    },
    {
        pergunta: "Se um maquinário industrial complexo interromper a operação repentinamente, o que primeiro atrai sua análise?",
        opcoes: [
            { texto: "Investigar surtos elétricos, parametrização de inversores ou atuação de fusíveis.", curso: "eletrica" },
            { texto: "Avaliar o desgaste mecânico físico, desalinhamento estrutural ou folgas de eixos.", curso: "mecanica" },
            { texto: "Analisar logs de execução, estouro de memória no firmware ou bugs lógicos.", curso: "ti" },
            { texto: "Mapear o custo ocioso da parada na cadeia logística e remanejar o fluxo de horas.", curso: "gestao" }
        ]
    },
    {
        pergunta: "Qual ecossistema operacional mais se alinha com seus planos de evolução profissional de longo prazo?",
        opcoes: [
            { texto: "Laboratórios limpos de software, arquiteturas em nuvem ou infraestrutura de rede.", curso: "ti" },
            { texto: "Linhas de fabricação pesada, operação de eixos CNC e usinagem dimensional.", curso: "mecanica" },
            { texto: "Planta laboratorial físico-química, titulações complexas e controle molecular.", curso: "quimica" },
            { texto: "Oficinas de alta performance, varredura com scanners automotivos e análise de motores.", curso: "automotiva" }
        ]
    },
    {
        pergunta: "Ao liderar ou executar uma rotina fabril, qual métrica determina o sucesso da sua entrega?",
        opcoes: [
            { texto: "A conformidade geométrica milimétrica rigorosa e acabamento de precisão.", curso: "mecanica" },
            { texto: "A imunidade a ruídos elétricos externos e eficiência na atenuação de harmônicas.", curso: "eletrica" },
            { texto: "A minimização do lead time, otimização de custos operacionais e margem líquida.", curso: "gestao" },
            { texto: "A estabilidade estequiométrica das reações e pureza absoluta do material final.", curso: "quimica" }
        ]
    },
    {
        pergunta: "Qual das seguintes rotinas de engenharia gera em você maior nível de engajamento e foco?",
        opcoes: [
            { texto: "Escrever rotinas lógicas abstratas e automatizar pipelines repetitivos em código.", curso: "ti" },
            { texto: "Interpretar esquemas elétricos complexos e reparar redes elétricas embarcadas.", curso: "automotiva" },
            { texto: "Calcular dosagens de insumos, pH e conduzir ensaios de fracionamento térmico.", curso: "quimica" },
            { texto: "Analisar balanços gerenciais, gerir compras estruturadas e implementar melhorias Lean.", curso: "gestao" }
        ]
    },
    {
        pergunta: "Ao inspecionar um veículo contemporâneo de ponta, qual subsistema mais se destaca aos seus olhos?",
        opcoes: [
            { texto: "A central ECU, redes CAN/LIN embarcadas e gerenciamento elétrico da injeção.", curso: "automotiva" },
            { texto: "O sistema operacional multimídia, processamento de dados de telemetria e segurança cloud.", curso: "ti" },
            { texto: "A rigidez torcional do chassi, eixos de transmissão de torque e tolerância de bielas.", curso: "mecanica" },
            { texto: "O arranjo do sistema elétrico de tração híbrida e conversores regenerativos.", curso: "eletrica" }
        ]
    },
    {
        pergunta: "Se você tivesse que se especializar em uma ferramenta profissional avançada de mercado, qual escolheria?",
        opcoes: [
            { texto: "IDE de codificação avançada com suporte a repositórios Git corporativos e Kubernetes.", curso: "ti" },
            { texto: "Plataformas CAD 3D paramétricas de modelagem industrial estrutural pesada.", curso: "mecanica" },
            { texto: "Suítes de BI empresariais estruturadas para mineração de dados orçamentários.", curso: "gestao" },
            { texto: "Softwares integrados de simulação de circuitos elétricos industriais e rotas de painéis.", curso: "eletrica" }
        ]
    },
    {
        pergunta: "Diante de um vazamento severo de subprodutos ou resíduos de produção, qual tática técnica propõe?",
        opcoes: [
            { texto: "Aplicar reações químicas de neutralização alcalina ou ácida controlada no efluente.", curso: "quimica" },
            { texto: "Reestruturar os contratos de descarte e mapear auditorias operacionais de conformidade.", curso: "gestao" },
            { texto: "Instalar filtros mecânicos de alta retenção e eixos automatizados de raspagem física.", curso: "mecanica" },
            { texto: "Instalar atuadores elétricos automáticos de corte interligados a sensores de fluxo.", curso: "eletrica" }
        ]
    },
    {
        pergunta: "Em um time de Pesquisa & Desenvolvimento, qual atribuição maximiza o seu potencial técnico?",
        opcoes: [
            { texto: "Validar a reatividade físico-química e toxicidade controlada de novos compostos.", curso: "quimica" },
            { texto: "Modelar e rodar algoritmos preditivos baseados em redes neurais de Machine Learning.", curso: "ti" },
            { texto: "Executar testes destrutivos de tração mecânica, dureza e análise de fadiga mecânica.", curso: "mecanica" },
            { texto: "Conduzir calibrações dinâmicas de sensores de oxigênio em bancadas automotivas.", curso: "automotiva" }
        ]
    },
    {
        pergunta: "Qual pane técnica do cotidiano você resolve com maior velocidade e domínio?",
        opcoes: [
            { texto: "Corrupção de tabelas de banco de dados, falhas de conectividade de IPs e gateways.", curso: "ti" },
            { texto: "Curto-circuito em comandos elétricos, queima de contatores e rearme de disjuntores.", curso: "eletrica" },
            { texto: "Falhas intermitentes de ignição automotiva, medição com multímetros em sensores Bosch.", curso: "automotiva" },
            { texto: "Inconsistências em planilhas financeiras de conciliação de fluxo de caixa e custos.", curso: "gestao" }
        ]
    },
    {
        pergunta: "Qual marco da Indústria 4.0 você deseja explorar a fundo em seus estudos acadêmicos?",
        opcoes: [
            { texto: "Cybersecurity corporativa avançada e criptografia simétrica de dados na nuvem.", curso: "ti" },
            { texto: "Manufatura aditiva direta de componentes metálicos complexos via arquivos CNC.", curso: "mecanica" },
            { texto: "Sincronização de motores de grande porte via inversores parametrizados em rede.", curso: "eletrica" },
            { texto: "Desenvolvimento de catalisadores de síntese química de alta seletividade.", curso: "quimica" }
        ]
    },
    {
        pergunta: "Para elevar a eficiência global de uma planta, qual ponto central de intervenção você ataca?",
        opcoes: [
            { texto: "O redesenho dos centros de custos e eliminação de desperdícios no inventário.", curso: "gestao" },
            { texto: "O monitoramento cromatográfico contínuo do fluxo de refino e insumos líquidos.", curso: "quimica" },
            { texto: "O aumento da precisão geométrica e redução de tolerâncias mecânicas em robôs.", curso: "mecanica" },
            { texto: "A minimização da latência de pacotes de dados nos servidores SCADA centrais.", curso: "ti" }
        ]
    },
    {
        pergunta: "Se uma verba corporativa fosse liberada para expandir seus recursos práticos, onde investiria?",
        opcoes: [
            { texto: "Osciloscópios automotivos digitais e scanners de diagnóstico via barramento.", curso: "automotiva" },
            { texto: "Pastilhas de metal duro intercambiáveis e cabeçotes micrométricos de usinagem.", curso: "mecanica" },
            { texto: "Analisadores de qualidade de energia e infraestrutura de aterramento elétrico.", curso: "eletrica" },
            { texto: "Licenças corporativas de ERP em nuvem para orquestração integrada de faturamento.", curso: "gestao" }
        ]
    },
    {
        pergunta: "Qual metodologia de absorção técnica mais se adequa à sua forma de consolidação de conhecimento?",
        opcoes: [
            { texto: "Interagir diretamente com o objeto de teste físico, montando e desmontando sistemas.", curso: "automotiva" },
            { texto: "Estudar rigorosamente a lógica matemática estrutural por trás da tecnologia.", curso: "ti" },
            { texto: "Analisar as diretrizes de normas técnicas (NBRs/NRs) e diagramas de segurança.", curso: "eletrica" },
            { texto: "Mapear a viabilidade econômica do conceito técnico aplicado ao mercado.", curso: "gestao" }
        ]
    },
    {
        pergunta: "Diante de um desvio severo em um indicador técnico que parou o time, qual sua postura imediata?",
        opcoes: [
            { texto: "Rastrear recursivamente as linhas de fluxo ou código até isolar a quebra lógica.", curso: "ti" },
            { texto: "Medir fisicamente os componentes com instrumentos de precisão até achar a folga.", curso: "mecanica" },
            { texto: "Reunir os líderes das frentes para reprogramar custos e o plano de contingência comercial.", curso: "gestao" },
            { texto: "Consultar os manuais de esquemas elétricos do fabricante e diagramas lógicos de relés.", curso: "eletrica" }
        ]
    }
];

// CENTRAL DE FAQ - BANCO DE DADOS REALISTA
const bancoFAQ = [
    {
        q: "Os cursos de Aprendizagem Industrial do SENAI possuem cobrança de mensalidade?",
        a: "Não. Os cursos vinculados ao programa de Aprendizagem Profissional Industrial promovidos pelo SENAI são totalmente gratuitos para os candidatos classificados em processo seletivo oficial."
    },
    {
        q: "Qual a diferença estrutural entre a Aprendizagem Industrial e o Curso Técnico?",
        a: "A Aprendizagem Industrial foca na qualificação e inserção inicial de jovens no setor por meio de contratos com indústrias locais, unindo teoria laboratorial e prática de mercado. Os Cursos Técnicos exigem nível médio e entregam alta especialização tecnológica em disciplinas específicas de engenharia."
    },
    {
        q: "É possível obter contratação efetiva corporativa durante o andamento do curso?",
        a: "Sim. O ecossistema industrial utiliza ativamente as turmas do SENAI como fonte principal de retenção de talentos, iniciando contratos formais de jovem aprendiz logo no início das atividades acadêmicas."
    },
    {
        q: "Os diplomas emitidos pelo SENAI possuem validade e reconhecimento nacional?",
        a: "Sim. A certificação do SENAI tem validade jurídica integral em todo o território nacional e é considerada a principal chancela de qualidade operacional pelas maiores multinacionais e indústrias de base instaladas no país."
    }
];

// VARIÁVEIS GLOBAIS DE ESTADO DO DIAGNÓSTICO
let ponteiroQuestao = 0;
let scoreVocacional = { ti: 0, mecanica: 0, automotiva: 0, gestao: 0, eletrica: 0, quimica: 0 };
let alternativaSelecionada = null;

// GATILHO INICIAL DO APP
document.addEventListener("DOMContentLoaded", () => {
    gerarPreviewLateralCursos();
    gerarListaGeralPortfolioCursos();
    gerarFAQCentralInformativo();
    renderizarQuestaoAtivaQuiz(0);
});

// MOTOR DE ALTERNAÇÃO DE ABAS DA SIDEBAR (INTERATIVIDADE DOS BOTÕES LATERAIS)
function alternarTela(idAbatarget) {
    // Atualiza o estado visual ativo no menu esquerdo
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const itemMenu = document.getElementById(`nav-${idAbatarget}`);
    if (itemMenu) itemMenu.classList.add('active');

    // Oculta todas as seções centrais de conteúdo
    document.querySelectorAll('.content-section').forEach(secao => secao.classList.add('hidden'));

    // Exibe apenas a seção selecionada pelo clique do usuário
    const secaoAlvo = document.getElementById(`section-${idAbatarget}`);
    if (secaoAlvo) secaoAlvo.classList.remove('hidden');
}

// CONSTRUTOR DINÂMICO DOS CARDS COMPACTOS (SIDEBAR DIREITA)
function gerarPreviewLateralCursos() {
    const wrapper = document.getElementById("courses-container");
    if (!wrapper) return;
    wrapper.innerHTML = "";

    Object.keys(listaCursos).forEach(key => {
        const c = listaCursos[key];
        const cardHtml = `
            <div class="course-card-small">
                <div class="course-card-header">
                    <i class="fa-solid ${c.icone}"></i>
                    <h3 class="course-card-title">${c.nome}</h3>
                </div>
                <p class="course-card-desc">${c.descricao.substring(0, 115)}...</p>
                <div class="course-card-meta">
                    <span><i class="fa-solid fa-microchip"></i> Core Industrial</span>
                    <span><i class="fa-solid fa-clock"></i> ${c.cargaHoraria}</span>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML("beforeend", cardHtml);
    });
}

// CONSTRUTOR EXTENSO DO PORTFÓLIO DE CURSOS (ABA 'SOBRE OS CURSOS')
function gerarListaGeralPortfolioCursos() {
    const containerGeral = document.getElementById("lista-geral-cursos");
    if (!containerGeral) return;
    containerGeral.innerHTML = "";

    Object.keys(listaCursos).forEach(key => {
        const c = listaCursos[key];
        
        let tagsHabilidades = c.habilidades.map(h => `<span class="tag-item tag-item-highlight">${h}</span>`).join("");
        let tagsMAtriz = c.grade.map(m => `<span class="tag-item">${m}</span>`).join("");
        let tagsTechs = c.techs.map(t => `<span class="tag-item" style="border-color: rgba(255,255,255,0.15);">${t}</span>`).join("");

        const blocoHtml = `
            <div class="result-box glow-border-box" style="margin-bottom: 15px;">
                <h3 style="font-size: 1.3rem; letter-spacing: 0.5px;"><i class="fa-solid ${c.icone}"></i> Formação Técnica em ${c.nome} — ${c.cargaHoraria}</h3>
                <p style="margin-bottom: 18px; color: #fff; font-size:1.05rem; line-height:1.5;">${c.descricao}</p>
                
                <div style="margin-bottom: 14px;">
                    <strong style="font-size: 0.85rem; color: var(--neon-red); display:block; margin-bottom: 6px; font-family: var(--font-cyber); letter-spacing:1px;">MATRIZ DE CAPACITAÇÃO (HARD SKILLS):</strong>
                    <div class="tag-list">${tagsHabilidades}</div>
                </div>
                
                <div style="margin-bottom: 14px;">
                    <strong style="font-size: 0.85rem; color: #fff; display:block; margin-bottom: 6px; font-family: var(--font-cyber); letter-spacing:1px;">UNIDADES CURRICULARES:</strong>
                    <div class="tag-list">${tagsMAtriz}</div>
                </div>

                <div>
                    <strong style="font-size: 0.85rem; color: var(--text-muted); display:block; margin-bottom: 6px; font-family: var(--font-cyber); letter-spacing:1px;">SUÍTES DE SOFTWARE & EQUIPAMENTOS CORE:</strong>
                    <div class="tag-list">${tagsTechs}</div>
                </div>
            </div>
        `;
        containerGeral.insertAdjacentHTML("beforeend", blocoHtml);
    });
}

// CONSTRUTOR DA INTERFACE DO FAQ
function gerarFAQCentralInformativo() {
    const faqContainer = document.getElementById("faq-dinamico-container");
    if (!faqContainer) return;
    faqContainer.innerHTML = "";

    bancoFAQ.forEach(item => {
        const itemHtml = `
            <div class="faq-item-box">
                <h3 class="faq-question"><i class="fa-solid fa-circle-question"></i> ${item.q}</h3>
                <p class="faq-answer">${item.a}</p>
            </div>
        `;
        faqContainer.insertAdjacentHTML("beforeend", itemHtml);
    });
}

// RENDERIZADOR DO FLUXO DO QUIZ
function renderizarQuestaoAtivaQuiz(indice) {
    alternativaSelecionada = null;
    const total = perguntasQuiz.length;

    document.getElementById("current-stage").innerText = `ETAPA ${indice + 1}/${total}`;
    document.getElementById("q-counter").innerText = `Questão ${indice + 1} de ${total}`;
    
    const percentualProgresso = ((indice + 1) / total) * 100;
    document.getElementById("progress-indicator").style.width = `${percentualProgresso}%`;

    const dadosQ = perguntasQuiz[indice];
    document.getElementById("q-text").innerText = dadosQ.pergunta;

    const boxOpcoes = document.getElementById("options-box");
    boxOpcoes.innerHTML = "";

    const letrasPrefix = ["A", "B", "C", "D"];
    dadosQ.opcoes.forEach((opcao, idx) => {
        const itemHtml = `
            <div class="option-item" id="opt-node-${idx}" onclick="capturarSelecaoOpcao(${idx}, '${opcao.curso}')">
                <div class="option-prefix">${letrasPrefix[idx]}</div>
                <div class="option-title">${opcao.texto}</div>
            </div>
        `;
        boxOpcoes.insertAdjacentHTML("beforeend", itemHtml);
    });

    document.getElementById("btn-prev-question").disabled = indice === 0;

    const btnAvancar = document.getElementById("btn-next-question");
    if (indice === total - 1) {
        btnAvancar.innerHTML = `Finalizar Diagnóstico <i class="fa-solid fa-flag-checkered"></i>`;
        btnAvancar.onclick = calcularEExibirResultadoFinal;
    } else {
        btnAvancar.innerHTML = `Próxima <i class="fa-solid fa-arrow-right"></i>`;
        btnAvancar.onclick = moverParaProximaPergunta;
    }
}

// CAPTURA E MARCAÇÃO DE OPÇÃO SELECIONADA
function capturarSelecaoOpcao(indexNode, cursoChave) {
    document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
    const elementoAlvo = document.getElementById(`opt-node-${indexNode}`);
    if (elementoAlvo) elementoAlvo.classList.add("selected");
    alternativaSelecionada = cursoChave;
}

// AVANÇAR PERGUNTA
function moverParaProximaPergunta() {
    if (!alternativaSelecionada) {
        alert("Aviso Operacional: Selecione uma diretriz de resposta antes de avançar na matriz.");
        return;
    }
    scoreVocacional[alternativaSelecionada]++;
    ponteiroQuestao++;
    renderizarQuestaoAtivaQuiz(ponteiroQuestao);
}

// VOLTAR PERGUNTA
document.getElementById("btn-prev-question").addEventListener("click", () => {
    if (ponteiroQuestao > 0) {
        ponteiroQuestao--;
        renderizarQuestaoAtivaQuiz(ponteiroQuestao);
    }
});

// MOTOR FINAL DO DIAGNÓSTICO E MAPEAMENTO
function calcularEExibirResultadoFinal() {
    if (!alternativaSelecionada) {
        alert("Aviso Operacional: Selecione sua abordagem técnica final para gerar o laudo de afinidade.");
        return;
    }
    scoreVocacional[alternativaSelecionada]++;

    let vencedorChave = "ti";
    let pontuacaoTop = -1;

    Object.keys(scoreVocacional).forEach(key => {
        if (scoreVocacional[key] > pontuacaoTop) {
            pontuacaoTop = scoreVocacional[key];
            vencedorChave = key;
        }
    });

    const cursoGanhador = listaCursos[vencedorChave];

    // Alimentação estruturada dos elementos de resultado da interface principal
    document.getElementById("res-curso-nome").innerText = cursoGanhador.nome;
    document.getElementById("res-perfil-desc").innerText = cursoGanhador.descricao;
    document.getElementById("res-salario").innerText = `Estimativa de Piso Industrial: ${cursoGanhador.salario}`;
    document.getElementById("res-motivado").innerText = `"${cursoGanhador.diretriz}"`;

    // Geração dinâmica das coleções de tags customizadas no painel de laudo final
    gerarTagsResultadoFinal("res-habilidades", cursoGanhador.habilidades, true);
    gerarTagsResultadoFinal("res-grade", cursoGanhador.grade, false);
    gerarTagsResultadoFinal("res-techs", cursoGanhador.techs, false);
    gerarTagsResultadoFinal("res-atuacao", cursoGanhador.atuacao, false);

    // Oculta blocos estruturais do quiz e expõe tela de diagnóstico avançada
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
}

// INJETOR DE TAGS AUXILIAR
function gerarTagsResultadoFinal(idAlvo, listaDados, destacar) {
    const caixa = document.getElementById(idAlvo);
    if (!caixa) return;
    caixa.innerHTML = "";

    listaDados.forEach(dado => {
        const estiloClasse = destacar ? "tag-item tag-item-highlight" : "tag-item";
        caixa.insertAdjacentHTML("beforeend", `<span class="${estiloClasse}">${dado}</span>`);
    });
}