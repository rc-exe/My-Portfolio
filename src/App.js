import {React} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DarkModeToggle from "./components/DarkModeToggle";
import { FaGithub, FaLinkedin, FaCode, FaFilePdf, FaInstagram,FaGlobe   } from "react-icons/fa";
import { FiMail, FiExternalLink } from "react-icons/fi";
import background from "./assets/background.JPG";
import WeatherWidget from './components/WeatherWidget';
import ScrollIndicator from "./components/ScrollIndicator"; // adjust the path if needed
import Time from './components/Time'; // Adjust the path if needed

function App() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.7]);

  
  const projects = [
    { 
      name: "Resume Scanner", 
      link: "https://github.com/rc-exe/resume-scanner",
      description: "ATS-compatible resume parser with scoring system that analyzes and ranks resumes based on job descriptions",
      tags: ["Python", "NLP", "Flask"]
    },
    { 
      name: "Online Code Editor", 
      link: "https://online-code-editor-a9zz.onrender.com/",
      description: "Real-time collaborative code editor with syntax highlighting and live preview functionality",
      tags: ["React", "Node.js", "WebSockets"]
    },
    { 
      name: "Face Emotion Recognition", 
      link: "https://github.com/rc-exe/face_recognition",
      description: "AI-powered emotion detection system using computer vision and deep learning",
      tags: ["Python", "OpenCV", "TensorFlow"]
    },
    { 
      name: "Keylogger", 
      link: "https://github.com/rc-exe/keylogger_rc",
      description: "Advanced system monitoring tool with encryption and remote reporting capabilities",
      tags: ["Python", "Security", "Encryption"]
    },
    { 
      name: "PDF Parser", 
      link: "https://github.com/rc-exe/pdf-praser",
      description: "Tool to extract and analyze text from PDF documents with search functionality",
      tags: ["Python", "PyPDF2", "NLTK"]
    },
    { 
      name: "Speech To Text", 
      link: "https://github.com/rc-exe/Speech-To-Text",
      description: "Real-time speech recognition system with 95% accuracy using deep learning",
      tags: ["Python", "TensorFlow", "NLP"]
    }
  ];

  const skills = [
    { name: "React.js", level: 70 },
    { name: "Python", level: 85 },
    { name: "Flask", level: 60 },
    { name: "Machine Learning", level: 75 },
    { name: "Java", level: 85 },
    { name: "MySQL", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      link: "https://www.credly.com/badges/aws-certified-cloud-practitioner",
      badge: "/badges/aws.png" // Path in public/badges/
    },
    {
      name: "Python Programming Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "https://www.simplilearn.com/certificates/verify/",
      badge: "/badges/python.png" // Path in public/badges/
    },
    {
      name: "ReactJS Certification",
      issuer: "Simplilearn",
      date: "2025",
      link: "https://www.simplilearn.com/certificates/verify/",
      badge: "/badges/react.png" // Path in public/badges/
    }
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden flex">
      {/* Sidebar Navigation */}
      <nav className="w-64 min-h-screen p-6 flex flex-col justify-between items-center backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg fixed left-0 top-0 z-50">
  <div className="w-full">
  <motion.a 
  href="#hero"
  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 text-center block"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  Ritesh Chakramani
</motion.a>


    <div className="flex flex-col items-center space-y-8">
    {['about', 'skills', 'projects', 'certifications', 'resume', 'contact'].map((item, index) => (
  <motion.a
    key={item}
    href={`#${item}`}
    className="w-full text-center font-medium hover:text-blue-500 dark:hover:text-blue-400 transition py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
  >
    {item.charAt(0).toUpperCase() + item.slice(1)}
  </motion.a>
))}

    </div>
  </div>

  <div className="flex flex-col items-center space-y-4 w-full">
    <div className="flex items-center justify-center space-x-4 w-full">
      <motion.a
        href="https://github.com/rc-exe"
        target="_blank"
        
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        <FaGithub className="text-xl" />
      </motion.a>
      
      <motion.a
        href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
      >
        <FaLinkedin className="text-xl" />
      </motion.a>
    </div>

    <DarkModeToggle />
  </div>
</nav>



      {/* Main Content */}
      <div className="flex-1 pl-64">
        {/* Animated Background */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            y: backgroundY,
            opacity
          }}
        />

