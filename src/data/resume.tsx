import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Esamel",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Junior Full-Stack Developer passionate about crafting cutting-edge web applications that merge innovation with exceptional user experiences.",
  summary:
    "I am a fast-learning and adaptable Junior Full-Stack Developer passionate about creating innovative, user-friendly web applications. I thrive in diverse environments, enjoy solving complex problems, and embrace working with different technology that drives impactful solutions. My love for continuous learning fuels my ability to contribute effectively to dynamic projects and teams.",
  avatarUrl: "/pro.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "DaisyUI",
    "Redux",
    "Axios",
    "Git",
    "GitHub",
    "Chakra UI",
    "Shadcn UI",
    "Sanity",
    "GraphQL",
    "Postman",
    "RESTful API",
    "Figma",
    "Problem Solving",
    "Team Collaboration",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "esmaelsabir9@gmail.com",
    tel: "+251972122290",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Esam-jr",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/esmael-sabir/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Esmael_sabir?t=NOy6uJfJNxhf0bVNp_aaEg&s=01",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/I_s_m_ael",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "esmaelsabir9@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ministry of Innovation and Technology (MINT)",
      href: "http://www.mint.gov.et/",
      badges: [],
      location: "onsite",
      title: "Fullstack Developer",
      logoUrl: "/mint.jpg",
      start: "June 2024",
      end: "August 2024",
      description:
        "During my internship at the Ministry of Innovation and Technology, I developed an employment vacancy web application to streamline job announcements and improve accessibility for job seekers. I gathered requirements through interviews and meetings, followed the Waterfall methodology, and used MySQL for data management. This experience honed my ability to manage projects, collaborate effectively, and deliver practical solutions to real-world challenges.",
    },
    {
      company: "freeCodeCamp",
      badges: [],
      href: "https://www.freecodecamp.org/",
      location: "Remote",
      title: "Certified Back End Developer",
      logoUrl: "/freecodecamp.jpg",
      start: "February 2024",
      end: "April 2024",
      description:
        "Gained hands-on experience building RESTful APIs, managing databases, and implementing authentication systems. Demonstrated proficiency in Node.js, Express, and MongoDB by completing real-world projects and earning certification.",
    },
    ,
    {
      company: "Coursera (IBM)",
      href: "https://www.coursera.org/learn/introduction-web-development",
      badges: [],
      location: "Remote",
      title: "Certified Web Developer",
      logoUrl: "/ibm.png",
      start: "October 2023",
      end: "November 2023",
      description:
        "Completed a comprehensive web development course, gaining expertise in HTML, CSS, JavaScript, and the foundational principles of web development. Built and deployed projects to demonstrate practical skills in web technologies.",
    },

    {
      company: "Udacity",
      href: "https://www.udacity.com/course/data-analysis-with-excel--ud238",
      badges: [],
      location: "Remote",
      title: "Data Analysis",
      logoUrl: "/udacity.png",
      start: "August 2024",
      end: "September 2024",
      description:
        "Completed an introductory course in data analysis using Excel. Gained practical skills in data manipulation, visualization, and analysis, learning to work with large datasets, create formulas, and generate meaningful insights through pivot tables and charts.",
    },

    {
      company: "Udemy",
      href: "https://www.udemy.com/course/java-tutorial/",
      badges: [],
      location: "Remote",
      title: "Java Introduction",
      logoUrl: "/udemy.jpg",
      start: "January 2023",
      end: "February 2023",
      description:
        "Completed an introductory course on Java, covering the basics of object-oriented programming (OOP), data types, control structures, and functions. Gained hands-on experience writing Java programs and solving problems using core Java concepts.",
    },
  ],
  education: [
    {
      school: "Haramaya University",
      href: "https://www.haramaya.edu.et/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/ha.jpeg",
      start: "2021",
      end: "2025",
    },
  ],

  projects: [
    {
      title: "ES Pitch",
      href: "https://es-pitch.vercel.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "Developed a full-stack startup social media platform where users can post and collaborate on startup ideas. The app includes features such as GitHub authentication, live content API, and search functionality.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Sanity",
        "TypeScript",
        "NextAuth",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://es-pitch.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Esam-jr/ES-pitch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Es.PNG",
      video: "",
    },
    {
      title: "Employment Vacancy Web App (Internship Project)",
      href: "https://github.com/Esam-jr/MINT-Vacancy",
      dates: "June 2024",
      active: true,
      description:
        "Developed a job vacancy web app to allow job seekers to easily apply for open positions. Implemented using the Waterfall methodology and MySQL for database management.",
      technologies: ["React", "Nodejs", "MySQL", "Sass", "CSS", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Esam-jr/MINT-Vacancy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mintW.PNG",
      video: "",
    },
    {
      title: "Simple E-commerce MERN CRUD Website",
      href: "https://mern-stack-e-commerce-app-10.onrender.com/",
      dates: "Sept 2024",
      active: true,
      description:
        "Developed a simple e-commerce CRUD website using the MERN stack. The site supports product creation, updating, deletion, and viewing functionalities.",
      technologies: [
        "MERN Stack",
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mern-stack-e-commerce-app-10.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Esam-jr/Mern-stack-e-commerce-app?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crud.PNG",
      video: "",
    },
    {
      title: "Admin Dashboard",
      href: "https://admin-dashboard-six-xi-56.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
        "Developed a fully responsive admin dashboard for an e-commerce website using React, React Router, and Framer Motion to manage products, orders, and analytics.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
        "Lucide icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin-dashboard-six-xi-56.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Esam-jr/Admin-Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Admin_Dash.PNG",
      video: "",
    },
    {
      title: "Mother's Kushina",
      href: "https://recipe-finder-app-eight.vercel.app/",
      dates: "May 2024",
      active: true,
      description:
        "Built a fully responsive recipe finder app using a food recipe API. The app lets users search for recipes and save them to their favorites list.",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Axios"],
      links: [
        {
          type: "Website",
          href: "https://yourprojectlink.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Esam-jr/Recipe-finder-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/large.JPG",
      video: "",
    },

    {
      title: "3D Portfolio",
      href: "https://esmael-sabir.vercel.app/",
      dates: "May 2024",
      active: true,
      description:
        "Created an interactive 3D portfolio using Three.js and React. The portfolio showcases my work, skills, and projects in an engaging, visually captivating 3D environment.",
      technologies: ["Three.js", "React", "Tailwind CSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://esmael-sabir.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio.PNG",
      video: "",
    },
  ],

  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
