"use client";
import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";

const SelectOptionsContent = ({ data }: any) => {
  const [hasMore, setHasMore] = useState(false);
  const length = data.options.length;
  return (
    <>
      <div className="py-6">
        <h3 className="font-bold px-2">{data.title}</h3>
        <div className={`${!hasMore && length > 4 ? "h-24" : ""} grid md:grid-cols-2 overflow-hidden mt-2`}>
          {data.options.map((option: any) => (
            <CustomCheckbox option={option} key={option.id} />
          ))}
        </div>
        {length > 4 && (
          <div className="pl-3">
            <button onClick={() => setHasMore(!hasMore)} type="button" className="text-sm underline">
              {!hasMore ? <span> +{length > 4 && length - 4} more</span> : <span>show less</span>}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectOptionsContent;
