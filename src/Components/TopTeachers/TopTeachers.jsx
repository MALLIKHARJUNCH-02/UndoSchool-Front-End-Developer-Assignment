import React from "react";
import CardGroup from "../Cards/CardGroup";
import topTeachers from "./TopTeachers.json"
import "./topteachers.css";
export default function TopTeachers() {
    return (
        <section>
            <div className="m-5 flex flex-col justify-center items-center">

                <h1 className="text-center">Learn from Top Teachers</h1>
                <p className="text-center">Expert instructors who make learning fun and engaging for every child</p>
                <div className="flex mt-5 flex-wrap gap-2 justify-center items-center">
                    {topTeachers.map((teacher) => (
                        <div className=" flex justify-center items-center teacher-card bg-white text-center rounded-3xl relative my-8 pt-15 relative w-55">

                            <div className="teacher-img-wrapper absolute w-24 h-24 -top-[45px] left-1/2 rounded-full bg-white p-1">
                                <img src={teacher.image} alt="Andy Brew" className="w-100 h-100 rounded-full object-cover"/>
                            </div>


                            <div className="teacher-body">
                                <h5 className="mb-1 font-medium text-base">{teacher.name}</h5>

                                <p className="small text-muted mb-1 text-xs">
                                    {teacher.qualification} <span className="mx-2">|</span> {teacher.experience}
                                </p>

                                <p className="small text-muted mb-2 text-xs">
                                    {teacher.students}
                                </p>

                                <div className="subject-badge inline-block bg-gray-200 m-2 p-2 rounded-full text-xs">
                                    {teacher.subject}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-5">
                    <CardGroup />
                </div>


            </div>
        </section>
    )
}