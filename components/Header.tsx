import Link from "next/link";
import Image from "next/image";
import defaults from "@/utils/consts";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <>
      <div className="fixed header  z-50 px-5   top-0 grid h-16 w-full grid-cols-4 items-center justify-around bg-tranparent bg-blend-color-burn   py-3">
        <div className="col-span-1  lg:mx-auto  pb-3  ">
          <Link className="flex items-start" href={"/"}>
             <span className="font-extrabold">Logo Here</span>
          </Link>
        </div>
        <div className="col-span-2  hidden lg:flex space-x-24 mx-auto pb-3  ">
          <nav
            className="flex items-center justify-between   lg:px-8"
            aria-label="Global"
          >
            <div className="hidden lg:flex lg:gap-x-12">
              {defaults.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="col-span-1 col-start-4 flex space-x-7 justify-end lg:justify-center  pb-4  ">
          <a href={defaults.urlDashboard} className="btn-main">
            Get Started
          </a>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Header;
