// AdminDashboardPage.jsx
import { Typography } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import {
  fetchUsertAPI,
  fetchProductManagementAPI,
  getOrderAPI,
} from "../../../services/api.service";

import StatisticsCards from "../../../components/common/admin/AdminDashboard/AdminStatisticsCards/AdminStatisticsCards";
import AdditionalStats from "../../../components/common/admin/AdminDashboard/AdminAdditionalStats/AdminAdditionalStats";
import RecentOrdersTable from "../../../components/common/admin/AdminDashboard/AdminRecentOrdersTable/AdminRecentOrdersTable";

const { Title } = Typography;

const AdminDashboardPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrders, setDataOrders] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  // Load all necessary data
  useEffect(() => {
    const loadAllData = async () => {
      try {
        const usersRes = await fetchUsertAPI();
        setDataUsers(usersRes.data || []);

        const productsRes = await fetchProductManagementAPI();
        setDataProducts(productsRes.data || []);

        const ordersRes = await getOrderAPI();
        setDataOrders(ordersRes.data || []);

        if (Array.isArray(ordersRes.data)) {
          const revenue = ordersRes.data.reduce((total, order) => {
            return total + (order.total_price || 0);
          }, 0);
          setTotalRevenue(revenue);

          const sortedOrders = [...ordersRes.data].sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setRecentOrders(sortedOrders.slice(0, 5));
        }
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      }
    };

    loadAllData();
  }, []);

  // Calculate low stock products
  const lowStockProducts = dataProducts.filter(
    (product) => product.quantity < 10
  ).length;

  // Calculate new customers in the last 30 days
  const newCustomers = dataUsers.filter((user) => {
    if (!user.createdAt) return false;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(user.createdAt) >= thirtyDaysAgo;
  }).length;

  return (
    <div className="admin-dashboard">
      <Title level={2}>Bảng điều khiển</Title>

      <StatisticsCards
        usersCount={dataUsers.length}
        productsCount={dataProducts.length}
        ordersCount={dataOrders.length}
        totalRevenue={totalRevenue}
      />

      <AdditionalStats
        lowStockProducts={lowStockProducts}
        totalProducts={dataProducts.length}
        newCustomers={newCustomers}
      />

      <RecentOrdersTable recentOrders={recentOrders} />
    </div>
  );
};

export default AdminDashboardPage;
