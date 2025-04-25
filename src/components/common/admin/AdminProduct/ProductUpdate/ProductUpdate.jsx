import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  notification,
  Typography,
  Divider,
  Button,
  Spin,
  Row,
  Col,
  Space,
} from "antd";
import { SaveOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { ProductUpdateAPI } from "../../../../../services/api.service";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ProductUpdate = (props) => {
  const { loadProduct, isModalUpdateOpen, setIsModalUpdateOpen, dataupload } =
    props;

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [initialValues, setInitialValues] = useState({});
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  useEffect(() => {
    if (dataupload) {
      setId(dataupload._id);

      // Set initial form values
      const values = {
        name: dataupload.name || "",
        description: dataupload.description || "",
        price: dataupload.price || "",
        quantity: dataupload.quantity || "",
        factory: dataupload.factory || "",
        category: dataupload.category || "",
      };

      setInitialValues(values);
      form.setFieldsValue(values);
    }
  }, [dataupload, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const { name, description, price } = values;

      const res = await ProductUpdateAPI(name, description, price, id);

      if (res.data) {
        api.success({
          message: "Update Successful",
          description: "The product has been updated successfully.",
          placement: "topRight",
        });
        resetAndCloseModal();
        await loadProduct();
      } else {
        throw new Error(res.message || "Unable to update the product");
      }
    } catch (error) {
      api.error({
        message: "Update Failed",
        description:
          error.message || "An error occurred while updating the product",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={
          <Space>
            <EditOutlined />
            <Title level={4} style={{ margin: 0 }}>
              Update Product
            </Title>
          </Space>
        }
        open={isModalUpdateOpen}
        maskClosable={false}
        onCancel={resetAndCloseModal}
        width={600}
        footer={[
          <Button
            key="cancel"
            icon={<CloseOutlined />}
            onClick={resetAndCloseModal}>
            Cancel
          </Button>,
          <Button
            key="update"
            type="primary"
            loading={loading}
            icon={<SaveOutlined />}
            onClick={handleSubmit}>
            {loading ? "Updating..." : "Update Product"}
          </Button>,
        ]}>
        <Divider />

        <Spin spinning={loading}>
          <Form form={form} layout="vertical" initialValues={initialValues}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Product Name"
                  rules={[
                    { required: true, message: "Please enter product name" },
                  ]}>
                  <Input placeholder="Enter product name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Please enter product description",
                    },
                  ]}>
                  <TextArea
                    rows={4}
                    placeholder="Enter product description"
                    showCount
                    maxLength={500}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
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
                  ]}
                  style={{ width: "100%" }}>
                  <InputNumber
                    min={0}
                    step={0.01}
                    style={{ width: "100%" }}
                    formatter={(value) =>
                      `₫ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/[₫\s?|(,*)]/g, "")}
                    placeholder="Enter price"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Text type="secondary">
              Note: Some fields cannot be modified in this form. For complete
              product management, please use the product administration panel.
            </Text>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};

export default ProductUpdate;
