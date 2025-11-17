import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import homeDealImg from '../../assets/images/HomeDeal.png';
import visualiseImg from '../../assets/images/Visualise.png';
import healthloopImg from '../../assets/images/Healthloop.png';
import weatherImg from '../../assets/images/Weather.png';
import ryytImg from '../../assets/images/Ryyt.png';
import businessOrbitImg from '../../assets/images/BusinessOrbit.png';
import patherKhonjeImg from '../../assets/images/PatherKhonje.png';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Business Orbit",
            main: "Business Orbit is an AI-powered professional networking platform that simplifies business connections and accelerates growth. The platform uses intelligent matching to connect professionals with relevant opportunities, enabling users to join chapters, participate in secret groups, attend events, and engage through a social feed. With real-time chat, profile management, and verified networks, Business Orbit provides a privacy-first environment for professionals to discover curated connections, collaborate with leaders, and expand their business network efficiently.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Socket.io", "Cloudinary", "AWS", "Passport.js", "SendGrid", "AI Integration"],
            demoUrl: "https://businessorbit.org/",
            sourceCodeUrl: "",
            image: businessOrbitImg,
            category: "web"
        },
        {
            id: 2,
            title: "Ryyt",
            main: "Ryyt is a modern cross-platform mobile application built with React Native and TypeScript, delivering a seamless user experience across both iOS and Android platforms. The app features an intuitive news feed interface with swipe-based interactions, allowing users to discover and engage with trending content. With real-time data synchronization capabilities, Ryyt ensures users always have access to the latest news and updates. The application includes secure authentication with phone number OTP verification and Google Sign-In, creating a smooth onboarding experience. Key features include personalized news feeds, interactive comments, like and save functionality, search capabilities, push notifications via Firebase Cloud Messaging, user profile management, and interest-based content curation. The app is optimized for performance with smooth animations, gesture-based navigation, and includes robust error handling with Firebase Crashlytics integration.",
            techStack: ["React Native", "TypeScript", "Firebase", "Expo", "Axios"],
            demoUrl: "https://www.ryyt.in/",
            sourceCodeUrl: "",
            image: ryytImg,
            category: "mobile"
        },
        {
            id: 3,
            title: "Pather Khonje",
            main: "Pather Khonje is a premium travel and tour company website that offers extraordinary travel experiences and destinations. The platform provides users with comprehensive information about travel packages, hotel bookings, and tour destinations. Featuring a stunning hero section with scenic imagery and intuitive navigation, Pather Khonje creates an immersive experience that inspires wanderlust. The website includes sections for exploring packages, finding hotels, viewing galleries, and easy contact options. With its elegant design and user-friendly interface, Pather Khonje makes planning your next adventure seamless and enjoyable.",
            techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Responsive Design"],
            demoUrl: "https://www.patherkhonje.com/",
            sourceCodeUrl: "",
            image: patherKhonjeImg,
            category: "web"
        },
        {
            id: 4,
            title: "HomeDeal",
            main: "HomeDeal is a modern and intuitive real estate platform designed to revolutionize property browsing and discovery. Built with cutting-edge web technologies, it offers users a seamless experience to explore properties, view detailed listings, and connect with real estate professionals. The platform features smooth animations, responsive design, and an elegant user interface that makes property hunting enjoyable and efficient. With its clean architecture and optimized performance, HomeDeal provides fast loading times and smooth navigation across all devices.",
            techStack: ["React.js", "Tailwind CSS", "Vite"],
            demoUrl: "https://homedeal.vercel.app/",
            sourceCodeUrl: "https://github.com/JIGYANSU-MISHRA/HomeDeal",
            image: homeDealImg,
            category: "web"
        },
        {
            id: 5,
            title: "VisuAlise",
            main: "VisuAlise is an innovative AI-powered content generation platform that empowers users to transform and create content across multiple formats. The application leverages advanced artificial intelligence to help users generate text, transform images, and convert speech seamlessly. With its intuitive React.js interface, VisuAlise makes complex AI operations accessible to everyone. The platform supports various content creation workflows, enabling users to enhance their creativity and productivity through intelligent automation and transformation tools.",
            techStack: ["React.js", "AI APIs", "JavaScript"],
            demoUrl: "https://visualise2ai.vercel.app/",
            sourceCodeUrl: "https://github.com/JIGYANSU-MISHRA/VisuAlise-AI-Powered-Content-Generation",
            image: visualiseImg,
            category: "web"
            
        },
        {
            id: 6,
            title: "Weather-App",
            main: "A fully responsive weather application that provides comprehensive weather information for any city worldwide. The app displays current weather conditions including temperature, humidity, wind speed, and atmospheric pressure. It also features an extended 5-day forecast to help users plan ahead. The application includes a beautiful dark/light mode toggle for comfortable viewing in any lighting condition. Built with modern web technologies, it offers real-time weather updates and an intuitive interface that makes checking weather conditions quick and easy.",
            techStack: ["React.js", "CSS3", "Weather API"],
            demoUrl: "https://jigyansu-weather-app.vercel.app/",
            sourceCodeUrl: "https://github.com/JIGYANSU-MISHRA/Weather-app",
            image: weatherImg,
            category: "web"
        },
        {
            id: 7,
            title: "Healthloop",
            main: "HealthLoop is a comprehensive doctor appointment booking system that simplifies healthcare management for both patients and medical professionals. The platform enables users to easily search for doctors, view available time slots, book appointments, and manage their medical schedules efficiently. With its user-friendly interface and robust state management, HealthLoop ensures a smooth booking experience. The system includes features like appointment reminders, doctor profiles, and seamless navigation, making healthcare accessibility more convenient for everyone.",
            techStack: ["Next.js", "Tailwind CSS", "Context API"],
            demoUrl: "https://healthloop.vercel.app/",
            sourceCodeUrl: "https://github.com/JIGYANSU-MISHRA/HealthLoop",
            image: healthloopImg,
            category: "web"
        }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? [...projects].sort((a, b) => a.id - b.id)
        : projects.filter(project => project.category === activeFilter).sort((a, b) => a.id - b.id);

    return (
        <div id="Projects" className="projects">
            <h1 className="projects-heading">Projects</h1>
            
            <div className="projects-filter">
                <button 
                    className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    All
                </button>
                <button 
                    className={`filter-button ${activeFilter === 'web' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('web')}
                >
                    Web App
                </button>
                <button 
                    className={`filter-button ${activeFilter === 'mobile' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('mobile')}
                >
                    Mobile App
                </button>
            </div>

            <div className="projects-container">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        main={project.main}
                        techStack={project.techStack}
                        demoUrl={project.demoUrl}
                        sourceCodeUrl={project.sourceCodeUrl}
                        image={project.image}
                        category={project.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;