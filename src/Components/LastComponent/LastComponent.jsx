import React from "react";
import FeaturedCoursesData from "../FeaturedCourses/FeaturesCourses.json";
import { FaUser, FaClock, FaRupeeSign, FaShoppingCart } from "react-icons/fa";

export default function LastComponent() {
  return (
    <section className="flex justify-center items-center flex-wrap gap-6 p-6">
      {FeaturedCoursesData.map((course) => (
        <div
          key={course.id}
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[600px] bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <img
              src={course.image}
              alt="Course"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">

            <div className="flex justify-between items-center mb-2">
              {course.badge === 1 && (
                <div className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Selling Fast
                </div>
              )}

              <div className="text-sm text-gray-600">
                ⭐ {course.rating} | {course.learners} learners
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
              <span>{course.language}</span>
              <span>{course.level}</span>
              <span>{course.classes}</span>
            </div>


            <h5 className="text-lg font-semibold mb-2">
              {course.title}
            </h5>


            {course.by && (
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={course.byImage}
                  alt="Instructor"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-700">{course.by}</span>
              </div>
            )}


            <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
              <div className="flex items-center gap-1">
                <FaUser /> {course.age}
              </div>
              <div className="flex items-center gap-1">
                <FaClock /> {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <FaRupeeSign /> {course.price}
              </div>
              <div className="cursor-pointer hover:text-purple-600">
                <FaShoppingCart />
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}