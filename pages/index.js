import Image from "next/image.js";
import React from "react";
{/* Photos */}
import Github from "../public/github.svg";
import LinkedIn from "../public/linkedin.svg";
import PFP from "../public/pfp.svg";
{/* Skills */}
import JavaScript from "../public//skills/javascript.svg";
import TypeScript from "../public//skills/typescript.svg";
import CPP from "../public//skills/cpp.svg";
import HTML from "../public//skills/html5.svg";
import CSS from "../public//skills/css3.svg";
import Java from "../public//skills/java.svg";
import Tailwind from "../public//skills/tailwind.svg";
import ReactSVG from "../public//skills/react.svg";
import Node from "../public//skills/nodejs.svg";
import Git from "../public//skills/git.svg";
import Linux from "../public//skills/linux.svg";
import MongoDB from "../public//skills/mongodb.svg";
import FireBase from "../public//skills/firebase.svg";
import MySQL from "../public//skills/mysql.svg";


export default function Home() {
  return (
    <div id="bg" className="bg-background h-screen w-screen flex flex justify-center p-12">
      <div className="flex w-screen  gap-10 justify-center fade-in-5 duration-1000">
      <div className="flex flex-col gap-4  ">
        {/*Left (Welcome, Intro, Skills)*/}

        <div id="welcome" className="h-175 w-675 bg-primary flex justify-center p-5 rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-left-96 duration-300">
          <h1 className="">Welcome</h1>
        </div>

        <div id="intro" className="h-460 w-675 bg-primary flex flex-col text-center items-center p-5 rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-left-96 duration-500">
          <Image className="border-black border-4 rounded-full" src={PFP} alt="Profile Picture" height={150} width={150}></Image>
          <h1 className="">Intro</h1>
        </div>

        <div id="skills" className="w-675 bg-primary flex-1 flex-col gap-6 flex items-center p-5 rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-left-96 duration-700">
          <h1 className="">Skills</h1>
          <div className="float-left flex items-center gap-3 p-2 w-fit h-full">
            <h2>Languages:</h2>

            <Image src={JavaScript} alt="JavaScript" height={50} width={50} className=""></Image> 
            <Image src={TypeScript} alt="TypeScript" height={50} width={50} className=""></Image>
            <Image src={HTML} alt="HTML5" height={50} width={50} className=""></Image>
            <Image src={CSS} alt="CSS3" height={50} width={50} className=""></Image>
            <Image src={Java} alt="Java" height={50} width={50} className=""></Image>
            <Image src={CPP} alt="C++" height={50} width={50} className=""></Image>
            

          </div>
          <div className="float-left w-full flex items-center gap-3 p-2">
            <h2>Frameworks/Libraries:</h2>

            <Image src={Tailwind} alt="TailwindCSS" height={50} width={50} className=""></Image>
            <Image src={ReactSVG} alt="React" height={50} width={50} className=""></Image>


          </div>
          <div className="float-left w-full flex items-center gap-3 p-2">
            <h2>Tools:</h2>
            <Image src={Git} alt="Git" height={50} width={50} className=""></Image>
            <Image src={Node} alt="NodeJS" height={50} width={50} className=""></Image>
            <Image src={Linux} alt="Linux" height={50} width={50} className=""></Image>
            <Image src={MongoDB} alt="MongoDB" height={50} width={50} className=""></Image>
            <Image src={MySQL} alt="MySQL" height={50} width={50} className=""></Image>
            <Image src={FireBase} alt="FireBase" height={50} width={50} className=""></Image>

          </div>



        </div>

      </div>
      <div className="flex flex-col  gap-4 items-center ">
        {/*Right (Projects, Links)*/}

        <div id="see-all" className="h-175 w-675 bg-primary flex justify-center p-5 rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-top-96 duration-1000"> 
          <h1 className="">RESUME</h1> {/*TODO:Future Additions*/}
        </div>

        <div id="projects" className="flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-proj h-proj">
          <div id="project1" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-300">1</div>
          <div id="project2" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-500">2</div>
          <div id="project3" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-700">3</div>
          <div id="project4" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec animate-in ease-in fade-in-0 slide-in-from-right-96 duration-1000">4</div>
          </div>
        </div>

        <div id="links" className="w-proj bg-primary flex-1 flex justify-between px-14 items-center rounded-2xl shadow-sec animate-in ease-in fade-in-0 slide-in-from-bottom-96 duration-1000"> 
        <h2>
        <a className="flex items-center delay-300 duration-700 hover:scale-110" href="https://github.com/jardo5" target="_blank" rel="noreferrer noopener">
        {<Image src={Github} alt="Github"/>}
        github.com/jardo5
        </a>
        </h2>

        <h2>
        <a className="flex items-center delay-300 duration-700 hover:scale-105" href="https://www.linkedin.com/in/jarod-schupp/" target="_blank" rel="noreferrer noopener">
          {<Image src={LinkedIn} alt="LinkedIn"/>}
          linkedin.com/in/jarod-schupp/
        </a>
        </h2>
        </div>
      </div>
      </div>
    </div>
  )
}
