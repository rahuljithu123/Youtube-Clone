import React from "react";
import SideBarRow from "../SidebarRow/SidebarRow"
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { FaHotjar } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={AiFillHome} title="Home" />
      <SideBarRow Icon={FaHotjar} title="Trending" />
      <SideBarRow Icon={MdSubscriptions} title="Subscription" />
      <hr />
      <SideBarRow Icon={MdVideoLibrary} title="Library" />
      <SideBarRow Icon={FaHistory} title="History" />
      <SideBarRow Icon={MdPermMedia} title="Your videos" />
      <SideBarRow Icon={MdWatchLater} title="Watch later" />
      <SideBarRow Icon={AiTwotoneLike} title="Liked vides" />
      <hr />
    </div>
  );
}

export default Sidebar;
