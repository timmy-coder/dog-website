import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
function Product() {
  const product = dogData 
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
            Sort by: <ChevronDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-[#667479] font-medium">
            <DropdownMenuItem>Popular</DropdownMenuItem>
            <DropdownMenuItem>Name</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="xl:flex items-end gap-5 hidden ">
        <p className="text-[#003459] text-2xl font-bold">Small Dog</p>
        <p className="text-[#667479] text-sm font-medium">
          {product.length} puppies
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
        <ProductItem product={product}/>
        </div>
       
      </div>
     
    </div>
  );
}
export default Product;
