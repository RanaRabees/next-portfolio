/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { IoMdMenu, IoMdClose } from "react-icons/io"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <>
            <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow md:bg-white bg-white/70">
                <div className="justify-between items-center md:items-center md:flex">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="#home">
                                <div className="container flex items-center space-x-2">
                                    <img className="h-12 w-auto" src="/logo.png" alt="" />
                                    <h2 className="text-2xl hover:cursor-pointer font-bold">Dummy Portfolio</h2>
                                </div>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 items-center text-center justify-self-center md:h-auto h-screen md:mb-0 mb-20 mt-28 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <Link

                                    href="#home"
                                    className={
                                        "block lg:inline-block hover:cursor-pointer text-neutral-900 text-xl font-bold hover:text-neutral-500 dark:text-neutral-100"
                                    }

                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Home
                                </Link>

                                <Link

                                    href="#about"
                                    className={
                                        "block lg:inline-block hover:cursor-pointer text-neutral-900 text-xl font-bold hover:text-neutral-500 dark:text-neutral-100"
                                    }

                                    onClick={() => setNavbar(!navbar)}
                                >
                                    About
                                </Link>

                                <Link

                                    href="#projects"
                                    className={
                                        "block lg:inline-block hover:cursor-pointer text-neutral-900 text-xl font-bold hover:text-neutral-500 dark:text-neutral-100"
                                    }

                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Skills
                                </Link>

                                <Link

                                    href="#skills"
                                    className={
                                        "block lg:inline-block hover:cursor-pointer text-neutral-900 text-xl font-bold hover:text-neutral-500 dark:text-neutral-100"
                                    }

                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Projects
                                </Link>
                                <Link

                                    href="#contact"
                                    className={
                                        "block lg:inline-block hover:cursor-pointer text-neutral-900 text-xl font-bold hover:text-neutral-500 dark:text-neutral-100"
                                    }

                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
