import Image from "next/image.js";
import React from "react";

export default function Home() {
  return (
    <div id="bg" className="bg-background h-screen w-screen flex flex-row p-4">
      <div className="flex w-screen h-full justify-center gap-96">
      <div className="flex flex-col gap-4 border">
        {/*Left (Welcome, Intro, Skills)*/}

        <div id="welcome" className="h-48 w-128 bg-white flex justify-center items-center rounded-xl">
          <h1 className="">Welcome</h1>
        </div>

        <div id="intro" className="h-96 w-96 bg-white flex justify-center items-center">
          <h1 className="">Intro</h1>
        </div>

        <div id="skills" className="h-96 w-96 bg-white flex justify-center items-center">
          <h1 className="">Skills</h1>
        </div>

      </div>
      <div className="flex flex-col border gap-4">
        {/*Right (Projects, Links)*/}

        <div id="see-all" className="h-96 w-96 bg-white flex justify-center items-center"> 
          <h1 className="">See All</h1>
        </div>

        <div id="projects" className="h-96 w-96 bg-white flex justify-center items-center gap-7">
          <div className="grid grid-cols-2 grid-rows-2 p-8 gap-10">
          <div id="project1" className="h-12 w-12 bg-black text-white">1</div>
          <div id="project2" className="h-12 w-12 bg-black text-white">2</div>
          <div id="project3" className="h-12 w-12 bg-black text-white">3</div>
          <div id="project4" className="h-12 w-12 bg-black text-white">4</div>
          </div>
        </div>

        <div id="links" className="h-96 w-96 bg-white flex justify-center items-center"> 
        <h1 className="">Links</h1>
        </div>


      </div>
      </div>
    </div>
  )
}
