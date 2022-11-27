import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="grid" className="grid grid-cols-12 grid-rows-12 h-screen w-screen p-12">

      <div id="about" className="flex justify justify-center border border-white col-span-7 row-span-4 h-auto w-auto">
        <div className="text-6xl flex items-center">
          <h1 className="text-white">About</h1>
        </div>
      </div>

      <div id="resume" className="flex justify justify-center border border-white col-span-5 row-span-10">
      <div className="text-6xl flex items-center">
          <h1 className="text-white">Resume</h1>
        </div>
      </div>

      <div id="intro" className="flex justify justify-center border border-white col-span-7 row-span-6">
      <div className="text-6xl flex items-center">
          <h1 className="text-white">Intro</h1>
        </div>
      </div>

      <div id="socials" className="flex justify justify-center border border-white col-span-6 row-span-6">
      <div className="text-6xl flex items-center">
          <h1 className="text-white">Projects</h1>
        </div>
      </div>

      <div id="projects" className="flex justify justify-center border border-white col-span-6 row-span-6">
      <div className="text-6xl flex items-center">
          <h1 className="text-white">Socials</h1>
        </div>
      </div>
    </div>
  )
}
