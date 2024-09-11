"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  { id: 0, image: "/images/banners/1.jpeg", heading: "The College Theater", para: "It was established on an area of 700 square meters and is equipped as a pioneering monument in receiving all cultural and scientific activities, including theatrical and audio-visual ones, and has the capacity for receiving all seminars, whether from inside or outside the college." },
  { id: 1, image: "/images/banners/2.jpeg", heading: "Outdoor Areas", para: "Artificial and natural green spaces have been created to provide a healthy environment and an outlet for the college community that combines relaxation and tranquillity." },
  { id: 2, image: "/images/banners/3.jpeg", heading: "Sports Activity Halls", para: "Sports activities have special areas in each section, basketball and volleyball games for the female and male sections, futsal for the male section and other group games. Some other activities include strength games, table tennis and various recreational games." },
  { id: 3, image: "/images/banners/5.jpeg", heading: "Mosque", para: "The extension of the college buildings over a wide geographical area led to the availability of sufficient parking spaces." },
  { id: 4, image: "/images/banners/6.jpeg", heading: "Medical Clinic", para: "The extension of the college buildings over a wide geographical area led to the availability of sufficient parking spaces." },
  { id: 5, image: "/images/banners/7.jpeg", heading: "Facilities for People with Special Needs", para: "The extension of the college buildings over a wide geographical area led to the availability of sufficient parking spaces." },
  { id: 6, image: "/images/banners/8.jpeg", heading: "Cafeteria & Lounges", para: "The extension of the college buildings over a wide geographical area led to the availability of sufficient parking spaces." },
]

const CampusFacilities = () => {

  const [selectedItem, setSelectedItem] = useState(0)

  const selectedItemData = data.find((item) => item.id === selectedItem)
  console.log(selectedItem)

  return (
    <div className='relative w-full lg:mb-[10.4166666667vw] '>      
      {/* lg:w-[91.6666666667vw] w-[90%] */}
      {/* <span className='w-full h-[250px] lg:h-[30.3125vw] top-0 absolute CampusFacilitiesBG'></span> */}
      <div className='w-full '>
        {/* Heading and Description */}
        <div className='bg-[#192F59] lg:pb-[14.4270833333vw] pb-[100px] pt-[60px] lg:pt-[8.38541666667vw] z-[1] relative'>
          <div className='lg:w-[91.6666666667vw] w-[90%] mx-auto'>
            <h2
              data-aos="fade-up"
              className='lg:text-[2.60416666667vw] text-[30px] leading-[40px] sm:text-[40px] sm:leading-[50px] lg:leading-[3.125vw] text-[#FFF]'>Campus & Facilities</h2>
            <p
              data-aos="fade-down"
              className='lg:w-[45.0520833333vw] lg:mt-[1.04166666667vw] mt-[10px] text-[#E5E5E5] lg:text-[1.14583333333vw] text-[18px] leading-[26px] lg:leading-[1.66666666667vw]'>We offer a vibrant campus with modern facilities, creating an inspiring environment for learning, collaboration, and personal development.</p>
          </div>
        </div>
        {/* Image */}
        <div
          data-aos="fade"
          className='lg:mt-[-10.625vw] mt-[-60px] lg:w-[91.6666666667vw] w-[90%] mx-auto flex flex-col'>
          <div className='w-full h-[350px] sm:h-[500px] lg:h-[44.53125vw] z-[1] relative'>
            <Image className='sm:rounded-[1.04166666667vw] rounded-t-[20px]' src={selectedItemData?.image || ""} alt='CampusFacility' objectFit='cover' fill />
          </div>
          <div className='flex flex-col items-end lg:absolute z-[2] rtl:left-[7.8125vw] ltr:lg:right-[7.8125vw] lg:bottom-[3.90625vw] rounded-b-[20px] lg:rounded-[0.52083333333vw] w-full lg:w-[37.0833333333vw] px-[30px] py-[40px] sm:px-[40px] sm:py-[50px] lg:pt-[3.64583333333vw] lg:pb-[3.64583333333vw] lg:pr-[2.60416666667vw] lg:pl-[2.60416666667vw] bg-[#f8f9fa]'>
            <div className='lg:hidden block mb-[40px] lg:w-0 w-[80px] lg:mt-[3.02083333333vw]'>
              <button
                onClick={() => setSelectedItem(selectedItem > 0 ? selectedItem - 1 : selectedItem)}
                disabled={selectedItem <= 0}
                className={`lg:ltr:mr-[1.30208333333vw] ltr:mr-[18px] rtl:ml-[18px] lg:rtl:ml-[1.30208333333vw] rtl:scale-x-[-1] lg:w-[2.08333333333vw] w-[30px] h-[30px] lg:h-[2.08333333333vw] relative ${selectedItem <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Image src={"/Arrows.svg"} alt='arrow left' fill />
              </button>
              <button
                onClick={() => setSelectedItem(selectedItem < data.length - 1 ? selectedItem + 1 : selectedItem)}
                disabled={selectedItem >= data.length - 1}
                className={`rtl:scale-x-[-1] lg:w-[2.08333333333vw] w-[30px] h-[30px] lg:h-[2.08333333333vw] relative ${selectedItem >= data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Image src={"/Arrows(1).svg"} alt='arrow right' fill />
              </button>
            </div>
            <div

            >
              <h3
                data-aos="fade-up"
                className='lg:text-[1.5625vw] text-[25px] leading-[30px] lg:leading-[2.08333333333vw] text-[#192F59]'>{selectedItemData?.heading}</h3>
              <p
                data-aos="fade-down"
                className='lg:mt-[1.04166666667vw] sm:min-h-[120px] lg:min-h-[8.33333333333vw] mt-[15px] lg:text-[1.14583333333vw] text-[18px] sm:text-[20px] sm:leading-[30px] leading-[26px] lg:leading-[1.66666666667vw] text-[#192F59]'>{selectedItemData?.para}</p>
            </div>
            <div className='lg:block hidden mt-[20px] lg:mt-[3.02083333333vw]'>
              <button
                onClick={() => setSelectedItem(selectedItem > 0 ? selectedItem - 1 : selectedItem)}
                disabled={selectedItem <= 0}
                className={`ltr:mr-[1.30208333333vw] rtl:ml-[1.30208333333vw] rtl:scale-x-[-1] lg:w-[2.08333333333vw] w-[25px] h-[25px] lg:h-[2.08333333333vw] relative ${selectedItem <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Image src={"/Arrows.svg"} alt='arrow left' fill />
              </button>
              <button
                onClick={() => setSelectedItem(selectedItem < data.length - 1 ? selectedItem + 1 : selectedItem)}
                disabled={selectedItem >= data.length - 1}
                className={`rtl:scale-x-[-1] lg:w-[2.08333333333vw] w-[25px] h-[25px] lg:h-[2.08333333333vw] relative ${selectedItem >= data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Image src={"/Arrows(1).svg"} alt='arrow right' fill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusFacilities