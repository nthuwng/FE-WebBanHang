
import { Input, Button, notification, Modal, Select } from "antd";

import { useEffect, useState } from "react";
import { ProductUpdateAPI } from "../../../../../services/api.service";


const ProductUpdate = (props) => {
    const { loadProduct, isModalUpdateOpen, setIsModalUpdateOpen,dataupload } = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
   
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false);
  useEffect(() => {
        if (dataupload) {
            setId(dataupload._id);
        }
    }, [dataupload]);

    const handleSubmitBtn = async () => {
        setLoading(true);

        try {
            const res = await ProductUpdateAPI(name, description, price,id);
            if (res.data) {
                resetAndCloseModal();
                await loadProduct();
                notification.success({
                    message: "UPdate Product",
                    description: "Cập nhât mới sản phẩm thành công!"
                });
            } else {
                throw new Error(res.message || "Không thể Cập nhât sản phẩm");
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
        setIsModalUpdateOpen(false);
        setName("");
        setDescription("");
        setPrice("");
   
    };

    return (
        
<div>
            <Modal 
                title="Update Product" 
                open={isModalUpdateOpen} 
                onOk={handleSubmitBtn}
                onCancel={resetAndCloseModal}
                maskClosable={false} 
                okText={loading ? "Uploading..." : "SAVE"}
                confirmLoading={loading}
            >
                <div className="input">
                    <div>
                        <span>Name</span>
                        <Input
                         value={name} 
                        onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <span>Description</span>
                        <Input 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)} />
                    </div>
                    <div>
                        <span>Price</span>
                        <Input type="number" value={price}
                         onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    
                 
                    
                </div>
            </Modal>
        </div>
    );
};

export default ProductUpdate;