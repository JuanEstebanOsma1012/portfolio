/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Juan Esteban's - Portfolio",
  description:
    "Systems Engineer with a focus on DevOps, infrastructure automation, and cloud computing. Experienced in Kubernetes, Terraform, Ansible, AWS, and software architecture.",
  og: {
    title: "Juan Esteban's - Portfolio",
    type: "website",
    url: "https://JuanEstebanOsma1012.github.io",
  },
};

//Home Page
const greeting = {
  title: "Juan Esteban Castaño Osma",
  logo_name: "Juan Esteban Castano",
  nickname: "",
  subTitle:
    "Systems Engineer focused on DevOps, infrastructure automation and cloud computing. Passionate about building scalable systems and implementing best practices in infrastructure deployment and management.",
  resumeLink:
    "https://drive.google.com/file/d/1ynauiBTn3AtHryQPfpLDy7Z88OFCVSR8/view?usp=sharing",
  portfolio_repository: "https://github.com/JuanEstebanOsma1012/portfolio",
  githubProfile: "https://github.com/JuanEstebanOsma1012",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/JuanEstebanOsma1012",
  // linkedin: "https://www.linkedin.com/in/juan-esteban-castaño-osma",
  // gmail: "osmajuan760@gmail.com",

  {
    name: "Github",
    link: "https://github.com/JuanEstebanOsma1012",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/juan-esteban-castanio-osma",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:osmajuan760@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "DevOps & Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience with infrastructure automation using Terraform and Ansible",
        "⚡ Container orchestration and deployment with Docker and Kubernetes",
        "⚡ Systems monitoring and observability with Prometheus",
        "⚡ AWS cloud infrastructure management and deployment",
        "⚡ CI/CD pipeline implementation and management",
        "⚡ Linux system administration and shell scripting",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#5c5c5cff",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Extensive experience in Java application development",
        "⚡ Building scalable backend systems with Spring Framework",
        "⚡ Frontend development using Angular",
        "⚡ Python scripting for automation",
        "⚡ RESTful API design and implementation",
      ],
      softwareSkills: [
        /* {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        }, */
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
      ],
    },
    {
      title: "IT Governance & Project Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Application of PMBOK methodologies for project management",
        "⚡ Implementation of COBIT 2019 framework for IT governance",
        "⚡ ITILv4 practices for IT service management",
        "⚡ Agile development with SCRUM methodology",
        "⚡ ISO 9001 quality management principles",
      ],
      softwareSkills: [
        /* {
          skillName: "PMBOK",
          fontAwesomeClassname: "simple-icons:pmi",
          style: {
            color: "#FF6B00",
          },
        }, */
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#172B4D",
          },
        },
        /* {
          skillName: "ITIL",
          fontAwesomeClassname: "simple-icons:itil",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "ISO 9001",
          fontAwesomeClassname: "simple-icons:iso9001",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "COBIT",
          fontAwesomeClassname: "simple-icons:iso9001",
          style: {
            color: "#000000",
          },
        }, */
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Universidad del Quindío",
      subtitle: "Systems and Computer Engineer",
      logo_path: "uniquindio_logo.png",
      alt_name: "Universidad del Quindío",
      duration: "2021 - Present",
      descriptions: [
        "⚡ Studying core computer science subjects including algorithms, data structures, operating systems, computer networks, and software engineering.",
        "⚡ Specialized in DevOps, cloud infrastructure, and automation technologies.",
        "⚡ Hands-on experience with infrastructure automation using Kubernetes, Terraform, and Ansible.",
        "⚡ Active involvement in research projects related to distributed computing and HTCondor infrastructure.",
      ],
      website_link: "https://www.uniquindio.edu.co/",
    },
    {
      title: "SENA",
      subtitle: "Software Development Technician",
      logo_path: "sena_logo.png",
      alt_name: "SENA",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Completed technical training in software development.",
        "⚡ Learned fundamental programming concepts and software engineering practices.",
        "⚡ Developed practical skills in application development and database management.",
      ],
      website_link:
        "https://drive.google.com/file/d/1tB9juYyTJ8NEum8icD7hs9LLNUZ3v5eW/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud & DevOps Fundamentals",
      subtitle: "- EPAM Campus",
      logo_path: "epam_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1tPMJD5mZEDEUTjUs38TcenRH0jpyaFXf/view?usp=sharing",
      alt_name: "EPAM",
      color_code: "#ffffff",
    },
    {
      title: "Cloud & Automation Tools",
      subtitle: "- EPAM Campus",
      logo_path: "epam_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19_3fnZbd8CucwtP8n_eEtBhh4fua2Zwb/view?usp=sharing",
      alt_name: "EPAM",
      color_code: "#ffffff",
    },
    {
      title: "Java BackEnd Specialization",
      subtitle: "- Alura Latam & Oracle ONE",
      logo_path: "oracle_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1URGZisN_-zCUrIbNe6jBa203lDei8B4T/view?usp=sharing",
      alt_name: "Oracle ONE",
      color_code: "#ffffff",
    },
    {
      title: "DS4A / Colombia - Data Analysis Fundamentals",
      subtitle: "- Correlation One",
      logo_path: "correlation_one_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19dBJPvK6qjqkAM7BN9ws7TPjLJcZ1wSB/view?usp=sharing",
      alt_name: "Correlation One",
      color_code: "#ffffff",
    },
    {
      title: "Leadership Diploma",
      subtitle: "- Universidad EAFIT",
      logo_path: "eafit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1n-nRh8OOo0GT-ldlFBFSRKu4w0crC2g4/view?usp=sharing",
      alt_name: "EAFIT",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Projects and Research",
  description:
    "I have worked on various projects involving infrastructure automation, cloud computing, and software development. My experience includes building scalable systems using DevOps practices, contributing to research projects, and developing full-stack applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "AETUA Application",
          company: "Arte en tus uñas AXM",
          company_url: "https://arteentusunasaxm.com/",
          logo_path: "AETUA_logo.png",
          duration: "2025",
          location: "Remote",
          description:
            "Developed a comprehensive web application for presentation and appointments management. Implemented modern web technologies and best practices for scalable architecture. The project showcases full-stack development capabilities with focus on user experience.",
          color: "#0879bf",
        },
        {
          title: "HTCondor Infrastructure Democratization and Expansion",
          company: "GRID Group - Universidad del Quindío",
          company_url: "https://github.com/JuanEstebanOsma1012/condor_webui",
          logo_path: "uniquindio_logo_big.png",
          duration: "2024 - 2025",
          location: "Armenia, Quindío",
          description:
            "Worked on democratization, federation and expansion of HTCondor infrastructure at GRID Research Group. Developed web UI for HTCondor management and monitoring. Implemented automation tools for distributed computing infrastructure using modern DevOps practices.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Research & Academic Work",
      experiences: [
        {
          title: "Research Student",
          company: "GRID Group - Universidad del Quindío",
          company_url: "https://www.uniquindio.edu.co/",
          logo_path: "uniquindio_logo_big.png",
          duration: "2024 - 2025",
          location: "Armenia, Quindío",
          description:
            "Contributed to research in distributed computing and high-throughput computing systems. Worked on infrastructure automation and monitoring solutions.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on infrastructure automation, cloud computing, and full-stack development. I leverage modern DevOps tools and practices to build scalable and maintainable systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published work and contributions.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_juan.png",
    description:
      "I am available on GitHub and LinkedIn. Feel free to reach out to me, I will reply within 24 hours. I can help you with DevOps, Cloud Infrastructure, Java Backend Development, and Software Architecture.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing through LinkedIn publications. Feel free to connect with me there.",
    link: "https://www.linkedin.com/in/juan-esteban-castanio-osma",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Armenia, Quindío, Colombia",
    locality: "Armenia",
    country: "Colombia",
    region: "Quindío",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/LMCzCr8NYt2uzNPd6",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+57 302 775 7913",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
