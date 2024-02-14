import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};
const imageVariants = {
    initial: {
        x: 3500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    }
}
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Sagynbayev Almaz</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web developer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href={"#Portfolio"}>
                            <motion.button variants={textVariants} whileHover={{scale: 1.1}}
                                           whileTap={{scale: 0.9}}
                                           transition={{type: "spring", stiffness: 400, damping: 17}}
                            >
                                See the Latest Works
                            </motion.button>
                        </a>
                        <a href={"#Contact"}>
                            <motion.button variants={textVariants} whileHover={{scale: 1.1}}
                                           whileTap={{scale: 0.9}}
                                           transition={{type: "spring", stiffness: 400, damping: 17}}
                            >
                                Contact Me
                            </motion.button>
                        </a>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt=""
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Software Engineer
            </motion.div>
            <motion.div className="imageContainer" variants={imageVariants}>
                <img src="/heroPortfolio2.jpg" alt=""/>
            </motion.div>
        </div>
    );
};

export default Hero;
