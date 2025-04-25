import React, { useEffect, useState } from "react";
import {
  Modal,
  notification,
  Typography,
  Button,
  Space,
  Alert,
  Spin,
} from "antd";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { deleteProductAPI } from "../../../../../services/api.service";

const { Title, Text } = Typography;

const DeleteProduct = (props) => {
  const { isModalDeleteOpen, setIsModalDeleteOpen, dataupload, loadProduct } =
    props;

  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  useEffect(() => {
    if (dataupload) {
      setId(dataupload._id);
      setProductName(dataupload.name || "this product");
    }
  }, [dataupload]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await deleteProductAPI(id);
      console.log("resdelete", res);
      if (res.errorCode === 0) {
        api.success({
          message: "Deletion Successful",
          description: `"${productName}" has been successfully deleted.`,
          placement: "topRight",
        });
        resetAndCloseModal();
        await loadProduct();
      } else {
        throw new Error("Deletion failed");
      }
    } catch (error) {
      api.error({
        message: "Deletion Error",
        description: error.message || "Unable to delete the product",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndCloseModal = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={
          <Space>
            <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
            <Title level={4} style={{ margin: 0 }}>
              Confirm Deletion
            </Title>
          </Space>
        }
        open={isModalDeleteOpen}
        onCancel={resetAndCloseModal}
        maskClosable={false}
        confirmLoading={loading}
        footer={[
          <Button key="cancel" onClick={resetAndCloseModal}>
            Cancel
          </Button>,
          <Button
            key="delete"
            danger
            type="primary"
            loading={loading}
            icon={<DeleteOutlined />}
            onClick={handleDelete}>
            Delete
          </Button>,
        ]}>
        <Spin spinning={loading}>
          <Alert
            message="Warning: This action cannot be undone"
            description="Deleting this product will permanently remove it from the database."
            type="warning"
            showIcon
            style={{ marginBottom: 16 }}
          />

          <Text>
            Are you sure you want to delete the product{" "}
            <strong>"{productName}"</strong>?
          </Text>
        </Spin>
      </Modal>
    </>
  );
};

export default DeleteProduct;