{/* Hero Section */}
<section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
  </div>

  {/* Weather Widget - positioned top right */}
  <WeatherWidget />
{/* Time Component - positioned top left */}
<Time />
  <motion.div
    className="max-w-4xl relative z-10"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Animated greeting with typing effect */}
    <motion.div 
      className="text-lg md:text-xl mb-4 font-mono text-blue-500 dark:text-blue-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <span className="animate-wave inline-block origin-bottom"></span> Hey there! I'm
    </motion.div>
    
    {/* Name with more dramatic gradient */}
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
    >
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Ritesh Chakramani
      </span>
    </motion.h1>
    
    {/* Animated subtitle */}
    <motion.p
      className="text-xl md:text-3xl mb-8 max-w-2xl mx-auto leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      Building <span className="font-semibold text-blue-600 dark:text-blue-400">digital experiences</span> that 
      <span className="relative mx-2">
        <span className="relative z-10">matter</span>
        <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-400/30 -rotate-1"></span>
      </span>
      with modern tech
    </motion.p>
    
    {/* Enhanced CTA buttons */}
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <a
        href="#projects"
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
        Explore My Work
      </a>
      
      <a
        href="#contact"
        className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        Get In Touch
      </a>
    </motion.div>
    
    {/* Scroll indicator */}
    <ScrollIndicator/>
  </motion.div>
