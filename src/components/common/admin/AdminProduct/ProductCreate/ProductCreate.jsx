import { Input, Button, notification, Modal, Select } from "antd";
import "./ProductCreate.css";
import { useState } from "react";
import { ProductCreateAPI } from "../../../../../services/api.service";

const ProductCreate = ({
  loadProduct,
  isModalOpen,
  setIsModalOpen,
  searchTerm,
  onSearchChange
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [factory, setFactory] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitBtn = async () => {
    setLoading(true);
    try {
      const res = await ProductCreateAPI(name, description, price, quantity, factory, category);
      if (res.data) {
        resetAndCloseModal();
        await loadProduct();
        notification.success({
          message: "Create Product",
          description: "Tạo mới sản phẩm thành công!"
        });
      } else {
        throw new Error(res.message || "Không thể tạo sản phẩm");
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
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setFactory("");
    setCategory("");
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
            + Thêm sản phẩm
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
            <span>Name</span>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <span>Description</span>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <span>Price</span>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div>
            <span>Quantity</span>
            <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div>
            <span>Factory</span>
            <Input value={factory} onChange={(e) => setFactory(e.target.value)} />
          </div>
          <div>
            <span>Category</span>
            <Select
              style={{ width: "100%" }}
              value={category}
              onChange={setCategory}
              options={[
                { value: '67bf34c5aeb7bee632c4013a', label: 'Iphone' },
                { value: '67bf34daaeb7bee632c4013c', label: 'Samsung' },
                { value: '67bf34f8aeb7bee632c40140', label: 'Oppo' },
                { value: '67bf34eaaeb7bee632c4013e', label: 'Xiaomi' }
              ]}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCreate;