import Image from "next/image.js";
import React from "react";
import Head from "next/head";

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
    <>
    <Head>
      <title>Jarod Schupp</title>
    </Head>
    <div className="text-black">
      <div className="bg-background flex flex-col h-auto w-screen lg:flex-row">
        {/*Left (Welcome, Intro, Skills)*/}
        <div className="flex-col flex gap-4 p-4 h-screen lg:w-1/2">

          <div className="items-center flex-col flex bg-primary rounded-2xl p-4" id="welcome">
            <h1>Welcome!</h1>
          </div>

          <div className="items-center flex-col flex text-center gap-4 bg-primary rounded-2xl p-4" id="intro">
            <Image
              src={PFP}
              alt="Profile Picture"
              height={150}
              width={150}
            ></Image>
            <p>
              Hello! My name is Jarod. I am currently a student at WGU studying
              Software Development, with hopes of transferring from being a
              Fiber Optic Technician to a Software Engineer!
              I'm a hard working, problem solving, dedicated, person. Check out
              my resume or some of my projects.
            </p>
          </div>

          <div className="items-center flex-col flex bg-primary rounded-2xl p-4 h-screen" id="skills">
            <h1>Skills</h1>
            <h2>Languages:</h2>
            <div className="flex flex-row items-center gap-4">

              <div data-tip="JavaScript">
                <Image
                  src={JavaScript}
                  alt="JavaScript"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div data-tip="TypeScript">
                <Image
                  src={TypeScript}
                  alt="TypeScript"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div data-tip="HTML">
                <Image src={HTML} alt="HTML5" width={50} height={50}></Image>
              </div>

              <div data-tip="CSS">
                <Image src={CSS} alt="CSS3" width={50} height={50}></Image>
              </div>

              <div data-tip="C++">
                <Image src={CPP} alt="C++" width={50} height={50}></Image>
              </div>

              <div data-tip="Java/JavaFX">
                <Image src={Java} alt="Java" width={50} height={50}></Image>
              </div>

            </div>
            <h2>Frameworks/Libraries:</h2>
            <div className="flex flex-row items-center gap-4">

              <div data-tip="React">
                <Image
                  src={ReactSVG}
                  alt="React"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div data-tip="NextJS">
                <Image
                  src={NextJSSVG}
                  alt="NextJS"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div data-tip="JQuery">
                <Image src={JQuery} alt="JQuery" width={50} height={50}></Image>
              </div>

              <div data-tip="TailwindCSS">
                <Image
                  src={Tailwind}
                  alt="TailwindCSS"
                  width={50}
                  height={50}
                ></Image>
              </div>
            </div>
            <h2>Tools:</h2>
            <div className="flex flex-row items-center gap-4">

              <div data-tip="Git">
                <Image src={Git} alt="Git" width={50} height={50}></Image>
              </div>

              <div data-tip="Node">
                <Image src={Node} alt="Node" width={50} height={50}></Image>
              </div>

              <div data-tip="Linux">
                <Image src={Linux} alt="Linux" width={50} height={50}></Image>
              </div>

              <div data-tip="MongoDB">
                <Image
                  src={MongoDB}
                  alt="MongoDB"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div data-tip="MySQL">
                <Image src={MySQL} alt="MySQL" width={50} height={50}></Image>
              </div>

              <div data-tip="Firebase">
                <Image
                  src={FireBase}
                  alt="FireBase"
                  width={50}
                  height={50}
                ></Image>
              </div>
            </div>
          </div>
          
        </div>
        {/*Right (Resume, Projects, Socials)*/}
        <div className="flex-col flex gap-4 p-4 h-fit lg:w-1/2 lg:h-screen" id="resume/proj/socials">
          <div className="flex-col flex bg-primary rounded-2xl" id="resume">
            <div className="items-center flex-col flex p-4" data-tip="W.I.P">
              <button>Resume</button>
            </div>
          </div>

          <div className="flex-col flex bg-primary rounded-2xl h-auto basis-full" id="projects">
            <div className="grid grid-cols-2 grid-rows-2 self-center h-full p-4 gap-4 lg:h-full lg:w-full">
              <div className="flex items-center justify-center border h-36 w-36 lg:h-auto lg:w-auto" id="project1">1</div>
              <div className="flex items-center justify-center border h-36 w-36 lg:h-auto lg:w-auto" id="project2">2</div>
              <div className="flex items-center justify-center border h-36 w-36 lg:h-auto lg:w-auto" id="project3">3</div>
              <div className="flex items-center justify-center border h-36 w-36 lg:h-auto lg:w-auto" id="project4">4</div>
            </div>
          </div>

          <div className="flex-col flex bg-primary rounded-2xl"  id="links">
            <div className=" p-4 justify-around text-center flex flex-wrap lg:flex-row">
              <h1 className="h-fit w-full">Socials</h1>
            <div className="flex">
              <h2>
                <a className="flex flex-col items-center text-sm"
                  href="https://github.com/jardo5"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {<Image src={Github} width={100} height={50} alt="Github" />}
                </a>
              </h2>

              <h2>
                <a className="flex flex-col items-center text-sm"
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
                </a>
              </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
