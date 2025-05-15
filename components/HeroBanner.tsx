import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Play } from "lucide-react";
function HeroBanner() {
  return (
    <div className="mb-10">
      <Breadcrumb className="text-[#667479] text-sm font-medium font-[GilroyMedium]  mb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Dog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Small Dog</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

   <div className="hidden md:flex items-center  w-full px-20 relative  h-[400px]">
    <div className="z-10  w-full mt-[101px]  ">
        <img src="/bigDogImage.png" alt="dogs" className="w-[700px]  h-[300px]" />
    </div>
    <div className="relative z-10  flex flex-col items-end justify-end w-full  text-white">
      <h1 className="text-[4vw] leading-[68px] font-extrabold font-[GilroyBold]  whitespace-nowrap">One More Friend</h1>
      <p className="mt-2 font-bold font-[GilroyBold] text-[2vw] leading-[54px]">Thousands More Fun!</p>
      <p className="mt-4 text-[12px] leading-[18px] max-w-[350px] text-[#CCD1D2] font-medium font-[GilroyMedium] text-end">
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
      </p>
      <div className="mt-6 flex space-x-4 font-medium font-[GilroyMedium] ">
        <button className="px-4 cursor-pointer py-2 flex items-center gap-2 border border-white rounded-full">View Intro<div className="w-6 h-6 border-2 flex items-center px-1 justify-center border-white rounded-full">
                    <Play size={13}/>
                </div></button>
        <button className="px-4 cursor-pointer py-2 bg-white text-[#05203C] rounded-full">Explore Now</button>
      </div>
    </div> 
  {/* Left Section (light background) */}
  <div className="w-3/4 h-[400px] bg-[#FDF1DC] absolute left-0">
   
  
  </div>

  {/* Right Section (dark background with curve image on left side) */}
  <div className="w-[65%] absolute h-[400px] right-0">
    <img
      src="/curve.png"
      alt="curve shape"
      className="absolute left-0 top-0 w-full h-full"
    />
  </div>
</div>


      <div className="flex flex-col md:hidden">
        <div className="relative">
        <div className=" bg-[#FFF7E2] -z-10 absolute h-80 w-full rounded-t-[20px] "></div>
          <div className="relative p-6">
            <h2 className="text-3xl font-extrabold font-[GilroyBold] text-[#002A48]">One More Friend</h2>
            <p className="text-2xl font-[GilroyBold] font-bold">
              Thousands More Fun!{" "}
              <span className="inline-block w-2 h-2 bg-[#00171F] rounded-full ml-2"></span>
            </p>
            <p className="mt-3 font-medium font-[GilroyMedium]  text-xs text-[#242B33] leading-relaxed">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            <div className="mt-4 flex gap-4 font-medium font-[GilroyMedium] ">
              <button className="flex items-center gap-2 border border-[#00171F] text-[#00171F] rounded-full px-4 py-2 text-sm font-semibold">
                View Intro <div className="w-6 h-6 border-2 flex items-center justify-center border-[#003459] rounded-full">
                    <Play size={15}/>

                </div>
              </button>
              <button className="bg-[#003459] text-white rounded-full px-5 py-2 text-sm font-semibold">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className=" top-6 absolute w-full h-32 bg-[#003459] transform origin-bottom-left skew-y-6 -z-10 "></div>
          <img src="/dogBanner.png" alt="dogs" className="w-full " />
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
