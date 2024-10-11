import ProjectCard from "./ProjectCard";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import WeatherImg from "../assets/Weather-pic 2.svg";
import TaskImg from "../assets/Task-page.svg";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useGSAP(() => {

    gsap.from(".project-head", {
      opacity: 0,
      y: -400,
      duration: 2,
      scrollTrigger: {
        trigger: ".project-head",
        start: 'top +=300',
        end: '+=350',
        scrub: 2,
      },
    });
  });
  return (
    <div className="flex flex-col px-5 py-28 lg:px-10 xl:px-10  w-full bg-blue-300 overflow-hidden h-dvh ">
<div className="project-head flex flex-col items-center">
            <p className="font-['Goldman'] text-2xl font-bold text-gray-800">See My</p>
            <p className="font-['Goldman'] text-5xl font-bold text-rose-400">Projects</p>
            </div>
            <div className="project-sec flex flex-wrap gap-5 py-10 justify-center">
<ProjectCard ProjectName="Weather App"  ProjectImg={WeatherImg} GitHubLink="https://github.com/MOHDNEHALKHAN/Weather-App" LiveLink="https://weather-app-rmx8.onrender.com/"/>
<ProjectCard ProjectName="Todolist App"  ProjectImg={TaskImg} GitHubLink="https://github.com/MOHDNEHALKHAN/Todolist-app" LiveLink="https://todolist-app-flame-three.vercel.app/"/>
            </div>

    </div>
  )
}

export default Project