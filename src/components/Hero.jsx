import React from "react";
import profilepic from "../assets/profpic.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
// import CVPDF from "../assets/surya-resume.pdf";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {SiExpress} from "react-icons/si";
import { motion } from "framer-motion";


const Hero = () => {

 const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/suryanag-portfolio/surya-resume.pdf";
    link.download = "surya-resume.pdf";
    document.body.appendChild(link); // Append the link to the document body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up by removing the link
  };

  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Fullstack(MERN) Dev",
                        1000,
                        "Frontend Dev",
                        1000,
                        " Python Dev",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-blue-800">SURYANAG</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am passionate about building scalable web applications and writing clean, modular code. With experience in JavaScript, React, Python and MERN stack.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"

                >
                    {/* <motion.a href="/surya-resume.pdf" download> */}
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-blue-800 rounded-xl" 
                        onClick={handleDownload}    
                    >
                        Download CV
                    </motion.button>
                    {/* </motion.a> */}
                    
                    

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-800 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/suryanag0999" target="_blank"
                         rel="noopener noreferrer">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/suryanag9966/" target="_blank"
                         rel="noopener noreferrer"> 
                            <AiOutlineLinkedin/>
                        </motion.a>

                        
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiHtml5 className="text-orange-600 mx-2" />
            <DiCss3 className="text-blue-600 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiReact className="text-blue-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" />
            <SiExpress className="text-gray-300" title="Express.js" />
  <DiMongodb className="text-green-500" title="MongoDB" />
  <DiPython className="text-blue-400" title="Python" />

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero