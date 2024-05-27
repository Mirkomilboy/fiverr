import React from "react";
import { splitJoinString } from "./CustomCheckbox";

const CustomRadioBox = ({ name, text, input }: any) => {
  return (
    <label
      htmlFor={splitJoinString(name)}
      className={`${
        !input && "h-12"
      } w-full gap-3 flex items-start hover:bg-gray-50/80 cursor-pointer text-sm rounded-md p-3`}>
      <input className="peer sr-only" type="radio" id={splitJoinString(name)} />
      <div className="relative size-5 rounded-full overflow-hidden border border-brand-black">
        <div className="w-3 h-3 opacity-0 rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {input ? (
        <div>
          <p className="font-medium">{name}</p>
          <div className="relative mt-2">
            <input type="text" className="h-9 w-full border border-brand-black-200 rounded" />
            <span className="text-brand-black-200 focus:!outline-none absolute top-1/2 -translate-y-1/2 right-3">
              $
            </span>
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-1">
          <span className="font-medium">{name}</span>
          {text && <span className="text-[#74767e]">{text}</span>}
        </div>
      )}
    </label>
  );
};

export default CustomRadioBox;
