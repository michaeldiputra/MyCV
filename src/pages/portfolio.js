import Head from "next/head";
import { portfolioData } from '../../config';
import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from "../../config";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio | michael.ray();</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Past Project Experience – Explore the projects I've worked on so far." />
        <meta property="og:title" content="Portfolio | michael.ray();" />
        <meta property="og:description" content="Past Project Experience – Explore the projects I've worked on so far." />
        <meta property="og:image" content={`${baseUrl}/portfolio-preview.jpg`} />
        <meta property="og:url" content={`${baseUrl}/portfolio`} />
        <meta property="og:type" content="website" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | michael.ray();" />
        <meta name="twitter:description" content="Past Project Experience – Explore the projects I've worked on so far." />
        <meta name="twitter:image" content={`${baseUrl}/portfolio-preview.jpg`} />
      </Head>
      <div className="mt-10 px-6 items-center flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-medium">Past Project Experience</h2>
          <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-500 w-fit">Explore the projects I&apos;ve worked on so far</p>
        </div>
        <div className="grid gap-7 pb-32 mt-11 w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map(item => (
            <div key={item.id} className="p-5 w-full bg-neutral-800/60 rounded-xl border-2 border-neutral-700 flex flex-col justify-between transition-all hover:-translate-y-2">
              <div>
                <Image src={item.imageUrl} alt={item.title} width={1000} height={1000} className="w-full rounded-xl" />
                <div>
                  <h4 className="text-center font-semibold mt-4 text-xl">{item.title}</h4>
                  <p className="text-neutral-400 text-sm mt-3">{item.description}</p>
                </div>
              </div>
              <div>
                <div className="h-max">
                  <div className="mt-5 text-blue-400 text-base">{item.tech}</div>
                  <div className="flex justify-end mt-2 pr-1">
                    {item.githubUrl && (
                      <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Image src="/portfolio/github.svg" alt="github" width={1000} height={1000} className="invert w-5 hover:-translate-y-0 translate-y-0.5 cursor-pointer transition duration-300" />
                      </Link>
                    )}
                    {item.liveUrl && (
                      <Link href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Image src="/portfolio/out.png" alt="view page" width={1000} height={1000} className="invert w-5 hover:-translate-y-0.5 cursor-pointer transition duration-300 ml-2" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
