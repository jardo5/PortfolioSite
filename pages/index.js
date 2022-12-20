import Image from "next/image.js";
import React from "react";
import Git from "../public/git.svg";
import LinkedIn from "../public/linkedin.svg";

export default function Home() {
  return (
    <div id="bg" className="bg-background h-screen w-screen flex justify-center p-12">
      <div className="flex w-screen  gap-10 justify-center  ">
      <div className="flex flex-col gap-4  ">
        {/*Left (Welcome, Intro, Skills)*/}

        <div id="welcome" className="h-175 w-675 bg-primary flex justify-center p-5 rounded-2xl shadow-sec">
          <h1 className="">Welcome</h1>
        </div>

        <div id="intro" className="h-460 w-675 bg-primary flex justify-center p-5 rounded-2xl shadow-sec">
          <h1 className="">Intro</h1>
        </div>

        <div id="skills" className="w-675 bg-primary flex-1 flex justify-center p-5 rounded-2xl shadow-sec">
          <h1 className="">Skills</h1>
        </div>

      </div>
      <div className="flex flex-col  gap-4 items-center ">
        {/*Right (Projects, Links)*/}

        <div id="see-all" className="h-175 w-675 bg-primary flex justify-center p-5 rounded-2xl shadow-sec"> 
          <h1 className="">See All</h1>
        </div>

        <div id="projects" className="flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-proj h-proj">
          <div id="project1" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec">1</div>
          <div id="project2" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec">2</div>
          <div id="project3" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec">3</div>
          <div id="project4" className="rounded-2xl items-center justify-center flex bg-primary shadow-sec">4</div>
          </div>
        </div>

        <div id="links" className="w-proj bg-primary flex-1 flex justify-between px-14 items-center rounded-2xl shadow-sec"> 
        <h2 className="items-center flex"> 
        {<Image src={Git} alt="Git"/>}
        github.com/jardo5
        </h2>

        <h2 className= "items-center flex">
          {<Image src={LinkedIn} alt="LinkedIn"/>}
          linkedin.com/in/jarod-schupp/
        </h2>
        </div>


      </div>
      </div>
    </div>
  )
}
