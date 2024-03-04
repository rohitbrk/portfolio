"use client";
import React from "react";
import Image from "next/image";
import SlideEffect from "./SlideEffect";
import TechCard from "./common/TechCard";
import ProjectLinks from "./common/ProjectLinks";

const projects = [
  {
    name: "Mininsta - Social Media App",
    description:
      "Built using MERN stack. Create and share posts. Like other's posts. View communities.",
    image: "/project-mininsta.png",
    github: "https://github.com/rohitbrk/mininsta",
    link: "https://mininsta.vercel.app/",
    tags: [
      "ReactJs (TS)",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "Mongoose",
      "TailwindCSS",
      "Auth0",
    ],
  },
  {
    name: "Webtor - Offline web editor",
    description:
      "Playground for Web technologies. Supports IntelliSense code completion, syntax highlighting and many modern editor features",
    image: "/project-webtor.png",
    github: "https://github.com/rohitbrk/webtor",
    link: "https://webtor-app.vercel.app/",
    tags: ["ReactJs (TS)"],
  },
  {
    name: "Ticket Up - Kanban board",
    description:
      "Manage tasks with ease. Create containers and items. Supports drag and drop",
    image: "/project-ticket-up.png",
    github: "https://github.com/rohitbrk/ticket-up",
    link: "https://ticket-up-app.vercel.app/",
    tags: [
      "ReactJs (TS)",
      "DND-kit",
      "radix-ui",
      "TailwindCSS",
      "framer-motion",
    ],
  },
  {
    name: "Chatty - RealtimeChat",
    description:
      "Built using MERN stack. Supports multimedia (Images, Videos etc) sharing.",
    image: "/project-chatty.png",
    github: "https://github.com/rohitbrk/chatty",
    link: "https://chatty-easy-app.vercel.app/",
    tags: [
      "ReactJs (TS)",
      "WebSockets",
      "Socket.io",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "Mongoose",
      "TailwindCSS",
    ],
  },
  {
    name: "VidChat - Video Call app",
    description: "Make video calls with ease. Supports screenSharing.",
    image: "/project-vidchat.png",
    github: "https://github.com/rohitbrk/vidchat",
    link: "https://vidchat-black.vercel.app/",
    tags: ["ReactJs (TS)", "WebRTC", "PeerJs", "TailwindCSS"],
  },
  {
    name: "ToDo - Redux - CRUD",
    description: "Manage todos with ease !",
    image: "/project-todos-redux.png",
    github: "https://github.com/rohitbrk/todo-app-redux",
    link: "https://todo-app-redux-amber.vercel.app/",
    tags: ["ReactJs (TS)", "Redux", "CRUD", "TailwindCSS"],
  },
  {
    name: "Predict Nationality",
    description:
      "Just A Fun app which will predict the nationality based on person's name",
    image: "/project-predict-nationality.png",
    github: "https://github.com/rohitbrk/prediction-app-nextjs13",
    link: "https://prediction-app-nextjs.vercel.app/",
    tags: ["NextJs-13", "TailwindCSS"],
  },
  {
    name: "Hotel Menu",
    description: "Simple Hotel Menu page using ReactJs",
    image: "/project-hotel-menu.png",
    github: "https://github.com/rohitbrk/Hotel-Menu-Reactjs",
    link: "https://hotel-menu-using-react.netlify.app/",
    tags: ["ReactJs"],
  },
  {
    name: "Classic Snake Game",
    description: "Snake game using ReactJs",
    image: "/project-snake-game.png",
    github: "https://github.com/rohitbrk/Snake-Game-Reactjs",
    link: "https://snake-game-using-react.netlify.app/",
    tags: ["ReactJs"],
  },
  {
    name: "Flash Cards",
    description: "Solve simple math problems presented to you in cards",
    image: "/project-flash-cards.png",
    github: "https://github.com/rohitbrk/Flash-Cards-Game-Reactjs",
    link: "https://flash-cards-game-using-react.netlify.app/",
    tags: ["ReactJs"],
  },
  {
    name: "Classic TicTacToe",
    description: "Classic TicTacToe",
    image: "/project-tictactoe.png",
    github: "https://github.com/rohitbrk/TicTacToe-Game-Reactjs",
    link: "https://tictactoe-using-reactjs.netlify.app/",
    tags: ["ReactJs"],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <SlideEffect offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2 flex justify-center items-center">
                    <Image
                      src={project.image}
                      alt="Project Image"
                      width={1000}
                      height={1000}
                      className="cursor-pointer rounded-xl shadow-xl bg-white hover:scale-150 duration-500 transition-transform"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap flex-row justify-start md:justify-start">
                      {project.tags.map((tag) => (
                        <TechCard key={tag} item={tag} />
                      ))}
                    </div>
                    <ProjectLinks github={project.github} link={project.link} />
                  </div>
                </div>
              </SlideEffect>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
