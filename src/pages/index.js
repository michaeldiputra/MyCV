import Head from "next/head";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from "../../config";

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
        <title>Home | michael.ray();</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Home | michael.ray();</title>
        <meta name="description" content="Hello World, I'm Michael Ray — a student, newbie, and beginner web designer exploring front-end development. Welcome to my personal website!" />
        <meta property="og:title" content="Home | michael.ray();" />
        <meta property="og:description" content="Hello World, I'm Michael Ray — a student, newbie, and beginner web designer exploring front-end development." />
        <meta property="og:image" content={`${baseUrl}/home-preview.jpg`} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | michael.ray();" />
        <meta name="twitter:description" content="Hello World, I'm Michael Ray — a student, newbie, and beginner web designer exploring front-end development." />
        <meta name="twitter:image" content={`${baseUrl}/home-preview.jpg`} />
      </Head>
      <div className="flex md:flex-row justify-between items-center md:h-[65vh] mt-8 xl:px-44 lg:px-28 md:px-10 flex-col-reverse md:text-left text-center">
        <div className="flex items-center mb-32 flex-col md:justify-normal md:flex-none md:m-0">
          <p className="text-blue-400 md:p-0 pt-7">Hello World, I&apos;m</p>
          <h1 className="md:text-5xl text-4xl font-semibold mt-3">Michael Ray</h1>
          <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-400 mt-3 mb-2">
            <span className="auto-type wrap"></span>
          </div>
          <p>Welcome to My personal website.<span className="wave">👋🏼</span></p>
          <Link href="michaeldiputra-CV.pdf" download target="_blank" className="flex items-center py-3 px-4 mt-3 text-sm font-medium rounded-lg border transition duration-300 text-blue-400 border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 w-fit opacity-0 hover:opacity-100">
            <Image src="cv.svg" alt="cv" width={1000} height={1000} className="w-5 mr-2 text-blue-400 fill-blue-400"></Image>
            Download CV
          </Link>
        </div>
        <div className="xl:mr-20 w-fit">
          <Image src="/me.jpg" alt="me" width={1000} height={1000} className="rounded-full border-[6px] border-blue-400 shadow-blue-400 shadow-[0_0_35px_-7px] w-80 md:border-blue-400 md:border-8 md:shadow-blue-400 md:shadow-[0_0_60px_-7px] md:w-96"></Image>
        </div>
      </div>
    </div>
  );
}
