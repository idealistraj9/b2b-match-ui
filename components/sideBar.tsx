"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col  gap-1  w-80  max-h-screen bg-background">
        <div className="flex items-center justify-center ">
          <div className="flex justify-center items-center text-center">
            <img src="./logo.jpeg" alt="raj" width={"200px"} className="m-3 mix-blend-color-burn"/>
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        <div className="flex-1 h-full">
          <ul className="text-xl ">
            <li className="rounded-xl flex flex-col items-center justify-center "></li>
          </ul>
          {/* <ul className="relative h-1/3 rounded-lg  overflow-x-hidden overflow-y-scroll no-scrollbar border-2 border-secondary">
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b	">
              {" "}
              1.how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              2.how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
            <li className="rounded-sm hover:bg-secondary transition-all duration-500 cursor-pointer p-1 text-lg m-3  border-gray-400 border-b">
              {" "}
              how to cal...{" "}
            </li>
          </ul> */}
          <ul className=" pb-2 text-xl ">
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3 ">
              <Link href="/" className="flex items-center space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="help"
                className="flex items-center  space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Help </span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="price"
                className="flex items-center  space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Prices </span>
              </Link>
            </li>
            <li className="rounded-sm border-b-2 transition-all duration-500 hover:bg-secondary p-1 text-lg m-3">
              <Link
                href="/login"
                className="flex items-center  space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col text-center justify-center">
            <span className="text-xl ">INFORMATION</span>
            <p className="text-left p-5 pb-0">
              We combine our database with chatGPT with the aim of finding
              “comparable companies”. You can find some examples under “Help”.
            </p>
            <p className="text-left p-5 pt-1">
              The database is already working and we can deliver. This site
              should be ready by March 2024. If you already have an inquiry
              today, please contact us. : 044 380 78 88
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
