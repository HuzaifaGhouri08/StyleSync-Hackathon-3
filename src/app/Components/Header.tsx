'use client'
import Image from "next/image";
import logo2 from "../../../Assets/logo2.png";
import logo1 from "../../../Assets/logo1.png";
import bag from "../../../Assets/bag.png";
import like from "../../../Assets/like.png";
import search from "../../../Assets/search.png";
import Link from "next/link";
import { useSearch } from "../Context/searchContext";

export default function Header() {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="bg-[#F5F5F5] flex items-center justify-between px-4 sm:px-6 lg:px-10 h-12 ">
        <div className="flex items-center">
          <Image src={logo1} alt="logo" className="w-6 sm:w-8" />
          <h1 className="font-extrabold">StyleSync</h1>
        </div>

        <div className="hidden sm:flex w-[200px] h-6 bg-white justify-center items-center xl:ml-[20%] lg:ml-[10%] sm:ml-[10%]">
      <p className="text-black text-sm sm:text-base font-small">
        Skip to main content
      </p>
    </div>
        
    <nav className="text-xs sm:text-sm lg:text-sm space-x-2 sm:space-x-2 text-black font-medium flex items-center">
          <Link href="/Find" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/Help" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/Join" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/SignIn" className="hover:underline">
            Sign In
          </Link>
        </nav>
      </div>
      
      <div className="flex flex-col bg-white h-[100px] sm:h-[50px]">
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between sm:w-auto w-full">
              <div>
                <Link href="/">
                  <Image src={logo2} alt="Logo" className="w-6 sm:w-8 sm:mr-[30px] lg:mr-[80px] xl:mr-[300px]" />
                </Link>
              </div>
              <nav className="mt-2 sm:mt-0 flex items-center space-x-2 text-[10px] font-medium text-black sm:space-x-8 sm:ml-10 lg:text-[14px] lg:ml-8 ">
                <Link href="/Products" className="hover:underline">
                  New & Featured
                </Link>
                <Link href="#" className="hover:underline">
                  Men
                </Link>
                <Link href="#" className="hover:underline">
                  Women
                </Link>
                <Link href="#" className="hover:underline">
                  Kids
                </Link>
                <Link href="#" className="hover:underline">
                  Sale
                </Link>
                <Link href="#" className="hover:underline">
                  SNKRS
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center justify-center sm:ml-6 lg:ml-8 mt-4 sm:mt-0 ">
              <div className="flex items-center justify-center relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="bg-gray-100 rounded-full pl-8 h-[30px] text-sm outline-none w-[180px]"
                />
                <Image
                  src={search}
                  alt="Search"
                  className="w-5 h-5 absolute left-2 cursor-pointer"
                />
              </div>
              
              <div className="flex items-center space-x-2 ml-2">
                <Link href="/Wishlist">
                  <Image src={like} alt="Like" className="w-7 h-7 cursor-pointer" />
                </Link>
                <Link href="/Items">
                  <Image src={bag} alt="Cart" className="w-7 h-7 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
