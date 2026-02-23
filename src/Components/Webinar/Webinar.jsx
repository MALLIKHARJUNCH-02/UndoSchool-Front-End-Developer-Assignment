import React from "react";
import CardGroup from "../Cards/CardGroup";
export default function Webinar() {
    return (
        <section className="mt-12">
            <div className="m-5 flex flex-col justify-center items-center">

                <h1 className="text-center font-normal text-5xl">Webinar starting within 24 hrs</h1>
                <div className="mt-5">
                    <CardGroup />
                </div>
            </div>
        </section>
    )
}