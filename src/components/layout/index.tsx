import * as React from "react";
import Sidebar from "../sidebar";
import UserList from "../userList";
import {
  CameraIcon,
  Home,
  LogOutIcon,
  PlusCircleIcon,
  Search,
  UserCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUserAuth } from "@/context/userAuthContext";

interface ILayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "Search",
    link: "/",
    icon: Search,
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: PlusCircleIcon,
  },
  {
    name: "My Photos",
    link: "/myphotos",
    icon: CameraIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: UserCircle,
  },
];

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const { logOut } = useUserAuth();

  return (
    <div className="flex flex-col lg:flex-row bg-white">
      <div className="flex justify-between items-center  m-5 lg:hidden">
        <div className="text-black text-xl font-black">PhotoGram</div>
        <Link to="/login" className="flex" onClick={logOut}>
          <LogOutIcon className="w-5 h-5" />
        </Link>
      </div>

      <aside className="hidden lg:flex gap-x-4 bg-white fixed top-0 left-0 z-40 lg:w-60 h-screen">
        <Sidebar />
      </aside>

      <div className="lg:ml-60 lg:mr-72 p-8 flex-1 ">{children}</div>

      <aside className="hidden lg:block bg-white border-l fixed top-0 right-0 z-40 lg:w-72 h-screen">
        <UserList />
      </aside>

      <div className="lg:hidden flex justify-between px-10 fixed bottom-0 left-0 w-full py-5 bg-white">
        {navItems.map((item) => {
          return (
            <div key={item.name} className="flex justify-between">
              <Link to={item.link} className="flex">
                <item.icon />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
