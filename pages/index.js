import Image from "next/image.js";
import React from "react";

{
  /* Photos */
}
import Github from "../public/github.png";
import LinkedIn from "../public/linkedin.png";
import PFP from "../public/pfp.png";
{
  /* Skills */
}
import JavaScript from "../public/skills/javascript.png";
import TypeScript from "../public/skills/typescript.png";
import CPP from "../public/skills/cpp.png";
import HTML from "../public/skills/html.png";
import CSS from "../public/skills/css3.png";
import Java from "../public/skills/java.png";
import Tailwind from "../public/skills/tailwind.png";
import ReactSVG from "../public/skills/react.png";
import Node from "../public/skills/nodejs.png";
import Git from "../public/skills/git.png";
import Linux from "../public/skills/linux.png";
import MongoDB from "../public/skills/mongodb.png";
import FireBase from "../public/skills/firebase.png";
import MySQL from "../public/skills/mysql.png";
import NextJSSVG from "../public/skills/nextjs.png";
import JQuery from "../public/skills/jquery.png";

export default function Home() {
  return (
    <div className="bg-background text-black flex justify-center p-14 2xl:flex-wrap">
      <div className="flex gap-10 justify-center fade-in-5 duration-1000 2xl:flex-col">
        <div className="flex flex-col gap-4 items-center">
          {/*Left (Welcome, Intro, Skills)*/}

          <div
            id="welcome"
            className="h-175 w-675 bg-primary flex justify-center p-5 rounded-2xl shadow-sec items-center animate-in ease-in fade-in-0 slide-in-from-left-96 duration-300 2xl:w-screen"
          >
            <h1 className="font-extrabold text-8xl">Welcome!</h1>
          </div>

          <div
            id="intro"
            className=" gap-6 h-80 w-675 bg-primary flex flex-col text-center items-center p-5 rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-left-96 duration-500 2xl:w-screen break-before-all"
          >
            <Image
              className="border-black border-2 rounded-full"
              src={PFP}
              alt="Profile Picture"
              height={150}
              width={150}
            ></Image>
            <p className="">Hello! My name is Jarod. I am currently a student at WGU studying Software Development, 
            with hopes of transferring from being a Fiber Optic Technician to a Software Engineer! <br />
             I'm a hard working, problem solving, dedicated, person. Check out my resume or some of my projects.</p>
          </div>

          <div
            id="skills"
            className="w-675 bg-primary flex-col gap-6 flex rounded-2xl shadow-sec animate-in ease-in item-center fade-in-0 slide-in-from-left-96 duration-700 2xl:w-screen">

            <h1 className="flex justify-center">Skills</h1>
            <div className="float-left flex items-center gap-3 p-2 ">
              <h2>Languages:</h2>

              <div className="tooltip" data-tip="JavaScript">
                <Image
                  src={JavaScript}
                  alt="JavaScript"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="TypeScript">
                <Image
                  src={TypeScript}
                  alt="TypeScript"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="HTML">
                <Image
                  src={HTML}
                  alt="HTML5"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="CSS">
                <Image
                  src={CSS}
                  alt="CSS3"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="C++">
                <Image
                  src={CPP}
                  alt="C++"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="Java/JavaFX">
                <Image
                  src={Java}
                  alt="Java"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>
            </div>
            <div className="float-left w-full flex items-center gap-3 p-2">
              <h2>Frameworks/Libraries:</h2>

              <div className="tooltip" data-tip="React">
                <Image
                  src={ReactSVG}
                  alt="React"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="NextJS">
                <Image
                  src={NextJSSVG}
                  alt="NextJS"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="JQuery">
                <Image
                  src={JQuery}
                  alt="JQuery"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="TailwindCSS">
                <Image
                  src={Tailwind}
                  alt="TailwindCSS"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>
            </div>
            <div className="float-left w-full flex items-center gap-3 p-2 relative">
              <h2>Tools:</h2>

              <div className="tooltip" data-tip="Git">
                <Image
                  src={Git}
                  alt="Git"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="Node">
                <Image
                  src={Node}
                  alt="Node"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="Linux">
                <Image
                  src={Linux}
                  alt="Linux"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="MongoDB">
                <Image
                  src={MongoDB}
                  alt="MongoDB"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="MySQL">
                <Image
                  src={MySQL}
                  alt="MySQL"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>

              <div className="tooltip" data-tip="Firebase">
                <Image
                  src={FireBase}
                  alt="FireBase"
                  width={50}
                  height={50}
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col h-screen w-full flex items-center gap-8">
          <div
            id="see-all"
            className="h-175 w-675 bg-primary flex justify-center items-center p-5 rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-top-96 duration-1000 2xl:w-screen"
          >
            <div className="tooltip tooltip-warning" data-tip="W.I.P">
            <button className="btn flex">Resume</button>
            </div>
          </div>

          <div id="projects" className="flex justify-center items-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-proj lg:grid-cols-1 lg:grid-rows-1 2xl:w-full">
              <div
                id="project1"
                className="h-56 rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-300 2xl:w-screen"
              >
                1
              </div>
              <div
                id="project2"
                className="h-56 rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-500 2xl:w-screen"
              >
                2
              </div>
              <div
                id="project3"
                className="h-56 rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-700 2xl:w-screen"
              >
                3
              </div>
              <div
                id="project4"
                className="h-56 rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-1000 2xl:w-screen"
              >
                4
              </div>
            </div>
          </div>

          <div
            id="links"
            className="w-proj bg-primary flex justify-between px-14 items-center rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-bottom-96 duration-1000 2xl:flex-col 2xl:gap-4 2xl:w-screen"
          >
            <h2>
              <a
                className="flex items-center delay-300 duration-700 hover:scale-110"
                href="https://github.com/jardo5"
                target="_blank"
                rel="noreferrer noopener"
              >
                {<Image src={Github} width={100} height={50} alt="Github" />}
                github.com/jardo5
              </a>
            </h2>

            <h2>
              <a
                className="flex items-center delay-300 duration-700 hover:scale-105"
                href="https://www.linkedin.com/in/jarod-schupp/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {
                  <Image
                    src={LinkedIn}
                    width={100}
                    height={100}
                    alt="LinkedIn"
                  />
                }
                linkedin.com/in/jarod-schupp/
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
