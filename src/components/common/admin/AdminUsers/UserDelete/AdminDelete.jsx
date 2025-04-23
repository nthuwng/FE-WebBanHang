import { Input, notification, Modal } from "antd"
import { useEffect, useState } from "react";
import { deleteUserAPI } from "../../../../../services/api.service";




const DeleteUserModal = (props) => {

        const [_id,setId]= useState("");
      
        const {isModalDeleteOpen,setIsModalDeleteOpen,
            dataDelete, setDataDelete,
        loadUser
        } = props;
    useEffect(()=> {
 
    if(dataDelete){
        setId (dataDelete._id);
       
     
    }

} ,[dataDelete])
        const handleSubmitBtn= async () => {
        const res= await deleteUserAPI (_id);
        if(res.data){
            notification.success ({
                message: "Xóa",
                description: "Xóa user thành công"
               })
               resetAndCloseModal();
              await loadUser();
        }
        else {
            notification.error ({
                message: "lỗi",
                description: JSON.stringify(res.message)
            })
        }
        
    }
    const resetAndCloseModal = () => {
        setIsModalDeleteOpen(false);
        
        setId("");
        setDataDelete(null);
       
    
    }   

    return (
        <Modal 
        title="Bạn có chắc xóa user này không ?" 
        open={isModalDeleteOpen} 
        onOk={() => handleSubmitBtn()}
        onCancel= {() => resetAndCloseModal()}
        maskClosable={false} //phải nhấn nút mới thoát đc
        okText={"Yes"}
        cancelText={"No"}
        >
             <div className="input">
             <div>
                <span>Id</span>
                <Input
                value={_id}
                disabled
                />
            </div>
      
            </div>
     </Modal>
    )
} 
export default  DeleteUserModal;