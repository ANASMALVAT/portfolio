"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      id="about"
    >
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
      I am Anas Malvat, a visionary computer scientist with a mission to create impactful products. Considered a problem solver with a passion for programming, I've demonstrated my skills by ranking in the top 50 globally on competitive coding platforms like GeeksForGeeks. My achievements include being hired by Dalhousie University to develop a tool for assessing students' GitLab activity, resulting in resource efficiency. Additionally, I've created my own coding platform named Alpha Algo and established a computer science society at Dalhousie University. Always eager to learn new technologies, I am currently seeking a{" "}
      <span className="font-medium">full-time position</span> as a software developer.
    </p>

    <p>
      <span className="italic">When I'm not coding</span>, I enjoy understanding human psychology and staying active with workouts. I also relish{" "}
      <span className="font-medium">learning new things</span>, currently focusing on{" "}
      <span className="font-medium">personal development and financial literacy</span>. Additionally, I'm honing my skills in playing the guitar.
    </p>
    </motion.section>

  );
}