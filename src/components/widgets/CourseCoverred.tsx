import Image from 'next/image'
import React from 'react'

const data = [
    { icon: "/Gear.svg", text: "Digital Marketing Landscape" },
    { icon: "/Gear.svg", text: "Artificial Intelligence, Automation and Emerging Technologies" },
    { icon: "/Gear.svg", text: "Digital Marketing Landscape" },
    { icon: "/Gear.svg", text: "Social Media Marketing" },
    { icon: "/Gear.svg", text: "Digital Marketing Landscape" },
    { icon: "/Gear.svg", text: "Digital Marketing Landscape" },
]

const CourseCoverred = () => {
    return (
        <div className='w-full mt-[5.20833333333vw] mb-[5.20833333333vw]'>
            <div className='mx-auto w-[91.6145833333vw] bg-[#FFF] p-[3.125vw] rounded-[1.04166666667vw]'>
                {/* Heading and Desc */}
                <div>
                    <h3 className='text-[2.08333333333vw] leading-[2.60416666667vw] capitalize text-[#192F59]'>Courses Covered</h3>
                    <p className='mt-[1.5625vw] text-[1.14583333333vw] leading-[1.66666666667vw] text-[#545454]'>A diverse range of courses spanning over 5 weeks, totaling 45 hours</p>
                </div>
                {/* Boxes */}
                <div className='flex flex-wrap ring-1 rounded-[0.34246575342vw] ring-[#192F59] ring-opacity-20 gap-[2.08333333333vw] p-[1.5625vw] mt-[1.5625vw]'>
                    {data.map((items, i) => (
                        <div key={i} className='flex flex-col  w-[14.7395833333vw] gap-y-[1.40625vw]'>
                            <div className='w-[2.34375vw] h-[2.34375vw] relative'>
                                <Image src={items.icon} alt='Gear icon' fill />
                            </div>
                            <p className='text-[1.30208333333vw] leading-[1.82291666667vw] text-[#545454]'>{items.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseCoverred