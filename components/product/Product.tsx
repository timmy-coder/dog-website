'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown, Funnel } from "lucide-react";
import FIlterSearch from "../FIlterSearch";
import ProductItem from "./ProductItem";
import { dogData } from "@/action/data";
import { DataType } from "@/typing";
import { useEffect, useState } from "react";
function Product() {
  const product:DataType[]  = dogData 
  const [Sortby, setSortby] = useState('')
  const [filterSearch, setfilterSearch] = useState<DataType[]>([])
  const FilterSearch = () => {
    const filterSearch = product.filter((e) => e.popularity === Sortby || e.title === Sortby)
    setfilterSearch(filterSearch)
  }
  useEffect(() => {
    FilterSearch()
  }, [Sortby])
  return (
    <div>
      {/* Search filter */}
      <div className="flex items-start gap-10">
        <div className="w-[280px] sticky top-0 hidden xl:block">
          <FIlterSearch/>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none border flex items-center gap-[4px] pt-[10px] pb-[8px] pl-[20px] pr-[12px] border-[#CCD1D2] rounded-[20px] text-[#667479] font-medium">
            Sort by:  {Sortby} <ChevronDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-[#667479] font-medium">
            <DropdownMenuItem onClick={() => setSortby('')} >All</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSortby('popular')}>Popular</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSortby('MO502 - Poodle Tiny Yellow')} >MO502 - Poodle Tiny Yellow</DropdownMenuItem>
             <DropdownMenuItem onClick={() => setSortby('MO102 - Poodle Tiny Sepia')} >MO102 - Poodle Tiny Sepia</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortby('MO512 - Alaskan Malamute Grey')} >MO512 - Alaskan Malamute Grey</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="xl:flex items-end gap-5 hidden ">
        <p className="text-[#003459] text-2xl font-bold">Small Dog</p>
        <p className="text-[#667479] text-sm font-medium">
          {filterSearch.length>0?filterSearch.length:product.length} puppies
        </p>
      </div>

        <Dialog >
          <DialogTrigger className="outline-none xl:hidden flex items-center text-[#002A48]"><Funnel className="w-[24px] h-[24px] gap-[8px]"/> <span className="font-bold text-base">Filter</span></DialogTrigger>
          <DialogContent>
            <DialogTitle className="hidden"></DialogTitle>
            <FIlterSearch/>
          </DialogContent>
        </Dialog>
      </div>
        <ProductItem product={filterSearch.length>0?filterSearch:product}/>
        </div>
       
      </div>
     
    </div>
  );
}
export default Product;
