import Head from "next/head";
import { myTitle } from "../../config";
import { useState } from 'react';
import { techstackData } from "../../config";
import { toolsData } from "../../config";

export default function about() {
  const [activeTab, setActiveTab] = useState('techStack');
  return (
    <div>
      <Head>
        <title>About | {myTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="bg-neutral-800/60 p-10 rounded-3xl border-2 border-neutral-700">
          <div className="flex items-center">
            <h2 className="mr-3 text-2xl font-medium">About Me</h2>
            <div className="bg-blue-400 w-96 h-0.5 rounded-full"></div>
          </div>
          <div className="flex mt-6 justify-between">
            <div>
              <img src="me.jpg" className="rounded-full w-96 mx-11"></img>
            </div>
            <div className="w-7/12 text-lg flex justify-evenly flex-col font-light text-justify pl-3">
              <p className="pt-2">&nbsp; &nbsp; &nbsp; Hi everyone! My name is Michael Ray Diputra. I'm a web developer from Badung, Bali. I have 1 year experience in the field of web designer. I really enjoy what I do right now, in my opinion, creating programs is not just a job, but also an art that has aesthetic value</p>
              <p className="pb-12">&nbsp; &nbsp; &nbsp; My job is to build your website to be functional and user-friendly yet still attractive. In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use. My goal is to convey your message and identity in the most creative way. If you are interested in hiring me, please contact the listed contact.</p>
            </div>
          </div>
        </div>
        <div className="p-12">
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
              <div className="grid grid-cols-4 gap-10 pb-32"> 
              {techstackData.map(techstack => (
                <div key={techstack.id} className="p-5 border-[1px] border-blue-400 rounded w-64 h-20 items-center flex group hover:bg-blue-400/10 transition">
                  <img src={techstack.imageUrl} className="w-10 group-hover:scale-125 transition"></img>
                  <div className="pl-5">
                    <h3 className="text-lg font-medium translate-y-2 group-hover:translate-y-0 transition">{techstack.title}</h3>
                    <p className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">{techstack.level}</p>
                  </div>
                </div>
              ))}
              </div>
            )}
            {activeTab === 'tools' && (
              <div className="grid grid-cols-4 gap-10 pb-32"> 
              {toolsData.map(tools => (
                <div key={tools.id} className="p-5 border-[1px] border-blue-400 rounded w-64 h-20 items-center flex group hover:bg-blue-400/10 transition">
                  <img src={tools.imageUrl} className="w-10 group-hover:scale-125 transition"></img>
                  <div className="pl-5">
                    <h3 className="text-lg font-medium translate-y-2 group-hover:translate-y-0 transition">{tools.title}</h3>
                    <p className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">{tools.for}</p>
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
