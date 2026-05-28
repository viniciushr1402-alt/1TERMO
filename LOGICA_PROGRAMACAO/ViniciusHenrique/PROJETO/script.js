const questions = [
    {
        id: 1,
        text: "Em um projeto de equipe, qual função você costuma assume naturally?",
        alternatives: [
            { text: "Organizar o cronograma, delegar tarefas e liderar o time.", weights: { "Administração e Gestão": 4, "Logística e Transporte": 3 } },
            { text: "Propor ideias fora da caixa e soluções de design inovadoras.", weights: { "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4, "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4 } },
            { text: "Mergulhar na lógica do problem e focar no código ou sistema técnico.", weights: { "Tecnologia da Informação e Informática": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 3 } },
            { text: "Analisar os riscos, revisar detalhes e garantir que tudo saia correto.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4, "Química, Cerâmica e Plásticos": 3 } }
        ]
    },
    {
        id: 2,
        text: "Quando um equipamento ou aplicativo para de funcionar, qual é sua reação imediata?",
        alternatives: [
            { text: "Abro o manual ou pesquiso na internet para entender a lógica interna do erro.", weights: { "Tecnologia da Informação e Informática": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4 } },
            { text: "Começo a desmontar ou mexer fisicamente para achar a falha mecânica.", weights: { "Automotiva": 4, "Fabricação Mecânica e Mecânica Industrial": 4, "Refrigeração e Climatização": 3 } },
            { text: "Ligo para o suporte ou gerencio a situação acionando os responsáveis de forma organizada.", weights: { "Administração e Gestão": 4, "Logística e Transporte": 2 } },
            { text: "Avalio se a falha traz riscos imediatos de segurança para o ambiente.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4 } }
        ]
    },
    {
        id: 3,
        text: "Qual desses atividades mais desperta o seu interesse no dia a dia?",
        alternatives: [
            { text: "Descobrir o funcionamento de motores, veículos ou sistemas de propulsão.", weights: { "Automotiva": 4, "Fabricação Mecânica e Mecânica Industrial": 3 } },
            { text: "Desenhar layouts, criar peças visuais, embalagens ou combinar estilos.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4, "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4, "Construção Civil e Design de Mobiliário": 3 } },
            { text: "Entender composições químicas, transformações de materiais ou preparo de alimentos.", weights: { "Química, Cerâmica e Plásticos": 4, "Alimentos e Bebidas": 4 } },
            { text: "Planejar rotas eficientes, organizar estoques ou controlar finanças.", weights: { "Logística e Transporte": 4, "Administração e Gestão": 3 } }
        ]
    },
    {
        id: 4,
        text: "Imagine que você precisa resolver um problema crítico sob forte pressão de tempo. O que faz?",
        alternatives: [
            { text: "Mantenho a calma, sigo os protocolos de segurança e analiso os dados disponíveis.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4, "Química, Cerâmica e Plásticos": 3 } },
            { text: "Busco uma adaptação rápida e inovadora usando as ferramentas manuais ou técnicas que tenho.", weights: { "Metalurgia e Soldagem": 4, "Refrigeração e Climatização": 4, "Construção Civil e Design de Mobiliário": 3 } },
            { text: "Conecto sistemas, mudo parâmetros lógicos ou reinicio processos de forma analítica.", weights: { "Tecnologia da Informação e Informática": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4 } },
            { text: "Reúno as pessoas envolvidas, distribuo funções emergenciais e piloto a solução.", weights: { "Administração e Gestão": 4, "Logística e Transporte": 3 } }
        ]
    },
    {
        id: 5,
        text: "Se você pudesse escolher passar o dia em um desses ambientes de aprendizado, qual seria?",
        alternatives: [
            { text: "Um laboratório de testes cibernéticos, desenvolvimento de softwares ou servidores digitais.", weights: { "Tecnologia da Informação e Informática": 4 } },
            { text: "Uma oficina moderna de robótica, circuitos integrados e braços automatizados.", weights: { "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Fabricação Mecânica e Mecânica Industrial": 3 } },
            { text: "Um estúdio criativo focado em prototipagem de móveis, arquitetura ou tendências de moda.", weights: { "Construção Civil e Design de Mobiliário": 4, "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4 } },
            { text: "Uma planta industrial de alta tecnologia monitorando processos químicos ou de alimentos.", weights: { "Química, Cerâmica e Plásticos": 4, "Alimentos e Bebidas": 4 } }
        ]
    },
    {
        id: 6,
        text: "Como você lida com regras rígidas de processos e normas técnicas?",
        alternatives: [
            { text: "Gosto de segui-las rigorosamente porque eliminam erros e protegem a saúde de todos.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4, "Alimentos e Bebidas": 3 } },
            { text: "Entendo a importância, mas procuro brechas para otimizar o tempo e inovar no método.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 3, "Administração e Gestão": 3 } },
            { text: "Considero fundamentais para que as máquinas, encaixes e medidas saiam perfeitamente exatos.", weights: { "Fabricação Mecânica e Mecânica Industrial": 4, "Metalurgia e Soldagem": 4, "Construção Civil e Design de Mobiliário": 3 } },
            { text: "As encaro como algoritmos: parâmetros fixos onde uso minha lógica para trabalhar dentro delas.", weights: { "Tecnologia da Informação e Informática": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 3 } }
        ]
    },
    {
        id: 7,
        text: "Qual tipo de desafio prático te traz maior satisfação ao ser concluído?",
        alternatives: [
            { text: "Ver um código rodar sem falhas ou uma rede de computadores perfeitamente segura.", weights: { "Tecnologia da Informação e Informática": 4 } },
            { text: "Consertar a climatização de um local ou o motor complexo de um carro de última geração.", weights: { "Refrigeração e Climatização": 4, "Automotiva": 4 } },
            { text: "Concluir uma peça física estruturada, soldada, esculpida ou costurada com suas mãos.", weights: { "Metalurgia e Soldagem": 4, "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4, "Construção Civil e Design de Mobiliário": 3 } },
            { text: "Reduzir custos e otimizar o tempo de entrega de mercadorias em uma operação complexa.", weights: { "Logística e Transporte": 4, "Administração e Gestão": 4 } }
        ]
    },
    {
        id: 8,
        text: "Ao planejar algo, qual é o seu foco principal?",
        alternatives: [
            { text: "A estética visual, a harmonia das cores, formas e a experiência do usuário final.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4, "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 3 } },
            { text: "A eficiência de fluxo: menor desperdício de espaço, energia e recursos.", weights: { "Logística e Transporte": 4, "Meio Ambiente, Saúde e Segurança do Trabalho": 3 } },
            { text: "A arquitetura de dados e as integrações automáticas de sistemas digitais.", weights: { "Tecnologia da Informação e Informática": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 3 } },
            { text: "A viabilidade econômica e o gerenciamento estratégico de pessoas.", weights: { "Administração e Gestão": 4 } }
        ]
    },
    {
        id: 9,
        text: "Sua relação com trabalhos manuais e ferramentas físicas é de:",
        alternatives: [
            { text: "Alta afinidade. Gosto do contato com metais, madeiras, soldas e ajustes de força.", weights: { "Metalurgia e Soldagem": 4, "Construção Civil e Design de Mobiliário": 4, "Fabricação Mecânica e Mecânica Industrial": 3 } },
            { text: "Precisão delicada. Prefiro montagem de placas eletrônicas ou instrumentação milimétrica.", weights: { "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Refrigeração e Climatização": 3 } },
            { text: "Artesanal e criativa. Prefiro lidar com texturas, moldes, tecidos ou papéis especiais.", weights: { "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4, "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4 } },
            { text: "Baixa afinidade física. Meu foco operacional é totalmente digital ou focado em planilhas.", weights: { "Tecnologia da Informação e Informática": 4, "Administração e Gestão": 4 } }
        ]
    },
    {
        id: 10,
        text: "Diante de um conflito de opiniões na sua equipe, como você reage?",
        alternatives: [
            { text: "Escuto todos com empatia e busco uma negociação harmoniosa focada no bem-estar mútuo.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4, "Administração e Gestão": 3 } },
            { text: "Uso dados concretos, relatórios e métricas frias para definir objetivamente a melhor opção.", weights: { "Administração e Gestão": 4, "Química, Cerâmica e Plásticos": 3 } },
            { text: "Tento propor uma alternativa técnica inovadora que integre as melhores ideias criativas.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 3 } },
            { text: "Foco no cumprimento das metas do projeto sem deixar a equipe perder tempo com desvios.", weights: { "Logística e Transporte": 4 } }
        ]
    },
    {
        id: 11,
        text: "Que tipo de avanço tecnológico mais te fascina atualmente?",
        alternatives: [
            { text: "Inteligência Artificial, segurança cibernética e algoritmos preditivos.", weights: { "Tecnologia da Informação e Informática": 4 } },
            { text: "Carros elétricos, autônomos e sistemas inteligentes de injeção e transmissão.", weights: { "Automotiva": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 3 } },
            { text: "Energias renováveis, automação predial sustentável e reciclagem avançada de materiais.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Química, Cerâmica e Plásticos": 3 } },
            { text: "Maquinários pesados automatizados, impressoras 3D industriais e usinagem a laser.", weights: { "Fabricação Mecânica e Mecânica Industrial": 4, "Metalurgia e Soldagem": 3, "Construção Civil e Design de Mobiliário": 3 } }
        ]
    },
    {
        id: 12,
        text: "Em termos de atenção aos detalhes, você se considera alguém que:",
        alternatives: [
            { text: "Não deixa passar um miligrama ou variação térmica em misturas e receitas.", weights: { "Alimentos e Bebidas": 4, "Química, Cerâmica e Plásticos": 4 } },
            { text: "Investiga linhas de códigos ou pequenas oscilações de frequência elétrica.", weights: { "Tecnologia da Informação e Informática": 4, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4 } },
            { text: "Foca no acabamento perfeito de costuras, dobras, pinturas ou arestas de móveis.", weights: { "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4, "Construção Civil e Design de Mobiliário": 4, "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 3 } },
            { text: "Monitora indicadores financeiros, taxas de entrega e notas fiscais com rigor.", weights: { "Administração e Gestão": 4, "Logística e Transporte": 4 } }
        ]
    },
    {
        id: 13,
        text: "Como você se comporta em relação à preservação ambiental e sustentabilidade?",
        alternatives: [
            { text: "É minha prioridade: procuro ativamente formas de reduzir pegada de carbono e riscos laborais.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4 } },
            { text: "Vejo como um desafio de engenharia: criar motores e indústrias que gastem muito menos energia.", weights: { "Automotiva": 3, "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Refrigeração e Climatização": 4 } },
            { text: "Foco no ciclo do produto: embalagens biodegradáveis, reaproveitamento de retalhos ou celulose.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4, "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 3, "Química, Cerâmica e Plásticos": 3 } },
            { text: "Busco a otimização através da digitalização de processos para reduzir o uso de papel e transporte físico.", weights: { "Tecnologia da Informação e Informática": 3, "Administração e Gestão": 3 } }
        ]
    },
    {
        id: 14,
        text: "Se você estivesse em uma fábrica de alimentos ou bebidas, onde preferiria atuar?",
        alternatives: [
            { text: "No laboratório químico testando valores nutricionais, conservação e controle bacteriológico.", weights: { "Alimentos e Bebidas": 4, "Química, Cerâmica e Plásticos": 4 } },
            { text: "Na automação das esteiras, sensores de peso e braços de empacotamento rápido.", weights: { "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Fabricação Mecânica e Mecânica Industrial": 3 } },
            { text: "No planejamento logístico de distribuição rápida para que o produto chegue fresco aos mercados.", weights: { "Logística e Transporte": 4, "Administração e Gestão": 2 } },
            { text: "No design visual e apelo gráfico das embalagens do produto.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4 } }
        ]
    },
    {
        id: 15,
        text: "Qual destas ciências ou disciplinas te desperta mais curiosidade natural?",
        alternatives: [
            { text: "Lógica matemática pura, programação estruturada e redes.", weights: { "Tecnologia da Informação e Informática": 4 } },
            { text: "Física mecânica, termodinâmica e estudo de forças ou fluidos.", weights: { "Fabricação Mecânica e Mecânica Industrial": 4, "Automotiva": 3, "Refrigeração e Climatização": 4 } },
            { text: "Química orgânica, propriedades dos materiais, polímeros e ligas metálicas.", weights: { "Química, Cerâmica e Plásticos": 4, "Metalurgia e Soldagem": 4 } },
            { text: "Comunicação, marketing institucional e psicologia organizacional.", weights: { "Administração e Gestão": 4 } }
        ]
    },
    {
        id: 16,
        text: "Imagine que você recebeu a missão de renovar um ambiente antigo. Qual sua abordagem?",
        alternatives: [
            { text: "Instalar sistemas inteligentes de iluminação automatizada e controle de temperatura.", weights: { "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Refrigeração e Climatização": 4 } },
            { text: "Projetar novos móveis planejados sob medida com estética moderna e otimização de espaço.", weights: { "Construção Civil e Design de Mobiliário": 4 } },
            { text: "Avaliar a estrutura das paredes, gessos, pinturas e revestimentos cerâmicos duráveis.", weights: { "Construção Civil e Design de Mobiliário": 4, "Química, Cerâmica e Plásticos": 3 } },
            { text: "Montar toda a infraestrutura de rede Wi-Fi de alta performance e cabeamento de dados.", weights: { "Tecnologia da Informação e Informática": 4 } }
        ]
    },
    {
        id: 17,
        text: "Na escola ou trabalho, as pessoas costumam te elogiar principalmente por qual motivo?",
        alternatives: [
            { text: "Sua criatividade visual, bom gosto estético ou habilidades de desenho.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4, "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": 4 } },
            { text: "Sua facilidade de expressão, liderança confiável e boa oratória.", weights: { "Administração e Gestão": 4 } },
            { text: "Sua extrema dedicação prática, foco manual e precisão milimétrica nas entregas físicas.", weights: { "Metalurgia e Soldagem": 4, "Fabricação Mecânica e Mecânica Industrial": 4, "Construção Civil e Design de Mobiliário": 3 } },
            { text: "Sua capacidade analítica veloz para desatar nós e resolver problemas complexos no computador.", weights: { "Tecnologia da Informação e Informática": 4 } }
        ]
    },
    {
        id: 18,
        text: "Se você fose estagiar em uma multinacional automotiva, em qual setor preferiria entrar?",
        alternatives: [
            { text: "Na linha de frente testando motores, diagnósticos eletrônicos e reparos mecânicos de ponta.", weights: { "Automotiva": 4, "Fabricação Mecânica e Mecânica Industrial": 3 } },
            { text: "Na simulação digital tridimensional da aerodinâmica e design externo do veículo.", weights: { "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 3, "Automotiva": 3, "Tecnologia da Informação e Informática": 3 } },
            { text: "No gerenciamento da cadeia de suprimentos global que traz as peças de fora do país.", weights: { "Logística e Transporte": 4, "Administração e Gestão": 3 } },
            { text: "Na auditoria das condições de segurança dos operários e controle de resíduos industriais.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4 } }
        ]
    },
    {
        id: 19,
        text: "Quando você pensa no seu futuro profissional diário, você se imagina:",
        alternatives: [
            { text: "Em um escritório corporativo dinâmico ou gerenciando negócios via home office.", weights: { "Administração e Gestão": 4 } },
            { text: "Em movimento pelas oficinas, indústrias, galpões logísticos ou prestando serviços externos de campo.", weights: { "Automotiva": 3, "Logística e Transporte": 3, "Refrigeração e Climatização": 4, "Metalurgia e Soldagem": 3 } },
            { text: "Trabalhando focado em computadores de alta potência, criando códigos, telas digitais ou artes.", weights: { "Tecnologia da Informação e Informática": 4, "Design Gráfico, Papel, Celulose, Gráfica e Editorial": 4 } },
            { text: "Dentro de laboratórios estéreis, focando em pesquisas, análises microscópicas ou testes biológicos.", weights: { "Química, Cerâmica e Plásticos": 4, "Alimentos e Bebidas": 4 } }
        ]
    },
    {
        id: 20,
        text: "Para você, qual a importância de um sistema de automação e robótica?",
        alternatives: [
            { text: "Substituir trabalhos perigosos de alto risco humano, gerando um ambiente laboral seguro.", weights: { "Meio Ambiente, Saúde e Segurança do Trabalho": 4 } },
            { text: "Aumentar exponencialmente a produtividade e a velocidade de distribuição de bens de consumo.", weights: { "Logística e Transporte": 4, "Administração e Gestão": 3 } },
            { text: "Integrar perfeitamente softwares de inteligência com hardware mecânico avançado.", weights: { "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": 4, "Tecnologia da Informação e Informática": 3 } },
            { text: "Dar repetibilidade perfeita a cortes, soldas e moldagens de peças industriais robustas.", weights: { "Fabricação Mecânica e Mecânica Industrial": 4, "Metalurgia e Soldagem": 4 } }
        ]
    }
];

const areaProfiles = {
    "Administração e Gestão": {
        description: "Seu perfil demonstra liderança natural, pensamento estratégico e facilidade para organizar pessoas e processos. Você tende a gostar de ambientes corporativos dinâmicos, planejamento de metas e tomada de decisões corporativas importantes.",
        skills: ["Liderança de equipes", "Gestão de tempo", "Análise de métricas", "Comunicação estratégica"],
        strengths: ["Visão de negócios", "Organização impecável", "Resolução de conflitos"],
        style: "Corporativo, estratégico e focado em resultados de mercado.",
        careers: ["Gestor Industrial", "Analista de Processos", "Supervisor Administrativo"],
        motivation: "Grandes líderes não gerenciam apenas processos, eles impulsionam pessoas a construir o futuro.",
        duration: "18 a 24 meses (Técnico)",
        shifts: "Manhã, Tarde e Noite"
    },
    "Alimentos e Bebidas": {
        description: "Seu perfil apresenta forte aptidão para o controle de qualidade, atenção cirúrgica a detalhes e interesse pelas ciências aplicadas à fabricação e conservação. Você valoriza métodos rígidos de higiene e processos químicos de transformação alimentar.",
        skills: ["Controle microbiológico", "Análise físico-química", "Gestão de receitas em escala"],
        strengths: ["Atenção extrema a normas", "Precisão analítica", "Foco em biossegurança"],
        style: "Científico, rigoroso e voltado à produção industrial sustentável.",
        careers: ["Técnico em Alimentos", "Supervisor de Qualidade", "Pesquisador de Produtos"],
        motivation: "Alimentar o mundo com tecnologia e segurança é uma das missões mais nobres da indústria moderna.",
        duration: "24 meses (Técnico)",
        shifts: "Manhã e Tarde"
    },
    "Automotiva": {
        description: "Seu perfil destaca paixão por mecânica avançada, sistemas de propulsão e diagnósticos eletrônicos veiculares. Você adora entender o funcionamento interno de máquinas complexas e resolver problemas práticos de engenharia automotiva.",
        skills: ["Diagnóstico computadorizado", "Mecânica automotiva de precisão", "Sistemas elétricos veiculares"],
        strengths: ["Raciocínio mecânico veloz", "Destreza manual técnica", "Solução de panes eletrônicas"],
        style: "Prático, tecnológico e focado em performance mecânica.",
        careers: ["Técnico Automotivo", "Especialista em Motores Elétricos", "Consultor Técnico Veicular"],
        motivation: "A mobilidade humana move o mundo, e você é a mente que mantém essa engrenagem acelerando na direção certa.",
        duration: "24 meses (Técnico)",
        shifts: "Tarde e Noite"
    },
    "Construção Civil e Design de Mobiliário": {
        description: "Seu perfil combina pensamento espacial, atenção a estruturas físicas e sensibilidade estética de design. Você gosta de ver projetos saírem do papel e tomarem formas sólidas, aliando funcionalidade, beleza e ergonomia de ambientes.",
        skills: ["Leitura de plantas e projetos", "Prototipagem de móveis", "Cálculo estrutural básico"],
        strengths: ["Visão espacial avançada", "Criatividade prática", "Foco no acabamento estético"],
        style: "Criativo, estrutural e voltado à execução de obras ou peças físicas duráveis.",
        careers: ["Projetista de Mobiliário", "Técnico em Edificações", "Designer de Interiores Industriais"],
        motivation: "Construir e moldar o espaço onde as pessoas vivem é transformar conceitos abstratos em realidade palpável.",
        duration: "18 a 24 meses (Técnico)",
        shifts: "Manhã e Noite"
    },
    "Design de Moda, Têxtil, Vestuário, Calçados e Joalheria": {
        description: "Você demonstra alta sensibilidade artística, vision estética refinada e forte conexão com a economia criativa. Seu perfil une a habilidade manual do corte e montagem com a inovação conceitual das tendências visuais industriais.",
        skills: ["Desenho de coleções", "Modelagem e prototipagem", "Estudo de materiais e texturas"],
        strengths: ["Criatividade disruptiva", "Senso de estética avançado", "Atenção a microdetalhes"],
        style: "Artístico, inovador e conectado às tendências globais de consumo.",
        careers: ["Designer de Produto/Moda", "Modelista Industrial", "Estilista Tecnológico"],
        motivation: "Vestir a sociedade com arte, ergonomia e sustentabilidade é ditar o ritmo cultural do futuro.",
        duration: "18 meses (Técnico)",
        shifts: "Tarde e Noite"
    },
    "Design Gráfico, Papel, Celulose, Gráfica e Editorial": {
        description: "Seu perfil indica forte apelo visual, criatividade voltada à comunicação de marcas e facilidade para criar embalagens e layouts inovadores. Você gosta da junção entre a arte vetorial digital e a engenharia de impressão industrial.",
        skills: ["Editoração visual digital", "Planejamento de embalagens", "Fechamento de arquivos industriais"],
        strengths: ["Pensamento altamente criativo", "Comunicação visual precisa", "Inovação editorial"],
        style: "Visual, conceitual e focado na experiência de comunicação do usuário.",
        careers: ["Designer Gráfico Industrial", "Técnico em Produção Gráfica", "Projetista de Embalagens"],
        motivation: "A imagem conecta ideias instantaneamente. Seu talento dá forma visual às maiores inovações do mercado.",
        duration: "18 meses (Técnico)",
        shifts: "Manhã e Tarde"
    },
    "Fabricação Mecânica e Mecânica Industrial": {
        description: "Seu perfil possui inclinação clara para a engenharia de precisão, usinagem, manuseio de ferramentas pesadas e funcionamento de plantas industriais. Você gosta de geometrias exatas, encaixes perfeitos e manutenção preventiva de motores robustos.",
        skills: ["Operação de tornos/CNC", "Metrologia industrial", "Manutenção mecânica preditiva"],
        strengths: ["Raciocínio lógico-espacial", "Resistência sob pressão", "Precisão milimétrica"],
        style: "Técnico, operacional pesado e altamente focado na precisão de fábrica.",
        careers: ["Técnico em Mecânica Industrial", "Programador de CNC", "Projetista Mecânico"],
        motivation: "As máquinas pesadas constroem a base de qualquer país, e você detém o controle dessa força motriz.",
        duration: "24 meses (Técnico)",
        shifts: "Manhã, Tarde e Noite"
    },
    "Logística e Transporte": {
        description: "Seu perfil demonstra foco em eficiência de fluxos, organização de redes de distribuição e paixão por otimização de tempo e espaço. Você é movido por estratégias inteligentes que garantem que insumos cruciais cheguem a seus destinos sem falhas.",
        skills: ["Gestão de cadeias de suprimentos", "Planejamento de rotas", "Controle inteligente de estoque"],
        strengths: ["Pensamento tático veloz", "Organização sistêmica", "Minimização de gargalos"],
        style: "Dinâmico, analítico e totalmente focado em prazos e inteligência de distribuição.",
        careers: ["Analista de Logística", "Supervisor de Supply Chain", "Coordenador de Frotas"],
        motivation: "A logística é as artérias da economia mundial. Conectar pontos distantes com eficiência cirúrgica é sua grande perícia.",
        duration: "18 meses (Técnico)",
        shifts: "Manhã e Noite"
    },
    "Mecatrônica, Sistemas de Automação, Energia e Eletrônica": {
        description: "Seu perfil representa a perfeita união entre hardware e software. Você adora robótica, programação de microcontroladores, circuitos elétricos e automação residencial ou industrial, arquitetando sistemas integrados e inteligentes.",
        skills: ["Programação de CLPs", "Montagem de circuitos eletrônicos", "Integração de sistemas robóticos"],
        strengths: ["Lógica abstrata aplicada", "Visão sistêmica multidisciplinar", "Inovação tecnológica"],
        style: "Altamente tecnológico, analítico e voltado ao futuro da automação.",
        careers: ["Técnico em Mecatrônica", "Programador de Robótica Industrial", "Técnico em Eletrônica/Automação"],
        motivation: "Dar inteligência às máquinas e automatizar o esforço humano é liderar a transformação da Indústria 4.0.",
        duration: "24 meses (Técnico)",
        shifts: "Manhã, Tarde e Noite"
    },
    "Meio Ambiente, Saúde e Segurança do Trabalho": {
        description: "Você apresenta um forte perfil voltado à proteção, conformidade com leis, sustentabilidade ecológica e segurança humana. Sua atenção é direcionada à mitigação de riscos laborais e preservação inteligente da natureza nos processos industriais.",
        skills: ["Mapeamento de riscos laborais", "Auditoria ambiental", "Aplicação de normas técnicas (NRs)"],
        strengths: ["Alto senso de responsabilidade", "Empatia socioemocional", "Atenção crítica a perigos"],
        style: "Humano, fiscalizador, preventivo e essencialmente sustentável.",
        careers: ["Técnico em Segurança do Trabalho", "Auditor Ambiental Industrial", "Consultor de Normas Regulamentadoras"],
        motivation: "Nenhum progresso industrial é válido se não proteger a vida humana e o planeta que habitamos. Você é essa voz consciente.",
        duration: "18 a 24 meses (Técnico)",
        shifts: "Tarde e Noite"
    },
    "Metalurgia e Soldagem": {
        description: "Seu perfil demonstra paixão pela transformação pesada de ligas metálicas, processos de fusão e união de estruturas através de soldagens especiais. Você tem inclinação para desafios de alta resistência física e detalhamento de estruturas metálicas complexas.",
        skills: ["Soldagem industrial (MIG/TIG)", "Ensaios destrutivos e não-destrutivos", "Metalografia aplicada"],
        strengths: ["Foco manual absoluto", "Conhecimento técnico de materiais", "Resistência técnica controlada"],
        style: "Prático, focado em materiais pesados e resistente a ambientes industriais exigentes.",
        careers: ["Inspetor de Soldagem", "Técnico em Metalurgia", "Especialista em Caldeiraria Industrial"],
        motivation: "Unir metais e moldar estruturas colossais sob condições extremas exige a destreza exata que você possui.",
        duration: "18 meses (Técnico)",
        shifts: "Noite"
    },
    "Química, Cerâmica e Plásticos": {
        description: "Seu perfil indica mente analítica, voltada para laboratórios, reações químicas moleculares e o desenvolvimento de novos polímeros ou revestimentos. Você gosta de entender a composição microscópica das coisas e suas aplicações práticas.",
        skills: ["Análise química laboratorial", "Formulações industriais", "Operação de reatores e polímeros"],
        strengths: ["Curiosidade científica de base", "Atenção a protocols de risco", "Foco em pesquisa de materiais"],
        style: "Científico, metodológico e fortemente focado em laboratórios industriais.",
        careers: ["Técnico em Química Industrial", "Analista de Polímeros e Plásticos", "Controlador de Processos Químicos"],
        motivation: "Mudar a estrutura da matéria para criar novos produtos é desvendar os segredos químicos que geram o futuro.",
        duration: "24 meses (Técnico)",
        shifts: "Manhã e Noite"
    },
    "Refrigeração e Climatização": {
        description: "Seu perfil demonstra grande aptidão para trabalhar com sistemas térmicos, controle de fluidos refrigerantes e termodinâmica. Você foca no equilíbrio térmico essencial para conservação de medicamentos, alimentos e conforto de grandes data centers.",
        skills: ["Instalação de chillers e VRFs", "Manutenção de compressores térmicos", "Cálculo de carga térmica"],
        strengths: ["Raciocínio diagnóstico prático", "Autonomia em serviços técnicos", "Domínio de fluidos e pressões"],
        style: "Técnico de campo, resolutivo e focado em engenharia térmica aplicada.",
        careers: ["Técnico em Climatização Industrial", "Projetista de Refrigeração Comercial", "Mecânico de Sistemas Térmicos"],
        motivation: "O controle térmico exato garante a viabilidade das maiores tecnologias e alimentos do planeta. Você domina esse equilíbrio.",
        duration: "18 meses (Técnico)",
        shifts: "Tarde e Noite"
    },
    "Tecnologia da Informação e Informática": {
        description: "Seu perfil demonstra fortíssima capacidade lógica, curiosidade tecnológica abstrata e agilidade para resolver problemas complexos por meio de computadores. Você tende a gostar de algoritmos, desenvolvimento de software, infraestruturas de redes e segurança digital.",
        skills: ["Lógica de programação estruturada", "Administração de redes e servidores", "Cibersegurança de dados"],
        strengths: ["Raciocínio abstrato hiperveloz", "Autodidatismo tecnológico", "Foco mental contínuo"],
        style: "Digital, inovador, altamente conectado e voltado ao ecossistema de software.",
        careers: ["Desenvolvedor de Software", "Analista de Redes e Infraestrutura", "Especialista em Segurança Cibernética"],
        motivation: "As linhas de código que você escreve hoje criam os sistemas virtuais inteligentes que governarão o mundo amanhã.",
        duration: "18 a 24 meses (Técnico)",
        shifts: "Manhã, Tarde e Noite"
    }
};

let currentQuestionIndex = 0;
let scores = {};

function initScores() {
    for (const area in areaProfiles) {
        scores[area] = 0;
    }
}

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');

const progressBar = document.getElementById('progress-bar');
const currentStageText = document.getElementById('current-stage');
const currentQuestionNumText = document.getElementById('current-question-num');
const questionText = document.getElementById('question-text');
const alternativesContainer = document.getElementById('alternatives-container');
const questionContainer = document.getElementById('question-container');

btnStart.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', restartQuiz);

function startQuiz() {
    initScores();
    currentQuestionIndex = 0;
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const stage = Math.floor(currentQuestionIndex / 4) + 1;
    currentStageText.textContent = stage;
    currentQuestionNumText.textContent = currentQuestionIndex + 1;
    
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    questionContainer.classList.remove('fade-in');
    void questionContainer.offsetWidth; 
    questionContainer.classList.add('fade-in');

    questionText.textContent = currentQuestion.text;
    alternativesContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    currentQuestion.alternatives.forEach((alt, idx) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.onclick = () => selectAlternative(alt.weights);
        button.innerHTML = `
            <span class="option-letter">${letters[idx]})</span>
            <span class="option-content">${alt.text}</span>
        `;
        alternativesContainer.appendChild(button);
    });
}

function selectAlternative(weights) {
    for (const area in weights) {
        if (scores.hasOwnProperty(area)) {
            scores[area] += weights[area];
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        progressBar.style.width = '100%';
        setTimeout(showResults, 400); 
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('fade-in');

    let winnerArea = "";
    let maxScore = -1;

    for (const area in scores) {
        if (scores[area] > maxScore) {
            maxScore = scores[area];
            winnerArea = area;
        }
    }

    let sortedAreas = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const profile = areaProfiles[winnerArea];

    document.getElementById('result-title').textContent = winnerArea;
    document.getElementById('result-description').textContent = profile.description;
    document.getElementById('text-style').textContent = profile.style;
    document.getElementById('motivational-message').textContent = `"${profile.motivation}"`;

    // INJETA OS DADOS DA OPÇÃO 3 (Duração e Turno)
    document.getElementById('course-duration').textContent = profile.duration;
    document.getElementById('course-shifts').textContent = profile.shifts;

    fillList('list-skills', profile.skills);
    fillList('list-strengths', profile.strengths);
    fillList('list-careers', profile.careers);

    // GRÁFICO DE AFINIDADE (OPÇÃO 2)
    const barsContainer = document.getElementById('affinity-bars-container');
    barsContainer.innerHTML = ''; 
    const top3Areas = sortedAreas.slice(0, 3);
    const totalTop3Points = scores[top3Areas[0]] + scores[top3Areas[1]] + scores[top3Areas[2]];

    top3Areas.forEach((area, index) => {
        let percentage = 0;
        if (totalTop3Points > 0) {
            percentage = Math.round((scores[area] / totalTop3Points) * 100);
        }
        
        if (index === 0) percentage = Math.max(percentage, 85);
        if (index === 1) percentage = Math.min(percentage, 75);
        if (index === 2) percentage = Math.min(percentage, 55);

        const row = document.createElement('div');
        row.className = 'affinity-row';
        row.innerHTML = `
            <div class="affinity-labels">
                <span class="area-name-label">${index + 1}. ${area}</span>
                <span class="area-percentage-label">${percentage}% Match</span>
            </div>
            <div class="affinity-bar-bg">
                <div class="affinity-bar-fill" id="bar-fill-${index}"></div>
            </div>
        `;
        barsContainer.appendChild(row);

        setTimeout(() => {
            const fillElement = document.getElementById(`bar-fill-${index}`);
            if (fillElement) fillElement.style.width = `${percentage}%`;
        }, 100 + (index * 150)); 
    });

    // OPERAÇÃO DO QR CODE AUTOMÁTICO
    document.getElementById('qrcode-box').innerHTML = ""; 
    new QRCode(document.getElementById("qrcode-box"), {
        text: "https://www.sp.senai.br", 
        width: 110,
        height: 110,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

function fillList(elementId, itemsArray) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = '';
    itemsArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    startScreen.classList.add('fade-in');
}