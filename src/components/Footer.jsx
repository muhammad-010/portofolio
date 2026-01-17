import { useToggle } from "@/util/ToggleContext";
import { motion } from "framer-motion";
import { Image, Link } from "@nextui-org/react";
import { SiInstagram, SiLinkedIn, SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const { toggle } = useToggle();

  return (
    <footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="border-t border-slate-900/5 py-10 flex justify-center flex-col">
        <motion.div
          onClick={toggle}
          whileHover={{ scale: 1.2, rotate: "180deg" }}
          whileTap={{ scale: 1, rotate: "360deg" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, rotate: "360deg" }}
          transition={{ duration: 1 }}
          className="mx-auto "
        >
          <Image src="/N-03.png" width={50} height={50} alt="logo N" />
        </motion.div>
        <p class="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2026 Muhammad Al Fayyadh. All rights reserved.
        </p>
        <div class="mt-10 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}>
            <Link target="_blank" href="https://www.linkedin.com/in/muhammadalfayyadh/">
              <FaLinkedin className="w-[30px] h-[30px] hover:text-[#0A66C2] text-foreground cursor-pointer hover:scale-125" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.5, delay: 0.5, }}>
            <Link target="_blank" href="https://www.instagram.com/m_alfayyadh_/">
              <SiInstagram className="w-[30px] h-[30px] hover:text-[#EF018B] text-foreground cursor-pointer hover:scale-125" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}>
            <Link href="mailto:muhammadalfayyadh@mail.ugm.ac.id">
              <SiGmail className="w-[30px] h-[30px] hover:text-red-500 text-foreground cursor-pointer hover:scale-125" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
