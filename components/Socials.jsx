import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
  RiGlobalLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/janhavi-bhor-53433b260",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/janhavibhor285-art",
    Icon: RiGithubLine,
  },
  {
    name: "Website",
    link: "https://sites.google.com/view/janhavi-bhor",
    Icon: RiGlobalLine,
  },
  {
    name: "Email",
    link: "mailto:janhavibhor285@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
