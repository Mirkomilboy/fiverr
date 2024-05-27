"use client";
import React, { useEffect, useRef, useState } from "react";
import DropdownSelect from "./DropdownSelect";
import { selectOptions, checkOptions } from "@/lib/data";
import SwitchToggle from "./SwitchToggle";
import DropdownRadio from "./DropdownRadio";

export const FilterSection = () => {
  const [shadow, setShadow] = useState(false);
  const [open, setOpen] = useState<number>(0);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenDropdown = (idx: number) => {
    if (open == idx) {
      setOpen(0);
    } else {
      if (idx !== undefined) {
        setOpen(idx);
      } else {
        setOpen(0);
      }
    }
  };

  useEffect(() => {
    let num = headerRef.current?.offsetTop ? headerRef.current?.offsetTop : 0;
    const handleScroll = () => {
      if (document.documentElement.scrollTop > num) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={headerRef} className={`sticky top-0 bg-white w-full z-50 ${shadow ? " shadow-md" : ""}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between mt-6 py-3 px-4 lg:px-8">
        <div className="flex items-center flex-wrap gap-3">
          {selectOptions.map((data) => (
            <DropdownSelect
              key={data.id}
              {...data}
              handleOpenDropdown={handleOpenDropdown}
              open={open}
              setOpen={setOpen}
            />
          ))}

          {checkOptions.map((data) => (
            <DropdownRadio
              key={data.id}
              {...data}
              handleOpenDropdown={handleOpenDropdown}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <SwitchToggle />
        </div>
      </div>
    </section>
  );
};
