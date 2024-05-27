import React from "react";

interface props {
  name: string;
  total: number;
}

const CustomCheckbox = ({ option }: any) => {
  return (
    <label
      htmlFor={splitJoinString(option.name)}
      className="h-12 w-full flex items-center gap-2 text-sm  cursor-pointer hover:bg-gray-50/80 transition-colors duration-200 rounded-md p-3 group">
      <input className="peer sr-only" type="checkbox" id={splitJoinString(option.name)} />
      <span className="relative size-6 shrink-0 rounded overflow-hidden border border-brand-black-200 group-hover:border-gray-400 peer-checked:border-brand-black-100 peer-checked:bg-brand-black-100 peer-checked:text-white text-transparent transition-colors duration-200 p-1">
        <svg className="stroke-current size-full pointer-events-none" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="space-x-1">
        <span className="font-medium">{option.name}</span>
        <span className="text-brand-gray">{option.total}</span>
      </div>
    </label>
  );
};

export const splitJoinString = (string: string) => string.toLowerCase().split(" ").join("-");

export default CustomCheckbox;
