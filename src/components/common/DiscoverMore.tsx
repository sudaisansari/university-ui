import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DiscoverMore = (props: { text: string; link?: any }) => {
    return (
        <Link href={props.link ? props.link : "#"}>
            <div className='group cursor-pointer flex items-center gap-x-[5px] lg:gap-x-[0.52083333333vw]'>
                <div className='lg:text-[1.30208333333vw] text-[16px] lg:leading-[1.30208333333vw] leading-[12px] text-[#50BD77] font-[500] capitalize'>{props.text}</div>
                <div className='rtl:scale-x-[-1] group-hover:translate-x-1 ransition-all duration-300 relative w-[17px] h-[17px] lg:w-[1.25vw] lg:h-[1.25vw]'>
                    <Image src="/arrow-right-about.svg" alt="arrow" fill objectFit='cover' />
                </div>
            </div>
        </Link>
    )
}

export default DiscoverMore