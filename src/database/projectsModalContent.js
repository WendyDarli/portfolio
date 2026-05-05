import starfyIcon from '../assets/icons/starfy.svg';
import taskIcon from '../assets/icons/task.png';
import notesIcon from '../assets/icons/notes.png';

// Import media files
import starfyTour from '../assets/projectsMedia/starfy/starfy-app-tour.mp4';
import starfy1 from '../assets/projectsMedia/starfy/starfy-1.png';
import starfy2 from '../assets/projectsMedia/starfy/starfy-2.png';
import starfy3 from '../assets/projectsMedia/starfy/starfy-3.png';
import starfy4 from '../assets/projectsMedia/starfy/starfy-4.png';

import todoVideo from '../assets/projectsMedia/todo-app/todo-video.mp4';
import todo1 from '../assets/projectsMedia/todo-app/todo-1.png';
import todo2 from '../assets/projectsMedia/todo-app/todo-2.png';
import todo3 from '../assets/projectsMedia/todo-app/todo-3.png';
import todo4 from '../assets/projectsMedia/todo-app/todo-4.png';
import todo5 from '../assets/projectsMedia/todo-app/todo-5.png';
import todo6 from '../assets/projectsMedia/todo-app/todo-6.png';
import todo7 from '../assets/projectsMedia/todo-app/todo-7.png';

import notesBoardVideo from '../assets/projectsMedia/notes-board/notes-board-video.mp4';
import notesBoard from '../assets/projectsMedia/notes-board/notes-board.png';
import notesBoardCreate from '../assets/projectsMedia/notes-board/notes-board-create.png';

const projectsModalContent = [
    {
        id: 1,
        name: 'Starfy',
        icon: starfyIcon,
        description: 'projects-modal.project1.desc',
        media: [
            {
                id: 'vid_001',
                path: starfyTour

            },
            {
                id: 'img_001',
                path: starfy1

            },
            {
                id: 'img_002',
                path: starfy2

            },
            {
                id: 'img_003',
                path: starfy3

            },    
            {
                id: 'img_004',
                path: starfy4

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
        icon: taskIcon,
        description: 'projects-modal.project2.desc',
        media: [
            {
                id: 'vid_001',
                path: todoVideo

            },
            {
                id: 'img_001',
                path: todo1

            },
            {
                id: 'img_002',
                path: todo2

            },
            {
                id: 'img_003',
                path: todo3

            },
            {
                id: 'img_004',
                path: todo4

            },
            {
                id: 'img_005',
                path: todo5

            },
            {
                id: 'img_006',
                path: todo6

            },
            {
                id: 'img_007',
                path: todo7

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
        icon: notesIcon,
        description: 'projects-modal.project3.desc',
        media: [
            {
                id: 'vid_001',
                path: notesBoardVideo

            },
            {
                id: 'img_001',
                path: notesBoard

            },
            {
                id: 'img_002',
                path: notesBoardCreate

            },

        ],
        techTags: ['JavaScript', 'Pug', 'CSS', 'Node.js', 'Express', 'MongoDB'],
        isOngithub: true,
        gitHubLink: 'https://github.com/WendyDarli/Notes-Board',
        isDeployed: false,
        deployedLink: 'https://example.com',

    },

]

export { projectsModalContent };