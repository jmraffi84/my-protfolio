import React from 'react'
import Image from 'next/image'
import workedPic from './assets/worked-pic.jpg'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaPhone, FaAddressCard, FaRegEnvelope } from 'react-icons/fa6'
import Icons from './icons'



const Sidebar = () => {
    return (
        <>
            {/* Sidebar */}
            <div className="w-full md:w-sm bg-mauve-800 flex flex-col text-white p-4 md:p-0 rounded-md md:rounded-none mb-4 md:mb-0">
                <Image
                    src={workedPic}
                    alt="resume image"
                    width={150}
                    height={150}
                    className="w-full max-w-xs  object-cover  rounded-full h-80 mx-auto md:mx-0 md:ml-4 mb-4 mt-2"
                />
                <span className="text-2xl mt-3 ml-3 text-center underline md:text-left">
                    Mohammed Raffi Jeelani
                </span>
                <span className="text-xl text-white mt-3 mb-3 ml-3">Cybersecurity | MERN Stack Developer | Linux | Networking | Cloud Computing</span>

                <span className="flex text-2xl text-orange-300 mt-2 ml-3">
                    <FaPhone size={20} /> <span className="text-xl text-white ml-3">+91 8939326407</span>
                </span>
                <span className="flex text-2xl text-orange-300 mt-2 ml-3">
                    <FaRegEnvelope size={20} /> <span className="text-xl text-white  ml-3">jmraffi@gmail.com</span>
                </span>
                <span className="flex text-2xl text-orange-300 mt-2 ml-3">
                    <FaAddressCard size={30} /> <span className="text-xl text-white ml-3">5/3, Puthu thambi second street Anagaputhur chennai 600 070</span>
                </span>
                <div className="flex flex-col mt-4 ml-2 mb-4">
                    <span className="text-2xl text-orange-300 mt-2">Professional Links:</span>
                    <div className="flex flex-row gap-4 mt-3 ml-3">
                        <Link
                            href="https://www.linkedin.com/in/mohammed-raffi-jeelani-0b1a4b1b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-orange-300 transition-colors"
                        >
                            <FaLinkedin size={26} />
                        </Link>
                        <Link
                            href="https://www.github.com/mohammed-raffi-jeelani"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-orange-300 transition-colors"
                        >
                            <FaGithub size={26} />
                        </Link>
                        {/* <skills /> */}
                    </div>
                </div>
                {/* Tech Icons */}
                <div className="flex flex-col mt-4 ml-2 mb-4">
                    <span className="text-2xl text-orange-300 mt-2">Technology</span>
                    <div className="flex flex-row gap-4 mt-3 ml-3">
                        <Icons />

                    </div>
                </div>
            </div >
        </>
    )
}
export default Sidebar;