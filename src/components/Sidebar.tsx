import React, { useEffect, useState } from "react";
import { FaBook, FaChevronLeft, FaChevronRight, FaCog } from "react-icons/fa";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import useScreenSize from "../hooks/useScreenSize";

const SideNav: React.FC = () => {
  const { isXsToMd } = useScreenSize();
  const [collapsed, setCollapsed] = useState(isXsToMd);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(isXsToMd);
  }, [isXsToMd]);

  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor="white"
      style={{ border: "none" }}
      width="182px"
    >
      <Menu>
        <MenuItem
          onClick={handleCollapseToggle}
          icon={collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        >
          {collapsed ? "Expand" : "Collapse"}
        </MenuItem>
        <MenuItem icon={<FaCog />}>Settings</MenuItem>
        <MenuItem icon={<FaBook />}>Course</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
