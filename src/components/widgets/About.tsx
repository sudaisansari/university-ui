import Image from 'next/image'
import React from 'react'
import KeyInfoCard from '../shared/keyInfoCard'
import DiscoverMore from '../common/DiscoverMore'

const data = [
    { key: "0", image: "/e-learning-programs.svg", description: "Our distinguished academic programs" },
    { key: "1", image: "/academic-certificate.svg", description: "Accredited by the Saudi ministry of education" },
    { key: "2", image: "/school-building.svg", description: "Our attractive educational  environment" },
    { key: "3", image: "/bookmark.svg", description: "The opportunity of studying double majors" }
]

const About = () => {
    return (
        <div className='w-full bg-[#192F59] lg:min-w-[100%]'>
            <div className='mx-auto w-[90%] lg:w-[91.5625vw]'>
                {/* <div className='mt-[7.8125vw] w-[90%] mx-auto mb-[7.8125vw] lg:w-[91.6666666667vw]'></div> */}
                {/* Heading and Description */}
                <div className='lg:pt-[6.35416666667vw] pt-[64px]'>
                    <h1
                        data-aos="fade-up"
                        className='lg:text-[3.64583333333vw] text-[32px] leading-[42px] lg:leading-[5.20833333333vw] text-[#FFF]'>About JIC</h1>
                    <p
                        data-aos="fade-down"
                        className='lg:mt-[1.04166666667vw] mt-[20px] text-[18px] leading-[28px] w-auto lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] text-[#FFF] lg:w-[51.1979166667vw] h-auto'>Jeddah International College was established in 2015, and it operates under the supervision of the Saudi Arabia Education Ministry in all its departments and programs, both at the Bachelor and Master levels. Since its inception, the college has been committed to providing new educational opportunities that enhance the educational environment in Jeddah. </p>
                </div>
                {/* Button */}
                <div
                    data-aos="fade"
                    className='mt-[30px] lg:mt-[3.125vw] flex items-center '>
                    <DiscoverMore text='Discover More' />
                </div>
                {/* Cards and Image */}
                <div className='flex flex-col lg:mb-[-7.5vw] relative z-[2] mb-[-67px] gap-[64px] lg:gap-[2.44791666667vw] lg:flex-row justify-between items-start lg:justify-normal'>
                    {/* Left */}
                    <div className='w-full lg:w-[42.8125vw] lg:pt-[7.44791666667vw] pt-[64px]'>
                        <div className='grid md:grid-cols-[repeat(2,auto)] gap-[30px] lg:gap-[3.64583333333vw]'>
                            {
                                data.map((dat, index) => (
                                    <KeyInfoCard
                                        key={index}
                                        index={index}
                                        image={dat.image}
                                        description={dat.description}
                                    />
                                ))

                            }
                        </div>
                    </div>
                    {/* Right */}
                    <div
                        data-aos="fade"
                        className='w-full h-[395px] lg:w-[46.3541666667vw] lg:h-[44.2708333333vw] relative'>
                        <Image src={"/Rectangle.jpg"} className='rounded-xl' alt='about-image' fill objectFit='cover' />/
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About