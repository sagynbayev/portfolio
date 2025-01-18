import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import unilink from "/unilink.jpg"
import blog from "/blog1.jpg"
import delivery from "/delivery.jpg"
import social from "/socialq.jpg"
import github from "/github-mark-white.png"
const items = [
    {
        id: 1,
        title: "UniLink Social App",
        img: unilink,
        desc: "UniLink is a university-focused social network that simplifies organizational processes developed using ReactJs and Golang. The platform brings together students, faculty, and administration, offering an intuitive interface for communication and collaboration.",
        link: "https://github.com/sagynbayev/uniLink_Front",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: blog,
        desc: "This website is a vibrant blog app that allows users to post their thoughts and converse with friends, built with NextJS for a seamless full-stack experience. Leveraging Prisma for database management and MongoDB for its flexibility, it creates a dynamic space for sharing and discussion.",
        link: "https://github.com/sagynbayev/next_blog_app",
    },
    {
        id: 3,
        title: "Delivery App",
        img: delivery,
        desc: "This website is an innovative food delivery app that revolutionizes the way users order their meals, crafted using NextJS for a smooth, full-stack user experience. By integrating Prisma for streamlined database management and MongoDB to handle a vast array of restaurant menus and customer orders.",
        link: "https://github.com/sagynbayev/delivery_app",
    },
    {
        id: 4,
        title: "VueJS Social App",
        img: social,
        desc: "\"ConnectSphere\" is a social application that empowers users to share posts, thoughts, and engage in chats with friends, developed with VueJs for a responsive frontend and Python Django for a robust backend. This platform provides a versatile space for interaction and connectivity, blending ease of use with powerful features.",
        link: "https://github.com/sagynbayev/social_app_front",
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className={"projectLink"}>
                            <a href={item.link}>
                                <span>Code</span>
                                <img src={github}/>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;
