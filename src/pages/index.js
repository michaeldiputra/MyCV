import Head from "next/head";
import {myTitle} from "../../config"
import { useEffect } from 'react';
import Typed from 'typed.js';

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
      <div className="flex flex-row justify-between items-center h-[65vh] mt-8 px-44">
        <div>
          <p className="text-blue-400">Hello World, I'm</p>
          <h1 className="text-5xl font-semibold">Michael Ray</h1>
          <div className="text-2xl">
            <span class="auto-type"></span>
          </div>
          <p>Welcome to My personal website.<span className="wave">👋🏼</span></p>
        </div>
        <div className="mr-20 w-fit">
          <img src="home/me.jpg" className="w- rounded-full"></img>
        </div>
      </div>
    </div>
  );
  
}
