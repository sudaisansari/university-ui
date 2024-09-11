import React from 'react'
import Image from 'next/image'

const Department = () => {
    return (
        <div>
            <div className="w-full">
                {/* <div className="mt-[7.8125vw] w-[90%] mx-auto mb-[7.8125vw] lg:w-[91.6666666667vw]"> */}
                <div className="mt-48 relative bg-white w-[90%] sm:w-[90vw] mx-auto mb-[7.8125vw] lg:w-[91.6666666667vw]">

                    {/* Heading and Description */}
                    <div>
                        <h1
                            data-aos="fade-up"
                            className="text-[30px] leading-[40px] sm:text-[2.60416666667vw] sm:leading-[3.125vw] text-[#192F59]">About The Department</h1>
                        <p
                            data-aos="fade-down"
                            className="sm:w-[58.125vw] w-full text-[14px] sm:text-[18px] lg:text-[1.14583333333vw] mt-[1.5625vw] leading-[16px] sm:leading-[22px] lg:leading-[1.66666666667vw] text-[#192F59]">This department aims to be a leading model for private education in computing and information technology. It aligns with Vision 2030 and focuses on developing competent professionals who can provide intelligent solutions to complex technical problems. The department emphasizes recruiting qualified faculty, improving programs, and fostering research. It also emphasizes community partnerships and social responsibility.</p>
                    </div>

                    {/* Images */}
                    <div className="mt-[5.20833333333vw]">
                        <div>
                            <h1 
                            data-aos="fade"
                            className="text-[30px] sm:text-[2.60416666667vw] leading-[40px] sm:leading-[3.125vw] text-[#192F59]">Department Majors</h1>
                        </div>
                        <div
                        data-aos="fade"
                        className="mt-[10px] justify-center lg:justify-normal sm:mt-[20px] lg:mt-[1.5625vw] flex flex-wrap relative gap-[15px] lg:gap-[1.5625vw]">
                            <div className="DepartmentMajorCard group cursor-pointer">
                                <Image alt="image1" className="rounded-md" src="/images/picc1.jpeg" fill objectFit="cover" />
                                <span className="absolute w-full h-full top-0 left-0 DepartmentMajorCardOverlay"></span>
                                <div className="z-[2] relative group sm:bottom-[4.16666666667vw] bottom-[40px] lg:w-[24.4791666667vw] w-[90%] flex justify-between items-center text-white">
                                    <div className="">
                                        <span className="text-[8px] lg:text-[0.83333333333vw] font-bold">Bachelor, CS & IT</span>
                                        <span className="text-[12px] mt-[6px] sm:mt-[0.52083333333vw] group-hover:text-[#50BD77] font-[400] lg:text-[1.14583333333vw] line-clamp-3">BSc in Computer Science</span>
                                    </div>
                                    <div className="rtl:scale-x-[-1] chevron sm:w-[40px] sm:h-[40px] w-[38px] h-[38px] lg:w-[2.65625vw] sm:min-w-[40px] lg:min-w-[2.65625vw] transition-all  duration-300 relative">
                                        <Image src={"/arrow-right.svg"} alt="arrow" fill />
                                    </div>
                                </div>
                            </div>
                            <div className="DepartmentMajorCard group cursor-pointer">
                                <Image alt="image1" className="rounded-md" src="/images/picc1.jpeg" fill objectFit="cover" />
                                <span className="absolute w-full h-full top-0 left-0 DepartmentMajorCardOverlay"></span>
                                <div className="z-[2] relative group sm:bottom-[4.16666666667vw] bottom-[40px] lg:w-[24.4791666667vw] w-[90%] flex justify-between items-center text-white">
                                    <div className="">
                                        <div className="text-[8px] lg:text-[0.83333333333vw] font-bold">Bachelor, CS & IT</div>
                                        <div className="text-[12px] mt-[6px] sm:mt-[0.52083333333vw] group-hover:text-[#50BD77] font-[400] lg:text-[1.14583333333vw] line-clamp-3">BSc in Computer Science</div>
                                    </div>
                                    <div className="rtl:scale-x-[-1] chevron w-[30px] h-[30px] sm:w-[40px] lg:w-[2.65625vw] sm:min-w-[40px] lg:min-w-[2.65625vw] transition-all  duration-300 sm:h-[2.65625vw] relative">
                                        <Image src={"/arrow-right.svg"} alt="arrow" fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Department