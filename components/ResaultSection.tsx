'use client'
import React, { useState } from 'react'
import Card from './Card'
import { CardsData } from '@/lib/data'

const ITEMS_PER_PAGE = 8;

export const Resault = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(CardsData.length / ITEMS_PER_PAGE);

  // Get the current items to display
  const currentItems = CardsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-8 my-4'>
      <div className='grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {currentItems.map((item, idx) => (
          <Card card={item} id={idx} key={idx} />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-20">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='prevEl flex items-center justify-center border border-brand-gray-light bg-white w-11 h-11 rounded-full'
        >
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#74767E"><path d="M5.093 13.031c.285.3.747.3 1.031 0a.801.801 0 0 0 0-1.09l-2.803-2.96h10.21c.402 0 .728-.345.728-.77 0-.426-.326-.77-.729-.77H3.173l2.951-3.118a.801.801 0 0 0 0-1.09.702.702 0 0 0-1.031 0L.97 7.589a.801.801 0 0 0 0 1.09l.07.072a.744.744 0 0 0 .01.01l4.043 4.271Z"></path></svg>
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded-full w-10 h-10 ${currentPage === index + 1 ? 'bg-brand-slate-100 text-brand-black-100' : 'bg-transparent text-brand-gray-dark'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='prevEl flex items-center justify-center border border-brand-gray-light bg-white w-11 h-11 rounded-full'
        >
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#74767E"><path d="M9.923 2.969a.702.702 0 0 0-1.031 0 .801.801 0 0 0 0 1.09l2.804 2.96H1.486c-.403 0-.73.345-.73.77 0 .426.327.77.73.77h10.358l-2.952 3.118a.801.801 0 0 0 0 1.09c.285.3.747.3 1.031 0l4.123-4.355a.801.801 0 0 0 0-1.09l-.069-.072a1.422 1.422 0 0 0-.01-.01L9.923 2.969Z"></path></svg>
        </button>
      </div>
    </section>
  )
}