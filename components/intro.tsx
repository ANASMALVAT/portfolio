"use client"

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { BsArrowRight} from "react-icons/bs"
import { BsLinkedin} from "react-icons/bs"
import { BsGithub} from "react-icons/bs"
import{HiDownload} from "react-icons/hi"

export default function Intro() {

        return (
            <section id="home" className="  mb-28 max-w-[50rem] text-center sm:mb-0 !scroll-mt-[100rem]">
                <div className=" flex items-center justify-center">
                    <div className="relative">
                        <motion.div
                            initial={{opacity:0,scale:0}}
                            animate={{opacity:1,scale:1}}
                            transition={{
                                type:"tween",
                                duration:0.4
                            }}
                            >
                            <Image width={"192"} height={"192"} quality={"95"} priority={true}  src={"https://drive.google.com/file/d/1LHIKUY3TF8wQorYlFN7GPnPsLslZlITw/view?usp=sharing"} alt="Anas Potrait"
                                className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-110 hover:duration-300">
                            </Image>
                            <motion.span className=" text-4xl absolute  bottom-0 right-0 " 
                                initial={{opacity:0,scale:0}}
                                animate={{opacity:1,scale:1}}
                                transition={{
                                    type:"spring",
                                    stiffness:125,
                                    delay:0.1,
                                    duration:1,
                                    
                                }}
                                >
                                    👋
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration:1.5
                    }}
                >
                    <span className="font-bold">Hello, I'm Anas.</span> I'm a{" "}
                    <span className="font-bold">full-stack developer</span> with{" "}
                    <span className="font-bold">2 years</span> of experience. I consider
                    myself as a problem solver <span className="italic"> computer scientist.</span> My focus is on{" "}
                    <span className="underline">making an impact.</span>
                </motion.h1>
                <motion.div className="flex flex-col sm:flex-row items-center gap-4 px-4  text-[16px]  font-medium"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration:1.5
                            }}>
                <a
                href="https://checkered-hose-85d.notion.site/Hello-From-Anas-Malvat-cba83db56c0f47cd860f98da57a8975b?pvs=4"                
                target="_blank"
                className="group bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
                >
                Contact Me{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a className=" bg-white text-gray-900 px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer" download href="/CV.pdf"> Download CV <HiDownload/> </a>
                <a className=" bg-white text-gray-900 px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer" download target="_blank" href="https://www.alphaalgos.com"> Alpha Algo <BsArrowRight/> </a>
                <a className=" bg-white text-gray-900 px-5 py-3 flex items-center gap-2  hover:scale-105 rounded-full cursor-pointer " href="https://www.linkedin.com/in/anas-malvat/"  target="_blank"> <BsLinkedin/> </a>
                <a className=" bg-white text-gray-900 px-5 py-3 flex items-center gap-2 rounded-full hover:scale-105 cursor-pointer " href="https://github.com/ANASMALVAT/" target="_blank"> <BsGithub/> </a>
                </motion.div>
            </section>
        )
}
