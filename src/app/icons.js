import React from 'react'
import Image from 'next/image'
import { FaCss3, FaDraft2Digital, FaHtml5, FaLinux, FaNetworkWired, FaNodeJs, FaReact } from 'react-icons/fa6'

// const data = [
//     {
//         // "logo": FaHtml5
//     }
// ]

const Icons = () => {
    return (
        <>
            <div className="w-full md:w-sm bg-mauve-800 flex flex-col text-white p-4 md:p-0 rounded-md md:rounded-none mb-4 md:mb-0">
                <div className='grid grid-cols-3 mb-3 gap-1.5 text-amber-300'>
                    <FaLinux size={40} className='text-white-600' />

                    <FaHtml5 size={40} className='text-amber-600' />
                    <FaCss3 size={40} className='text-green-600' />
                    <FaNodeJs size={40} className='text-green-600 ' />
                    <FaNetworkWired size={40} className='text-red-600' />
                    <FaReact size={40} className='text-blue-600' />


                </div>
            </div >
        </>
    )
}

export default Icons