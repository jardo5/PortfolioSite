import Image from "next/image.js";
import React from "react";

export default function Home() {
  return (
    <div id="layout" className="grid grid-cols-12 grid-rows-12 h-screen w-screen p-12 bg-black">

      <div id="about" className="bg-fenway bg-right bg-cover bg-no-repeat h-full w-full flex justify justify-center border-2 border-black col-span-7 row-span-4">
        <div className="text-6xl flex items-center">
          <h1 className="text-white"><u>Welcome</u></h1>
        </div>
      </div>

      <div id="resume" className="bg-stairs bg-right bg-cover bg-no-repeat h-full w-full flex justify justify-center border-2 border-black col-span-5 row-span-10">
      <div className="text-6xl flex items-center">
          <h1 className="text-white"><u>Resume</u></h1>
        </div>
      </div>

      <div id="intro" className="flex justify justify-center border bg-zinc-900 border-black col-span-7 row-span-6">
      <div className="text-6xl flex items-center">
          <h1 className="text-white"><u>Intro</u></h1>
        </div>
      </div>

      <div id="projects" className="bg-nyc bg-right bg-cover bg-no-repeat h-full w-full flex justify justify-center border-2 border-black col-span-6 row-span-6">
      <div className="text-6xl flex items-center">
          <h1 className="text-white"><u>Projects</u></h1>
        </div>
      </div>

      <div id="socials" className="bg-mountains bg-left-bottom bg-cover bg-no-repeat h-full w-full flex justify justify-center border-2 border-black col-span-6 row-span-6">
      <div className="text-6xl flex items-center">
          <h1 className="text-white"><u>Socials</u></h1>
        </div>
      </div>
    </div>
  )
}
