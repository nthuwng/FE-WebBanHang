import React from 'react';
import { Drawer, Typography, Descriptions, Table, Tag, Button, Divider, Timeline, Steps, Space } from 'antd';
import { PrinterOutlined, CheckOutlined, StopOutlined, SaveOutlined, ClockCircleOutlined, RocketOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Step } = Steps;

const OrderDetailDrawer = ({ visible, onClose, orderData }) => {
  if (!orderData) return null;
  
  const getStatusStep = (status) => {
    switch(status) {
      case 'completed':
        return 3;
      case 'shipping':
        return 2;
      case 'cancelled':
        return 4;
      default:
        return 1;
    }
  };

  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {record.product?.image && (
            <img 
              src={record.product.image} 
              alt={record.product?.name} 
              style={{ width: 50, height: 50, marginRight: 10, objectFit: 'cover' }} 
            />
          )}
          <div>
            <div><Text strong>{record.product?.name}</Text></div>
            <Text type="secondary">SKU: {record.product?.sku || 'N/A'}</Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      render: price => <Text>{price?.toLocaleString('vi-VN')} đ</Text>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Thành tiền',
      key: 'total',
      render: (_, record) => (
        <Text strong>{(record.price * record.quantity).toLocaleString('vi-VN')} đ</Text>
      ),
    },
  ];

  return (
    <Drawer
      title={`Chi tiết đơn hàng #${orderData._id}`}
      width={700}
      open={visible}
      onClose={onClose}
      extra={
        <Space>
          <Button icon={<PrinterOutlined />}>In đơn hàng</Button>
          {orderData.status !== 'completed' && orderData.status !== 'cancelled' && (
            <>
              <Button type="primary" icon={<CheckOutlined />}>Xác nhận</Button>
              <Button danger icon={<StopOutlined />}>Hủy đơn</Button>
            </>
          )}
        </Space>
      }
    >
      <Steps current={getStatusStep(orderData.status)} status={orderData.status === 'cancelled' ? 'error' : 'process'} 
        style={{ marginBottom: 30 }}>
        <Step title="Đặt hàng" description="Chờ xác nhận" icon={<ClockCircleOutlined />} />
        <Step title="Xác nhận" description="Đã xác nhận" />
        <Step title="Vận chuyển" description="Đang giao hàng" icon={<RocketOutlined />} />
        <Step title="Hoàn thành" description="Đã giao hàng" icon={<CheckCircleOutlined />} />
        {orderData.status === 'cancelled' && (
          <Step title="Đã hủy" description="Đơn hàng bị hủy" status="error" icon={<StopOutlined />} />
        )}
      </Steps>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ flex: 1 }}>
          <Title level={5}>Thông tin khách hàng</Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Họ tên">{orderData.user?.full_name}</Descriptions.Item>
            <Descriptions.Item label="Email">{orderData.user?.email}</Descriptions.Item>
            <Descriptions.Item label="Điện thoại">{orderData.shipping_address?.phone}</Descriptions.Item>
          </Descriptions>
        </div>
        
        <div style={{ flex: 1 }}>
          <Title level={5}>Thông tin đơn hàng</Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Mã đơn hàng">{orderData._id}</Descriptions.Item>
            <Descriptions.Item label="Ngày đặt">
              {new Date(orderData.createdAt).toLocaleString('vi-VN')}
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              {orderData.status === 'pending' && <Tag color="blue">Đang xử lý</Tag>}
              {orderData.status === 'shipping' && <Tag color="purple">Đang giao hàng</Tag>}
              {orderData.status === 'completed' && <Tag color="green">Hoàn thành</Tag>}
              {orderData.status === 'cancelled' && <Tag color="red">Đã hủy</Tag>}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>

      <Divider />
      
      <Title level={5}>Địa chỉ giao hàng</Title>
      <Descriptions bordered size="small" column={1}>
        <Descriptions.Item label="Địa chỉ">{orderData.shipping_address?.address}</Descriptions.Item>
        <Descriptions.Item label="Ghi chú">{orderData.note || 'Không có ghi chú'}</Descriptions.Item>
      </Descriptions>

      <Divider />
      
      <Title level={5}>Danh sách sản phẩm</Title>
      <Table 
        columns={columns}
        dataSource={orderData.items || []}
        pagination={false}
        rowKey={(record, index) => index}
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={3} style={{ textAlign: 'right' }}>
                <Text strong>Tiền hàng:</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text>{orderData.subtotal?.toLocaleString('vi-VN')} đ</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={3} style={{ textAlign: 'right' }}>
                <Text strong>Phí vận chuyển:</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text>{orderData.shipping_fee?.toLocaleString('vi-VN')} đ</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={3} style={{ textAlign: 'right' }}>
                <Text strong>Tổng cộng:</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text strong style={{ fontSize: 16, color: '#f5222d' }}>
                  {orderData.total_price?.toLocaleString('vi-VN')} đ
                </Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />

      {orderData.history && orderData.history.length > 0 && (
        <>
          <Divider />
          <Title level={5}>Lịch sử đơn hàng</Title>
          <Timeline
            items={
              orderData.history.map(item => ({
                color: item.status === 'cancelled' ? 'red' : 'blue',
                children: (
                  <>
                    <Text strong>{item.status === 'created' ? 'Tạo đơn hàng' : 
                             item.status === 'confirmed' ? 'Xác nhận đơn hàng' : 
                             item.status === 'shipping' ? 'Đang giao hàng' : 
                             item.status === 'completed' ? 'Hoàn thành' : 'Hủy đơn hàng'}</Text>
                    <div>
                      <Text type="secondary">
                        {new Date(item.time).toLocaleString('vi-VN')} - {item.by}
                      </Text>
                    </div>
                    {item.note && <div>{item.note}</div>}
                  </>
                )
              }))
            }
          />
        </>
      )}
    </Drawer>
  );
};

export default OrderDetailDrawer;