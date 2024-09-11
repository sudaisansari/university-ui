import Image from 'next/image'
import React from 'react'

const buttonsData = ["All", "Basic science department", "Business department", "computer science & information technology department", "design department", "law department"]
const cardData = [
    { date: "OCT 17, 2023 ", dateBelowText: "Design Department", name: "By: Dr. Ahmed  Tohlob", heading: "How does capital structure moderate the relationship between dividend policy and firm performance in egypt?", desc: "This century is witnessing a range of changes in all political, economic, social and cultural fields. These variables represent major challenges that have affected all aspects of life and human activities in the developed and developing world alike, and in terms of the field of architecture," },
    { date: "OCT 17, 2023 ", dateBelowText: "Business department", name: "By: Dr. Husam Sharawi", heading: "The impact of ceo overconfidence on share collapse under the moderating role of financial statements opacity: Evidence from egypt", desc: "This study examines how dividend policy and capital structure affect non-financial firms’ performance (operational, financial, and market) listed on the EGX." },
    { date: "JUN 07, 2023 ", dateBelowText: "Business department", name: "By: Dr. Husam Sharawi", heading: "Exceptional strength-ductility synergy of ni and co–mg–la ferrite nanoparticles reinforced sn-1ag-0.5cu matrix composite", desc: "This study explores how CEO overconfidence affects the likelihood of share collapse in the context of an emerging market, Egypt, and how the financial statements’ opacity moderates this effect." },
    { date: "OCT 17, 2023 ", dateBelowText: "basic science department", name: "By: Dr. Ahmed Hammad", heading: "The doctor’s tort responsibility for organ transplantation and transplantation and its relationship to child abduction “an analytical study”", desc: "The use of innovative Co–Mg–La ferrite nanoparticles (ferrite) facilitates the production of superior Pb-free solder alloy materials that suffer from the strength-ductility trade-off (SDT). The current study introduces an original Pb-free Sn-1Ag-0.5Cu (SAC105) electrical connection alloy." },
    { date: "JUN 07, 2023 ", dateBelowText: "Law department", name: "By: Dr. Abdelrazek Wahba Sayed", heading: "Civil liability for breach of information prior to electronic contracting “comparative analytical study", desc: "The use of innovative Co–Mg–La ferrite nanoparticles (ferrite) facilitates the production of superior Pb-free solder alloy materials that suffer from the strength-ductility trade-off (SDT). The current study introduces an original Pb-free Sn-1Ag-0.5Cu (SAC105) electrical connection alloy." },
    { date: "OCT 17, 2023 ", dateBelowText: "Law department", name: "By: Dr. Abdelrazek Wahba Sayed", heading: "Civil liability for breach of information prior to electronic contracting “comparative analytical study”", desc: "The study aims to demonstrate the civil liability for breach of the obligation to inform before the electronic contracting, which is considered the necessary tool to protect the consumer" },
]
const numbers = [1, 2, 3, 4, 5]
const PublishedResearchers = () => {
    return (
        <div className='w-full lg:pb-[11.875vw] pb-[110px] mt-[100px] lg:mt-[10.4166666667vw]'>
            <div className='flex flex-col items-center mx-auto lg:w-[91.25vw] w-[90%]'>
                {/* Heading */}
                <h2
                    data-aos="fade"
                    className='lg:text-[2.60416666667vw] mr-auto rtl:ml-auto rtl:mr-0 text-[30px] leading-[40px] lg:leading-[3.125vw] text-[#192F59]'>Published Researches</h2>
                {/* Content */}
                <div className='lg:mt-[1.5625vw] mt-[30px] w-[100%]'>
                    {/* Buttons */}
                    <div
                        data-aos="fade"
                        className='flex sm:flex-wrap overflow-auto gap-x-[0.78125vw] gap-y-[1.04166666667vw] lg:w-[78.75vw]'>
                        {buttonsData.map((items, i) => (
                            <div key={i} className='rounded-[60px] cursor-pointer px-[18px] py-[6px] lg:rounded-[3.59375vw] text-nowrap bg-[#5454540a] lg:text-[1.30208333333vw] lg:leading-[1.82291666667vw] lg:pt-[0.625vw] lg:pb-[0.625vw] lg:pl-[1.30208333333vw] lg:pr-[1.30208333333vw] text-[#757575cc] capitalize'>
                                {items}
                            </div>
                        ))}
                    </div>
                    {/* Cards */}
                    <div className='flex flex-wrap lg:justify-normal justify-center lg:gap-[1.5625vw] gap-[20px] sm:gap-[30px] mt-[30px] lg:mt-[4.16666666667vw]'>
                        {cardData.map((item, i) => (
                            <div
                                data-aos="fade"
                                data-aos-delay={`${i * 100}`}
                                key={i}
                                className='group flex flex-col cursor-pointer lg:p-[1.5625vw] p-[20px] gap-y-[40px] lg:gap-y-[4.16666666667vw] bg-[#F8F9FA] rounded-[0.52083333333vw] w-[100%] sm:w-[45%] lg:w-[29.375vw]'>
                                {/* Date and Text */}
                                <div className='flex'>
                                    <div className='flex flex-col gap-y-[10px] lg:gap-y-[0.52083333333vw]'>
                                        <div className='flex items-center gap-x-[5px] py-[8px] px-[20px] rounded-[42px] lg:gap-x-[0.26041666666vw] lg:rounded-[2.1875vw] text-nowrap bg-[#50bd7726] lg:text-[1.30208333333vw] lg:leading-[1.82291666667vw] lg:pt-[0.3125vw] lg:pb-[0.3125vw] lg:pl-[0.52083333333vw] lg:pr-[0.52083333333vw] text-[#757575cc] capitalize'>
                                            <div className='lg:w-[1.07385416667vw] w-[24px] h-[25px] lg:h-[1.14651041667vw] relative'>
                                                <Image src={"/calendar.svg"} alt='vector' fill />
                                            </div>
                                            <div className='text-[#192F59] lg:text-[0.83333333333vw] text-[14px] leading-[15px] lg:leading-[1.35416666667vw]'>
                                                {item.date}
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-x-[5px] py-[8px] px-[20px] lg:gap-x-[0.26041666666vw] rounded-[42px] lg:rounded-[2.1875vw] text-nowrap bg-[#50bd7726] lg:text-[1.30208333333vw] lg:leading-[1.82291666667vw] lg:pt-[0.3125vw] lg:pb-[0.3125vw] lg:pl-[0.52083333333vw] lg:pr-[0.52083333333vw] text-[#757575cc] capitalize'>
                                            <div className='lg:w-[1.07385416667vw] w-[24px] h-[25px] lg:h-[1.14651041667vw] relative'>
                                                <Image src={"/building-block.svg"} alt='vector' fill />
                                            </div>
                                            <div className='text-[#192F59] lg:text-[0.83333333333vw] text-[14px] leading-[15px] lg:leading-[1.35416666667vw]'>
                                                {item.dateBelowText}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Name, Heading and Desc */}
                                <div>
                                    {/* Name */}
                                    <div className='lg:text-[1.04166666667vw] text-[15px] leading-[20px] lg:leading-[1.5625vw] text-[#5C6370]'>
                                        {item.name}
                                    </div>
                                    {/* Heading and Desc */}
                                    <div className='lg:mt-[0.52083333333vw] mt-[8px]'>
                                        <h5 className='line-clamp-2 lg:min-h-[4.16666666667vw] min-h-[60px] lg:text-[1.5625vw] text-[20px] leading-[30px] lg:leading-[2.08333333333vw] text-[#192F59]'>{item.heading}</h5>
                                        <div className='overflow-hidden line-clamp-3 lg:min-h-[4.16666666667vw] min-h-[60px] lg:mt-[0.83333333333vw] mt-[12px] lg:text-[1.14583333333vw] text-[15px] leading-[20px] lg:leading-[1.66666666667vw] text-[#5C6370]'>{item.desc}</div>
                                    </div>
                                </div>
                                {/* Icon */}
                                <div className='rtl:scale-x-[-1]  group-hover:translate-x-1 ransition-all duration-300 rtl:mr-auto rtl:ml-0 ml-auto lg:w-[2.65625vw] sm:w-[40px] sm:h-[40px] w-[38px] h-[38px] lg:h-[2.65625vw] relative'>
                                    <Image src={"/arrow-right.svg"} alt='arrow' fill />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Arrow Buttons */}
                <div className='Pagination flex flex-row lg:mt-[3.125vw] sm:mt-[40px] mt-[30px] w-[70%] sm:w-[47%] lg:w-[23.5416666667vw] justify-between items-center gap-x-[1.5625vw]'>
                    {/* arrow left */}
                    <div className='rtl:scale-x-[-1] lg:w-[2.13541666667vw] cursor-pointer w-[25px] sm:w-[32px] sm:h-[32px] h-[25px] lg:h-[2.13541666667vw] relative'>
                        <Image src={"/Arrows.svg"} alt='arrow right' fill />
                    </div>
                    {/* numbers */}
                    {numbers.map((item, i) => (
                        <div key={i} className={`${i == 0 ? "active" : ""} Numbers items-stretch cursor-pointer transition-all duration-300 text-opacity-[0.3] text-[#181818]`}>
                            <span className='lg:w-[3.02083333333vw] lg:text-[1.30208333333vw] text-[20px] sm:text-[22px] sm:leading-[32px] leading-[30px] lg:leading-[1.82291666667vw]'>{item}</span>
                        </div>
                    ))}
                    {/* arrow right */}
                    <div className='rtl:scale-x-[-1] lg:w-[2.13541666667vw] cursor-pointer w-[25px] sm:w-[32px] sm:h-[32px] h-[25px] lg:h-[2.13541666667vw] relative'>
                        <Image src={"/Arrows(1).svg"} alt='arrow right' fill />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PublishedResearchers