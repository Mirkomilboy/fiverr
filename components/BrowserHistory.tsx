import React from "react";

const BrowserHistory = () => {
  return (
    <div className="bg-[#f5f5f5] py-10 px-8">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Browsing History</h2>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-3">
              <button type="button">Clear All</button>
              <span className="w-px h-5 bg-brand-black-200"></span>
              <button type="button">See All</button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="size-8 shrink-0 bg-white flex items-center justify-center rounded-full border border-gray-200 shadow-md p-2">
                <svg className="size-full mr-0.5" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="size-8 shrink-0 bg-white flex items-center justify-center rounded-full border border-gray-200 shadow-md p-2">
                <svg className="size-full rotate-180 ml-0.5" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserHistory;
