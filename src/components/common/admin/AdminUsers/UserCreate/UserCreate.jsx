import { Input, Button, notification, Modal, Select } from "antd";
import { useState } from "react";
import { createUserAPI, ProductCreateAPI } from "../../../../../services/api.service";

const UserCreate = ({
  loadUser,
  isModalOpen,
  setIsModalOpen,
  searchTerm,
  onSearchChange
}) => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitBtn = async () => {
    setLoading(true);
    try {
      const res = await createUserAPI( full_name, phone, password, address, email, role);
      if (res.data) {
        resetAndCloseModal();
        await loadUser();
        notification.success({
          message: "Create Product",
          description: "Tạo mới user thành công!"
        });
      } else {
        throw new Error(res.message || "Không thể tạo user");
      }
    } catch (error) {
      notification.error({
        message: "Error create product",
        description: error.message || "Có lỗi xảy ra!"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
 
    setFull_name("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setRole("");
  };

  return (
    <div className="product-create">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Quản lý sản phẩm</h1>
        <div className="search-box" style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
          <Button
            className="add-button"
            onClick={() => setIsModalOpen(true)}
            type="primary"
          >
            + Thêm Users
          </Button>
        </div>
      </div>

      <Modal
        title="Create Product"
        open={isModalOpen}
        onOk={handleSubmitBtn}
        onCancel={resetAndCloseModal}
        maskClosable={false}
        okText={loading ? "Uploading..." : "CREATE"}
        confirmLoading={loading}
      >
        <div className="input">
          
          <div>
            <span>Email</span>
            <Input value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <span>FullName</span>
            <Input value={full_name} onChange={(event) => setFull_name(event.target.value)} />
          </div>
          <div>
            <span>Password</span>
            <Input onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div>
            <span>Phone number</span>
            <Input value={phone} onChange={(event) => setPhone(event.target.value)} />
          </div>
          <div>
            <span>Address</span>
            <Input value={address} onChange={(event) => setAddress(event.target.value)} />
          </div>
          <div>
            <span>Role</span>
            <Select
              style={{ width: "100%" }}
              value={role}
              onChange={(value) => setRole(value)}
              options={[
                { value: '67bf253b864117b1d4b914df', label: 'Admin' },
                { value: '67bf2560864117b1d4b914e1', label: 'Client' }
              ]}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserCreate;
