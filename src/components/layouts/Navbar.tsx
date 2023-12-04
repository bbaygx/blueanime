import React from "react";
import { Input } from "../ui/input";
import { GiFlamedLeaf } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <span className="fixed top-0 z-[999] w-full h-1 blue-sm bg-gradient-to-r from-blue-500 via-purple-800 to-orange-500"></span>

            <nav className=" px-4 sm:container grid grid-cols-8  pt-6 pb-4 border-b-2 items-center">
                <div className="col-span-3 sm:col-span-1 font-semibold text-xl  flex items-center gap-2">
                    <div className="relative">
                        <span className="absolute dark:inset-0 bg-blue-900 rounded-md blur"></span>
                        <GiFlamedLeaf
                            size={30}
                            className="relative text-blue-500 rounded-md"
                        />
                    </div>
                    <h1 className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        BlueAnime
                    </h1>
                </div>
                <ul className="hidden sm:flex sm:pl-5 sm:dark:text-gray-300 sm:text-gray-600 sm:space-x-7 sm:text-[0.9rem] sm:font-medium sm:col-span-4">
                    <li>
                        <Link href='/manga'>Manga</Link>
                    </li>
                    <li>
                        <Link href='/season'>Season</Link>
                    </li>
                    <li>
                        <Link href='/recomendation'>Recomendation</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>

                </ul>
                <div className="hidden sm:flex sm:col-span-2">
                    <Input placeholder="Cari disini..." />
                </div>
                <div className="col-span-5 sm:col-span-1 justify-end space-x-2 items-center flex">
                    <button className="sm:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
                        <FiSearch size={25} />
                    </button>
                    <ModeToggle />
                    <Avatar >
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <button className="sm:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
                        <CgMenuGridO size={30} />
                    </button>
                </div>

            </nav>
        </header>
    );
}
