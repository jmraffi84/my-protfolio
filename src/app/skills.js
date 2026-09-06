import React from 'react'

const Myskills = [
    "Linux",
    "Cloud Computing",
    "Cybersecurity",
    "Networking",
    "javascript",
    "react",
    "node.js",
    "mongodb",
    "Digital Marketing"

]
const education = [

    {
        institution: "Kaashiv Infotech",
        detail: "Cybersecurity, Cloud Computing, Networking, Linux",

    },
    {
        institution: "GUVI (IIT-M Incubated, Madras)",
        detail: "Full Stack Development (MERN STACK)",

    },
    {
        institution: "SRM Institute",
        detail: "Diploma in Hotel Management & Catering Technology",

    },

];

const personaDetails = [{
    "Languages": "English, Hindi, Tamil",
    "Nationality": "Indian",
    "Martial ": "Married",
    "Passport": "Yes"
}]

const Skills = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-orange-300 mt-2">About Me</h3>
                <p className="text-lg mt-2">
                    Aspiring <strong className="text-blue-500">Software and Cloud Engineer</strong> with hands-on experience in MERN stack development, Linux, networking, cloud computing, and cybersecurity.
                    Skilled in building web applications using modern technologies, with a working knowledge of application deployment.
                    Entry-level foundation in JavaScript, React, Node.js, and MongoDB,
                    backed by a strong drive to grow across software development, cloud, and security domains.
                </p>
                <p className="text-lg mt-2">
                    Seeking an opportunity as a <strong className="text-blue-500">Junior Software Engineer, Cloud Support Engineer, Network Engineer, or Cybersecurity Analyst.</strong>
                    A collaborative team player who enjoys working with others to build innovative solutions,
                    and someone who is always eager to learn and take on new challenges in the ever-evolving fields of software development,
                    cloud computing, and cybersecurity.
                </p>
            </div>
            <div className="flex flex-col gap-2 mt-4 ">
                <h2 className="text-2xl text-orange-300 mt-4">Technology Skill Set:</h2>
                <div className="flex flex-wrap gap-2  mt-2 ">
                    {Myskills.map((skill, index) => (
                        <div className="bg-mauve-700 text-white px-4 py-2 rounded-md animated-box" key={index}>
                            <p className="content uppercase">
                                {skill}
                            </p>
                        </div>
                    ))}
                </div>
            </div >
            <div className="flex flex-col mt-4 ml-2 mb-4">
                <span className="text-2xl text-orange-300 mt-2">Education:</span>
                <table className="table-auto mt-3 ml-3 text-white table-responsive ">
                    <thead >
                        <tr >
                            <th className="text-xl text-left md:tracking-wide text-mist-400">Institution</th>
                            <th className="text-xl text-left md:tracking-wide text-mist-400 ">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {education.map((item, idx) => (
                            <tr key={idx} className="mb-3">
                                <td className="text-lg ">{item.institution}</td>
                                <td className="text-lg ">{item.detail}</td>
                                <td className="text-lg text-green-300">{item.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col mt-4 ml-2 mb-4" >
                <span className="text-2xl text-orange-300 mt-2 ">Personal Details:</span>
                <table className="table-auto mt-3 ml-3 text-white table-responsive block lg:flex-row">
                    <thead >
                        <tr >
                            <th className="text-xl  text-left md:tracking-wide md:w-sm text-mist-400">Languages</th>
                            <th className="text-xl  text-left md:tracking-wide md:w-sm text-mist-400">Nationality</th>
                            <th className="text-xl  text-left md:tracking-wide md:w-sm text-mist-400">Martial</th>
                            <th className="text-xl  text-left md:tracking-wide md:w-sm text-mist-400">Passort</th>

                        </tr>
                    </thead>
                    <tbody>
                        {personaDetails.map((item, idx) => (
                            <tr key={idx} className="mb-3 mt-3">
                                <td className="text-lg ">{item.Languages}</td>
                                <td className="text-lg ">{item.Nationality}</td>
                                <td className="text-lg ">{item['Martial ']}</td>
                                <td className="text-lg ">{item.Passport}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>



        </>
    )
}

export default Skills