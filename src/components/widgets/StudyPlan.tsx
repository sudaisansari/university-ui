"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'

const rowColData = [
    { code: "CP 101", name: "Introduction to Computing", preReq: "None", CredHours: "3" },
    { code: "CP 110", name: "Programming I", preReq: "None", CredHours: "3" },
    { code: "ISLS 101", name: "Islamic Studies l", preReq: "None", CredHours: "3" },
    { code: "MATH 101", name: "Calculus l", preReq: "None", CredHours: "4" },
    { code: "STAT 101", name: "General Statistics", preReq: "None", CredHours: "3" },
]

const StudyPlan = () => {
    const [isVisible, setIsVisible] = useState(true);
    // const [handleTable, setHandleTable] = useState(1)
    const [tableMainHeader, setTableMainHeader] = useState<number | null | false>(null);

    // const handleTable = (index: number) => {
    //     const mainTables = document.querySelectorAll(".table_Lists .table_Main");
    //     const clickedMainTable: any = mainTables[index];
    //     const tableWrapperHeight: any =
    //         clickedMainTable.querySelector(".table_Wrapper");
    //     tableWrapperHeight.offsetHeight
    //     mainTables.forEach((allmainTable: any) => {
    //         if (allmainTable === clickedMainTable) {
    //             if (clickedMainTable.style.opacity === "1") {
    //                 clickedMainTable.style.maxHeight = `0`;
    //                 clickedMainTable.style.opacity = `0`;
    //                 setTableMainHeader(index);
    //                 setTableMainHeader(false);
    //             } else {
    //                 clickedMainTable.style.maxHeight = `${tableWrapperHeight}px`;
    //                 clickedMainTable.style.opacity = `1`;
    //                 setTableMainHeader(index);
    //             }
    //         } else {
    //             allmainTable.style.maxHeight = `0px`;
    //             allmainTable.style.opacity = `0`;
    //         }
    //     });
    // };

    const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

    const handleTable = (index: number) => {
        const mainTables = document.querySelectorAll(".table_Lists .table_Main");
        const clickedMainTable = mainTables[index] as HTMLElement;
        console.log(clickedMainTable)
        const tableWrapper = clickedMainTable.querySelector(".table_Wrapper") as HTMLElement;
        const tableWrapperHeight = tableWrapper.offsetHeight;
        // clickedMainTable.style.maxHeight = `${tableWrapperHeight}px`;

        setVisibleIndices(prevVisibleIndices =>
            prevVisibleIndices.includes(index)
                ? prevVisibleIndices.filter(i => i !== index)
                : [index]
        );

        mainTables.forEach((allMainTable) => {
            const allMainTableElement = allMainTable as HTMLElement;

            if (allMainTableElement === clickedMainTable) {
                if (clickedMainTable.style.opacity === "1") {
                    clickedMainTable.style.maxHeight = `0`;
                    clickedMainTable.style.opacity = `0`;
                    setTableMainHeader(null);
                } else {
                    clickedMainTable.style.maxHeight = `${tableWrapperHeight}px`;
                    clickedMainTable.style.opacity = `1`;
                    setTableMainHeader(index);
                }
            } else {
                allMainTableElement.style.maxHeight = `0px`;
                allMainTableElement.style.opacity = `0`;
            }
        });
    };
    // useEffect(() => {
    //     handleTable(0);
    //   }, []);    

    //   const combinedFunction = (index: number) => {
    //     handleTable(index);
    //     setIsVisible(!isVisible);
    // };

    return (
        <div className='w-full lg:mt-[5.20833333333vw] lg:mb-[5.20833333333vw]'>
            <div className='flex flex-col lg:gap-y-[1.5625vw] lg:w-[91.6145833333vw] mx-auto lg:p-[3.125vw] bg-[#FFF] lg:rounded-[1.04166666667vw]'>
                {/* Heading */}
                <div>
                    <h2 className='text40'>Study Plan</h2>
                </div>
                {/* Semester Details */}
                <div className='table_Lists'>
                    {[1, 2, 3, 4].map((item, i) => (
                        <div key={i}
                            className=''
                            // onClick={() => handleTable(i)}
                            onClick={() => handleTable(i)}
                        >
                            {/* Bar */}
                            <div
                                className={`cursor-pointer lg:p-[1.04166666667vw] lg:rounded-t-[0.52083333333vw] group flex flex-row items-center justify-between hover:bg-[#192F59] transition-all ${visibleIndices.includes(i) ? "bg-[#192F59]" : "bg-[#FFF]"}`}>
                                {/* Left Text */}
                                <span className={`lg:text-[1.5625vw] lg:leading-[2.08333333333vw] group-hover:text-[#FFF] ${visibleIndices.includes(i) ? "text-[#FFF]" : "text-[#192F59]"}`}>{item} Year</span>
                                {/* Right Button */}
                                <div className='lg:w-[2.34375vw] lg:h-[2.34375vw] flex items-center justify-center relative'>
                                    {!visibleIndices.includes(i) ?
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 10.5H8V17.5C8 17.7652 8.10536 18.0196 8.29289 18.2071C8.48043 18.3946 8.73478 18.5 9 18.5C9.26522 18.5 9.51957 18.3946 9.70711 18.2071C9.89464 18.0196 10 17.7652 10 17.5V10.5H17C17.2652 10.5 17.5196 10.3946 17.7071 10.2071C17.8946 10.0196 18 9.76522 18 9.5C18 9.23478 17.8946 8.98043 17.7071 8.79289C17.5196 8.60536 17.2652 8.5 17 8.5H10V1.5C10 1.23478 9.89464 0.98043 9.70711 0.792893C9.51957 0.605357 9.26522 0.5 9 0.5C8.73478 0.5 8.48043 0.605357 8.29289 0.792893C8.10536 0.98043 8 1.23478 8 1.5V8.5H1C0.734784 8.5 0.48043 8.60536 0.292893 8.79289C0.105357 8.98043 0 9.23478 0 9.5C0 9.76522 0.105357 10.0196 0.292893 10.2071C0.48043 10.3946 0.734784 10.5 1 10.5Z"
                                                className="fill-[#192F59] group-hover:fill-[#50BD77] absolute"
                                            />
                                        </svg>
                                        :
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={3}
                                            viewBox="0 0 18 3"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1 2.5H8H10H17C17.2652 2.5 17.5196 2.39464 17.7071 2.20711C17.8946 2.01957 18 1.76522 18 1.5C18 1.23478 17.8946 0.980429 17.7071 0.792892C17.5196 0.605356 17.2652 0.5 17 0.5H10H8H1C0.734784 0.5 0.48043 0.605356 0.292893 0.792892C0.105357 0.980429 0 1.23478 0 1.5C0 1.76522 0.105357 2.01957 0.292893 2.20711C0.48043 2.39464 0.734784 2.5 1 2.5Z"
                                                fill="#50BD77"
                                                className="fill-[#192F59] group-hover:fill-[#50BD77] absolute"
                                            />
                                        </svg>
                                    }
                                </div>
                            </div>
                            <div className='table_Main max-h-0 overflow-hidden transition-all duration-[350ms] delay-[150] opacity-1'>
                                {/* <div className={`table_Wrapper flex flex-row ${isVisible ? "max-h-[481px]" : "max-h-[0px]"}`}> */}
                                <div className="table_Wrapper flex flex-row max-h-[481px]">

                                    {/* <div className='flex flex-row'> */}
                                    <div className=' lg:w-[42.65625vw] bg-[#F8F9FA] border-l-[0.05208333333vw] border-b-[0.05208333333vw] border-r-[0.05208333333vw] border-[#5C6370]'>
                                        {/* semester name */}
                                        <div className=' lg:pt-[1.04166666667vw] lg:pl-[1.04166666667vw] lg:pr-[1.04166666667vw]'>
                                            <h5 className='lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] font-[500] text-[#192F59]'>Semester 1</h5>
                                        </div>
                                        {/* top */}
                                        <div className=' flex flex-row lg:pb-[0.52083333333vw] lg:pt-[1.04166666667vw] lg:pl-[1.04166666667vw] lg:mr-[1.04166666667vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[#192F59] bg-[#F8F9FA]'>
                                            <div className='flex flex-row lg:gap-x-[1.5625vw]'>
                                                <span className='lg:w-[6.19791666667vw]'>Course  Code</span>
                                                <span className='lg:w-[9.94791666667vw]'>Course  Name</span>
                                            </div>
                                            <div className='flex flex-row lg:gap-x-[2.34375vw]'>
                                                <span className='lg:w-[6.09375vw]'>Pre-Requisties</span>
                                                <span className='lg:w-[5.26041666667vw]'>Credit Hours</span>
                                            </div>
                                        </div>
                                        {/* row col */}
                                        <div className='flex flex-col lg:gap-y-[0.46875vw] lg:p-[1.04166666667vw] bg-[#FFF]'>
                                            {rowColData.map((item, i) => (
                                                <div key={i}>
                                                    <div className={`flex flex-row items-center lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] text-[#192F59] ${i !== rowColData.length - 1 ? 'border-b-[1px] lg:pb-[0.46875vw] border-[#5c63700d]' : ''}`}>
                                                        <span className='lg:min-w-[6.19791666667vw] lg:w-[6.19791666667vw] lg:mr-[1.5625vw]'>{item.code}</span>
                                                        <span className='lg:w-[9.94791666667vw]'>{item.name}</span>
                                                        <span className='lg:w-[8.59375vw]'>{item.preReq}</span>
                                                        <span className='lg:w-[5.26041666667vw]'>{item.CredHours}</span>
                                                    </div>
                                                    {/* <div className='lg:mb-[0.46875vw] lg:mt-[0.46875vw] '>
                                        <span className='block lg:w-[40.5729166667vw] lg:h-[1px] bg-[#5c63700d]'></span>
                                    </div> */}
                                                </div>
                                            ))}
                                        </div>
                                        {/* bottom */}
                                        <div className='flex flex-row gap-x-[17.072917vw] items-center lg:pt-[0.52083333333vw] lg:pb-[1.04166666667vw] lg:pl-[1.04166666667vw] lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] font-[500] text-[#192F59]'>
                                            {/* text */}
                                            <span>Total Credit Hours </span>
                                            {/* number */}
                                            <span className=''>16</span>
                                        </div>
                                    </div>
                                    <div className='lg:w-[42.65625vw] bg-[#F8F9FA] border-l-[0.05208333333vw] border-b-[0.05208333333vw] border-r-[0.05208333333vw] border-[#5C6370]'>
                                        {/* semester name */}
                                        <div className=' lg:pt-[1.04166666667vw] lg:pl-[1.04166666667vw] lg:pr-[1.04166666667vw]'>
                                            <h5 className='lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] font-[500] text-[#192F59]'>Semester 1</h5>
                                        </div>
                                        {/* top */}
                                        <div className='flex flex-row lg:pb-[0.52083333333vw] lg:pt-[1.04166666667vw] lg:pl-[1.04166666667vw] lg:mr-[1.04166666667vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[#192F59] bg-[#F8F9FA]'>
                                            <div className='flex flex-row lg:gap-x-[1.5625vw]'>
                                                <span className='lg:w-[6.19791666667vw]'>Course  Code</span>
                                                <span className='lg:w-[9.94791666667vw]'>Course  Name</span>
                                            </div>
                                            <div className='flex flex-row lg:gap-x-[2.34375vw]'>
                                                <span className='lg:w-[6.09375vw]'>Pre-Requisties</span>
                                                <span className='lg:w-[5.26041666667vw]'>Credit Hours</span>
                                            </div>
                                        </div>
                                        {/* row col */}
                                        <div className='flex flex-col lg:gap-y-[0.46875vw] lg:p-[1.04166666667vw] bg-[#FFF]'>
                                            {rowColData.map((item, i) => (
                                                <div key={i}>
                                                    <div className={`flex flex-row items-center lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] text-[#192F59] ${i !== rowColData.length - 1 ? 'border-b-[1px] lg:pb-[0.46875vw] border-[#5c63700d]' : ''}`}>
                                                        <span className='lg:min-w-[6.19791666667vw] lg:w-[6.19791666667vw] lg:mr-[1.5625vw]'>{item.code}</span>
                                                        <span className='lg:w-[9.94791666667vw]'>{item.name}</span>
                                                        <span className='lg:w-[8.59375vw]'>{item.preReq}</span>
                                                        <span className='lg:w-[5.26041666667vw]'>{item.CredHours}</span>
                                                    </div>
                                                    {/* <div className='lg:mb-[0.46875vw] lg:mt-[0.46875vw] '>
                                        <span className='block lg:w-[40.5729166667vw] lg:h-[1px] bg-[#5c63700d]'></span>
                                    </div> */}
                                                </div>
                                            ))}
                                        </div>
                                        {/* bottom */}
                                        <div className='flex flex-row gap-x-[17.072917vw] items-center lg:pt-[0.52083333333vw] lg:pb-[1.04166666667vw] lg:pl-[1.04166666667vw] lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] font-[500] text-[#192F59]'>
                                            {/* text */}
                                            <span>Total Credit Hours </span>
                                            {/* number */}
                                            <span className=''>16</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Description and Button */}
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-x-[0.78125vw]'>
                        {/* icon */}
                        <div className='lg:w-[1.5625vw] lg:h-[1.5625vw] relative'>
                            <Image src={"/check.svg"} alt='check' fill />
                        </div>
                        {/* des */}
                        <p className='lg:w-[36.6145833333vw] lg:text-[1.14583333333vw] lg:leading-[1.66666666667vw] text-[#192F59]'>The student must register between 12-18 credit hours per semester to be able to complete graduation requirements within the specified period of the program. </p>
                    </div>
                    {/* button */}
                    <Link href={"#"}>
                        <div className='group cursor-pointer flex items-center gap-x-[5px] lg:gap-x-[0.52083333333vw]'>
                            <div className='lg:text-[1.30208333333vw] text-[16px] lg:leading-[1.30208333333vw] leading-[12px] text-[#50BD77] font-[500] capitalize'>Download full plan</div>
                            <div className='rtl:scale-x-[-1] group-hover:translate-x-1 ransition-all duration-300 relative w-[17px] h-[17px] lg:w-[1.25vw] lg:h-[1.25vw]'>
                                <Image src="/download.svg" alt="arrow" fill objectFit='cover' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default StudyPlan