import React from 'react'
import ExperienceContent from './ExperienceContent'
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            title: "UI/UX & Frontend Developer",
            company: "BSI UMKM Centre Yogyakarta",
            date: "Aug 2025",
            finish: "Present",
            description: "Developed and designed a comprehensive UMKM management web platform using Next.js. Focused on creating structured user interfaces for operational workflows including product catalogs, event management, content publication, and administrative dashboards. Implemented consistent UI components to simplify staff operations and reduce technical barriers. Collaborated closely with team members to iterate rapidly through feedback cycles, ensuring usability, clarity, and system stability."
        },
        {
            title: "Full-Stack Developer & UI/UX Designer",
            company: "InTO UGM 2026",
            date: "Nov 2025",
            finish: "Present",
            description: "Led the redesign and redevelopment of the InTO UGM platform for 2026. Reconstructed information architecture and user experience flows to better match participant needs. Built the platform using Next.js and MongoDB while ensuring scalability and readiness for multiple event phases. Worked collaboratively with cross-functional teams to deliver a clean, intuitive, and reliable digital platform."
        },
        {
            title: "Full-Stack Developer & UI/UX Designer",
            company: "InTO UGM 2025",
            date: "Nov 2024",
            finish: "Jan 2025",
            description: "Developed an event information and registration system using Next.js and MongoDB with Midtrans payment gateway integration. Designed and customized UI/UX components aligned with event identity and participant experience. Managed navigation structure and performed iterative improvements based on internal committee feedback to enhance clarity and usability."
        },
        {
            title: "Product/UI Designer",
            company: "VELG SHOP",
            date: "Jul 2024",
            finish: "Dec 2024",
            description: "Transformed manual business processes into a structured digital cashier and administration system. Designed workflows, data structures, and interfaces to streamline transactions and record management. Collaborated within a multidisciplinary team to ensure smooth implementation and conducted iterative design improvements based on real operational needs and user walkthroughs."
        },
        {
            title: "Freelance WordPress Developer & Designer",
            company: "KARAKTER UGM",
            date: "Jul 2024",
            finish: "Aug 2024",
            description: "Redesigned and developed the official organization website using WordPress CMS. Improved site architecture, readability, and editorial presentation. Created structured post templates and optimized media management to accelerate content updates and enhance overall user experience."
        },
        {
            title: "Freelance WordPress Developer & Designer",
            company: "SCOPH by CIMSA",
            date: "Aug 2025",
            finish: "Present",
            description: "Modernized organizational website visual identity and program structure. Streamlined navigation and content layout to improve accessibility and clarity. Built modular WordPress components to enable easier maintenance and updates by internal administrators."
        },
        {
            title: "Documentation Lead & Media Team Coordinator",
            company: "Multiple Organizations (LosFM Jogja, RDK UGM, GARASI UGM, InTO UGM, UGM ONLINE, PIONIR UGM)",
            date: "2022",
            finish: "Present",
            description: "Managed photography and videography documentation for organizational events and campaigns. Led creative teams of up to 10 members to produce structured visual content. Standardized editing workflows and production guidelines, contributing to approximately 300% engagement growth and over 641,000 social media insights."
        },
        {
            title: "Stage Photographer",
            company: "D Fest Concert, Dental Project, CRSL Landfest #6",
            date: "2022",
            finish: "present",
            description: "Captured professional live performance visuals emphasizing storytelling and audience interaction. Delivered curated high-resolution images suitable for publication and promotional needs. Performed advanced photo editing including color grading and visual enhancement."
        },

    ]

    return (
        <div className="mt-16 flex flex-col px-7">
            <motion.p
                initial={{ opacity: 0.0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, bounceStiffness: 3 }}
                className="text-[30px] my-10 font-bold">Experience</motion.p>
            <div className="">
                {experiences.map((experience, index) => (
                    <ExperienceContent finish={experience.finish} key={index} position={experience.title} company={experience.company} date={experience.date} description={experience.description} />
                ))}
            </div>
        </div>
    )
}
