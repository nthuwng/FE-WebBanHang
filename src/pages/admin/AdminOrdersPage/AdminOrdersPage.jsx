import { Button, Card, Input, Space, Table, Tag, Tooltip, Typography, Divider, Badge, Statistic, Row, Col } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined, SearchOutlined, ReloadOutlined, PrinterOutlined, ExportOutlined } from "@ant-design/icons";
import { getOrderAPI } from "../../../services/api.service";
import DeleteOrderModal from "../../../components/common/admin/AdminOrder/OrderDelete/OrderDelete.jsx";
import OrderCreate from "../../../components/common/admin/AdminOrder/OrderCreate/OrderCreate.jsx";
import OrderDetailDrawer from "../../../components/common/admin/AdminOrder/OrderDetailDrawer/OrderDetailDrawer.jsx";  

const { Title, Text } = Typography;

const AdminOrdersPage = (props) => {
  const { current, pageSize, setCurrent, setPageSize, total } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [dataDelete, setDataDelete] = useState(null);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [dataOrders, setDataOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [viewDetailOpen, setViewDetailOpen] = useState(false);
  const [orderStats, setOrderStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    cancelled: 0
  });

  const onChange = (pagination) => {
    if (pagination?.current && +pagination.current !== +current) {
      setCurrent(+pagination.current);
    }
    if (pagination?.pageSize && +pagination.pageSize !== +pageSize) {
      setPageSize(+pagination.pageSize);
    }
  };

  const loadOrder = async () => {
    try {
      setLoading(true);
      const res = await getOrderAPI();
      setDataOrders(res.data);
      
      // Calculate stats for the dashboard
      if (Array.isArray(res.data)) {
        setOrderStats({
          total: res.data.length,
          pending: res.data.filter(order => order.status === 'pending').length,
          completed: res.data.filter(order => order.status === 'completed').length,
          cancelled: res.data.filter(order => order.status === 'cancelled').length
        });
      }
    } catch (error) {
      console.error("Failed to load orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrder();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleViewDetail = (record) => {
    setSelectedOrder(record);
    setViewDetailOpen(true);
  };

  const handleRefresh = () => {
    loadOrder();
  };

  const filteredOrders = Array.isArray(dataOrders)
    ? dataOrders.filter((order) => {
        const keyword = searchTerm.toLowerCase();
        
        return (
          (order?.user?.full_name || "").toLowerCase().includes(keyword) ||
          (order?.user?.email || "").toLowerCase().includes(keyword) ||
          (order?.shipping_address?.address || "").toLowerCase().includes(keyword) ||
          (order?.shipping_address?.phone || "").toLowerCase().includes(keyword) ||
          (order?._id || "").toLowerCase().includes(keyword)
        );
      })
    : [];

  const getStatusTag = (status) => {
    let color = "blue";
    let text = "Đang xử lý";
    
    if (status === "completed") {
      color = "green";
      text = "Hoàn thành";
    } else if (status === "cancelled") {
      color = "red";
      text = "Đã hủy";
    } else if (status === "shipping") {
      color = "purple";
      text = "Đang giao hàng";
    }
    
    return <Tag color={color}>{text}</Tag>;
  };

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "_id",
      key: "_id",
      render: id => <Text copyable ellipsis style={{ maxWidth: 150 }}>{id}</Text>,
    },
    {
      title: "Khách hàng",
      key: "customer",
      render: (_, record) => (
        <div>
          <Text strong>{record.user?.full_name}</Text>
          <br />
          <Text type="secondary">{record.user?.email}</Text>
        </div>
      ),
    },
    {
      title: "Thông tin giao hàng",
      key: "shipping",
      render: (_, record) => (
        <div>
          <Text>{record.shipping_address?.address}</Text>
          <br />
          <Text type="secondary">{record.shipping_address?.phone}</Text>
        </div>
      ),
    },
    {
      title: "Tổng tiền",
      key: "total",
      render: (_, record) => (
        <Text strong>{record.total_price?.toLocaleString('vi-VN')} đ</Text>
      ),
      sorter: (a, b) => a.total_price - b.total_price,
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (_, record) => getStatusTag(record.status || "pending"),
      filters: [
        { text: 'Đang xử lý', value: 'pending' },
        { text: 'Đang giao hàng', value: 'shipping' },
        { text: 'Hoàn thành', value: 'completed' },
        { text: 'Đã hủy', value: 'cancelled' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Ngày đặt",
      key: "createdAt",
      render: (_, record) => (
        <Text>{new Date(record.createdAt).toLocaleDateString('vi-VN')}</Text>
      ),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Xem chi tiết">
            <Button 
              icon={<EyeOutlined />} 
              type="primary" 
              size="small"
              onClick={() => handleViewDetail(record)}
            />
          </Tooltip>
          <Tooltip title="Xóa đơn hàng">
            <Button
              icon={<DeleteOutlined />}
              danger
              size="small"
              onClick={() => {
                setDataDelete(record);
                setIsModalDeleteOpen(true);
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="admin-orders-container">
      <Card className="stats-dashboard">
        <Title level={4}>Thống kê đơn hàng</Title>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic 
              title="Tổng đơn hàng" 
              value={orderStats.total} 
              valueStyle={{ color: '#1890ff' }}
            />
          </Col>
          <Col span={6}>
            <Statistic 
              title="Đang xử lý" 
              value={orderStats.pending} 
              valueStyle={{ color: '#faad14' }}
            />
          </Col>
          <Col span={6}>
            <Statistic 
              title="Hoàn thành" 
              value={orderStats.completed} 
              valueStyle={{ color: '#52c41a' }}
            />
          </Col>
          <Col span={6}>
            <Statistic 
              title="Đã hủy" 
              value={orderStats.cancelled} 
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Col>
        </Row>
      </Card>

      <Card className="orders-management" style={{ marginTop: 16 }}>
        <div className="orders-header">
          <Title level={4}>Quản lý đơn hàng</Title>
          <Space>
            <Input
              placeholder="Tìm kiếm đơn hàng..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              prefix={<SearchOutlined />}
              allowClear
              style={{ width: 300 }}
            />
            <Button 
              icon={<ReloadOutlined />} 
              onClick={handleRefresh}
              title="Làm mới"
            />
            <Button 
              type="primary" 
              icon={<ExportOutlined />}
              title="Xuất báo cáo"
            >
              Xuất Excel
            </Button>
          </Space>
        </div>

        <Divider />

        <Table
          columns={columns}
          dataSource={filteredOrders}
          rowKey="_id"
          loading={loading}
          pagination={{
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total || filteredOrders.length,
            showTotal: (total, range) => (
              <div>
                {range[0]}-{range[1]} trên {total} đơn hàng
              </div>
            ),
          }}
          onChange={onChange}
          expandable={{
            expandedRowRender: (record) => (
              <div style={{ padding: '20px' }}>
                <Title level={5}>Chi tiết sản phẩm</Title>
                {record.items && record.items.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px',
                    borderBottom: '1px dashed #f0f0f0'
                  }}>
                    <div>
                      <Text strong>{item.product?.name}</Text>
                      <Text type="secondary"> x {item.quantity}</Text>
                    </div>
                    <Text>{(item.price * item.quantity).toLocaleString('vi-VN')} đ</Text>
                  </div>
                ))}
              </div>
            )
          }}
        />
      </Card>

      <DeleteOrderModal
        isModalDeleteOpen={isModalDeleteOpen}
        setIsModalDeleteOpen={setIsModalDeleteOpen}
        dataDelete={dataDelete}
        setDataDelete={setDataDelete}
        loadOrder={loadOrder}
      />

      {selectedOrder && (
        <OrderDetailDrawer 
          visible={viewDetailOpen}
          onClose={() => setViewDetailOpen(false)}
          orderData={selectedOrder}
        />
      )}
    </div>
  );
};

export default AdminOrdersPage;