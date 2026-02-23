import React from "react";
import { FaSun, FaCloudSun, FaMoon, FaRegMoon } from "react-icons/fa";
import "./time.css"
export default function Time() {
    return (
        <section className="mt-12">
            <div>
                <div className="flex mt-5 flex-col justify-center items-center text-center">
                    <h1 className="font-normal text-5xl text-center">Filter with Time</h1>
                    <p className="tex-center p-3 text-base">Choose the perfect time that fits your child's schedule</p>
                </div>

                <div className="flex justify-center items-center gap-5 flex-wrap">
                    <div className="p-4 time-class morning-class relative w-60 overflow-hidden rounded-xl">
                        <p>Morning classes</p>
                        <span>8am - 12pm</span>
                        <FaSun className="timeIcons absolute -top-[-50px] right-[0px] w-15 h-15" />
                    </div>
                    <div className="p-4 time-class afternoon-class relative w-60 overflow-hidden rounded-xl">
                        <p>Afternoon classes</p>
                        <span>12pm - 4pm</span>
                        <FaCloudSun className="timeIcons absolute -top-[-50px] right-[0px] w-15 h-15" />
                    </div>
                    <div className="p-4 time-class evening-class relative w-60 overflow-hidden rounded-xl">
                        <p>Evening classes</p>
                        <span>4pm - 8pm</span>
                        <FaMoon className="timeIcons absolute -top-[-50px] right-[0px] w-15 h-15" />
                    </div>
                    <div className="p-4 time-class Lateevening-class relative w-60 overflow-hidden rounded-xl">
                        <p>Late evening classes</p>
                        <span>8pm - 11pm</span>
                        <FaRegMoon className="timeIcons absolute -top-[-50px] right-[0px] w-15 h-15" />
                    </div>
                </div>
            </div>
        </section>
    )
}