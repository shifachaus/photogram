import { useUserAuth } from "@/context/userAuthContext";
import { ProfileResponse } from "@/types";
import * as React from "react";
import { Link } from "react-router-dom";
import avatar from "@/assets/images/avatar.jpg";
import { getAllUsers } from "@/repository/user.service";
import { Button } from "../ui/button";

interface IUserListProps {}

const UserList: React.FunctionComponent<IUserListProps> = () => {
  const { user } = useUserAuth();
  const [suggestedUser, setSuggestedUser] = React.useState<ProfileResponse[]>(
    []
  );

  const getSuggestedUsers = async (userId: string) => {
    const response = (await getAllUsers(userId)) || [];

    console.log("The response is  : ", response);
    setSuggestedUser(response);
  };

  React.useEffect(() => {
    if (user?.uid != null) {
      getSuggestedUsers(user.uid);
    }
  }, []);

  const renderUsers = () => {
    return suggestedUser.map((user) => {
      return (
        <div
          className="flex flex-row items-center mb-4 border-b pb-2 justify-start"
          key={user.id}
        >
          <span className="mr-2">
            <img
              src={user.photoURL ? user.photoURL : avatar}
              className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover"
            />
          </span>
          <span className="text-xs  text-slate-700 font-medium">
            {user.displayName ? user.displayName : "Guest_User"}
          </span>
          <Button className="text-xs p-3 py-2 h-6 bg-slate-900 last-of-type:ml-auto">
            Follow
          </Button>
        </div>
      );
    });
  };

  return (
    <div className="text-white py-8 px-3">
      <Link to="/profile">
        <div className="flex flex-row items-center border-b pb-4 mb-4 cursor-pointer">
          <span className="mr-2">
            <img
              src={user?.photoURL ? user.photoURL : avatar}
              className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover"
            />
          </span>
          <span className="text-xs text-slate-900 font-medium">
            {user?.displayName ? user.displayName : "Guest_user"}
          </span>
        </div>
      </Link>
      <h3 className="text-sm text-slate-900">Suggested Friends</h3>
      <div className="my-4">
        {suggestedUser.length > 0 ? renderUsers() : ""}
      </div>
    </div>
  );
};

export default UserList;
