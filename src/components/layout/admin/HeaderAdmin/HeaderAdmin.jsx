import React, { useContext } from "react";
import "./HeaderAdmin.css";
import { Tooltip, Avatar, Badge, Dropdown, message } from "antd";
import { 
  LogoutOutlined, 
  BellOutlined, 
  UserOutlined, 
  SearchOutlined,
  SettingOutlined,
  ReloadOutlined
} from "@ant-design/icons";
import { AuthContext } from "../../../context/auth.context";
import { CartContext } from "../../../context/cart.context";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const { user, logout } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    clearCart();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    message.success("Đăng xuất thành công!");
    navigate("/login");
  };

  const userMenuItems = [
    {
      key: '1',
      label: 'Thông tin cá nhân',
      icon: <UserOutlined />
    },
    {
      key: '2',
      label: 'Cài đặt',
      icon: <SettingOutlined />
    },
    {
      key: '3',
      label: 'Đăng xuất',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
      danger: true
    }
  ];

  const notificationItems = [
    {
      key: '1',
      label: 'Đơn hàng mới #1234',
    },
    {
      key: '2',
      label: 'Cập nhật hệ thống',
    },
    {
      key: '3',
      label: 'Xem tất cả thông báo',
      onClick: () => navigate('/admin/notifications')
    }
  ];

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm..." />
          <button className="search-icon">
            <SearchOutlined />
          </button>
        </div>
      </div>
      
      <div className="admin-header-right">
        <Tooltip title="Làm mới trang">
          <button className="header-action-btn" onClick={refreshPage}>
            <ReloadOutlined />
          </button>
        </Tooltip>
        
        <Dropdown 
          menu={{ items: notificationItems }} 
          placement="bottomRight"
          trigger={['click']}
        >
          <Badge count={3} size="small">
            <button className="header-action-btn">
              <BellOutlined />
            </button>
          </Badge>
        </Dropdown>
        
        <Dropdown 
          menu={{ items: userMenuItems }} 
          placement="bottomRight"
          trigger={['click']}
        >
          <div className="user-profile">
            <Avatar 
              size={36} 
              icon={<UserOutlined />} 
              style={{ backgroundColor: '#1890ff' }}
            />
            <span className="user-name">{user?.username || 'Admin'}</span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default HeaderAdmin;