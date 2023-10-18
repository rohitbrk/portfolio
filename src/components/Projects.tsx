import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideEffect from "./SlideEffect";

const projects = [
  {
    name: "Chatty - RealtimeChat",
    description:
      "Built with MERN. Supports Multimedia (Images, Videos etc) sharing too.",
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
    description: "Make Video Calls with ease. Supports ScreenSharing.",
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
      "Just A Fun App which will predict the nationality based on person's name",
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
                      className="rounded-xl shadow-xl hover:opacity-90 bg-white"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap flex-row justify-start md:justify-start">
                      {project.tags.map((tag) => {
                        return (
                          <p
                            key={tag}
                            className="px-4 py-2 mr-2 mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                          >
                            {tag}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
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
