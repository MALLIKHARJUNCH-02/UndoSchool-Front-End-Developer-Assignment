import React from "react";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="flex flex-col md:flex-row items-center justify-between m-4 flex-wrap">
                
                <div className="flex items-center gap-4">
                    <p className="font-bold text-xl">Logo</p>
                    <p className="text-purple-900 underline text-base font-medium">Course</p>
                </div>

                <div className="flex gap-4">
                    <button className="font-medium text-sm">Login</button>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white rounded-5 font-medium text-sm">
                        Register for free
                    </button>
                </div>

            </div>
        </div>
    );
}