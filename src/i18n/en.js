const en = {
  header: {
    about: "about",
    projects: "projects",
    contact: "contact",
    resume: "resume",
    resumeLink: "https://docs.google.com/document/d/1Uk-ZJ1ggssyOlnRZqzxP63PaTK2t8uCzsaJD8wP2urU/edit?usp=sharing"
  },

  "main-page": {
    hello: "Hello",
    "intro-name": "I'm Wendy",
    role: "Backend Developer",
    development: "Development",
  },

  language: {
    language: "LANGUAGE",
  },

  about: {
    "about_me": "about me",
    "about-me": "About me",
    desc: `I’m a final-year Software Engineering student seeking a software development internship.
      I focus on web development, working with technologies such as React, JavaScript, Node.js, and RESTful APIs.
      Most of my learning comes from building and iterating on projects, breaking things, fixing them, and improving the structure along the way.
      I’m particularly interested in backend systems, API design, and writing clean, maintainable code.`,
  },

  "projects-card": {
    more: "learn more",

    project1: {
      desc: "Full-stack music player inspired by Spotify, using React, TanStack Query and Node.js, with session-based authentication, caching and RESTful APIs.",
    },

    project2: {
      desc: "Task management application with drag-and-drop workflows, dynamic filters and persistent state, built with reusable components and component testing.",
    },

    project3: {
      desc: "Notes board with real-time UI interactions, consistent validation and scalable backend architecture.",
    },
  },

  "projects-modal": {
    projects: "Projects",

    project1: {
      desc: [
        "Built a Spotify-inspired music player that replicates core features of a modern streaming platform.",
        "The application uses a React frontend with TanStack Query for server-state management and caching, and a Node.js + Express backend following an MVC architecture. Authentication is handled using Express sessions stored in Redis with HTTP-only cookies.",
        "The system integrates the Spotify API and Deezer to fetch music data and provide audio playback, supporting features such as infinite pagination, playlist management, search, and full playback controls.",
        "Added distributed tracing using OpenTelemetry and Grafana Tempo, enabling trace correlation (trace/span IDs) and tail-based sampling for errors and high-latency requests.",
        "This project was designed to practice building a scalable full-stack system using real-world patterns, including RESTful APIs, session-based authentication, caching strategies, and modular backend design.",
      ],
    },

    project2: {
      desc: [
        "Built a task management application with support for creating, editing, deleting and organizing tasks.",
        "The application is built with React, using component-based architecture and a single source of truth for state management.",
        "Features include filtering by priority and status, multiple view modes (including a drag-and-drop Kanban board), and theme toggling (light/dark).",
        "Data is persisted locally to maintain state across sessions, with responsive design and CSS animations enhancing user experience.",
        "The project emphasizes reusable components, clean state management, and frontend testing using React Testing Library and Vitest.",
      ],
    },

    project3: {
      desc: [
        "Built a Spotify-inspired music player that replicates core features of a modern streaming platform.",
        "The application uses a React frontend with TanStack Query for server-state management and caching, and a Node.js + Express backend following an MVC architecture. Authentication is handled using Express sessions stored in Redis with HTTP-only cookies.",
        "The system integrates the Spotify API and Deezer to fetch music data and provide audio playback, supporting features such as infinite pagination, playlist management, search, and full playback controls.",
        "This project was designed to practice building a scalable full-stack system using real-world patterns, including RESTful APIs, session-based authentication, caching strategies, and modular backend design.",
      ],
    },

    buttons: {
      github: "View code on GitHub",
      deploy: "View Demo",
    },
  },

  contact: {
    contact: "contact",
    desc: "I’m currently available for hiring, internships, and freelance work. If you have a project, opportunity, or just a question, feel free to reach out.",
  },
};

export default en;