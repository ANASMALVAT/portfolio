"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";


export default function Education() {

  return (
    <section id="education"  className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
               contentStyle={{
                background:"#FDFAFB",
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
                background:"#FDFAFB",
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
    </section>
  );
}

