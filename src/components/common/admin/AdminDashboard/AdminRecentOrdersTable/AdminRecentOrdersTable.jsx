// components/RecentOrdersTable.jsx
import React from "react";
import { Card, Table } from "antd";

const RecentOrdersTable = ({ recentOrders }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (id) => <a href="#">{id}</a>,
    },
    {
      title: "Khách hàng",
      key: "customer",
      render: (_, record) => <div>{record.user?.full_name || "N/A"}</div>,
    },
    {
      title: "Địa chỉ",
      key: "address",
      render: (_, record) => (
        <div>{record.shipping_address?.address || "N/A"}</div>
      ),
    },
    {
      title: "Tổng tiền",
      key: "total",
      render: (_, record) => (
        <div>{record.total_price?.toLocaleString() || "0"} VND</div>
      ),
    },
    {
      title: "Ngày đặt",
      key: "date",
      render: (_, record) => {
        const date = record.createdAt ? new Date(record.createdAt) : null;
        return date ? date.toLocaleDateString("vi-VN") : "N/A";
      },
    },
  ];

  return (
    <Card title="Đơn hàng gần đây" style={{ marginBottom: 24 }}>
      <Table
        columns={columns}
        dataSource={recentOrders}
        rowKey="_id"
        pagination={false}
        size="small"
      />
    </Card>
  );
};

export default RecentOrdersTable;