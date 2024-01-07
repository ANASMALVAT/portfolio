"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";


export default function Experience() {
  return (
    <section id="experience"  className="scroll-mt-28 mb-28 sm:mb-40 gap-2">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:"#E2DCDF",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color:"#0f172a"
              }}
              contentArrowStyle={{
                borderRight:"0.4rem solid #9ca3af",
                color:"#0f172a"

              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:"#E2DCDF",
                fontSize: "1.5rem",
                color:"#0f172a",
                
              }}
            >
              <h3 className="font-semibold capitalize w-full">{item.title}</h3>
              <p className="font-normal !mt-0  !text-sm">{item.location}</p>
              <p className="!mt-1 !font-normal text-[#0f172a] ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <div
          className="group m-auto   w-1/2  px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none text-white focus:scale-110 hover:scale-105 bg-[#030712] a transition mt-2"
          > All Experience In CV{" "}
      </div>
    </section>
  );
}
