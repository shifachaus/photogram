import * as React from "react";
import homeIcon from "@/assets/icons/home.svg";
import addIcon from "@/assets/icons/add.svg";
import directIcon from "@/assets/icons/direct.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import myphotoIcon from "@/assets/icons/myphotos.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import profileIcon from "@/assets/icons/profile.svg";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { useUserAuth } from "@/context/userAuthContext";

interface ISidebarProps {}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: homeIcon,
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: addIcon,
  },
  {
    name: "My Photos",
    link: "/myphotos",
    icon: myphotoIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: profileIcon,
  },
  {
    name: "Notifications",
    link: "#",
    icon: notificationIcon,
  },
  {
    name: "Direct",
    link: "#",
    icon: directIcon,
  },
  {
    name: "Settings",
    link: "#",
    icon: settingsIcon,
  },
];

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const { pathname } = useLocation();
  const { logOut } = useUserAuth();
  return (
    <nav className="flex flex-col relative h-screen max-w-sm w-full">
      <div className="flex justify-center m-5">
        <div className="text-black text-xl font-black">PhotoGram</div>
      </div>
      {navItems.map((item) => (
        <div
          className={cn(
            buttonVariants({ variant: "default" }),
            pathname === item.link
              ? "bg-gray-100 text-black hover:bg-gray-100 rounded-none"
              : "hover:bg-gray-100 bg-white text-black  bg-transparent rounded-none",
            "justify-start"
          )}
          key={item.name}
        >
          <Link to={item.link} className="flex">
            <span>
              <img
                src={item.icon}
                className="w-5 h-5 mr-2 "
                alt={item.name}
                style={{
                  filter: `invert(0)`,
                }}
              />
            </span>
            <span>{item.name}</span>
          </Link>
        </div>
      ))}

      <div
        className={cn(
          buttonVariants({ variant: "default" }),
          pathname === "/login"
            ? "bg-white text-white-800 hover:bg-white rounded-none"
            : "hover:bg-gray-100 bg-white rounded-none text-white-800",
          "justify-start"
        )}
      >
        <Link to="/login" className="flex" onClick={logOut}>
          <span>
            <img
              src={logoutIcon}
              className="w-5 h-5 mr-2"
              alt="Logout"
              style={{
                filter: `invert(0)`,
              }}
            />
          </span>
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
