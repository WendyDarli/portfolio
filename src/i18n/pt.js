const pt = {
  header: {
    start: "começo",
    about: "sobre",
    projects: "projetos",
    contact: "contato",
    resume: "currículo",
  },

  "main-page": {
    hello: "Olá",
    "intro-name": "Sou Wendy",
    role: "Desenvolvedora Back-end",
    development: "Desenvolvimento",
  },

  language: {
    language: "IDIOMA",
  },

  about: {
    "about_me": "sobre mim",
    "about-me": "Sobre mim",
    desc: `Sou estudante de Engenharia de Software no último ano, em busca de um estágio em desenvolvimento de software. 
              Foco em desenvolvimento web, trabalhando com tecnologias como React, JavaScript, Node.js e APIs RESTful. 
              Grande parte do meu aprendizado vem da construção e evolução de projetos, quebrando coisas, corrigindo erros e melhorando a estrutura ao longo do processo. 
              Tenho um interesse especial em sistemas backend, design de APIs e na escrita de código limpo e escalável.`,
  },

  "projects-card": {
    more: "saiba mais",
    project1: {
      desc: "Player de música full-stack inspirado no Spotify, utilizando React, TanStack Query e Node.js, com autenticação por sessão, cache e APIs RESTful.",
    },
    project2: {
      desc: "Aplicação de gerenciamento de tarefas com fluxos de trabalho por arrastar e soltar, filtros dinâmicos e state persistente, construída com componentes reutilizáveis e testes de componente.",
    },
    project3: {
      desc: "Quadro de notas com interações de interface em tempo real, validação consistente e arquitetura de backend escalável.",
    },
  },

  "projects-modal": {
    projects: "Projetos",

    project1: {
      desc: [
        "Construí um player de música inspirado no Spotify que replica funcionalidades principais de uma plataforma moderna de streaming.",
        "A aplicação usa um frontend em React com TanStack Query para gerenciamento de estado do servidor e cache, e um backend em Node.js + Express seguindo uma arquitetura MVC. A autenticação é feita com sessões Express armazenadas no Redis com cookies HTTP-only.",
        "O sistema integra a API do Spotify e o Deezer para buscar dados musicais e fornecer reprodução de áudio, suportando funcionalidades como paginação infinita, gerenciamento de playlists, busca e controles completos de reprodução.",
        "Este projeto foi desenvolvido para praticar a construção de um sistema full-stack escalável usando padrões do mundo real, incluindo APIs RESTful, autenticação por sessão, estratégias de cache e arquitetura modular de backend.",
      ],
    },

    project2: {
      desc: [
        "Construí uma aplicação de gerenciamento de tarefas com suporte para criar, editar, excluir e organizar tarefas.",
        "As funcionalidades incluem filtragem por prioridade e status, múltiplos modos de visualização (incluindo um quadro Kanban com drag-and-drop) e alternância de tema (claro/escuro).",
        "Os dados são persistidos localmente para manter o estado entre sessões, com design responsivo e animações em CSS melhorando a experiência do usuário.",
        "O projeto enfatiza componentes reutilizáveis, gerenciamento limpo de estado e testes de frontend usando React Testing Library e Vitest.",
      ],
    },

    project3: {
      desc: [
        "Construí um quadro de notas interativo que permite aos usuários criar e manipular post-its visualmente.",
        "A aplicação utiliza um backend em Node.js + Express com banco de dados MongoDB, estruturado em um padrão inspirado no MVC, com clara separação entre rotas, controllers e camada de dados.",
        "No frontend, as interações do usuário (arrastar, recolorir, rotacionar) atualizam os estilos das notas dinamicamente e enviam atualizações via requisições fetch (PUT) para o backend para persistência.",
        "O sistema aplica validação rigorosa nos dados recebidos, aceitando apenas valores de estilo pré-definidos para evitar manipulação do cliente e garantir integridade dos dados.",
        "Este projeto foi desenvolvido para praticar estrutura de backend, validação de requisições e manipulação de interações de UI em tempo real com armazenamento persistente.",
      ],
    },

    buttons: {
      github: "Ver código no GitHub",
      deploy: "Ver demo",
    },
  },

  contact: {
    contact: "contato",
    desc: "Atualmente disponível para contratação, estágios e trabalhos freelance. Se você tiver um projeto, oportunidade ou apenas uma dúvida, fique à vontade para entrar em contato.",
  },
};

export default pt;