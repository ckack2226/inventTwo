"use client"

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, BellAlertIcon, UserIcon } from '@heroicons/react/24/outline';


const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Nosotros', href: '#AboutPrisma' },
  { name: 'Soporte', href: '#AboutUs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black text-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="isotipo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex -mr-40 lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 justify-end mr-10'>
        <form className="max-w-60 ml-60">   
            <div className="relative">
             <div className="absolute inset-y-0 px-5 flex items-center pointer-events-none">
              <MagnifyingGlassIcon  className='h-5 w-5'/>
            </div>
              <input type="search" id="default-search" className=" w-full h-12 p-4 ps-16 text-sm text-white font-bold border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything..." required />
          </div>
      </form>
        </div>
          <BellAlertIcon className='h-8 w-8'/>
          <UserIcon className='h-8 w-8 mr-5 ml-10'/>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    <a href={item.href}>{item.name}</a>
                  </button>
                ))}
              </div>
              {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="https://www.mainprisma.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-gray-900">
                  PRISMA <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
