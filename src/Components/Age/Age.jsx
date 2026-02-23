import React from "react";
import age from "./age.json"
import "./age.css"
export default function Age() {
    return (
        <section className="mt-12">

            <div className="flex flex-col items-center justify-center mt-5">
                <h1 className="font-normal text-5xl">How Old Are You?🎯</h1>
                <p className="p-3 text-center text-base">Pick your age and find the perfect courses just for you! ✨</p>
            </div>

            <div className="flex items-center justify-center flex-wrap">
                {age.map((item) => (
                    <div key={item.id}
                        className="p-2 flex flex-col items-center justify-center age-card font-medium text-base rounded-2xl cursor-pointer flex-wrap m-1"
                        style={{ "--border-color": item.color }}>
                        {item.range}
                        <p>years</p>
                    </div>
                ))}
            </div>
        </section>
    )
}