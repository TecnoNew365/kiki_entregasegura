"use client";

import { useState, Fragment } from "react";
import defaults from "../utils/consts";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button aria-label="Open Menu" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <div className="fixed inset-0" />
          <div className="fixed  inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex max-h-screen h-full flex-col overflow-y-scroll bg-white pt-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white main-color hover:text-gray-500   focus:outline-none  "
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6 main-color"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative  pt-20 lg:pt-0 lg:mt-24 flex-1 px-4 sm:px-6">
                        <div className=" px-4 sm:px-6">
                          <div
                            className="  mx-auto justify-center space-y-3 flex flex-col "
                            aria-hidden="true"
                          >
                            {defaults.navigation.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-semibold leading-6 text-gray-900"
                              >
                                <button
                                  onClick={() => setOpen(!open)}
                                  className="w-full  px-7 text-base color-main flex self-center justify-between  "
                                >
                                  {item.name}
                                  <div className="icon">
                                    <ArrowRightIcon />
                                  </div>
                                </button>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Sidebar;
