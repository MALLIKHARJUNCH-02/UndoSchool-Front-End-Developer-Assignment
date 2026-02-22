import React from "react";
import CardGroup from "../Cards/CardGroup";
export default function Webinar() {
    return (
        <section>
            <div className="m-5 flex flex-col justify-center items-center">

                <h1>Webinar starting within 24 hrs</h1>
                <div className="mt-5">
                    <CardGroup />
                </div>
            </div>
        </section>
    )
}