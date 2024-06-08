'use client'
import React, { useState } from 'react'
import './Header.css'; 


export default function Navbar() {
 
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
      setIsNavOpen(!isNavOpen);
    };

  return (<>
    <header className="shadow-md flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              onClick={handleToggle}
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg className={`flex-shrink-0 size-4  ${isNavOpen ? 'hidden' : 'block'}`}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
              <svg className={`flex-shrink-0 size-4 ${isNavOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div><div className='sm:hidden'>helloo</div>
        </div>
        <div id="navbar-collapse-with-animation" className={`hs-collapse transition-all duration-300 overflow-hidden ${isNavOpen ? 'block' : 'hidden'}  sm:block  `}>{/* ${isNavOpen ? 'max-h-screen' : 'max-h-0'} */}
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a className="font-medium text-blue-500" href="#" aria-current="page">Accueil</a>
            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Account</a>
            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Work</a>
            <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Blog</a>
          </div>
        </div>
        <div className='hidden sm:block'>helloo</div>
      </nav>
    </header>

</>
  )
}


