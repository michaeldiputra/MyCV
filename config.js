export const myTitle = "michael.ray();";
export const blue = '#5F85DB';
export const blueHover = '#bfd1fb';
export const techstackData = [
  { id: 1, imageUrl: '/about/techstack/html.png', title: 'HTML', level: 'Advanced' },
  { id: 2, imageUrl: '/about/techstack/css.png', title: 'CSS', level: 'Advanced' },
  { id: 3, imageUrl: '/about/techstack/bootstrap.png', title: 'Bootstrap', level: 'Advanced' },
  { id: 4, imageUrl: '/about/techstack/java.png', title: 'Java', level: 'Intermediate' },
  { id: 5, imageUrl: '/about/techstack/php.svg', title: 'PHP', level: 'Intermediate' },
  { id: 6, imageUrl: '/about/techstack/javascript.png', title: 'JavaScript', level: 'Intermediate' },
  { id: 7, imageUrl: '/about/techstack/tailwind.svg', title: 'Tailwind', level: 'Advanced' },
  { id: 8, imageUrl: '/about/techstack/nextjs.svg', title: 'Next.js', level: 'Intermediate' },
  { id: 9, imageUrl: '/about/techstack/react.svg', title: 'React', level: 'Intermediate' },
  { id: 10, imageUrl: '/about/techstack/laravel.svg', title: 'Laravel', level: 'Intermediate' },
  { id: 11, imageUrl: '/about/techstack/typescript.svg', title: 'TypeScript', level: 'Beginner' },
];
export const toolsData = [
  { id: 1, imageUrl: '/about/tools/git.png', title: 'Git', for: 'Source Control' },
  { id: 2, imageUrl: '/about/tools/github.svg', title: 'GitHub', for: 'Git Hosting' },
  { id: 3, imageUrl: '/about/tools/npm.svg', title: 'NPM', for: 'Package Manager' },
  { id: 4, imageUrl: '/about/tools/mysql.png', title: 'MySQL', for: 'Database' },
  { id: 5, imageUrl: '/about/tools/figma.png', title: 'Figma', for: 'Prototyping Design' },
  { id: 6, imageUrl: '/about/tools/vercel.svg', title: 'Vercel', for: 'Hosting' },
  { id: 7, imageUrl: '/about/tools/gitea.svg', title: 'Gitea', for: 'Source Control' },
  { id: 8, imageUrl: '/about/tools/nodejs.svg', title: 'Node.js', for: 'Runtime' },
  { id: 9, imageUrl: '/about/tools/composer.png', title: 'Composer', for: 'PHP Packages' },
  { id: 10, imageUrl: '/about/tools/android-studio.svg', title: 'Android IDE', for: 'App Dev' },
];

export const portfolioData = [
  {
    id: 1,
    imageUrl: '/portfolio/music.png',
    title: 'Music',
    description: 'The first website I created was just for fun during the TikTok trend..',
    tech: 'HTML, CSS',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 2,
    imageUrl: '/portfolio/archive.png',
    title: 'Archive',
    description: 'My first competition website is FastTekno Competition 2023 on May 4 2023.',
    tech: 'jQuery, Flickity',
    githubUrl: 'https://github.com/michaeldiputra/Archive',
    liveUrl: 'https://michaeldiputra.github.io/Archive/'
  },
  {
    id: 3,
    imageUrl: '/portfolio/raytech.png',
    title: 'RayTech',
    description: 'This is the first competition website that I managed to win by reaching the top 3 in the ParasICTVIII competition.',
    tech: 'jQuery, Flickity',
    githubUrl: 'https://github.com/michaeldiputra/RayTech',
    liveUrl: 'https://michaeldiputra.github.io/RayTech/'
  },
  {
    id: 4,
    imageUrl: '/portfolio/seascape.png',
    title: 'Seascape',
    description: "This website was a school assignment with a theme based on SDGs that I didn't finish due to limited time.",
    tech: 'JavaScript, jQuery',
    githubUrl: 'https://github.com/michaeldiputra/Seascape',
    liveUrl: 'https://michaeldiputra.github.io/Seascape/'
  },
  {
    id: 5,
    imageUrl: '/portfolio/atok.png',
    title: 'Atok',
    description: 'A side project with my friend Fandy where we designed a website themed around wine.',
    tech: 'JavaScript, CSS',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 6,
    imageUrl: '/portfolio/lks.png',
    title: 'SMK Wira Harapan',
    description: 'I participated in the vocational school student competition "LKS (Lomba Kompetensi Siswa)" with a school-themed website. I managed to place in the top 3 in January 2024.',
    tech: 'jQuery, Flickity',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 7,
    imageUrl: '/portfolio/adminlte.png',
    title: 'AdminLTE',
    description: "A dashboard for SMK Wira Harapan's database using AdminLTE, connected to a MySQL database, featuring separate login systems for administrators and members.",
    tech: 'PHP, AdminLTE',
    githubUrl: 'https://github.com/michaeldiputra/AdminLTE',
    liveUrl: ''
  },
];
portfolioData.sort((a, b) => b.id - a.id);