'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { FilterState } from "@/typing";

interface FIlterSearchProps {
  setSelected: React.Dispatch<React.SetStateAction<FilterState>>;
  selected: FilterState
}
function FIlterSearch({ setSelected, selected }: FIlterSearchProps) {
    const [gender, setGender] = useState<'Male' | 'Female' | null>(selected.gender);
    const [color, setColor] = useState<'red' | 'black&white' |'black' | 'silver' | "apricot" |'tan' | null>(selected.color);
    const [breed, setBreed] = useState<'small'  |'medium' | 'large' | null>(selected.breed);
    const pick = (gender: 'Male' | 'Female'| null) => {
    setGender(gender);
    setSelected({ ...selected, gender: gender })
  };
  const ColorPick = (color: 'red' | 'black&white' |'black' | 'silver' | "apricot" |'tan' | null) => {
    setColor(color)
    setSelected({...selected, color: color})
  }
  const BreedPick = (breed: "small"| 'medium'| 'large'| null) => {
    setBreed(breed)
    setSelected({...selected, breed: breed})
  }
  return (
    <div className="mb-10">
      <p className="text-[#003459]  text-2xl font-bold font-[GilroyBold] mb-3">Filter</p>
      <div className="text-[#00171F] font-medium text-sm border-b pb-[16px] border-[#EBEEEF]">
        <p className="text-base font-bold font-[GilroyBold] mb-3">Gender</p>
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex  font-medium font-[GilroyMedium] items-start gap-[10px]">
            <Checkbox checked={gender === 'Male'} onCheckedChange={() => gender === 'Male' ? pick(null) : pick('Male')} />
            <span>Male</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium]  items-start gap-[10px]">
            <Checkbox  checked={gender === 'Female'} onCheckedChange={() => gender === 'Female' ? pick(null) : pick('Female')} />
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="text-[#00171F] font-medium text-sm border-b py-[16px] border-[#EBEEEF]">
        <p className="text-base mb-3 font-bold font-[GilroyBold]">Color</p>
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex font-medium font-[GilroyMedium] items-center gap-[10px]">
            <Checkbox checked={color === 'red'} onCheckedChange={() => color === 'red' ? ColorPick(null) : ColorPick('red')} />
            <div className="bg-[#FF564F] w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Red</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-center gap-[10px]">
            <Checkbox checked={color === 'apricot'} onCheckedChange={() => color === 'apricot' ? ColorPick(null) : ColorPick('apricot')} />
            <div className="bg-[#FFB672] w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Apricot</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-center gap-[10px]">
            <Checkbox checked={color === 'black'} onCheckedChange={() => color === 'black' ? ColorPick(null) : ColorPick('black')} />
            <div className="bg-[#242B33] w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Black</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-center gap-[10px]">
           <Checkbox checked={color === 'black&white'} onCheckedChange={() => color === 'black&white' ? ColorPick(null) : ColorPick('black&white')} />
            <div className="bg-[linear-gradient(90deg,#242B33,#D7D7D7)]  w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Black & White</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-center gap-[10px]">
            <Checkbox checked={color === 'silver'} onCheckedChange={() => color === 'silver' ? ColorPick(null) : ColorPick('silver')} />
            <div className="bg-[#CECECE]  w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Silver</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-center gap-[10px]">
             <Checkbox checked={color === 'tan'} onCheckedChange={() => color === 'tan' ? ColorPick(null) : ColorPick('tan')} />
            <div className="bg-[#FFF7CE]  w-[15px] h-[15px] rounded-[10px] "></div>
            <span>Tan</span>
          </div>
        </div>
      </div>
      <div className="text-[#00171F] font-medium text-sm border-b pb-[16px] border-[#EBEEEF]  py-[16px]">
        <p className="text-base font-bold font-[GilroyBold] mb-3">Price</p>
        <div className="flex items-center font-medium font-[GilroyMedium]  gap-5">
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
        <p className="text-base font-bold font-[GilroyBold] mb-3">Breed</p>
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex font-medium font-[GilroyMedium] items-start gap-[10px]">
            <Checkbox checked={breed === 'small'} onCheckedChange={() => breed === 'small' ? BreedPick(null) : BreedPick('small')} />
            <span>Small</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-start gap-[10px]">
           <Checkbox checked={breed === 'medium'} onCheckedChange={() => breed === 'medium' ? BreedPick(null) : BreedPick('medium')} />
            <span>Medium</span>
          </div>
          <div className="flex font-medium font-[GilroyMedium] items-start gap-[10px]">
            <Checkbox checked={breed === 'large'} onCheckedChange={() => breed === 'large' ? BreedPick(null) : BreedPick('large')} />
            <span>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FIlterSearch;
