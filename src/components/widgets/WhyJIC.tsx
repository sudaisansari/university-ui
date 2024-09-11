import Image from 'next/image'
import React from 'react'

const data = [
    { image: "/e-learning-programs.svg", description: "Our distinguished academic programs" },
    { image: "/academic-certificate.svg", description: "Accredited by the Saudi ministry of education" },
    { image: "/school-building.svg", description: "Our attractive educational  environment" },
    { image: "/bookmark.svg", description: "The opportunity of studying double majors" },
]

const WhyJIC = () => {
    return (
        <div className='w-full lg:mt[10.4166666667vw] mt-[94.31px] mb-[94.31px] lg:mb-[10.4166666667vw]'>
            <div className='flex text-[#192F59] flex-wrap lg:gap-[1.5625vw] gap-[20px] justify-center lg:w-[63.6979166667vw] w-[90.7%] mx-auto'>
                {/* Why JIC */}
                <div className='lg:w-[21.71875vw] sm:w-[70%] lg:mb-0 sm:mb-[20px] mb-[10px] left-0 mr_Auto'>
                    <h4 
                    data-aos="fade-up"
                    className='lg:w-[9.63541666667vw] lg:text-[2.60416666667vw] text-[32px] leading-[42px] lg:leading-[3.125vw] capitalize'>Why JIC</h4>
                    <p 
                    data-aos="fade-down"
                    className='lg:text-[1.14583333333vw] text-[18px] leading-[28px] lg:leading-[1.66666666667vw] mt-[16px] lg:mt-[1.04166666667vw]'>Our college is offering an exceptional educational experience that combines academic excellence, supportive community, and abundant opportunities for student growth and success.</p>
                </div>
                {/* Cards */}
                {data.map((items, i) => (
                    <div 
                    data-aos="fade"
                    data-aos-delay={`${i * 100}`}
                    key={i} 
                    className='bg-[#192f5908] lg:w-[18.1770833333vw] sm:w-[40%] w-full items-start rounded-[0.52083333333vw] p-[20px] lg:p-0 lg:pt-[2.60416666667vw] lg:pb-[2.60416666667vw] lg:pl-[1.5625vw] lg:pr-[1.5625vw]'>
                        <div className='lg:w-[4.42708333333vw] w-[55px] h-[55px] lg:h-[4.42708333333vw] relative'>
                            <Image src={items.image} alt='icon' fill />
                        </div>
                        <p className=' mt-[15px] lg:mt-[1.04166666667vw] lg:text-[1.5625vw] text-[20px] leading-[30px] lg:leading-[2.08333333333vw]'>
                            {items.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyJIC