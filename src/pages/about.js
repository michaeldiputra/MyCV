import Head from "next/head";
import { myTitle } from "../../config";
import { useState } from 'react';
import { techstackData } from "../../config";
import { toolsData } from "../../config";
import Link from 'next/link';

export default function About() {
  const [activeTab, setActiveTab] = useState('techStack');
  return (
    <div>
      <Head>
        <title>About | {myTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="bg-neutral-800/60 md:p-10 p-7 rounded-3xl border-2 border-neutral-700">
          <div className="flex items-center">
            <h2 className="text-2xl font-medium min-w-32">About Me</h2>
            <div className="bg-blue-400 h-0.5 rounded-full w-full mr-2 md:w-96"></div>
          </div>
          <div className="flex mt-6 justify-between md:flex-row flex-col items-center">
            <div>
              <img src="me.jpg" alt="me" className="rounded-full xl:w-96 lg:w-80 mx-11 md:w-72 w-96"></img>
            </div>
            <div className="md:w-7/12 w-full lg:text-lg text-md flex justify-evenly flex-col font-light text-justify md:pl-3">
              <p className="md:pt-2 pt-10">&nbsp; &nbsp; &nbsp; Hi everyone! My name is Michael Ray Diputra. I'm a web developer from Badung, Bali. I have 1 year experience in the field of web designer. I really enjoy what I do right now, in my opinion, creating programs is not just a job, but also an art that has aesthetic value</p>
              <p className="lg:pb-12 md:pt-7 pt-3">&nbsp; &nbsp; &nbsp; My job is to build your website to be functional and user-friendly yet still attractive. In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use. My goal is to convey your message and identity in the most creative way. If you are interested in hiring me, please contact the listed contact.</p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800/60 mt-4 rounded-2xl border-2 border-neutral-700 flex w-full justify-around flex-col h-48 px-7 py-4 md:p-7 md:h-max md:flex-row lg:justify-normal">
          <div className="flex flex-col justify-between items-left h-16 lg:w-full lg:justify-around lg:h-auto lg:flex-row">
            <div className="flex">
              <Link href="mailto:michaeldiputra257@gmail.com" target="_blank"><img src="about/email.png" alt="email" className="w-9 h-fit invert pr-3 hover:-translate-y-0.5 transition items-center"></img></Link>
              <p>michaeldiputra257@gmail.com</p>
            </div>
            <div className="flex">
              <Link href="https://www.linkedin.com/in/michaeldiputra/" target="_blank"><img alt="linkedin" src="about/linkedin.png" className="w-9 h-fit invert pr-3 hover:-translate-y-0.5 transition items-center"></img></Link>
              <p>michaeldiputra</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-left h-16 lg:w-full lg:justify-around lg:h-auto lg:flex-row">
            <div className="flex">
              <Link href="https://g.co/kgs/3BHdmPa" target="_blank"><img src="about/home.png" alt="address" className="w-9 h-fit invert pr-3 hover:-translate-y-0.5 transition items-center"></img></Link>
              <p>Canggu, Bali, Indonesia</p>
            </div>
            <div className="flex">
              <Link href="https://instagram.com/michael_257raydi" target="_blank"><img src="about/instagram.png" alt="instagram" className="w-9 h-fit invert pr-3 hover:-translate-y-0.5 transition items-center"></img></Link>
              <p>michael_257raydi</p>
            </div>
          </div>
        </div>
        <div className= "p-2 md:p-8 xl:p-12">
          <div className="flex items-center mb-5">
            <div className="bg-blue-400 w-20 h-0.5 rounded-full mr-3"></div>
            <div>
              <h2 className="text-2xl font-medium">Skills</h2>
            </div>
          </div>
          <div className="flex mb-5">
            <div className={`py-3 px-4 w-fit rounded-md font-medium text-sm mr-2 items-center flex transition ${activeTab === 'techStack' ? 'bg-blue-400 bg-opacity-10 text-blue-400 hover:text-blue-300' : 'text-gray-500 hover:text-gray-400'}`} onClick={() => setActiveTab('techStack')}>
              <button>
                Tech Stack
              </button>
            </div>
            <div className={`py-3 px-4 w-fit rounded-md font-medium text-sm items-center flex transition ${activeTab === 'tools' ? 'bg-blue-400 bg-opacity-10 text-blue-400 hover:text-blue-300' : 'text-gray-500 hover:text-gray-400'}`} onClick={() => setActiveTab('tools')}>
              <button>
                Tools
              </button>
            </div>
          </div>
          <div>
            {activeTab === 'techStack' && (
            <div className="grid pb-32 grid-cols-2 gap-5 md:gap-10 md:grid-cols-3 xl:grid-cols-4"> 
              {techstackData.map(techstack => (
                <div key={techstack.id} className="p-5 border-[1px] border-blue-400 rounded h-20 items-center flex group hover:bg-blue-400/10 transition w-full xl:w-64">
                  <img src={techstack.imageUrl} alt={techstack.title} className="w-10 group-hover:scale-125 transition"></img>
                  <div className="pl-5">
                    <h3 className="text-lg font-medium translate-y-2 group-hover:translate-y-0 transition">{techstack.title}</h3>
                    <p className="text-blue-400 opacity-0 group-hover:opacity-100 transition w-full text-nowrap text-xs md:text-sm">{techstack.level}</p>
                  </div>
                </div>
              ))}
            </div>
            )}
            {activeTab === 'tools' && (
              <div className="grid pb-32 grid-cols-2 gap-5 lg:gap-10 md:grid-cols-3 xl:grid-cols-4"> 
              {toolsData.map(tools => (
                <div key={tools.id} className="p-5 border-[1px] border-blue-400 rounded h-20 items-center flex group hover:bg-blue-400/10 transition w-full xl:w-64">
                  <img src={tools.imageUrl} alt={tools.title} className="w-10 group-hover:scale-125 transition"></img>
                  <div className="pl-5">
                    <h3 className="text-lg font-medium translate-y-2 group-hover:translate-y-0 transition">{tools.title}</h3>
                    <p className="text-blue-400 opacity-0 group-hover:opacity-100 transition w-full text-nowrap text-xs md:text-sm">{tools.for}</p>
                  </div>
                </div>
              ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
