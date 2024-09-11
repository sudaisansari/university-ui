import Image from 'next/image'
import React from 'react'

const linksImage = ["/instagram.svg", "/facebook.svg", "/X.svg", "/Youtube.svg", "/linkedin.svg"]

const navigationHeading = ["Academic Departments", "E-services", "Quick Links", "Get in touch"]

const academicDeparment = ["CS & IT Department", "Business Department", "Design Department", "Industrial Engineering Department", "Law Department", "Tourism & Hospitality Department", "Master of Business Administration"]

const eServices = ["CStudent Portal", "Email", "Moodle", "Log in"]

const quickLinks = ["About JIC", "All Academics", "Admissions", "College life", "News & Events", "Help & Support", "Student Giude"]

const getInTouch = [
    { icon: "/Whatsapp.svg", value: "920033424" },
    { icon: "/Mail.svg", value: "mail@jicollege.edu.sa" },
    { icon: "/Location.svg", value: "Ibn Rasheed Al Fehri,Taiba, Jeddah 23831Saudi Arabia." }
]

const Footer = () => {
    return (
        <div className='bg-[#0E2248] relative w-full'>
            <div className='absolute right-0 top-0'>
                <img src={"/images/GroupFooter.png"} alt='Lines' />
            </div>
            <div className='px-[20px] py-[32px] lg:pt-[4.16770833333vw] lg:pb-[2.1875vw]'>
                <div className='flex md:flex-row flex-col gap-x-[4.94791666667vw] ml-[4.16770833333vw] mx-auto'>
                    {/* Logo, Desc and Links */}
                    <div>
                        <div className='flex items-center gap-x-[0.65260416666vw]'>
                            <div className='w-[2.74182291667vw] h-[3.32932291667vw] relative'>
                                <Image src={"/images/Logo1.png"} alt='Logo' fill />
                            </div>
                            <div className='w-[11.0334375vw] h-[1.79520833333vw] relative'>
                                <Image src={"/images/Logo2.png"} alt='Logo' fill />
                            </div>
                        </div>
                        {/* Desc */}
                        <div className='mt-[1.61875vw] w-full lg:w-[14.4270833333vw]'>
                            <p className='lg:text-[0.9375vw] text-[18px] leading-[28px] lg:leading-[1.45833333333vw] text-[#D1D1D1]'>EST. 2015, Saudi ministry oversight, offers bachelor/Master programs across fields. At JIC, we aim to graduate leaders & entrepreneurs.</p>
                        </div>
                        {/* Links */}
                        <div className='md:block hidden'>
                            <div className='flex items-center gap-x-[16px] lg:gap-x-[0.90625vw] mt-[4.94791666667vw]'>
                                {linksImage.map((items, i) => (
                                    <button key={i} className='lg:w-[1.02140625vw] w-[25px] h-[25px] lg:h-[1.02140625vw] hover:-translate-y-1 transition-all duration-300 relative'>
                                        <Image src={items} alt='Links' fill />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className='flex md:flex-row flex-wrap flex-col mt-[32px] lg:mt-0 gap-x-[4.16666666667vw]'>
                        <div className='text-[#FFF]'>
                            {/* Heading */}
                            <h6 className='text-[18px] lg:text-[1.14583333333vw] text-[#50BD77] capitalize'>Academic Department</h6>
                            {/* but */}
                            <div className='flex flex-col items-start gap-y-[15px] lg:gap-y-[1.04166666667vw] mt-[15px] lg:mt-[1.04166666667vw]'>
                                {academicDeparment.map((item, i) => (
                                    <div key={i} className='flex items-center cursor-pointer group gap-x-[3px] lg:gap-x-[0.26041666666vw]'>
                                        <p className='text-[16px] lg:text-[0.9375vw] capitalize'>{item}</p>
                                        <div className='group-hover:translate-x-1 transition-all duration-300 lg:w-[0.83333333333vw] w-[13.5px] h-[13.5px] lg:h-[0.83333333333vw] relative'>
                                            <Image src={"/FooterRightarrow.svg"} alt='Arrow Icon' fill />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='text-[#FFF] lg:mt-0 mt-[32px]'>
                            {/* Heading */}
                            <h6 className='text-[18px] lg:text-[1.14583333333vw] text-[#50BD77] capitalize'>E-Services</h6>
                            {/* but */}
                            <div className='flex flex-row lg:flex-col items-start gap-y-[15px] lg:gap-x-0 gap-x-[15px] lg:gap-y-[1.04166666667vw] mt-[15px] lg:mt-[1.04166666667vw]'>
                                {eServices.map((item, i) => (
                                    <div key={i} className='grid grid-cols-[repeat(2,auto)] cursor-pointer group items-center gap-x-[3px] lg:gap-x-[0.26041666666vw]'>
                                        <p className='text-[16px] lg:text-[0.9375vw] capitalize'>{item}</p>
                                        <div className='lg:w-[0.83333333333vw] group-hover:translate-x-1 transition-all duration-300 w-[13.5px] h-[13.5px] lg:h-[0.83333333333vw] relative'>
                                            <Image src={"/FooterRightarrow.svg"} alt='Arrow Icon' fill />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='text-[#FFF] lg:mt-0 mt-[32px]'>
                            {/* Heading */}
                            <h6 className='text-[18px] lg:text-[1.14583333333vw] text-[#50BD77] capitalize'>Quick Links</h6>
                            {/* but */}
                            <div className='flex flex-wrap lg:flex-col lg:gap-x-0 gap-x-[15px] items-start gap-y-[15px] lg:gap-y-[1.04166666667vw] mt-[15px] lg:mt-[1.04166666667vw]'>
                                {quickLinks.map((item, i) => (
                                    <div key={i} className='flex items-center cursor-pointer group gap-x-[3px] lg:gap-x-[0.26041666666vw]'>
                                        <p className='text-[16px] lg:text-[0.9375vw] capitalize'>{item}</p>
                                        <div className='lg:w-[0.83333333333vw] group-hover:translate-x-1 transition-all duration-300 w-[13.5px] h-[13.5px] lg:h-[0.83333333333vw] relative'>
                                            <Image src={"/FooterRightarrow.svg"} alt='Arrow Icon' fill />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='text-[#FFF] lg:mt-0 mt-[32px]'>
                            {/* Heading */}
                            <h6 className='text-[18px] lg:text-[1.14583333333vw] text-[#50BD77] capitalize'>Get In Touch</h6>
                            {/* but */}
                            <div className='flex flex-wrap lg:flex-col lg:gap-x-0 gap-x-[15px] items-start gap-y-[15px] lg:gap-y-[1.04166666667vw] mt-[15px] lg:mt-[1.04166666667vw]'>
                                {getInTouch.map((item, i) => (
                                    <div key={i} className='flex items-center cursor-pointer group gap-x-[3px] lg:gap-x-[0.26041666666vw]'>
                                        <div className='lg:w-[0.83333333333vw] group-hover:-translate-x-1 transition-all duration-300 w-[13.5px] h-[13.5px] lg:h-[0.83333333333vw] relative'>
                                            <Image src={item.icon} alt='Arrow Icon' fill />
                                        </div>
                                        <p className='text-[16px] lg:text-[0.9375vw] capitalize'>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Links */}
                    <div className='md:hidden block'>
                        <div className='flex items-center mb-[10px] gap-x-[24px] mt-[4.94791666667vw]'>
                            {linksImage.map((items, i) => (
                                <button key={i} className='w-[15px] h-[15px] hover:translate-y-3 transition-all duration-100 relative'>
                                    <Image src={items} alt='Links' fill />
                                </button>
                            ))}
                        </div>
                        {/* <div className='stroke-1 mt-[10px] w-full opacity-[20] h-[1px] bg-white '></div> */}
                        <div className='text-[14px] mt-6 leading-[28px] font-[300] text-white'>
                            <div className='flex'>
                                <p>Terms & Conditions</p>
                                <p>|</p>
                                <p>Privacy Policy</p>
                            </div>
                            {/* <div className='stroke-1 mt-[10px] w-full h-[1px]  bg-white opacity-[20]'></div> */}
                            <div>
                                <p className='text-[14px] mt-4 leading-[28px] font-[300] text-white'>Copyright © 2024 JIC. All Rights Reserved</p>
                            </div>
                            {/* <div>
                                <p className='text-[14px] leading-[28px] font-[300] text-white'>Developed by Brackets Technology</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='md:block hidden'>
                    {/* line */}
                    <div className='bg-white h-1 w-[65.52109375vw] opacity-[0.05] mt-[3.0453125vw] mb-[1.97916666667vw]'></div>
                    {/* Copyright */}
                    <div className='flex items-center justify-between ml-[4.16666666667vw] lg:mr-[44.1145833333vw] mx-auto'>
                        <div className='flex text-[14px] mt-6 leading-[28px] gap-x-[8px] lg:gap-x-[0.52083333333vw] text-[#D1D1D1] font-[300] lg:text-[0.72916666666vw]'>
                            <p>Copyright © 2024 JIC. All Rights Reserved</p>
                            <p>|</p>
                            <p>Terms & Conditions</p>
                            <p>|</p>
                            <p>Privacy Policy</p>
                        </div>
                        {/* <div>
                            <p className='text-[#D1D1D1] font-[300] text-[0.72916666666vw]'>Developed by Brackets Technology</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer