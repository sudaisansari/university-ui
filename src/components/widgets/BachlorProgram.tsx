"use client"
import React, { useEffect, useState } from 'react'
import DiscoverMore from '../common/DiscoverMore'
import SwiperButtons from '../common/SwiperButtons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles


import Image from 'next/image';

const data = [
    { image: "/images/AllDepartmentcards.jpg", heading1: "Bachelor,", heading2: "CS & IT", des: "BSc in Computer Science" },
    { image: "/images/AllDepartmentcards(1).jpg", heading1: "Bachelor,", heading2: "CS & IT", des: "BSc in Information Technology  " },
    { image: "/images/AllDepartmentcards(2).jpg", heading1: "Bachelor,", heading2: "Business", des: "BSc in Marketing & International Business Adm ... " },
    { image: "/images/AllDepartmentcards.jpg", heading1: "Bachelor,", heading2: "CS & IT", des: "BSc in Computer Science" },
    { image: "/images/AllDepartmentcards(1).jpg", heading1: "Bachelor,", heading2: "CS & IT", des: "BSc in Information Technology  " },
    { image: "/images/AllDepartmentcards(2).jpg", heading1: "Bachelor,", heading2: "Business", des: "BSc in Marketing & International Business Adm ... " },
]

const BachlorProgram = () => {
    const [swiperGap, setSwiperGap] = useState(0)
    useEffect(() => {
        setSwiperGap(window.innerWidth > 1024 ? (window.innerWidth / 100) * 1.5625 : 20)
    }, [])
    return (
        <div className='w-full relative bg-white z-[1]'>
            <div className='mx-auto  pt-[94px] lg:pt-[7.29166666667vw]'>
                <div className='absolute left-0 top-0'>
                    {/* <Image src={"/Group.png"} alt='group' fill/> */}
                    <img src="/Group.png" alt="group" />
                </div>
                {/* Heading, Description and Button*/}
                <div className='lg:w-[91.6145833333vw] relative z-[2] w-[90%] mx-auto'>
                    <div className='flex lg:flex-row flex-col items-start lg:justify-between lg:items-end'>
                        <div className='lg:w-[35.7291666667vw] '>
                            <h1
                                data-aos="fade-up"
                                className='lg:text-[3.64583333333vw] text-[32px] leading-[42px] lg:leading-[5.20833333333vw] lg:mt-[2.76041666667vw] capitalize'>Bachelor Programs</h1>
                            <p
                                data-aos="fade-down"
                                className='lg:mt-[1.04166666667vw] mt-[16px] text-[18px] leading-[28px] lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw]'>
                                We offer a wide range of educational programs aimed at meeting the needs and interests of students in various academic fields.
                            </p>
                        </div>
                        <div
                            data-aos="fade"
                            className='lg:mt-[2.08333333333vw] mt-[32px] flex items-center'>
                            <DiscoverMore text='All Program' />
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade"
                    className='flex flex-col relative z-[2] lg:mt-[3.64583333333vw] mt-[31px]'>
                    <div className='ml_Auto w-[95.349%] lg:w-[95.8333333333vw]'>
                        <Swiper
                            spaceBetween={swiperGap}
                            modules={[Navigation]}
                            navigation={true}
                            slidesPerView={"auto"}
                            className='paddingBottomBAMaster'
                        >
                            {
                                data.map((product, i) => (
                                    <SwiperSlide className='' key={i}>
                                        <div className="DepartmentMajorCard group cursor-pointer">
                                            <Image alt="image1" className="rounded-[10px]" src={product.image} fill objectFit="cover" />
                                            <span className="absolute w-full h-full top-0 left-0 DepartmentMajorCardOverlay"></span>
                                            <div className="z-[2] relative group lg:w-[24.4791666667vw] w-[88.07%] lg:mb-[4.16666666667vw] mb-[21px] gap-y-[15px] flex lg:flex-row flex-col items-end justify-between lg:items-start text-white">
                                                <div className="w-[100%]">
                                                    <div className='flex gap-x-[0.20833333333vw]'>
                                                        <span className="text-[16px] font-[700] leading-[26px] lg:leading-[1.35416666667vw] lg:text-[0.83333333333vw]">{product.heading1}</span>
                                                        <span className="text-[16px] font-[700] leading-[26px] lg:leading-[1.35416666667vw] lg:text-[0.83333333333vw]">{product.heading2}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[20px] leading-[40px] lg:leading-[1.66666666667vw] mt-[5px] sm:mt-[0.52083333333vw] group-hover:text-[#50BD77] lg:text-[1.14583333333vw] line-clamp-3">{product.des}</span>
                                                    </div>
                                                </div>
                                                <div className="rtl:scale-x-[-1] chevron min-w-[38px] w-[38px] h-[38px] sm:w-[40px] lg:w-[2.65625vw] lg:h-[2.65625vw] sm:min-w-[40px] lg:min-w-[2.65625vw] transition-all  duration-300 sm:h-[40px] relative">
                                                    <Image src={"/arrow-right.svg"} alt="arrow" fill />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <SwiperButtons />
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BachlorProgram