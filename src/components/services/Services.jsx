import {useRef} from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";

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
    {
        id: 1,
        place: '"Element" online programming school',
        title: 'Programming Teacher',
        date: "July 2021 – May 2022",
        def: [
            'Teaching students the basics of Python and the basics of Web Development'
        ]
    },
    {
        id: 2,
        place: 'Tax.kz',
        title: 'Front End Developer',
        date: "November 2023",
        def: [
            'Development of Landing Page and Main parts',
            'Working with API'
        ]
    }
]
const skills = [
    {
        id: 1,
        title: 'Languages',
        arr: ["JavaScript", "C++", "GO", "HTML/CSS", "SQL"]
    },
    {
        id: 2,
        title: "Developers Tool",
        arr: ["VS Code", "WebStorm", "Goland", "DataGrip", "Git"]
    }
]
const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"});

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
                    <img src="/heroPortfolio2.jpg" alt=""/>
                </div>
                <div className="title">
                    <h1>Hello there!</h1>
                    <p className="desktop">
                        I’m <strong>Almaz Sagynbayev</strong>, a passionate Frontend Developer and Computer Science
                        enthusiast from Astana, Kazakhstan. With a robust educational background, I am dedicated to crafting
                        engaging, user-friendly web experiences. <strong>What I Offer?</strong> I bring creativity,
                        problem-solving skills, and a dedication to learning and applying the latest technologies.
                        I'm always looking to connect with fellow developers and explore new opportunities.
                    </p>
                    {/*<p className={"mobile"}>*/}
                    {/*    I’m <strong>Almaz Sagynbayev</strong>, a passionate Frontend Developer and Computer Science*/}
                    {/*    enthusiast from Astana, Kazakhstan.*/}
                    {/*</p>*/}
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    // whileHover={{background: "lightgray", color: "black"}}
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
                    // whileHover={{background: "lightgray", color: "black"}}
                >
                    <h2>Experience</h2>
                    <div className='mapBox'>
                        {experience.map((item) => (
                            <div key={item.id} className="ItemBox">
                                <h1>{item.place}</h1>
                                <p>{item.title}</p>
                                {item.def.map((definition, index) => (
                                    <p key={index} className={'def'}>- {definition}</p> // Using index as key because definition items might not be unique
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="box"
                    // whileHover={{background: "lightgray", color: "black"}}
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
