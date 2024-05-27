"use client";
import React from "react";
import ShowingTimeDropdown from "./dropdowns/ShowingTimeDropdown";
import SortBy from "./dropdowns/SortBy";

const FilterResults = () => {
  return (
    <section className="max-w-8xl mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-between mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap items-center gap-1">
            <p className="text-slate-500">64,000+ Results</p>
            <span className="block mx-1 size-1 rounded-full bg-slate-300"></span>
            <p className="text-slate-500 pl-1.5">Showing prices for:</p>
          </div>
          <ShowingTimeDropdown />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-slate-500">Sort by:</p>
          <SortBy />
        </div>
      </div>
    </section>
  );
};

export default FilterResults;
