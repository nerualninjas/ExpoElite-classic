
"use client"
import Link from "next/link";
import Image from 'next/image';
import logo from "@/assests/images/logo-v2-mini.png"
import { useState } from "react";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathName = usePathname()

  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "About", path: "/about" },
    { pageName: "Services", path: "/services" },
    { pageName: "Blog", path: "/blog" },
    { pageName: "Pricing", path: "/pricing" },
    { pageName: "Contact", path: "/contact" },
  ];

  const handleNavMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const isAdmin = true
  const isUser = false

  return (
    <div className=" text-white bg-neutral py-8 border-b-2 border-[#0c7e5c] ">
      <div className="flex items-center justify-between container px-4 md:px-0 mx-auto">
        <Link href="/">
          <Image
            // src="https://i.ibb.co/r6nbHk7/logo-v1-dark.png"
            src={logo}
            alt="ExpoElite"
            width={100} height={70} />
        </Link>

        <ul className="lg:flex items-center gap-6 hidden text-xl">
          {menu.map((item) => (
            <li key={item.pageName}>
              <Link
                className={`${pathName === item.path ? "bg-[#0c7e5c] text-white py-2 px-4 rounded-full" : "hover:bg-[#0c7e5c] hover:text-white py-2 px-4 rounded-full"}`}
                href={item.path}
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>


        <div className="flex gap-2 items-center">
          <h2>My List</h2>
          {isUser ? <>Profile</> : <Link href="/login">
            <button className="py-2 px-3 rounded-md text-white bg-[#0c7e5c]">
              Sign In
            </button>
          </Link>}
          <div className="text-2xl lg:hidden ml-4">
            {!menuOpen && <button onClick={handleNavMenu} >III</button>}
          </div>
        </div>



      </div>
      {/* small device  */}
      {
        menuOpen && <>

          <div className=" text-center   min-h-screen bg-neutral  absolute top-0 right-0 z-50 mx-auto  w-56">
            <div className="flex-col item-center justify-center">
              <div className="text-2xl my-10   ">
                {menuOpen && <button onClick={handleNavMenu} >III</button>}
              </div>
              <ul className="space-y-4 h-2/3 my-auto">
                {menu.map((item) => (
                  <li key={item.pageName}>
                    <Link
                      className={`${pathName === item.path ? "bg-[#0c7e5c] text-white py-2 px-4  rounded-full" : "hover:bg-[#0c7e5c]  hover:text-white py-2 px-4 rounded-full"}`}
                      href={item.path}
                    >
                      {item.pageName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      }
    </div >
  );
};

export default Navbar;
