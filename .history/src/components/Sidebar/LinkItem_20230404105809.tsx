import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ item }: any) => {
  return (
    <li className="flex flex-col w-full">
      <NavLink
        className={`listLink ${
          item.title === "Wiadomości" ? "relative" : null
        } ${({ isActive }: { isActive: boolean }) =>
          isActive ? "active" : ""}  `}
        to={item.route ? item.route : "/"}
        end>
        {item.icon}
        {item.title}
        {item.title === "Wiadomości" && (
          <span className="absolute text-sm right-2 bg-orange flex justify-center items-center top-[50%] translate-y-[-50%] rounded-xl p-[2px] px-[6px] text-white">
            56
          </span>
        )}
      </NavLink>
      {item.children && (
        <ul className="flex flex-col items-center justify-center gap-2 w-full">
          {item.children.map((childrenItem: any) => (
            <li className="listLink">
              <NavLink
                to={"/"}
                className="listLink pl-10"
                end>
                {childrenItem.icon}
                {childrenItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default LinkItem;
