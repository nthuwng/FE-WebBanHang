import React, { useState } from "react";
import { 
  Card, 
  Input, 
  Button, 
  Space, 
  Typography, 
  Select, 
  DatePicker, 
  Dropdown,
  Menu,
  Row,
  Col
} from "antd";
import { 
  SearchOutlined, 
  PlusOutlined, 
  FilterOutlined, 
  DownloadOutlined,
  UploadOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  FileExcelOutlined,
  FilePdfOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const OrderCreate = ({ searchTerm, onSearchChange }) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [dateRange, setDateRange] = useState(null);

  const exportMenu = (
    <Menu
      items={[
        {
          key: '1',
          icon: <FileExcelOutlined />,
          label: 'Xuất Excel',
        },
        {
          key: '2',
          icon: <FilePdfOutlined />,
          label: 'Xuất PDF',
        },
      ]}
    />
  );

  const handleAdvancedSearch = () => {
    // Implementation for advanced search logic
    console.log("Advanced search:", { filterStatus, dateRange });
  };

  const handleReset = () => {
    setFilterStatus("all");
    setDateRange(null);
    onSearchChange("");
  };

  return (
    <Card className="order-tools" style={{ marginBottom: 16 }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} lg={12}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title level={4} style={{ margin: 0, marginRight: 16 }}>
              Quản lý đơn hàng
            </Title>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ marginRight: 8 }}
            >
              Tạo đơn hàng
            </Button>
          </div>
        </Col>
        
        <Col xs={24} lg={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Space>
              <Input.Search
                placeholder="Tìm kiếm đơn hàng..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                onSearch={value => onSearchChange(value)}
                style={{ width: 250 }}
                allowClear
              />
              <Button 
                icon={<FilterOutlined />}
                onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                type={showAdvancedSearch ? "primary" : "default"}
              >
                Lọc
              </Button>
              <Dropdown overlay={exportMenu} placement="bottomRight">
                <Button icon={<DownloadOutlined />}>
                  Xuất
                </Button>
              </Dropdown>
              <Button 
                icon={<SettingOutlined />} 
                type="text"
              />
            </Space>
          </div>
        </Col>
        
        {showAdvancedSearch && (
          <Col span={24}>
            <Card size="small" title="Tìm kiếm nâng cao">
              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <div style={{ marginBottom: 16 }}>
                    <Text strong>Trạng thái</Text>
                    <Select
                      style={{ width: "100%", marginTop: 8 }}
                      value={filterStatus}
                      onChange={value => setFilterStatus(value)}
                    >
                      <Option value="all">Tất cả trạng thái</Option>
                      <Option value="pending">Đang xử lý</Option>
                      <Option value="shipping">Đang giao hàng</Option>
                      <Option value="completed">Hoàn thành</Option>
                      <Option value="cancelled">Đã hủy</Option>
                    </Select>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{ marginBottom: 16 }}>
                    <Text strong>Phương thức thanh toán</Text>
                    <Select
                      style={{ width: "100%", marginTop: 8 }}
                      defaultValue="all"
                    >
                      <Option value="all">Tất cả</Option>
                      <Option value="cod">Tiền mặt (COD)</Option>
                      <Option value="bank">Chuyển khoản</Option>
                      <Option value="credit">Thẻ tín dụng</Option>
                    </Select>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{ marginBottom: 16 }}>
                    <Text strong>Ngày đặt hàng</Text>
                    <RangePicker 
                      style={{ width: "100%", marginTop: 8 }}
                      value={dateRange}
                      onChange={date => setDateRange(date)}
                      format="DD/MM/YYYY"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                    <Space>
                      <Button onClick={handleReset}>Đặt lại</Button>
                      <Button type="primary" onClick={handleAdvancedSearch}>
                        Áp dụng bộ lọc
                      </Button>
                    </Space>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default OrderCreate;