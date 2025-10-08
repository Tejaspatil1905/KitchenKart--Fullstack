import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <Link to="/add" className={`sidebar-option ${location.pathname === '/add' || location.pathname === '/' ? 'active' : ''}`}>
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </Link>
        <Link to="/list" className={`sidebar-option ${location.pathname === '/list' ? 'active' : ''}`}>
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </Link>
        <Link to="/orders" className={`sidebar-option ${location.pathname === '/orders' ? 'active' : ''}`}>
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
