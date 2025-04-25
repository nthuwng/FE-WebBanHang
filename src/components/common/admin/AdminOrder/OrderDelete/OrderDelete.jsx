import { Input, notification, Modal, Typography, Space, Alert, Descriptions } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, ExclamationCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { deleteOrderAPI } from "../../../../../services/api.service";

const { Text, Title } = Typography;

const DeleteOrderModal = (props) => {
  const [_id, setId] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    dataDelete,
    setDataDelete,
    loadOrder,
  } = props;

  useEffect(() => {
    if (dataDelete) {
      setId(dataDelete._id);
    }
  }, [dataDelete]);

  const handleSubmitBtn = async () => {
    if (confirmText !== "XÓA") {
      notification.warning({
        message: "Xác nhận",
        description: "Vui lòng nhập 'XÓA' để xác nhận xóa đơn hàng",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await deleteOrderAPI(_id);
      if (res.data) {
        notification.success({
          message: "Thành công",
          description: "Xóa đơn hàng thành công",
          placement: "topRight",
        });
        resetAndCloseModal();
        await loadOrder();
      } else {
        notification.error({
          message: "Lỗi",
          description: res.message || "Đã có lỗi xảy ra khi xóa đơn hàng",
          placement: "topRight",
        });
      }
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: error.message || "Đã có lỗi xảy ra khi xóa đơn hàng",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const resetAndCloseModal = () => {
    setIsModalDeleteOpen(false);
    setId("");
    setConfirmText("");
    setDataDelete(null);
  };

  return (
    <Modal
      title={
        <Space>
          <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
          <span>Xác nhận xóa đơn hàng</span>
        </Space>
      }
      open={isModalDeleteOpen}
      onOk={handleSubmitBtn}
      onCancel={resetAndCloseModal}
      maskClosable={false}
      okText="Xóa đơn hàng"
      cancelText="Hủy"
      okButtonProps={{ 
        danger: true, 
        disabled: confirmText !== "XÓA",
        loading: loading,
        icon: <DeleteOutlined />
      }}
      width={500}
    >
      <Alert
        message="Cảnh báo"
        description="Hành động này không thể hoàn tác. Dữ liệu đơn hàng sẽ bị xóa vĩnh viễn khỏi hệ thống."
        type="warning"
        showIcon
        style={{ marginBottom: 16 }}
      />

      {dataDelete && (
        <Descriptions bordered size="small" column={1} style={{ marginBottom: 16 }}>
          <Descriptions.Item label="Mã đơn hàng">
            <Text copyable>{_id}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Khách hàng">
            {dataDelete.user?.full_name}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {dataDelete.user?.email}
          </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ">
            {dataDelete.shipping_address?.address}
          </Descriptions.Item>
        </Descriptions>
      )}

      <div>
        <Text>
          Nhập <Text strong type="danger">XÓA</Text> để xác nhận:
        </Text>
        <Input
          placeholder="Nhập XÓA"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          style={{ marginTop: 8 }}
          status={confirmText && confirmText !== "XÓA" ? "error" : ""}
        />
      </div>
    </Modal>
  );
};

export default DeleteOrderModal;