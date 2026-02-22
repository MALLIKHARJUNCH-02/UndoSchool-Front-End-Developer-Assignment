import React from "react";
import Card from "../Cards/Card";
import FeaturedCoursesData from "./FeaturesCourses.json";
import CardGroup from "../Cards/CardGroup";
export default function FeaturedCourses(){
    return(
       <section>
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="flex flex-col justify-center items-center">
                    <h1>Featured Courses ⭐</h1>
                    <p className="p-3 text-center">Our most loved courses that kids absolutely adore!</p>
                </div>

                <CardGroup/>

            </div>
        </section>
    )
}