import Head from "next/head";
import {myTitle} from "../../config"
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const Typed = require('typed.js');
    var typed = new Typed(".auto-type", {
      strings: ["Student", "Newbie", "Beginner Web Designer", "Front-End Developer"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup function to destroy instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="">
      <Head>
        <title>Home | {myTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
      </Head>
      <div className="flex md:flex-row justify-between items-center md:h-[65vh] mt-8 xl:px-44 lg:px-28 md:px-10 flex-col-reverse md:text-left text-center">
        <div>
          <p className="text-blue-400 md:p-0 pt-7">Hello World, I'm</p>
          <h1 className="md:text-5xl text-4xl font-semibold mt-3">Michael Ray</h1>
          <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-400 mt-3 mb-2">
            <span className="auto-type wrap"></span>
          </div>
          <p>Welcome to My personal website.<span className="wave">👋🏼</span></p>
          <a href="cv.pdf" target="_blank" class="flex items-center py-3 px-4 mt-3 text-sm font-medium rounded-lg border transition duration-300 text-blue-400 border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 w-fit opacity-0 hover:opacity-100">
            <img src="cv.svg" className="w-5 mr-2 text-blue-400 fill-blue-400"></img>
            View CV
          </a>
        </div>
        <div className="xl:mr-20 w-fit">
          <img src="me.jpg" className="w-96 rounded-full md:border-8 border-[6px] md:border-blue-400 border-blue-400 md:shadow-blue-400 shadow-blue-400 md:shadow-[0_0_60px_-7px] shadow-[0_0_35px_-7px] "></img>
        </div>
      </div>
    </div>
  );
}
