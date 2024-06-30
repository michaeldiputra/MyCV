import Head from "next/head";
import { myTitle } from "../../config";
import { portfolioData } from '../../config';

export default function portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio | {myTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mt-10 px-6 items-center flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-medium">Past Project Experience</h2>
          <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-blue-500 w-fit">Explore the projects I've worked on so far</p>
        </div>
        <div className="grid gap-7 pb-32 mt-11 w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map(item => (
            <div key={item.id} className="p-5 w-full bg-neutral-800/60 rounded-xl border-2 border-neutral-700 flex flex-col justify-between transition-all hover:-translate-y-2">
              <div>
                <img src={item.imageUrl} className="w-full rounded-xl"></img>
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
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                        <img src="portfolio/github.svg" className="invert hover:-translate-y-0 translate-y-0.5 cursor-pointer transition duration-300"></img>
                      </a>
                    )}
                    {item.liveUrl && (
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                        <img src="portfolio/out.png" className="invert w-5 hover:-translate-y-0.5 cursor-pointer transition duration-300 ml-2"></img>
                      </a>
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
