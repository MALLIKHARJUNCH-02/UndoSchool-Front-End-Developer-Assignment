import React from "react";
import Card from "../Cards/Card";
import Courses from "./Courses.json";
export default function NewLaunches() {
    return (
        <section className="mt-12">
            <div className="flex flex-col justify-center items-center mt-5 bg-cyan-50">
                <div className="mt-5 flex flex-col justify-center items-center">
                    <h1 className="font-normal text-5xl">New Launches⭐</h1>
                    <p className="p-3 text-center text-base">Our most loved courses that kids absolutely adore!</p>
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    {Courses.map((course) => (
                        <Card key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </section>
    )
}