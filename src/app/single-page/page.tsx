import Image from 'next/image'
import React from 'react'

const data = [
  { h: "Organizer", p: "Jeddah International College + IEEE" },
  { h: "Location", p: "Jeddah International College" },
  { h: "Date", p: "13 DEC 2023" },
]

const page = () => {
  return (
    <div>
      {/* bg */}
      <div>
        <div className='w-full lg:pb-[35.625vw] lg:pt-[24.0625vw] overflow-hidden lg:h-[66.4583333333vw] bg-[#192F59]'>
          <div className='lg:w-[91.6666666667vw] mx-auto'>
            <div className='lg:w-[43.8541666667vw] flex flex-col gap-y-[1.04166666667vw]'>
              {/* buttons */}
              <div className='flex gap-x-[0.78125vw] items-center'>
                <div className='lg:h-[1.25vw] lg:w-[1.25vw] relative'>
                  <Image src={"/home.svg"} alt='home' fill />
                </div>
                <div className='lg:w-[0.46916666666vw] lg:h-[0.46916666666vw] relative'>
                  <Image src={"VectorR.svg"} alt='vector' fill />
                </div>
                <span className='text-[1.04166666667vw] lg:leading-[1.97916666667vw] text-[#D1D1D1]'>News & Events</span>
                <div className='lg:w-[0.46916666666vw] lg:h-[0.46916666666vw] relative'>
                  <Image src={"VectorR.svg"} alt='vector' fill />
                </div>
                <span className='text-[1.04166666667vw] lg:leading-[1.97916666667vw] text-[#D1D1D1]'>JIC 1st ICAISC 2023</span>
              </div>
              {/* heading */}
              <h1 className='lg:text-[3.64583333333vw] lg:leading-[4.16666666667vw] text-[#FFF] capitalize'>JIC 1st ICAISC 2023</h1>
            </div>
          </div>
        </div>
        {/* image */}
        <div className='mt-[-27.8125]'>
          <div className='mx-auto lg:h-[44.53125vw] lg:w-[91.6666666667vw] z-[1] relative'>
            <Image src={"/images/singlep1.jpg"} className='rounded-[0.52083333333vw]' alt='banner' fill objectFit='cover' />
          </div>
          {/* icon */}
          {/* <div className='flex flex-row items-center justify-between  absolute'>
            <div className='lg:w-[3.02083333333vw] lg:h-[3.02083333333vw] relative'>
              <Image src={"arrow-left.svg"} alt="left" fill />
            </div>
            <div className='lg:w-[3.02083333333vw] lg:h-[3.02083333333vw] relative'>
              <Image src={"arrow-right.svg"} alt="left" fill />
            </div>
          </div> */}
        </div>
        <div className='lg:w-[91.6666666667vw] mx-auto'>
          {/* boxes */}
          <div className='flex flex-col lg:gap-y-[2.08333333333vw] lg:pt-[7.60416666667vw] lg:pb-[8.33333333333vw]'>
            <div className='flex flex-row gap-x-[0.52083333333vw]'>
              {data.map((item, i) => (
                <div key={i} className='flex flex-col ring-1 ring-[#5C6370] ring-opacity-10 lg:w-[16.9791666667vw] lg:px-[1.04166666667vw] lg:py-[0.52083333333vw] rounded-[0.52083333333vw]'>
                  <h4 className='lg:text-[0.9375vw] lg:leading-[1.35416666667vw] text-[#5C6370]'>{item.h}</h4>
                  <p className='lg:text-[0.9375vw] lg:leading-[1.66666666667vw] text-[#192F59]'>{item.p}</p>
                </div>
              ))}
            </div>
            {/* para */}
            <div className="singlePage_Content Tajawal">
              <p>
                The First International Conference on Advanced Innovations in
                Global Smart Cities, in collaboration with King Abdulaziz
                University in Jeddah, Saudi Arabia, aimed to bring together
                professionals, scientists, engineers, educators, researchers,
                and students from around the world/Kingdom to exchange their
                scientific ideas on all aspects of smart city technologies.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  unde dolore atque, quaerat modi optio laborum explicabo quis
                  soluta nostrum, ipsam ratione.
                </li>
              </ul>
            </div>
          </div>
          {/* desc */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default page