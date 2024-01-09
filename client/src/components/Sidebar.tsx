"use client"
import React, { FC, useRef, useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarStructure } from "../../src/data/SidebarMenu";
import useUserFetch from "@/hook/useUserFetch";
//icon
import { MdDeveloperBoard } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";


interface SidebarProps {
  setExpand: (value: boolean) => void;
  router: any;
}

const Sidebar: FC<SidebarProps> = ({ setExpand, router }) => {
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const link = "/";
  
  const [openedMenu, setOpenedMenu] = useState<Record<string, any>>({});
  const [activeName, setActiveName] = useState("");
  let activeLink = '';
  if (typeof window !== 'undefined') {
    activeLink = window.location.pathname;
  }
  
  const listRef = useRef<Record<string, HTMLUListElement | null>>({});
  const [isExpand, setIsExpand] = useState<boolean>(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState<boolean>(false);
  const token = sessionStorage.getItem("token") || "";
  const { user, loading, error } = useUserFetch(token);

  const handleHoverExpand = (value: boolean) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };
  
  const handleNavigate = (path: string) => {
    setActiveName(path.name);
    router.push(path.link);
  };

  const handleToggle = (name: string) => {
    const rootEl = name.split(".")[0];

    if (openedMenu[name]?.open === true) {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: false,
          height: "0px"
        },
        [rootEl]: {
          open: rootEl === name ? false : true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) -
            (listRef.current[name]?.scrollHeight || 0)
          }px`
        }
      }));
    } else {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: true,
          height: `${listRef.current[name]?.scrollHeight || 0}px`
        },
        [rootEl]: {
          open: true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) +
            (listRef.current[name]?.scrollHeight || 0)
          }px`
        }
      }));
    }
  };

  const generateIcon = (icon: string) => {
    var icons_map: Record<string, JSX.Element> = {};

    icons_map["dasbor"] = (
     <MdDashboard />
    );
    icons_map["devevent"] = (
      <MdDeveloperBoard />
    );
    icons_map["community"] = (
      <FaUserFriends />
    );
    icons_map["calendar"] = (
      <FaCalendarAlt />
    );
    return icons_map[icon];
  };

  
  const generateMenu = (item: any, index: number, recursive: number = 0) => {
    if (activeName === "" && activeLink.includes(item.link)) {
      setActiveName(item.name);
    }
    const classesActive = activeName === item.name ? "active" : "";

    return (
      <li key={index}>
        <a
          role="button"
          tabIndex={0}
          id={item.id}
          onClick={() => {
            if ("child" in item) {
              handleToggle(item.name);
            } else if ("link" in item) {
              handleNavigate(item);
            }
          }}
          onKeyDown={(event) => {
            const { code } = event;
            if (code === "Space") {
              if ("child" in item) {
                handleToggle(item.name);
              } else if ("link" in item) {
                handleNavigate(item.link);
              }
            }
          }}
          className={[
            "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none",
            recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
            activeName === item.name || activeName && activeName.split(".")[0] === item.name
              ? `text-blue-600 font-semibold ${
                  item.parent ? "bg-blue-200/20 " : "bg-transparent"
                }`
              : `text-slate-500 ${item.parent && ""}`,
            "hover:bg-slate-300/20",
            classesActive
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            {item.icon ? (
              item.icon === "dot" ? (
                <div className="h-3 w-3 flex items-center justify-center">
                  <div
                    className={[
                      `${classesActive ? "h-2 w-2" : "h-1 w-1"}`,
                      "bg-current rounded-full transition duration-200"
                    ].join(" ")}
                  ></div>
                </div>
              ) : (
                generateIcon(item.icon)
              )
            ) : null}
            <div
              className={`truncate font-montserrat ${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              {item.title}
            </div>
          </div>
          {"child" in item ? (
            <div
              className={`${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            false
          )}
        </a>
        {"child" in item ? (
          <ul
            ref={(el) => (listRef.current[item.name] = el)}
            className={[
              "transition-max-height overflow-hidden duration-300 ease-in-out",
              isExpand ? "" : isExpandOnHover ? "" : "h-0"
            ].join(" ")}
            style={{ maxHeight: `${openedMenu[item.name]?.height || "0px"}` }}
            key={item.name}
          >
            {item.child.map((value: any, idx: number) =>
              generateMenu(value, idx, recursive + 1)
            )}
          </ul>
        ) : (
          false
        )}
      </li>
    );
  };

  return (
    <nav
      role="navigation"
      className={
        `bg-slate-50 border-r border-slate-100 shadow-sm inset-y-0 left-0 transition-all duration-300 ease-in-out dark:border-gray-950 dark:bg-gray-950
        ${
          isExpand
            ? "bg-slate-50 w-72 dark:bg-gray-950"
            : isExpandOnHover
            ? "bg-slate-50/70 w-72 backdrop-blur-md"
            : "bg-slate-50 w-20 dark:bg-gray-950"
        } dark:bg-gray-950`}>
      <div className="w-full flex">
      <button
        className="z-50 ml-auto bg-slate-50 hover:bg-slate-100 text-slate-500 p-0.5"
        onClick={() => {
          setIsExpand(!isExpand);
          setExpand(!isExpand);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isExpand ? "rotate-0" : "rotate-180"
          } transform transition duration-500 h-6 w-6`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      </div>
      <div
        onMouseEnter={() => handleHoverExpand(true)}
        onMouseLeave={() => handleHoverExpand(false)}
        className={`relative h-screen overflow-hidden`}
      >
        <SimpleBar style={{ height: "100%" }} autoHide>
          <div className="mb-0 list-none text-slate-500">
            <div
              className={`my-8 flex flex-col items-center overflow-x-hidden duration-300 ${
                isExpand ? "px-3" : isExpandOnHover ? "px-3" : "px-5"
              }`}
            >
              <a
                href={link}
                className={`flex items-center rounded-lg w-full h-20 duration-300 ${
                  isExpand
                    ? "bg-slate-300/25 px-4 gap-3"
                    : isExpandOnHover
                    ? "bg-slate-300/25 px-4 gap-3"
                    : ""
                }`}
              >
                <div
                  className={`rounded-full overflow-hidden duration-300 h-10 w-10 shrink-0`}
                >
                  <img src={profilePic} className="block" alt="" />
                </div>
                <div
                  className={`flex flex-col ${
                    isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`text-base font-semibold text-slate-700 truncate duration-300`}
                  >
                  {user?.username}
                  </div>
                  <div className={`text-sm text-slate-500 truncate`}>
                    {user?.role}
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-3 mb-10 p-0 leading-10">
              <ul className="list-none text-sm font-normal px-3">
                {sidebarStructure.map((item, index) =>
                  generateMenu(item, index)
                )}
              </ul>
            </div>
          </div>
        </SimpleBar>
      </div>
    </nav>
  );
};

export default Sidebar;
