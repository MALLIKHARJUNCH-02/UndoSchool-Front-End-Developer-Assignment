import React from "react";
import "./popularcategories.css"
import CardGroup from "../Cards/CardGroup";
export default function PopularCategories() {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">

                <div className="flex flex-col justify-center items-center">
                    <h1>Popular Categories</h1>
                    <p className="text-center p-3">Pick what you love most! These categories have everything you need to learn something awesome ✨</p>
                </div>

                <div className="flex mt-5 justify-center items-center flex-wrap gap-8">


                    <div className="flex items-end cursor-pointer  PopularCategories-card p-6 coding-card w-60 h-51 rounded-xl border-1 border-grey-50 relative">
                        <img src="/coding.png" alt="Coding" className="PopularCategories-image absolute -top-[20px] right-[20px] w-75" />
                        <p className="PopularCategories-text text-base font-medium m-0">Coding</p>
                    </div>

                    <div className="flex items-end cursor-pointer  PopularCategories-card p-6 speaking-card w-60 h-51 rounded-xl border-1 border-grey-50 relative">
                        <img src="/speaking.png" alt="Coding" className="PopularCategories-image absolute -top-[20px] right-[20px] w-24" />
                        <p className="PopularCategories-text text-base font-medium m-0">Public speaking</p>
                    </div>

                    <div className="flex items-end cursor-pointer  PopularCategories-card  p-6 chess-card w-60 h-51  rounded-xl border-1 border-grey-50 relative">
                        <img src="/chess.png" alt="Coding" className="PopularCategories-image absolute -top-[20px] right-[20px] w-24" />
                        <p className="PopularCategories-text text-base font-medium m-0">Chess</p>
                    </div>

                    <div className="flex items-end cursor-pointer  PopularCategories-card  p-6 book-card w-60 h-51  rounded-xl border-1 border-grey-50 relative">
                        <img src="/book.png" alt="Coding" className="PopularCategories-image absolute -top-[20px] right-[20px] w-24" />
                        <p className="PopularCategories-text text-base font-medium m-0">Home work help</p>
                    </div>

                    <div className="flex items-end cursor-pointer PopularCategories-card p-6 appbulding-card w-60 h-51  rounded-xl border-1 border-grey-50 relative">
                        <img src="/appbulding.png" alt="Coding" className="PopularCategories-image absolute -top-[20px] right-[20px] w-20" />
                        <p className="PopularCategories-text text-base font-medium m-0">App building</p>
                    </div>
                </div>

                
                    <CardGroup />
                

            </div>
        </section>
    )
}