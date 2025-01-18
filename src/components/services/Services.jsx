import {useRef, useState} from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";
import hero from "/heroPortfolio2.jpg"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const education = [
  {
    id: 1,
    university: "Kazakh-British Technical University",
    degree: "Bachelor in Computer Science, Information Systems",
    gpa: "3.48",
    date: "September 2019 - June 2023",
  },
  {
    id: 2,
    university: "Astana IT University",
    degree: "Masters in Computer Science, Computer Science and Engineering",
    gpa: "3.75",
    date: "September 2023 - June 2025",
  },
]
const experience = [
  // {
  //     id: 1,
  //     place: '"Element" online programming school',
  //     title: 'Programming Teacher',
  //     date: "July 2021 – May 2022",
  //     def: [
  //         'Teaching students the basics of Python and the basics of Web Development'
  //     ]
  // },
  {
    id: 1,
    place: 'Tax.kz',
    title: 'Front End Developer',
    date: "November 2023 - April 2024",
    def: [
      'Designed and developed the landing page and core components of the application',
      'Implemented API integrations to enable seamless data retrieval and functionality',
      'Connected and synchronized backend services with frontend interfaces for a unified system',
      'Built a document management system to streamline the processes of creating, editing, and managing document workflows'
    ]
  },
  {
    id: 2,
    place: 'Nimbl',
    title: 'Front End Developer',
    date: "May 2024 - Present",
    def: [
      'Developed a Learning Management System (LMS), ensuring seamless user experience and robust functionality',
      'Worked with animation libraries such as Framer Motion and GSAP to create interactive and dynamic user interfaces',
      'Integrated Artificial Intelligence (AI) capabilities to enhance system efficiency and user experience',
      'Implemented payment systems by integrating the IOka payment gateway for secure and efficient transactions',
      'Utilized libraries like Tanstack Query and TRPC for efficient and scalable backend communication',
      'Developed a custom call system with advanced functionalities',
      'Integrated document management functionality, enabling streamlined document creation, editing, and storage workflows',
    ]
  }
]
const skills = [
  {
    id: 1,
    title: 'Programming Languages',
    arr: ["HTML/CSS", "JavaScript", "TypeScript","C++", "GO", "Python",]
  },
  {
    id: 2,
    title: 'Frameworks and Libraries',
    arr: ["ReactJS", "VueJS", "NextJS",]
  },
  {
    id: 3,
    title: "Databases",
    arr: ["PostgreSQL","MongoDB"]
  }
]
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, {margin: "-100px"});
  const [activeExperience, setActiveExperience] = useState(1); // First experience open by default

  const toggleDefinitions = (id) => {
    setActiveExperience((prevId) => (prevId === id ? null : id)); // Close if the same is clicked, otherwise switch
  };
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
      id={"About Me"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="imgContainer">
          <img src={hero} alt=""/>
        </div>
        <div className="title">
          <h1>Hello</h1>
          <p className="desktop">
            I’m <strong>Almaz Sagynbayev</strong>, a Frontend Developer and Computer Science
            enthusiast from Astana, Kazakhstan. With a powerful educational background, I am committed to
            crafting, engaging, user-friendly web experiences. <strong>What I Offer?</strong> I bring creativity,
            problem-solving skills, and a dedication to learning and applying the latest technologies.
            I'm always looking to connect with fellow developers and explore new opportunities. <a
            href={"/CV_Sagynbayev_Almaz.pdf"} download>My CV</a>
          </p>
          <p className={"mobile"}>
            I’m <strong>Almaz Sagynbayev</strong>, a passionate Frontend Developer and Computer Science
            enthusiast from Astana, Kazakhstan. With a robust educational background, I am dedicated to
            crafting engaging, user-friendly web experiences. <a href={"/CV_Sagynbayev_Almaz.pdf"}
                                                                 download> My CV</a>
          </p>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
        >
          <h2>Education</h2>
          <div className='mapBox'>
            {education.map((item) => (
              <div key={item.id} className="ItemBox">
                <h1>{item.university}</h1>
                <p>{item.degree}</p>
                <p className="gpa"><strong>GPA:</strong> {item.gpa}/4.0</p>
                <p className="date">{item.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="box"
        >
          <h2>Experience</h2>
          <div className='mapBox'>
            {experience.map((item) => (
              <div key={item.id} className="ItemBox">
                <h1>{item.place}</h1>
                <p>{item.title}</p>
                <div>
                  {(activeExperience === item.id
                      ? item.def
                      : item.def.slice(0, 1) // Show only the first definition for inactive experiences
                  ).map((definition, index) => (
                    <p key={index} className="def">
                      - {definition}
                    </p>
                  ))}
                </div>
                <button
                  className="toggleButton"
                  onClick={() => toggleDefinitions(item.id)}
                >
                  {activeExperience === item.id ? (
                    <img src={"/fold.png"} alt=""/>
                  ) : (
                    <img src={"/unfold.png"} alt=""/>
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="box"
        >
          <h2>Technical skills</h2>
          <div className='mapBox'>
            {skills.map((item) => (
              <div key={item.id} className="ItemBox">
                <h1>{item.title}</h1>
                <div className={"arrItemBox"}>
                  {item.arr.map((arrItem, index) => (
                    <motion.span whileHover={{background: "lightgray", color: "black"}} key={index}
                                 className={'arrItem'}>{arrItem}</motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
