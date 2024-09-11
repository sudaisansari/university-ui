import React from 'react'
import DiscoverMore from '../common/DiscoverMore'
import Image from 'next/image'

const data = [
    { image: "/business-skills.svg", desc: "Providing functional knowledge and enhanced skills for the labor market." },
    { image: "/goal.svg", desc: "Motivating students to tackle complex business challenges through research and practical cases." },
    { image: "/increase-business.svg", desc: "Empowering student to thrive in dynamic professional settings, ensuring your relevance and competitiveness in today's rapidly evolving business landscape." },
]

const MasterProgram = () => {
    return (
        <div className='w-full lg:mt-[10.3645833333vw] mt-[95px] mb-[95px] lg:mb-[10.4166666667vw] lg:min-w-[100%]'>
            <div className='mx-auto z-[2] relative lg:w-[91.7708333333vw] w-[90%] sm:w-[90vw] items-start flex lg:flex-row '>
                {/* Left */}
                <div className=''>
                    {/* Heading, Description and Button*/}
                    <div className='lg:w-[35.7291666667vw] w-full lg:pt-[2.76041666667vw]'>
                        <div>
                            <h1
                                data-aos="fade-up"
                                className='lg:text-[3.64583333333vw] text-[32px] leading-[42px] lg:leading-[5.20833333333vw] lg:mt-[2.76041666667vw] capitalize'>BA Master Program</h1>
                            <p
                                data-aos="fade-down"
                                className='lg:mt-[1.04166666667vw] mt-[16px] text-[18px] leading-[28px] lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw]'>This program follows international standards, offering dynamic and innovative education. It encourages exploration of new ideas through experiential courses, real-world case studies, and guest speakers. Open to private and public industries, it aims to enhance performance aligned with Vision 2030, fostering profitability and community support.</p>
                        </div>
                        <div
                            data-aos="fade"
                            className='lg:mt-[2.08333333333vw] mt-[32px] flex items-center'>
                            <DiscoverMore text='View Program' />
                        </div>
                    </div>
                    <div
                        data-aos="fade"
                        className=' lg:hidden block relative mt-[64px] w-full h-[379px] sm:h-[75vw] overflow-hidden rounded-[12px]'>
                        <Image src={"/RectangleBA.jpg"} alt='BA Master' fill objectFit='cover' />
                    </div>
                    <div
                        className='flex lg:justify-end justify-center relative z-[2] mt-[-55px] lg:mt-[5.20833333333vw]'>
                        <div className='flex flex-col rounded-[10px] rtl:lg:mr-[3.125vw] lg:ml-[3.125vw] lg:gap-[2.60416666667vw] gap-[30px] w-[90%] lg:w-[40.8333333333vw] p-[15px] lg:p-0 lg:pt-[2.08333333333vw] lg:pb-[2.08333333333vw] lg:pl-[2.60416666667vw] lg:pr-[2.60416666667vw]  BAMasterProgramGradientBG'>
                            {
                                data.map((dat, i) => (
                                    <div 
                                    data-aos="fade"
                                    data-aos-delay={`${i * 100}`}
                                    key={i} 
                                    className='flex lg:flex-row flex-col lg:items-center items-start justify-start'>
                                        <div className='lg:mr-[1.30208333333vw] rtl:mr-0 rtl:lg:ml-[1.30208333333vw] w-[74px] h-[74px] lg:w-[4.16666666667vw] lg:h-[4.16666666667vw] relative'>
                                            <Image src={dat.image} alt='icon' fill />
                                        </div>
                                        <div>
                                            <p className='lg:w-[30.15625vw] mt-[5px] lg:mt-0 text-[20px] leading-[30px] lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw]'>
                                                {dat.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                <div className='top-0 lg:block hidden rtl:left-0 ltr:right-0 absolute lg:mt-[2.86458333333vw] lg:w-[51.40625vw] lg:h-[45.15625vw] lg:rounded-[0.625vw]'>
                    <Image src={"/RectangleBA.jpg"} alt='BA Master' fill objectFit='cover' />
                </div>
            </div>
        </div>
    )
}

export default MasterProgram