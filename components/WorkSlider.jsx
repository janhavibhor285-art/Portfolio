import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const allProjects = [
  {
    title: "NGO-Connect Web App",
    path: "/thumb1.png",
    links: [
      { label: "Live Project", href: "https://github.com/janhavibhor285-art/NGO-Janhavi" },
    ],
  },
  {
    title: "Perf: Luxury Ecommerce",
    path: "/thumb2.png",
    links: [
      { label: "Live Project", href: "https://www.figma.com/proto/HBa8uDxeTAlDVmqq5cG8SN/Perf--A-Luxury-Ecommerce-Website-Design?node-id=64-8&p=f&t=AG4osmNDtKEIGjkj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
    ],
  },
  {
    title: "MindBloom – Mental Health App",
    path: "/thumb3.png",
    links: [
      { label: "Case Study", href: "https://www.figma.com/proto/JTVxOiXWZpIcQvI9fvXkW8/MindBloom--Mental-Health-App?node-id=117-38&p=f&t=cF7ynCzxGAVAHgrM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
      { label: "Live Project", href: "https://www.figma.com/proto/0r4ubvjpSmA11Bwo4Vv8kT/MindBloom--Mental-Health-Application-App?node-id=55-249&p=f&t=472zxvoFJ7wNErCC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=55%3A249" },
    ],
  },
  {
    title: "Traveler – Travel Planning",
    path: "/thumb4.png",
    links: [
      { label: "Live Project", href: "https://www.figma.com/proto/SzBYxgxtgRaExggZP4PQ2e/Traveler-Landing-Page?node-id=21-81&p=f&t=lvOTlDzskip7kIA7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
    ],
  },
  {
    title: "Hydroponics Precision Farming",
    path: "/thumb5.png",
    links: [
      { label: "Live Project", href: "https://drive.google.com/file/d/1_ekvX-HZM3cbtC8z1CM8chvNCRb_iTC7/view?usp=drivesdk" },
    ],
  },
  {
    title: "PawsPal – Pet Care App",
    path: "/thumb6.png",
    links: [
      { label: "Live Project", href: "https://www.figma.com/proto/TDeNPhWmOl315BzIYwc9U7/PawsPal---Pet-Care-App?node-id=1-13&p=f&t=0sa7MwwoGtjg8anV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A13" },
      { label: "Case Study", href: "https://www.figma.com/proto/wUm5nPLpr1RTBoBNKyXZRj/PawsPal---Pet-Care-App-Case-Study?node-id=90-82&t=CW19PN2McQBGOxId-1" },
    ],
  },
  {
    title: "Jewelry Web Design",
    path: "/thumb7.png",
    links: [
      { label: "Live Project", href: "https://www.figma.com/proto/eIok2CLqqlVUpONjrkAG1A/Jewelry-Web-Design?node-id=1-2&t=Eg3rufBA3rSmbPJi-1" },
    ],
  },
  {
    title: "Crypto NFT Marketplace",
    path: "/thumb8.png",
    links: [
      { label: "Live Project", href: "https://www.figma.com/proto/gRuTiaxIH8nNagSIoidQ3H/Crypto-NFT-Marketplace-Website-Design?node-id=43-5&t=qz0ydSYyGZ7NT3bz-1" },
    ],
  },
  {
    title: "Real Estate Website UI",
    path: "/thumb9.png",
    links: [
      { label: "Live Project", href: "https://www.figma.com/proto/ZXfgLq9LtpFSPtkke4Wxba/Real-Estate-Website-UI-Design?node-id=26-208&t=hdBKECc73Wb9nPuH-1" },
    ],
  },
];

const WorkSlider = () => {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[480px] pr-1 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
      {allProjects.map((project, i) => (
        <div
          key={i}
          className="relative rounded-lg overflow-hidden flex items-center justify-center group aspect-video"
        >
          {/* image */}
          <Image
            src={project.path}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />

          {/* overlay gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
            aria-hidden
          />

          {/* hover content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 px-2">
            <div className="text-[11px] text-white font-semibold mb-2 tracking-wide text-center">
              {project.title}
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              {project.links.map((link, li) => (
                <Link
                  key={li}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-x-1 text-[10px] tracking-[0.15em] text-white hover:text-accent transition-colors duration-200"
                >
                  <span>{link.label}</span>
                  <BsArrowRight className="text-xs" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSlider;
