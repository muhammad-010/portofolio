import React from 'react'

import ProjectCard from './ProjectCard';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

export default function ProjectContent() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div className="flex flex-col px-7">
      <div className='mt-5'>
        <motion.p
          initial={{ opacity: 0.5, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, bounceStiffness: 3 }}
          className="text-3xl md:text-4xl font-bold text-primary">
          Projects</motion.p>
        <motion.p
          initial={{ opacity: 0.5, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, bounceStiffness: 3 }}
          className='mt-1'>Below are the projects I have completed.</motion.p>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-7'>
          {projects.map((item, index) => (
            <ProjectCard title={item.title} desc={item.desc} techs={item.techs} image={item.image} github={item.github} demo={item.demo} delay={isMobile ? 0 : ((index % 3) * 0.4)} rotate={index % 2 == 0 ? '1deg' : '-1deg'} check={"asbjjbadbjkda j dbjs djvbjsbjdbvjdbj kxncknkfdndsnk"} />
          ))}
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Personal Web Portfolio",
    desc: "My personal portfolio website showcasing my skills, experience, and projects. Built with Next.js and framer-motion for smooth animations and a premium feel.",
    techs: ["nextjs", "react", "tailwindcss", "framer"],
    image: "/portooo.png",
    demo: "#"
  },
  {
    title: "UMKM Management Platform – BSI UMKM Centre {Progress}",
    desc: "A comprehensive operational web platform for managing UMKM activities including product catalogs, event agendas, content management, and administrative workflows. Built with structured UI components and role-based dashboards to simplify internal management processes.",
    techs: ["nextjs", "react", "mongodb", "figma"],
    image: "/bsi_umkm.png",
    github: "",
    demo: "https://pmld-umkm-bsi-chi.vercel.app"
  },
  {
    title: "InTO UGM 2026 Platform",
    desc: "Redesigned and rebuilt the official platform for InTO UGM 2026. The project focused on improving information architecture, participant experience, and system scalability. Implemented a modern UI/UX structure with seamless event phase management.",
    techs: ["nextjs", "mongodb", "react", "figma"],
    image: "/into_2026.png",
    github: "",
    demo: "https://intougm2026.com"
  },
  {
    title: "InTO UGM 2025 Event System",
    desc: "Event information and registration platform with integrated payment gateway (Midtrans). Designed user interfaces, registration flows, and admin panels to support participant management and real-time event operations.",
    techs: ["nextjs", "mongodb", "midtrans", "react"],
    image: "/into_2025.png",
    github: "",
    demo: "https://intougm2025.vercel.app"
  },
  {
    title: "VELG SHOP Cashier Administration System",
    desc: "Internal digital system that transformed manual transaction records into a structured cashier and operational management platform. Focused on workflow mapping, UI design, and data organization to improve store efficiency.",
    techs: ["figma", "uiux", "system-design"],
    image: "/velgshop.png",
    github: "",
    demo: ""
  },
  {
    title: "KARAKTER UGM Official Website Redesign",
    desc: "WordPress-based organizational website redesign focused on editorial identity, article readability, and content management efficiency. Implemented structured templates and improved navigation to enhance user experience.",
    techs: ["wordpress", "uiux", "cms", "web-design"],
    image: "/karakter_ugm.png",
    github: "",
    demo: "https://karakter.ditmawa.ugm.ac.id"
  },
  {
    title: "SCOPH by CIMSA Website Revamp",
    desc: "Modernization of organizational website to improve program visibility and mobile responsiveness. Created modular WordPress components and restructured site architecture for easier maintenance and better content accessibility.",
    techs: ["wordpress", "uiux", "cms", "responsive-design"],
    image: "/scoph.png",
    github: "",
    demo: "https://scoph.cimsa.or.id"
  },
  // {
  //   title : "",
  //    desc: "",
  //    techs: [],
  //    image: "",
  //    github: "",
  //    demo: "",
  // },
]
