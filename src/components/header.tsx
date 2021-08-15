import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnd logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center py-2 md:border-2 rounded-full md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="appearance-none bg-transparent border-0 outline-none flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <span className="hidden md:inline">Become a host</span>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        <div className="flex border-2 p-2 rounded-full space-x-2">
          <MenuIcon className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer"/>
        </div>
      </div>
    </header>
  );
}
