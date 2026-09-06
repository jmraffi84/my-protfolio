"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const myProjects = [
    {
        "id": 1,
        "category": "Full Stack",
        "name": "Gold Calculator",
        "description": "This project displays the amount based on inputs given and also lists the data, with a checkbox to select entries from the list.",
        "tech": "React js",
        "css": "Bootstrap",
        "database": "MongoDB",
        "frontendUrl": "https://earnest-fudge-c24897.netlify.app/",
        "backendUrl": ""


    },
    {
        "id": 2,
        "category": "Full stack",
        "name": "Password Reset",
        "description": "This app sends the url to the signup email id for activation ",
        "tech": "React js",
        "Css": "Talwind Css",
        "Database": "Mongo Db",
        "frontendUrl": "https://rad-gnome-237bf5.netlify.app/",
        "backendUrl": "",

    },
    {
        "id": 3,
        "category": "Full stack",
        "name": "Button Add and Remove - Count",
        "description": "This app gives an glimpse of button to show add to cart and remove the cart ",
        "tech": "React js",
        "Css": "Bootstrap Css",
        "Database": "False",
        "frontendUrl": "https://visionary-lollipop-09ea94.netlify.app/",
        "backendUrl": "",

    },
    {
        "id": 4,
        "category": "Full stack",
        "name": "Create user - With Login Page",
        "description": "This app adds data to database and fetch the data using axios and can view the list in user list ",
        "tech": "React js",
        "Css": "Bootstrap Css",
        "Database": "MongoDb",
        "frontendUrl": "https://grand-chebakia-bad776.netlify.app/",
        "backendUrl": "",

    },
    {
        "id": 5,
        "category": "Full stack",
        "name": "Mock Design of SB-Admin using react",
        "description": "This app displays the components that was created using REACTJS, Designed used for refrence is SB-ADMIN ",
        "tech": "React js",
        "Css": "Bootstrap Css",
        "Database": "False",
        "frontendUrl": "https://animated-rabanadas-596fd5.netlify.app/",
        "backendUrl": "",

    },
    {
        "id": 6,
        "category": "Full stack",
        "name": "Calculator Project",
        "description": "Simple calculator project created using ReactJs ",
        "tech": "Basic | HTML | CSS | JS",
        "Css": "Bootstrap Css",
        "Database": "False",
        "frontendUrl": "https://thunderous-platypus-c4e6ec.netlify.app/",
        "backendUrl": "",

    },
    {
        "id": 7,
        "category": "Order Form",
        "name": "Form input and display Project",
        "description": "This form gets the input and display the data in UI.",
        "tech": "HTML|CSS|JS",
        "Css": "Bootstrap Css",
        "Database": "False",
        "frontendUrl": "https://starlit-medovik-bf3a40.netlify.app/",
        "backendUrl": "",

    },

    {
        "id": 8,
        "category": "Full stack",
        "name": "Youtube design in UI ",
        "description": "This show the UI of the Youtube design with the pagination.",
        "tech": "React js",
        "Css": "Bootstrap Css",
        "Database": "False",
        "frontendUrl": "https://mellifluous-crostata-3b3115.netlify.app/#",
        "backendUrl": "",

    },
    {
        "id": 9,
        "category": "Full stack",
        "name": "Events Booking",
        "description": "This app is help in booking the seat for the events .",
        "tech": "React js | Bootstrap",
        "Database": "False",
        "frontendUrl": "https://warm-gingersnap-075adb.netlify.app/",
        "backendUrl": "",

    },
    {
        "id": 10,
        "category": "Full stack",
        "name": "Shortnen Url",
        "description": "A simple url shortening service built with React and Node.js.",
        "tech": "React js | Node.js | Express | MongoDB",
        "Css": "Tailwind Css",
        "Database": "MongoDb",
        "frontendUrl": "https://6a99409ff7b41e974c8656ae--shorten-fe-url.netlify.app/",
        "backendUrl": "https://shorten-backend-8mgx.onrender.com"
    }
]

const Projects = () => {

    const grouped = myProjects.reduce((acc, project) => {
        const cat = project.category || "other";
        if (!acc[cat])
            acc[cat] = [];
        acc[cat].push(project);

        return acc

    }, {});
    const categories = Object.keys(grouped);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const activeProjects = grouped[selectedCategory] || []

    return (
        <>
            <div className="flex min-h-20 w-full max-w-4xl rounded-xl shadow-sm ml-3 mt-3">
                <h3 className="text-2xl text-orange-300 mt-2 text-center">Projects</h3>
            </div>

            <div className="w-full max-w-4xl px-6 py-4">
                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((list, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(list)}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${selectedCategory === list
                                ? "bg-indigo-700 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
                                }`}
                        >
                            {list}
                        </button>
                    ))}
                </div>

                {/* Card grid — 2 cols on sm, 3 on lg */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    {activeProjects.map((value) => (
                        <div
                            key={value.id}
                            className="rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow flex flex-col"
                        >
                            <div className="flex flex-col flex-1 px-5 py-4 gap-3">
                                <div className="font-bold text-lg text-violet-950">
                                    {value.name}
                                </div>
                                <p className="text-gray-700 text-lg flex-1">
                                    {value.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {value.tech && (
                                        <span className="text-base bg-violet-100 text-violet-800 px-2 py-0.5 rounded-full">
                                            {value.tech}
                                        </span>
                                    )}
                                    {value.css && (
                                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                                            {value.css}
                                        </span>
                                    )}
                                    {value.database && value.database !== "False" && (
                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                                            {value.database}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex border-t border-gray-200">
                                {value.frontendUrl && (
                                    <Link
                                        href={value.frontendUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 py-2 transition-colors"
                                    >
                                        Frontend
                                    </Link>
                                )}
                                {value.frontendUrl && value.backendUrl && (
                                    <div className="w-px bg-indigo-900" />
                                )}
                                {value.backendUrl && (
                                    <Link
                                        href={value.backendUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center text-sm font-medium text-white bg-violet-800 hover:bg-violet-900 py-2 transition-colors"
                                    >
                                        Backend
                                    </Link>
                                )}
                                {!value.frontendUrl && !value.backendUrl && (
                                    <div className="block text-center text-sm font-medium text-gray-400 bg-gray-100 py-2 flex-1">
                                        Link Coming Soon
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div >
            </div >
        </>
    );
};

export default Projects