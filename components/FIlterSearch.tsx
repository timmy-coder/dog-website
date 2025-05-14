'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
function FIlterSearch({ setSelected, selected }: { setSelected: (value: any) => void; selected: any }) {
    const [gender, setGender] = useState<'Male' | 'Female' | null>(selected.gender);
    const pick = (gender: 'Male' | 'Female'| null) => {
    setGender(gender);
    setSelected({gender:gender})
  };
  return (
    <div className="mb-10">
      <p className="text-[#003459]  text-2xl font-bold mb-3">Filter</p>
      <div className="text-[#00171F] font-medium text-sm border-b pb-[16px] border-[#EBEEEF]">
        <p className="text-base font-bold mb-3">Gender</p>
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex items-start gap-[10px]">
            <Checkbox checked={gender === 'Male'} onCheckedChange={() => {gender === 'Male' ? pick(null) : pick('Male')}} />
            <span>Male</span>
          </div>
          <div className="flex items-start gap-[10px]">
            <Checkbox  checked={gender === 'Female'} onCheckedChange={() => {gender === 'Female' ? pick(null) : pick('Female')}} />
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="text-[#00171F] font-medium text-sm border-b py-[16px] border-[#EBEEEF]">
        <p className="text-base font-bold mb-3">Color</p>
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex items-center gap-[10px]">
            <Checkbox />
            <div className="bg-[#FF564F] w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Red</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <Checkbox />
            <div className="bg-[#FFB672] w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Apricot</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <Checkbox />
            <div className="bg-[#242B33] w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Black</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <Checkbox />
            <div className="bg-[linear-gradient(90deg,#242B33,#D7D7D7)]  w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Black & White</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <Checkbox />
            <div className="bg-[#CECECE]  w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Silver</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <Checkbox />
            <div className="bg-[#FFF7CE]  w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Tan</span>
          </div>
        </div>
      </div>
      <div className="text-[#00171F] font-medium text-sm border-b pb-[16px] border-[#EBEEEF]  py-[16px]">
        <p className="text-base font-bold mb-3">Price</p>
        <div className="flex items-center gap-5">
          <div className="border-[#EBEEEF] w-full border-b p-[10px] flex items-center justify-between">
            <p>Min</p>
            <div className="flex flex-col">
              <ChevronUp size={15} />
              <ChevronDown size={15} />
            </div>
          </div>
          <div className="border-[#EBEEEF] w-full border-b p-[10px] flex items-center justify-between">
            <p>Max</p>
            <div className="flex flex-col">
              <ChevronUp size={15} />
              <ChevronDown size={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#00171F] font-medium text-sm border-b py-[16px] border-[#EBEEEF]">
        <p className="text-base font-bold mb-3">Breed</p>
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex items-start gap-[10px]">
            <Checkbox />
            <span>Small</span>
          </div>
          <div className="flex items-start gap-[10px]">
            <Checkbox />
            <span>Medium</span>
          </div>
          <div className="flex items-start gap-[10px]">
            <Checkbox />
            <span>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FIlterSearch;
