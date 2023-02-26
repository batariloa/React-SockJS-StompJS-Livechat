import React from "react";
import { nanoid } from "nanoid";
import { FaUser } from "react-icons/fa";

function UserList({ userList }) {
  return (
    <div className="h-full w-full flex flex-col overflow-y-scroll  mt-5 ">
      <ul className="flex flex-col  items-center">
        {userList.map((user) => {
          return (
            <li className="flex items-center mt-1" key={nanoid()}>
              <FaUser className=""></FaUser>
              <p className="ml-2">{user}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
