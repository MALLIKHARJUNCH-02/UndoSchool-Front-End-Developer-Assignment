import React from "react";
import { FaUser, FaClock, FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import "./card.css";

export default function Card({ course }) {
    return (
        <section className="flex justify-center items-center p-2 flex-wrap">

            <div>

            </div>
            <div className="course-card bg-white rounded-xl p-3 w-80">

                <div className="flex justify-between">

                    {course.badge == 1 && (
                        <div className="border-yellow-50 p-1 mb-2 rounded-full text-white bg-yellow-500 font-bold">
                            <span>Selling Fast</span>
                        </div>
                    )}


                    <div className="rating mb-2 text-gray-500 font-semibold text-xs">
                        ⭐ {course.rating} | {course.learners} learners
                    </div>
                </div>

                <img
                    src={course.image}
                    alt="Course"
                    className="card-image w-100 rounded-xl mb-3"
                />


                <div className="tags flex gap-4 mb-3">
                    <span className="bg-gray-300 rounded-xl text-xs">{course.language}</span>
                    <span className="bg-gray-300 rounded-xl text-xs">{course.level}</span>
                    <span className="bg-gray-300 rounded-xl text-xs">{course.classes}</span>
                </div>


                <h5 className="title font-semibold text-sm font-medium mb-2 ">
                    {course.title}
                </h5>


                <p className="description text-sm text-gray-500 mb-3">
                    {course.description}
                </p>
                {course.by && (
                    <span className="flex mt-3 mb-3">
                        <img
                            src={course.byImage}
                            alt="By"
                            className="by-image"
                        />
                        {course.by}</span>
                )}


                <div className="info-row flex justify-between mb-3">
                    <div className="flex items-center text-sm"><FaUser /> <span>{course.age}</span></div>
                    <div className="flex items-center text-sm"><FaClock /> <span>{course.duration}</span></div>
                    <div className="flex items-center text-sm"><FaRupeeSign /> <span>{course.price}</span></div>
                    <div className="flex items-center text-sm"><FaShoppingCart /></div>
                </div>

            </div>
        </section>
    );
}