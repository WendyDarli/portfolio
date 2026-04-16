const projectsModalContent = [
    {
        id: 1,
        name: 'Starfy',
        icon: 'src/assets/icons/starfy.svg',
        description: [
            'Built a Spotify-inspired music player that replicates core features of a modern streaming platform.',
            'The application uses a React frontend with TanStack Query for server-state management and caching, and a Node.js + Express backend following an MVC architecture. Authentication is handled using Express sessions stored in Redis with HTTP-only cookies.',
            'The system integrates the Spotify API and Deezer to fetch music data and provide audio playback, supporting features such as infinite pagination, playlist management, search, and full playback controls.',
            'This project was designed to practice building a scalable full-stack system using real-world patterns, including RESTful APIs, session-based authentication, caching strategies, and modular backend design.',
        ],
        media: [
            {
                id: 'vid_001',
                path: '/src/assets/projectsMedia/starfy/starfy-app-tour.mp4'

            },
            {
                id: 'img_001',
                path: '/src/assets/projectsMedia/starfy/starfy-1.png'

            },
            {
                id: 'img_002',
                path: '/src/assets/projectsMedia/starfy/starfy-2.png'

            },
            {
                id: 'img_003',
                path: '/src/assets/projectsMedia/starfy/starfy-3.png'

            },    
            {
                id: 'img_004',
                path: '/src/assets/projectsMedia/starfy/starfy-4.png'

            },                     

        ],
        techTags: ['JavaScript', 'React', 'Docker', 'Redis', 'Node.js', 'Express'],
        isOngithub: true,
        gitHubLink: 'https://github.com/WendyDarli/starfy',
        isDeployed: false,
        deployedLink: 'https://example.com',

    },
    {
        id: 2,
        name: 'Todo App',
        icon: 'src/assets/icons/task.png',
        description: [
        'Built a task management application with support for creating, editing, deleting and organizing tasks.',
        'The application is built with React, using component-based architecture and a single source of truth for state management.',
        'Features include filtering by priority and status, multiple view modes (including a drag-and-drop Kanban board), and theme toggling (light/dark).',
        'Data is persisted locally to maintain state across sessions, with responsive design and CSS animations enhancing user experience.',
        'The project emphasizes reusable components, clean state management, and frontend testing using React Testing Library and Vitest.',
        ],
        media: [
            {
                id: 'vid_001',
                path: '/src/assets/projectsMedia/todo-app/todo-video.mp4'

            },
            {
                id: 'img_001',
                path: '/src/assets/projectsMedia/todo-app/todo-1.png'

            },
            {
                id: 'img_002',
                path: '/src/assets/projectsMedia/todo-app/todo-2.png'

            },
            {
                id: 'img_003',
                path: '/src/assets/projectsMedia/todo-app/todo-3.png'

            },
            {
                id: 'img_004',
                path: '/src/assets/projectsMedia/todo-app/todo-4.png'

            },
            {
                id: 'img_005',
                path: '/src/assets/projectsMedia/todo-app/todo-5.png'

            },
            {
                id: 'img_006',
                path: '/src/assets/projectsMedia/todo-app/todo-6.png'

            },
            {
                id: 'img_007',
                path: '/src/assets/projectsMedia/todo-app/todo-7.png'

            },
                                                         

        ],
        techTags: ['JavaScript', 'React', 'CSS'],
        isOngithub: true,
        gitHubLink: 'https://github.com/WendyDarli/todo-react',
        isDeployed: false,
        deployedLink: 'https://example.com',
    },

    {
        id: 3,
        name: 'Notes Board',
        icon: 'src/assets/icons/notes.png',
        description: ['Built an interactive notes board that allows users to create and manipulate sticky notes visually.',
            'The application uses a Node.js + Express backend with a MongoDB database, structured in an MVC-inspired pattern with clear separation between routes, controllers, and data layer.',
            'On the frontend, user interactions (dragging, recoloring, rotating) update note styles dynamically and send updates via fetch requests (PUT) to the backend for persistence.',
            'The system enforces strict validation on incoming data, only accepting predefined style values to prevent client-side tampering and ensure data integrity.',
            'This project was designed to practice backend structure, request validation, and handling real-time UI interactions with persistent storage.',
        ],
        media: [
            {
                id: 'vid_001',
                path: 'src/assets/projectsMedia/notes-board/notes-board-video.mp4'

            },
            {
                id: 'img_001',
                path: 'src/assets/projectsMedia/notes-board/notes-board.png'

            },
            {
                id: 'img_002',
                path: 'src/assets/projectsMedia/notes-board/notes-board-create.png'

            },

        ],
        techTags: ['JavaScript', 'Pug', 'CSS', 'Node.js', 'Node.js', 'Express', 'MongoDB'],
        isOngithub: true,
        gitHubLink: 'https://github.com/WendyDarli/Notes-Board',
        isDeployed: false,
        deployedLink: 'https://example.com',

    },

]

export { projectsModalContent };