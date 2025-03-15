// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import notesMeImg from '../../assets/images/Notes-Me.png';
import homeDealImg from '../../assets/images/HomeDeal.png';
import visualiseImg from '../../assets/images/Visualise.png';
import ticTacToeImg from '../../assets/images/Tic-Tac-Toe.png';

const Projects = () => {
    return (
        <div id="Projects" className="projects">
            <h1 className="project-title">Projects</h1>
            <div className="projects-container">
                <ProjectCard
                    title="Notes-Me"
                    main="A dynamic notes application enabling users to create, edit, delete, and organize notes efficiently. Developed using Node.js, Express.js and MongoDB"
                    demoUrl=""
                    sourceCodeUrl="https://github.com/JIGYANSU-MISHRA/Notes-Me/tree/main"
                    image={notesMeImg}
                />
                <ProjectCard
                    title="HomeDeal"
                    main="A modern Real-Estate frontend website built with React.js, Tailwind CSS, and Vite, featuring smooth animations powered by AOS."
                    demoUrl="https://homedeal.vercel.app/"
                    sourceCodeUrl="https://github.com/JIGYANSU-MISHRA/HomeDeal"
                    image={homeDealImg}
                />
                <ProjectCard
                    title="VisuAlise"
                    main="AI-Powered Content Generation. Empowering creativity with AI. Transform text, images, and speech seamlessly using React.js"
                    demoUrl="https://visualise2ai.vercel.app/"
                    sourceCodeUrl="https://github.com/JIGYANSU-MISHRA/VisuAlise-AI-Powered-Content-Generation"
                    image={visualiseImg}
                />
                <ProjectCard
                    title="Tic-Tac-Toe"
                    main="It is a clean, responsive design and dynamic gameplay with two-player functionality. Developed using HTML, CSS, and JavaScript"
                    demoUrl="https://tic-tac-toe-2-game.vercel.app/"
                    sourceCodeUrl="https://github.com/JIGYANSU-MISHRA/Tic-Tac-Toe"
                    image={ticTacToeImg}
                />
            </div>
        </div>
    );
};

export default Projects;