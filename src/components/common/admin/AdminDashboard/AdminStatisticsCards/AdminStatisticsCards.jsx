// components/StatisticsCards.jsx
import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DollarOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const StatisticsCards = ({ usersCount, productsCount, ordersCount, totalRevenue }) => {
  return (
    <Row gutter={16} style={{ marginBottom: 24 }}>
      <Col span={6}>
        <Card>
          <Statistic
            title="Tổng người dùng"
            value={usersCount}
            prefix={<UserOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Tổng sản phẩm"
            value={productsCount}
            prefix={<InboxOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Tổng đơn hàng"
            value={ordersCount}
            prefix={<ShoppingCartOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Doanh thu"
            value={totalRevenue}
            prefix={<DollarOutlined />}
            suffix="VND"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default StatisticsCards;