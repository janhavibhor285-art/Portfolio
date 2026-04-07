import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSlack,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAsana,
  SiCanva,
  SiFigma,
  SiJira,
  SiMysql,
  SiPostman,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const certData = [
  { issuer: "AWS", title: "Data Analytics", link: "https://drive.google.com/file/d/1HwY_LnOk8nkvm13e_9lR_KhY02_fohOj/view?usp=drivesdk" },
  { issuer: "PWC Switzerland", title: "Power BI Job Simulation", link: "https://drive.google.com/file/d/1i6M9zjwnM80u-sGEQl8iHuSS4qX_jA3-/view?usp=drivesdk" },
  { issuer: "Tata", title: "Data Visualisation: Empowering Business with Effective Insights", link: "https://drive.google.com/file/d/1i8Af9QKySGwvEQBwlxCUvP_unRmCWDb4/view?usp=drivesdk" },
  { issuer: "LinkedIn Learning", title: "Project Management Foundations", link: "https://drive.google.com/file/d/1hs0CRMbvb8ZM2SqupU32eCFtn7aAHFUM/view?usp=drivesdk" },
  { issuer: "HP LIFE Foundation", title: "Data Science and Analytics", link: "https://drive.google.com/file/d/1iB9s2D_n1ZRJkOT-0b9opd4BuQ2zc5TN/view?usp=drivesdk" },
  { issuer: "Infosys", title: "UX Design - Understanding the User and Business", link: "https://drive.google.com/file/d/1Hz5SPD6Ct1-qRVW0lRwdMa9FQCQbi4wh/view?usp=drivesdk" },
  { issuer: "Infosys", title: "Python for Beginners: Learn Python from Scratch", link: "https://drive.google.com/file/d/1Hz5SPD6Ct1-qRVW0lRwdMa9FQCQbi4wh/view?usp=drivesdk" },
  { issuer: "SkillUP", title: "Business Analytics with Excel", link: "https://drive.google.com/file/d/1I06GP-oTT6P0y4pvqAlzwy87T0bt3JYq/view?usp=drivesdk" },
  { issuer: "Spoken Tutorial – IIT", title: "C and C++, Arduino", link: "https://drive.google.com/file/d/1I6AEk9_YWX-jvWzgF6QHxEA7c--VOXe7/view?usp=drivesdk" },
];

