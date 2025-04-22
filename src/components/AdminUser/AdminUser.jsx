import { Space, Table, Tag } from 'antd';
import { fetchUsertAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";

import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
const AdminUser = () => {
  const navigate = useNavigate();
    const [dataUsers, setDataUsers] = useState([]);
    useEffect(()=>{

      loadUser();
    },[]);
    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'full_name',
         
        
        },
        {
            title: 'Address',
            dataIndex: 'address',
     
          },
        {
          title: 'Phone',
          dataIndex: 'phone',
   
        },
       
      ];
   
    
      
      const loadUser = async () =>{
     const res= await   fetchUsertAPI()
     setDataUsers(res.data)
      }
  
    
    return (
      <>
      <header className="header">
      {/* Logo */}
      <div className="logo">Exclusive</div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-user"
              className={({ isActive }) => (isActive ? "active" : "")}>
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Product Management
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Search Bar & Icons */}
      <div className="search-icons">

    
        <Tooltip placement="top" title="Đăng xuất" >
      <LogoutOutlined 
        size={20}
        className="iconLogin"
        onClick={() => {
          navigate("/login-admin");
        }}
      />
        </Tooltip>
   
      </div>
    </header>
 <div>
  <h1>Table User</h1>
        <Table columns={columns} dataSource={dataUsers} />
        </div>
        </>
    )
        
    
}
export default AdminUser