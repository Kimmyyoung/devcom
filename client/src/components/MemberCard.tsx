"use client";
import React, { useState } from 'react';
import { IoIosChatboxes } from "react-icons/io";
import ChatModal from './ChatModal';

interface MemberCardProps {
  props: {
    email: string,
    username: string
  },
  isChatModalOpen: boolean;
  onChatButtonClick: () => void;
}

const MemberCard = ({ props, isChatModalOpen, onChatButtonClick } : MemberCardProps) => {
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const { email, username } = props;


  return (
    <li className="py-3 px-3 sm:py-4 justify-start bg-blue-200/2 rounded">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 lg:block md:hidden sm:hidden xs:hidden">
          <div className="w-8 h-8 rounded-full">
            <img
              src={profilePic}
              alt="Neil image"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-blue-500 truncate items-start dark:text-white">
            {username}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-blue-200 items-start md:text-xs">
            {email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold dark:text-white">
        <button onClick={onChatButtonClick}>
            <IoIosChatboxes color="rgb(59 130 246)"/>
          </button>
        </div>
      </div>
    </li>
  );
};

export default MemberCard;
