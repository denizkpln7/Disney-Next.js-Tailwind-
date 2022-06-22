import React from 'react'
import Image from "next/image";
import {
    HomeIcon,
    SearchIcon,
    PlusIcon,
    StarIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();
    return (
        <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px] w-full">
            <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer"
            onClick={()=>router.push("/")}
            />

            <div className='hidden ml-10 md:flex items-center justify-center gap-2 space-x-6'>

                <a className="header-link group">
                    <HomeIcon className="h-4" />
                    <span className="span">Home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4" />
                    <span className="span">Search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4" />
                    <span className="span">Watchlist</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4" />
                    <span className="span">Originals</span>
                </a>
                <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>

            </div>
            <button className=' ml-auto border pr-4 pl-4 pl-1.5 rounded font-medium tracking-tighter
             hover:bg-white  hover:text-black transition-all duration-200 hover:scale-125 '
             onClick={signIn}> 
             Login 
              </button>

        </header>
    )
}

export default Header