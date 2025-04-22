
import { Modal, notification } from "antd";

import React, { useEffect, useState } from "react";
import { deleteProductAPI } from "../../../../../services/api.service";


const DeleteProduct= (props) => {
  const {
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    dataupload,
    loadProduct,
  } = props;
 const [id,setId]= useState("");
 const [loading, setLoading] = useState(false);
   useEffect(()=> {
   
      if(dataupload){
          setId (dataupload._id);
       
       
       
      }
  
  } ,[dataupload])
  const handleSubmitBtn = async () => {
    setLoading(true);
    try {
      const res = await deleteProductAPI(id); 

      if (res.status === 200) {
        notification.success({
          message: "Xóa thành công",
          description: "Sản phẩm đã được xóa.",
        });
        resetAndCloseModal();
        await loadProduct(); 
      } else {
        throw new Error("Xóa thất bại");
      }
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: error.message || "Không thể xóa sản phẩm",
      });
    
    }setLoading(false);
    resetAndCloseModal();
    await loadProduct(); 
  };

  const resetAndCloseModal = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <Modal
      title="Bạn có chắc muốn xóa sản phẩm này không?"
      open={isModalDeleteOpen}
      onOk={handleSubmitBtn}
      onCancel={resetAndCloseModal}
      maskClosable={false}
      okText="Yes"
      cancelText="No"
      confirmLoading={loading}
    >
  
    </Modal>
  );
};

export default DeleteProduct;