// src/components/Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt, UilCalendarAlt } from "@iconscout/react-unicons"; // Added UilCalendarAlt icon
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={toggleSidebar}>
        <UilBars />
      </div>
      <motion.div className='sidebar' variants={sidebarVariants} animate={window.innerWidth <= 768 ? `${expanded}` : ''}>
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              key={index}
              className={selected === index ? "menuItem active" : "menuItem"}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}
          {/* Add new icon for Order Calendar */}
         
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
