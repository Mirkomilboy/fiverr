"use client";
import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

const times = [
  {
    text: "1 minute",
    value: 1,
  },
  {
    text: "2 minutes",
    value: 2,
  },
  {
    text: "5 minutes",
    value: 5,
  },
  {
    text: "10 minutes",
    value: 10,
  },
  {
    text: "15 minutes",
    value: 15,
  },
];

const ShowingTimeDropdown = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(times[0]);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="flex items-center font-medium hover:bg-gray-100/80 rounded-md space-x-1 px-1.5 py-2">
        <span className="pr-1">{selected.text}</span>
        <svg
          className={`size-3 mt-0.5 ${open ? "rotate-180" : ""} transition-transform duration-300`}
          viewBox="0 0 11 7"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentFill">
          <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
        </svg>
      </button>

      <Transition
        show={open}
        as="div"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
        className="w-64 shrink-0 bg-white border border-100 rounded-lg shadow-lg overflow-hidden absolute left-0 mt-2 p-2">
        <div className="pb-3">
          {times.map((time) => (
            <button
              onClick={() => {
                setSelected(time);
                setOpen(false);
              }}
              type="button"
              key={time.value}
              className="w-full flex items-center hover:bg-gray-100/50 rounded-lg space-x-3 p-3">
              <svg
                className={selected.value == time.value ? "opacity-100" : "opacity-0"}
                width="11"
                height="9"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
              </svg>
              <span>{time.text}</span>
            </button>
          ))}
        </div>
        <div className="text-[13px] text-gray-400 border-t border-gray-100 mx-2 p-2">
          <p>Need a different scope?</p>
          <p>Contact sellers to get a quote.</p>
        </div>
      </Transition>
    </div>
  );
};

export default ShowingTimeDropdown;
