import { TbBrandNextjs } from "react-icons/tb";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsWordpress } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import projects from '../database/projects.json' assert{type: 'json'};
import StringToSlug from "./lib/StringToSlug";

export const metadata = {
  title: "My Portfolio - Muhammed Haris",
  description: "Hi, I'm Muhammed Haris and explore my portfolio showcasing innovative projects. Discover the future of web development with my innovations.",
};

export default function Home() {
  const techHeading = "flex items-center gap-2 text-base md:text-[18px] lg:text-xl font-medium border-b border-gray-300 pb-3",
    cardsContainer = "flex gap-4 overflow-x-auto py-3",
    card = "rounded-lg bg-white shadow-md p-3 flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-44 h-[200px] sm:h-[225px] md:h-[240px] lg:h-[250px] hover:-mt-2 transition-all relative overflow-hidden",
    imgContainer = "relative h-[105px] sm:h-[120px] md:h-[135px] lg:h-[150px] w-full rounded bg-gray-50",
    cardHeading = "text-sm sm:text-base font-medium line-clamp-2 text-gray-600 mt-3 mb-[1px]",
    cardType = "text-xs text-gray-500 line-clamp-2";

  const categories = [
    {
      tech: "Next.JS",
      icon: <TbBrandNextjs />,
      data: projects.nextjs
    },
    {
      tech: "WordPress",
      icon: <BsWordpress />,
      data: projects.wordpress
    },
    {
      tech: "Vanilla",
      icon: <AiFillHtml5 />,
      data: projects.vanilla
    }
  ];

  return (
    <>
      <header className="bg-gray-200 border-b border-gray-400 flex items-center justify-center h-[90px] sm:h-24 md:h-32">
        <div className="max-w-7xl mx-auto p-4 w-full">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <div className="relative bg-slate-300 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] shadow">
              <img src="/assets/images/muhammed-haris.webp" className="w-full h-full rounded-full" alt="Muhammed Haris" />
            </div>
            <div>
              <h1 className="text-base sm:text-xl md:text-2xl font-medium text-gray-700">Muhammed Haris</h1>
              <h2 className="text-sm sm:text-base md:text-[17px] font-medium text-gray-500">My Portfolio</h2>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
        {categories.map((i, j) => {
          return (
            <section key={j}>
              <div className={techHeading}>
                {i.icon}
                <h3>{i.tech}</h3>
              </div>
              <div className={cardsContainer}>
                {i.data.map((k, l) => {
                  return (
                    <a href={k.link} target="_blank" rel="noopener noreferrer" key={l} className={card}>
                      {k.new && <div className="absolute -left-6 -top-[5px] md:-top-1 z-50 bg-violet-600 text-white font-medium text-[9px] sm:text-[10px] md:text-xs -rotate-45 px-6 pb-1 pt-4 rounded">NEW</div>}
                      <div className={imgContainer}>
                        {k.img === undefined && <img src={`/assets/images/projects/${StringToSlug(k.name)}.webp`} className="w-full h-full" alt={k.name} />}
                      </div>
                      <div>
                        <h4 className={cardHeading}>{k.name}</h4>
                        <div className={cardType}>{k.type}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>
      <footer className="bg-gray-200 border-t border-gray-400 text-[10px] sm:text-xs md:text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 h-20 sm:h-14 text-center px-4">
          <p>© Copyright 2022 | Muhammed Haris - All Rights Reserved.</p>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
            <a href="#" target="_blank" rel="noopener noreferrer"><BsGithub className="hover:text-black transition-all" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><BsFacebook className="hover:text-black transition-all" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram className="hover:text-black transition-all" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><BsTwitter className="hover:text-black transition-all" /></a>
          </div>
        </div>
      </footer>
    </>
  );
};