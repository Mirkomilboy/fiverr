import React from 'react'

export const HeadSection = () => {
    return (
        <section className='max-w-8xl mx-auto pt-8 px-4 lg:px-8'>
            {/* breadcrumb */}
            <div className='flex items-center text-sm pb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 m-2 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className='text-brand-gray mx-2'>/</span>
                <a href="#" className='hover:underline'>Video & Animation</a>
            </div>

            <h1 className='font-bold text-3xl py-2'>Video Editing</h1>

            <div className='flex items-center'>
                <p className='text-brand-gray-2'>Create or improve your videos with video editing and post-production services.</p>
                <span className='block ml-2.5 mr-1'>|</span>
                <button className='flex items-center gap-1 rounded-full bg-transparent hover:bg-brand-slate-100 transition-colors duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                    </svg>
                    <span>How Fiverr Works</span>
                </button>
            </div>
        </section>
    )
}
