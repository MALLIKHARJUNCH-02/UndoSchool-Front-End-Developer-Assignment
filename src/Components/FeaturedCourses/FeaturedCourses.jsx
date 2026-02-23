import React from "react";
import Card from "../Cards/Card";
import FeaturedCoursesData from "./FeaturesCourses.json";
import CardGroup from "../Cards/CardGroup";
export default function FeaturedCourses() {
    return (
        <section className="mt-12">
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-normal text-5xl text-center">Featured Courses⭐</h1>
                    <p className="p-3 text-center text-base">Our most loved courses that kids absolutely adore!</p>
                </div>

                <CardGroup />

            </div>
        </section>
    )
}