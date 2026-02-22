import React from "react";
import Card from "./Card";
import FeaturedCoursesData from "../FeaturedCourses/FeaturesCourses.json";

export default function CardGroup() {
    return (
        <section>
            <div className="flex flex-wrap justify-center items-center">
                {FeaturedCoursesData.map((course) => (
                    <Card key={course.id} course={course} />
                ))}
            </div>
        </section>
    )
}