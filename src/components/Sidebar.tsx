import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaCog, FaBook, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import useScreenSize from "../hooks/useScreenSize";

const SideNav: React.FC = () => {
  const { isXsScreen } = useScreenSize();
  const [collapsed, setCollapsed] = useState(isXsScreen);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(isXsScreen);
  }, [isXsScreen]);

  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor="white"
      style={{ border: "none" }}
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
