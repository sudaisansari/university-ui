"use client"
import About from "@/components/widgets/About"
import BachlorProgram from "@/components/widgets/BachlorProgram"
import CampusFacilities from "@/components/widgets/CampusFacilities"
import Department from "@/components/widgets/Department"
import Hero from "@/components/widgets/Hero"
import MasterProgram from "@/components/widgets/MasterProgram"
import PublishedResearchers from "@/components/widgets/PublishedResearchers"
import WhyJIC from "@/components/widgets/WhyJIC"
import useAos from "@/components/shared/useAos"
import StudyPlan from "@/components/widgets/StudyPlan"
import CourseCoverred from "@/components/widgets/CourseCoverred"
import Footer from "@/components/layout/Footer"


export default function Home() {
  useAos()
  return (
    <main className="ltr bg-[#F8F9FA]" dir="ltr">
      <Hero />
      <CampusFacilities />
      <About />
      <BachlorProgram />
      <MasterProgram />
      <WhyJIC /> 
      <Department />
      <StudyPlan />      
      <CourseCoverred />
      <PublishedResearchers />
      {/* <div className="w-full h-60 bg-green-500">
      </div>
      <span className="text-[1.25vw] text-red-700 block lg:hidden">
        mobile and tablet
      </span>
      <span className="text-[1.25vw] text-red-700 block sm:hidden lg:block"   >
        mobile and dekstop
      </span>
      <span className="text-[1.25vw] text-red-700 hidden sm:block"   >
        tablet and dekstop
      </span>
      <span className="text-[1.25vw] text-red-700 lg:block hidden">
      only dekstop
      </span>
      <span className="text-[1.25vw] text-red-700 hidden sm:block lg:hidden">
        only tablet
      </span>
      <span className="text-[1.25vw] text-red-700 block sm:hidden">
        only mobile
      </span> */}
    </main>
  )
}