import FaceBook from "../public/facebook.png"
import Twitter from "../public/twitter.png"
import Instagram from "../public/instagram.png"
import YouTube from "../public/youtube.png"
import Logo from "../public/logo.png"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className="py-10 -mx-5 px-5 xl:-mx-20 xl:px-20 bg-[#FCEED5] xl:bg-[linear-gradient(180deg,#FCEED5,#FCEED5,#FFE7BA)] rounded-t-[20px]">
        <div className="bg-[#003459] p-[16px] rounded-[16px] flex flex-col xl:flex-row items-center justify-center mb-8">
            <p className="text-white text-[20px] leading-[32px] capitalize font-bold font-[GilroyBold] mb-5">Register now so you don&apos;t miss our programs</p>
            <form action="" className="bg-white w-full rounded-[14px] p-[12px] flex flex-col xl:flex-row item-center justify-center gap-[10px] ">
                <input placeholder="Enter your Email" type="text" name="email" id="email" className="border flex-1 border-[#99A2A5] text-sm font-medium font-[GilroyMedium] placeholder:text-[#99A2A5] focus:outline-none rounded-[8px] py-[14px] px-[28px]" />
                    <button className="bg-[#003459] text-white cursor-pointer font-medium font-[GilroyMedium] rounded-[8px] px-[28px] pt-[14px] pb-[10px] text-base" type="submit">Subcribe Now</button>
            </form>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between items-center justify-center gap-[20px] border-b border-[#CCD1D2] pb-10">
            <ul className="text-[#00171F] text-base font-medium font-[GilroyMedium] flex items-center justify-center gap-[40px]">
                <li><Link href={"#"}>Home</Link></li>
                <li><Link href={"#"}>Category</Link></li>
                <li><Link href={'#'}>About</Link></li>
                <li><Link href={"#"}>Contact</Link></li>
            </ul>
            <div className="flex items-center justify-center gap-[40px]">
                <Image src={FaceBook} alt="Facebook icon"/>
                <Image src={Twitter} alt="Twitter icon"/>
                <Image src={Instagram} alt="Instagram icon"/>
                <Image src={YouTube} alt="YouTube icon"/>
            </div>
        </div>

        <div className="flex flex-col xl:flex-row-reverse xl:items-start xl:justify-between items-center justify-center gap-5 mt-10">
        <Image src={Logo} className="mb-5  xl:hidden " width={114} height={26} alt="Logo icon"/>
        <div className="text-[#667479] text-[12px]  leading-[18px] font-medium font-[GilroyMedium] flex items-center gap-10">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
        <Image src={Logo} className="hidden xl:block" width={114} height={26} alt="Logo icon"/>
        <p className="text-[#667479] font-medium font-[GilroyMedium] text-[10px] leading-[16px]">© 2022 Monito. All rights reserved.</p>

        </div>

    </footer>
  )
}
export default Footer