import Image from "next/image";
import Logo from "../public/logo.png";
import { ChevronDown, Menu, Search } from "lucide-react";
import currency from "../public/currency.png";
import Link from "next/link";

function NavBar() {
  return (
    <header>
      {/* Small screen nav */}
      <div className="flex items-center justify-between my-5 xl:hidden">
        <Menu className="text-[#00171F]" />
        <Image src={Logo} width={92} height={32} alt="Logo Icon" />
        <Search className="text-[#00171F] w-[23px]  h-[23px]" />
      </div>

      {/* Large screen navigation */}
      <nav className="hidden xl:flex items-center justify-between my-5">
        <div className="flex items-center gap-10">
        <Image src={Logo} width={115} height={40} alt="Logo Icon" />
        <ul className="text-[#00171F] text-base flex font-bold gap-[40px]">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Category</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>

        </div>
       
        <div className="flex items-center gap-20">     
          <div className="flex items-center gap-[12px] py-[12px] pr-[20px] pl-[16px]">
            <Search className="text-[#00171F] w-[20px]  h-[20px]" />
            <input
              placeholder="Search something here!"
              type="text"
              name="search"
              id="search"
              className="outline-none  text-sm text-[#99A2A5]"
            />
          </div>
          <div className="flex items-center gap-5">
          <button
            type="button"
            className="bg-[#003459] text-white cursor-pointer pt-[14px] pb-[10px] px-[28px] rounded-[57px] text-xl font-bold"
          >
            Join the community{" "}
          </button>

          <button className="text-[#002A48] flex items-center gap-[4px] ">
            <Image src={currency} width={16} height={16} alt="currency Icon" />
            <span className="font-medium text-base">VND</span>
            <ChevronDown size={20} />
          </button>
        </div>
        </div>
        
      </nav>
    </header>
  );
}
export default NavBar;
