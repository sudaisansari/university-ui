import Image from 'next/image'
import React from 'react'

const KeyInfoCard = (props: { image: any; description: string, index:number }) => {
    return (
        <div data-aos='fade' data-aos-delay={`${props.index * 100}`} className='lg:w-[17.8125vw] sm:w-[95%] w-full'>
            {/* Icon */}
            <div className='w-[59px] h-[59px] lg:w-[4.42708333333vw] lg:h-[4.42708333333vw] relative'>
                <Image src={props.image} alt='e-learning-programs' fill />
            </div>
            {/* Text */}
            <div className='mt-[0.78125vw] text-[20px] leading-[30px] lg:text-[1.30208333333vw] lg:leading-[1.82291666667vw] text-[#FFF]'>
                {props.description}
            </div>
        </div>
    )
}

export default KeyInfoCard