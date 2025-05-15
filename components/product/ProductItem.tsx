"use client";
import { DataType } from "@/typing";
import { useMemo, useState } from "react";
import { Pagination } from "../Pagination";
import Image from "next/image";
interface Props {
  product: DataType[];
}
function ProductItem({ product }: Props) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentDogs = useMemo<DataType[]>(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return product.slice(start, start + itemsPerPage);
  }, [currentPage, product]);
  return (
    <div>
      <div className="flex items-end gap-5 xl:hidden mb-5">
        <p className="text-[#003459] text-2xl font-bold font-[GilroyBold]">Small Dog</p>
        <p className="text-[#667479] text-sm font-medium font-[GilroyMedium]">
          {product.length} puppies
        </p>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {currentDogs.map((item) => (
                <div key={item.id} className="bg-[#FDFDFD] flex flex-col gap-[8px] rounded-[12px] p-[8px] drop-shadow-2xl">
                    <Image className="w-full rounded-[10px] h-full" src={item.image} alt={item.title}/>
                    <div className="p-[4px] flex flex-col items-start gap-[8px]">
                        <p className="text-sm xl:text-base font-bold font-[GilroyBold] text-[#00171F]">{item.title}</p>
                        <div className="text-sm flex flex-col xl:flex-row items-start xl:gap-[10px] text-[#667479]">
                            <p className="font-medium font-[GilroyMedium]">Gene: <span className="font-bold font-[GilroyBold]">{item.gender}</span></p>

                            <span className="font-extrabold xl:flex items-start hidden ">.</span>
                            <p className="font-medium font-[GilroyMedium]">Age: <span className="font-bold font-[GilroyBold]">{item.age}</span></p>
                        </div>
                            <p className="text-base font-bold font-[GilroyBold] text-[#00171F]"> {new Intl.NumberFormat('id-ID').format(item.price)} VND</p>

                    </div>
                </div>
            ))}

        </div>

        <div className="my-8 flex justify-center">
          <Pagination
            totalItems={product.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
