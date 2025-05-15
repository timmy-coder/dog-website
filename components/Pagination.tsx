'use state'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { usePagination } from "@/hooks/usePagination";
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}
export function Pagination({ totalItems, itemsPerPage, onPageChange }: PaginationProps) {
const DOTS = "..."
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginationRange = usePagination({ totalPages, currentPage });

  const handleScrollToTopDiv = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };
  const handlePageChange = (page: number | string) => {
    if (page === DOTS) return;
    const newPage = page as number;
    setCurrentPage(newPage);
    onPageChange(newPage);
    handleScrollToTopDiv()
  };

  const onNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
    
  };
  const onPrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        disabled={currentPage === 1}
        onClick={onPrevious}
        className="p-2"
      >
        <ArrowLeft className="h-4 w-4"/>
      </button>

      {paginationRange.map((page:number | string, idx:number) => (
        <Button
          key={idx}
          variant={page === currentPage ? 'default' : 'ghost'}
          onClick={() => handlePageChange(page)}
          disabled={page === DOTS}
          className={`h-8 w-8   ${page === DOTS ? 'cursor-default bg-[#003459] text-white' : ''}`}
        >
          {page}
        </Button>
      ))}

      <button
      
        disabled={currentPage === totalPages}
        onClick={onNext}
        className="p-2"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
