"use client";
import React, { useRef } from "react";
import { Transition } from "@headlessui/react";
import { useOutsideClick } from "@/hooks/useClickOutside";
import CustomRadioBox from "./CustomRadioBox";

const DropdownRadio = ({ id, title, data, handleOpenDropdown, open }: any) => {
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, handleOpenDropdown);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => handleOpenDropdown(id)}
        type="button"
        className={`${
          id == open ? "bg-brand-slate-100" : ""
        } flex items-center gap-3 text-brand-black-100 font-medium h-12 min-w-14 border border-brand-black-200 hover:border-brand-black rounded-lg transition-colors duration-200 py-3 px-4`}>
        <span>{title}</span>
        <svg className="size-3" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
          <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
        </svg>
      </button>

      <Transition
        show={id == open}
        as="div"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
        className="w-64 bg-white border border-100 rounded-lg shadow-dropdown overflow-hidden absolute mt-2">
        <div className="rounded-lg z-50 p-3">
          {data.map((item: any, idx: any) => (
            <CustomRadioBox key={idx} {...item} />
          ))}
        </div>
        <div className="w-full flex items-center justify-between border-t border-gray-200 px-6 py-4">
          <button type="button">Clear all</button>
          <button
            type="button"
            className="rounded-md h-12 bg-black hover:bg-opacity-80 text-white transition-colors duration-200 px-6">
            Apply
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default DropdownRadio;