export const aboutData = [
  {
    title: "skills",
    info: [
      { title: "Language & Database", icons: [FaJava, FaJs, SiMysql] },
      { title: "Frontend", icons: [FaReact, FaHtml5, FaCss3] },
      { title: "Backend", icons: [SiSpringboot, SiSpring, FaNodeJs] },
      { title: "DevOps & Tools", icons: [FaDocker, FaGitAlt, FaGithub, SiPostman] },
      { title: "Design & Collaboration", icons: [SiFigma, SiCanva, SiAdobephotoshop, SiJira, FaSlack, SiAsana] },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Third Prize – M-Exhibit 2K24 State Level Project Competition", stage: "Apr 2024" },
      { title: "First Prize – M-Exhibit 2K23 Project Competition", stage: "May 2023" },
      { title: "Paper Presentation – International Conference on Recent Trends in Engineering", stage: "Jun 2024" },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UI/UX Designer – Freelance (Self-Employed)",
        stage: "Jan 2024 – Jan 2026",
        bullets: [
          "Interactive Design: Created interactive wireframes and prototypes for web and mobile applications.",
          "User Research & Testing: Conducted user research and A/B testing to improve usability and engagement.",
          "Responsive Development: Developed responsive UI components to ensure seamless cross-device experiences.",
          "Collaboration & Design Systems: Collaborated with peers to develop cohesive design systems & scalable UI kits.",
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        degree: "PG Diploma in Advanced Computing",
        period: "Aug 2025 – Feb 2026",
        institute: "Know-IT / C-DAC ACTS Pune, Maharashtra",
        grade: "Grade: A",
        desc: "Advanced computing, software development, enterprise application design. Hands-on: DSA, OOP Java, Database Technologies, Web Programming, Software Development Methodologies.",
      },
      {
        degree: "B.E. Electronics & Telecommunication Engineering",
        period: "Jun 2020 – May 2024",
        institute: "PES's Modern College of Engineering, Pune (NAAC A++)",
        grade: "CGPA: 8.72",
        desc: "IoT, Electronics Product Development, Microcontroller Architecture, Computer Networks, DSA, OOP. Institution holds NAAC A++ — the highest possible accreditation grade.",
      },
    ],
  },
  {
    title: "certifications",
    info: [],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const renderContent = () => {
    const tab = aboutData[index];

    if (tab.title === "skills") {
      return (
        <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start w-full">
          {tab.info.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-x-3 items-center text-white/60 w-full">
              <div className="font-light min-w-[170px] text-center md:text-left text-sm">{item.title}</div>
              <div className="hidden md:flex text-white/30">–</div>
              <div className="flex gap-x-3 flex-wrap gap-y-2">
                {item.icons.map((Icon, iconI) => (
                  <div key={iconI} className="text-2xl text-white"><Icon /></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (tab.title === "awards") {
      return (
        <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-end w-full text-right">
          {tab.info.map((item, i) => (
            <div key={i} className="flex flex-col text-white/60">
              <div className="font-semibold text-white/80 text-sm">{item.title}</div>
              <div className="text-accent text-xs mt-1">{item.stage}</div>
            </div>
          ))}
        </div>
      );
    }

    if (tab.title === "experience") {
      return (
        <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-start w-full overflow-y-auto max-h-[340px] pr-2">
          {tab.info.map((item, i) => (
            <div key={i} className="flex flex-col w-full">
              <div className="flex flex-col md:flex-row md:justify-between gap-x-4 mb-2">
                <div className="font-semibold text-white/90 text-sm">{item.title}</div>
                <div className="text-accent text-xs whitespace-nowrap">{item.stage}</div>
              </div>
              <ul className="flex flex-col gap-y-1 pl-1">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="text-[12px] leading-snug text-white/50 flex gap-x-2">
                    <span className="text-accent mt-[2px]">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (tab.title === "education") {
      return (
        <div className="py-2 xl:py-6 flex flex-col gap-y-5 items-start w-full overflow-y-auto max-h-[340px] pr-2">
          {tab.info.map((item, i) => (
            <div key={i} className="flex flex-col w-full border-b border-white/10 pb-4 last:border-0">
              <div className="flex flex-col md:flex-row md:justify-between gap-x-4">
                <div className="font-semibold text-white/90 text-sm">{item.degree}</div>
                <div className="text-accent text-xs whitespace-nowrap">{item.period}</div>
              </div>
              <div className="text-white/70 text-xs mt-1">{item.institute}</div>
              <div className="text-accent text-xs">{item.grade}</div>
              <div className="text-[12px] leading-snug mt-1 text-white/50">{item.desc}</div>
            </div>
          ))}
        </div>
      );
    }

    if (tab.title === "certifications") {
      return (
        <div className="py-2 xl:py-6 flex flex-col gap-y-3 items-start w-full overflow-y-auto max-h-[340px] pr-2">
          {certData.map((cert, ci) => (
            <div key={ci} className="flex items-start gap-x-2 text-[12px] text-white/60 w-full">
              <span className="text-white/80 font-semibold whitespace-nowrap">{cert.issuer}:</span>
              <span className="flex-1">{cert.title}</span>
              <Link
                href={cert.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent hover:underline whitespace-nowrap"
              >
                [Certificate]
              </Link>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building <span className="text-accent">scalable</span> full-stack
            solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Full Stack Developer with a background in Electronics 
            Engineering and advanced computing from CDAC. Experienced 
            in developing cloud-native web applications using React, 
            Java, Spring Boot, and REST APIs, along with hands-on 
            expertise in CI/CD pipelines, Docker, and secure JWT-based 
            authentication. Passionate about UI/UX design, with a focus 
            on crafting intuitive, accessible, and visually engaging user experiences.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience.</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects.</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards.</div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Certifications.</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-3 xl:gap-x-5 mx-auto xl:mx-0 mb-4 flex-wrap gap-y-2">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
