import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DarkModeToggle from "./components/DarkModeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import background from "./assets/background.JPG";

function App() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          y: backgroundY,
        }}
      ></motion.div>

      <nav className="p-6 flex justify-between items-center shadow-md bg-gray-100 dark:bg-gray-800 fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold">Ritesh Chakramani</h1>
        <div className="space-x-6 flex items-center">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <a href="https://github.com/rc-exe" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
          </a>
          <DarkModeToggle />
        </div>
      </nav>

      <main className="p-20 flex flex-col items-center text-center mt-16">
        <motion.h2
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Ritesh Chakramani
        </motion.h2>
        <motion.p
          className="mt-4 text-lg max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A passionate <strong>Full-Stack Developer</strong> skilled in <strong>React.js & Python</strong>. I build modern, scalable, and high-performance web applications.
        </motion.p>
      </main>

      <section id="about" className="p-10 text-center max-w-3xl mx-auto">
  <h3 className="text-3xl font-semibold mb-4">About Me</h3>
  <p className="text-lg">
    I'm a dedicated <strong>Full-Stack Developer</strong> with a strong foundation in <strong>React.js, Python, Flask, and Machine Learning</strong>.
    My passion lies in crafting modern, high-performance web applications that solve real-world problems.
  </p>
  <p className="text-lg mt-4">
    With experience in both <strong>frontend and backend development</strong>, I specialize in building scalable applications with clean and efficient code.
    I love working on projects that integrate AI and automation, enhancing user experiences with intelligent solutions.
  </p>
  <p className="text-lg mt-4">
    My expertise extends to <strong>RESTful APIs, database management (MongoDB, PostgreSQL), UI/UX design principles, and cloud deployments</strong>.
    I am constantly learning new technologies to stay ahead in the ever-evolving tech industry.
  </p>
  <p className="text-lg mt-4">
    Aside from coding, I enjoy exploring new frameworks, contributing to open-source projects, and sharing knowledge with fellow developers.
    I'm always eager to take on new challenges and innovate with technology.
  </p>
</section>


      <section id="skills" className="p-10 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["React.js", "Java", "MySql", "HTML", "JavaScript", "Python", "Flask", "Machine Learning", "Tailwind CSS"].map(skill => (
            <motion.span
              key={skill}
              className="px-5 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="projects" className="p-10 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Keylogger", link: "https://github.com/rc-exe/keylogger_rc" },
            { name: "Online Code Editor", link: "https://online-code-editor-44qz.onrender.com/" },
            { name: "Face Emotion Reader", link: "https://github.com/rc-exe/face_recognition" },
            { name: "Speech To Text", link: "https://github.com/rc-exe/Speech-To-Text" },
            { name: "Resume Scanner", link: "https://github.com/rc-exe/resume-scanner" },
            { name: "Pdf Praser", link: "https://github.com/rc-exe/pdf-praser" },
            
          ].map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
               <strong>{project.name}</strong>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contact" className="p-10 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
        <p className="text-lg">
          📧 Email: <a href="mailto:riteshchakramani123@gmail.com" className="text-blue-500">riteshchakramani123@gmail.com</a>
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://github.com/rc-exe" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-700 transition" />
          </a>
        </div>
      </section>

      <footer className="p-4 text-center border-t border-gray-300 dark:border-gray-700">
        © 2025 Ritesh Chakramani. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
