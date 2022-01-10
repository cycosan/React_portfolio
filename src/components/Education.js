import React from "react";
import { AcademicCapIcon,BriefcaseIcon } from "@heroicons/react/solid";
import { qualifications } from "../data";

export default function Qualification() {
  return (
    <section id="qualification">
        <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 ">
          Education & Experience
        </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {qualifications.map((qualification) => (
            <div className="p-2 sm:w-1/2 w-full">

                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {qualification.is_education ? <AcademicCapIcon className="w-6 inline-block mb-4 " /> : <BriefcaseIcon className="w-6 inline-block mb-4" />}
        
                  <span className="flex-grow  flex flex-col pl-1  text-left">
                    <span className="text-gray-500 text-sm">
                      {qualification.from_date}-{qualification.to_date}
                    </span>
                    <span className="font-small text-yellow-400 ">
                      {qualification.title}
                    </span>
                    <span className="title-font font-semibold text-white uppercase">
                      {qualification.university_name}
                    </span>
                    <span className="text-gray-500 text-sm ">
                      {qualification.grade}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {qualification.location}
                    </span>
                  </span>
                </div>
              </div>
          
          ))}
        </div>
      </div>
    
    </section>
  );
}
