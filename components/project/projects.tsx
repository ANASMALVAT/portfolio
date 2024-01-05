"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight} from "react-icons/bs"
import Project from "./project";



export default function Projects() {

  return (
    <section  id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <Link
              href="https://github.com/ANASMALVAT/"
              target="_blank"
              className="group m-auto bg-gray-900  w-1/2 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              > More Projects{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
      </div>
    </section>
  );
}