</section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate <strong className="text-blue-600 dark:text-blue-400">Full-Stack Developer</strong> with expertise in building modern web applications using <strong>React.js, Python, and Flask</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in tech began with a fascination for problem-solving, which led me to explore everything from frontend design to backend architecture and machine learning implementations.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or sharing knowledge with the developer community.
                </p>
                
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
                  >
                    <FiMail className="mr-2" />
                    Get In Touch
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl shadow-xl">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {['React', 'Python', 'Flask', 'ML', 'Java', 'SQL'].map((tech) => (
                        <div key={tech} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center">
                          <span className="font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                        <div className="text-sm font-mono text-gray-600 dark:text-gray-300">about_me.js</div>
                      </div>
                      <div className="mt-3 font-mono text-sm">
                        <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}
                        <div className="ml-4">
                          <div><span className="text-green-600 dark:text-green-400">name</span>: <span className="text-yellow-600 dark:text-yellow-400">'Ritesh Chakramani'</span>,</div>
                          <div><span className="text-green-600 dark:text-green-400">role</span>: <span className="text-yellow-600 dark:text-yellow-400">'Full-Stack Developer'</span>,</div>
                          <div><span className="text-green-600 dark:text-green-400">passion</span>: <span className="text-yellow-600 dark:text-yellow-400">'Building innovative solutions'</span></div>
                        </div>
                        {'}'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-[4px]">
            Skills
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
                  <div className="grid gap-6">
                    {[
                      {
                        title: "Web Development",
                        description: "Building responsive, performant web applications with modern frameworks",
                        icon: <FaCode className="text-2xl text-blue-500" />
                      },
                      {
                        title: "API Development",
                        description: "Designing robust RESTful APIs with proper documentation and security",
                        icon: <FaCode className="text-2xl text-purple-500" />
                      },
                      {
                        title: "AI Integration",
                        description: "Implementing machine learning models into practical applications",
                        icon: <FaCode className="text-2xl text-green-500" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-[4px]">
            Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.0, delay: index * 0.0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500 transition"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                      >
                        <FaGithub className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a
                href="https://github.com/rc-exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <FaGithub className="mr-2" />
                View All Projects on GitHub
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Certifications
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.0, delay: index * 0.0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.0 } }} // Adjusted duration
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <img 
                  src={cert.badge} 
                  alt={`${cert.name} badge`} 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-2">
                {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-4">
                Issued: {cert.date}
              </p>
              
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


        {/* Resume Section */}
<section id="resume" className="py-20 px-6 max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-[4px]">
      Resume
    </h2>

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Ritesh Chakramani</h3>
            <p className="text-blue-100">Software Developer</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="mr-3" />
                riteshchakramani123@gmail.com
              </li>
              <li className="flex items-center">
                <FaGithub className="mr-3" />
                github.com/rc-exe
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-3" />
                linkedin.com/in/ritesh-chakramani
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-3" />
                instagram.com/_ritesh_rc_
              </li>
              <li className="flex items-center">
                <FaGlobe className="mr-3" />
                <a href="https://ritesh-chakramani.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Skills</h4>
            <ul className="space-y-2 text-sm">
              <li>Java, Python, C++, C, SQL</li>
              <li>HTML, CSS, JavaScript, PHP</li>
              <li>MySQL, SQL Query Optimization</li>
              <li>Arduino IDE, VS Code, Cygwin</li>
              <li>IoT Integration, Web Designing</li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/3 p-8">
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Professional Summary
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Enthusiastic and detail-oriented software developer with expertise in Python, SQL, Java, and web technologies.
              Experienced in IoT applications, database management, and web development. Passionate about solving problems
              and creating efficient, scalable solutions.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Education
            </h4>
            <ul className="space-y-2">
              <li>
                <strong>MCA</strong>, Rani Channamma University, Belagavi (2023-2024) – CGPA: 7.63 | SGPA: 9.5
              </li>
              <li>
                <strong>BCA</strong>, CES Chetana BCA College, Vijayapura (2019–2022) – 75%
              </li>
              <li>
                <strong>PUC</strong>, Sri N.B. Patil PU Science College (2018–2019)
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Project Experience
            </h4>
            <ul className="space-y-4">
              <li>
                <h5 className="font-medium text-gray-800 dark:text-gray-200">
                  IoT-Based Weather Monitoring & Alert System
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Developed a weather monitoring system using ESP8266, DHT11, BMP180, and other sensors. Integrated real-time alerts via Blynk app with data visualization and analytics. Scored 364/400 (SGPA: 9.36).
                </p>
              </li>
              <li>
                <h5 className="font-medium text-gray-800 dark:text-gray-200">
                  Advocate Management System (Web Application)
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Created a multi-user web system with appointment scheduling for advocates and clients. Scored 296/300 in the academic project.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Publication
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              "Weather Monitoring System Using IoT" – Published in IRJMETS. 
              <br />
              <a
                className="text-blue-500 underline"
                href="https://www.irjmets.com/paperdetail.php?paperId=6edd51683119cca0d3b6e8005e7d3c9c&title=WEATHER%2BMONITORING%2BSYSTEM%2BUSING%2BIOT"
                target="_blank"
                rel="noreferrer"
              >
                View Publication
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/RITESH_CHAKRAMANI_resume.pdf"
              download
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition shadow-lg"
            >
              <FaFilePdf className="mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>

        {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-2xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start justify-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FiMail className="text-blue-500" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Email</h4>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshchakramani123@gmail.com" 
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  riteshchakramani123@gmail.com
                </a>
              </div>
            </div>
            <div>
  <h4 className="font-medium mb-4">Connect with me</h4>
  <div className="flex justify-center space-x-4">
    <a 
      href="https://github.com/rc-exe" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transform transition duration-300 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-600"
    >
      <FaGithub className="text-xl text-gray-800 dark:text-white" />
    </a>
    <a 
      href="https://www.linkedin.com/in/ritesh-chakramani-016a0b235" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transform transition duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30"
    >
      <FaLinkedin className="text-xl text-blue-600" />
    </a>
    <a 
      href="https://www.instagram.com/_ritesh_rc_/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transform transition duration-300 hover:scale-110 hover:bg-pink-100 dark:hover:bg-pink-900/30"
    >
      <FaInstagram className="text-xl text-pink-500" />
    </a>
  </div>
</div>



          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>


        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ritesh Chakramani
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
              </div>
              
              <div className="flex space-x-6">
                {['about', 'skills', 'projects', 'certifications', 'resume', 'contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
              <p>© {new Date().getFullYear()} Ritesh Chakramani. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
