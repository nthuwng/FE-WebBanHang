import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  notification,
  Typography,
  Divider,
  Space,
  Spin,
  Upload,
  Row,
  Col,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  UploadOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { ProductCreateAPI } from "../../../../../services/api.service";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const ProductCreate = ({
  loadProduct,
  isModalOpen,
  setIsModalOpen,
  searchTerm,
  onSearchChange,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  const categories = [
    { value: "67bf34c5aeb7bee632c4013a", label: "iPhone" },
    { value: "67bf34daaeb7bee632c4013c", label: "Samsung" },
    { value: "67bf34f8aeb7bee632c40140", label: "Oppo" },
    { value: "67bf34eaaeb7bee632c4013e", label: "Xiaomi" },
  ];

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const { name, description, price, quantity, factory, category } = values;

      const res = await ProductCreateAPI(
        name,
        description,
        price,
        quantity,
        factory,
        category
      );

      if (res.data) {
        api.success({
          message: "Product Created",
          description: "New product has been successfully created!",
          placement: "topRight",
        });

        resetAndCloseModal();
        await loadProduct();
      } else {
        throw new Error(res.message || "Unable to create product");
      }
    } catch (error) {
      api.error({
        message: "Creation Failed",
        description:
          error.message || "An error occurred while creating the product",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndCloseModal = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product-header">
        {contextHolder}
        <Space size="middle" style={{ marginBottom: 16 }}>
          <Input
            placeholder="Search products..."
            prefix={<SearchOutlined />}
            allowClear
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ width: 250 }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}>
            Add Product
          </Button>
        </Space>
      </div>

      <Modal
        title={<Title level={4}>Create New Product</Title>}
        open={isModalOpen}
        width={700}
        maskClosable={false}
        onCancel={resetAndCloseModal}
        footer={[
          <Button
            key="cancel"
            icon={<CloseOutlined />}
            onClick={resetAndCloseModal}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            icon={<SaveOutlined />}
            onClick={handleSubmit}>
            {loading ? "Creating..." : "Create Product"}
          </Button>,
        ]}>
        <Divider />

        <Spin spinning={loading}>
          <Form form={form} layout="vertical" requiredMark="optional">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Product Name"
                  rules={[
                    { required: true, message: "Please enter product name" },
                  ]}>
                  <Input placeholder="Enter product name" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="category"
                  label="Category"
                  rules={[
                    { required: true, message: "Please select a category" },
                  ]}>
                  <Select placeholder="Select category">
                    {categories.map((cat) => (
                      <Option key={cat.value} value={cat.value}>
                        {cat.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[
                    { required: true, message: "Please enter price" },
                    {
                      type: "number",
                      min: 0,
                      message: "Price must be greater than 0",
                    },
                  ]}>
                  <InputNumber
                    style={{ width: "100%" }}
                    min={0}
                    step={0.01}
                    formatter={(value) =>
                      `₫ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/[₫\s?|(,*)]/g, "")}
                    placeholder="Enter price"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="quantity"
                  label="Quantity"
                  rules={[
                    { required: true, message: "Please enter quantity" },
                    {
                      type: "number",
                      min: 0,
                      message: "Quantity must be greater than or equal to 0",
                    },
                  ]}>
                  <InputNumber
                    style={{ width: "100%" }}
                    min={0}
                    placeholder="Enter quantity"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="factory"
              label="Manufacturer"
              rules={[
                { required: true, message: "Please enter manufacturer name" },
              ]}>
              <Input placeholder="Enter manufacturer name" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please enter product description" },
              ]}>
              <TextArea
                rows={4}
                placeholder="Enter product description"
                showCount
                maxLength={500}
              />
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};

export default ProductCreate;
