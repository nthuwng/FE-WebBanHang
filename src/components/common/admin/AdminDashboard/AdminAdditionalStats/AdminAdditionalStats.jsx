// components/AdditionalStats.jsx
import React from "react";
import { Card, Col, Row, Statistic } from "antd";

const AdditionalStats = ({ lowStockProducts, totalProducts, newCustomers }) => {
  return (
    <Row gutter={16} style={{ marginBottom: 24 }}>
      <Col span={12}>
        <Card title="Thống kê sản phẩm">
          <Statistic
            title="Sản phẩm tồn kho thấp"
            value={lowStockProducts}
            suffix={`/ ${totalProducts}`}
            valueStyle={
              lowStockProducts > 0 ? { color: "#ff4d4f" } : undefined
            }
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Thống kê khách hàng">
          <Statistic
            title="Khách hàng mới (30 ngày)"
            value={newCustomers}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default AdditionalStats;