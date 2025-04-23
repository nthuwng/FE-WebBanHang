import { Input, notification, Modal } from "antd"
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../../../../services/api.service";



const UpdateUserModal = (props) => {
     const [full_name,setFull_Name]= useState("");
        const [_id,setId]= useState("");
        const [phone,setPhone]= useState("");
        const [email,setEmail]= useState("");
        const [password,setPassword]= useState("");
        const [address,setAddress]= useState("");

        const {isModalUpdateOpen,setIsModalUpdateOpen,
            dataUpdate, setDataUpdate,
        loadUser
        } = props;
    useEffect(()=> {
 
    if(dataUpdate){
        setId (dataUpdate._id);
        setEmail(dataUpdate.email)
        setFull_Name (dataUpdate.full_name);
        setPassword (dataUpdate.password)
        setPhone (dataUpdate.phone);
        setAddress(dataUpdate.address)
     
     
    }

} ,[dataUpdate])
        const handleSubmitBtn= async () => {
        const res= await  updateUserAPI(_id,full_name,phone,password,address,email);
        if(res.data){
            notification.success ({
                message: "Update user",
                description: "Cập Nhật user thành công"
               })
               resetAndCloseModal();
              await loadUser();
        }
        else {
            notification.error ({
                message: "create user",
                description: JSON.stringify(res.message)
            })
        }
        
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setEmail("");
        setFull_Name ("");
        setAddress("");
        setPassword("");
        setPhone ("");
        setId("");
        setDataUpdate(null);
       
    
    }   

    return (
        <Modal 
        title="Update User" 
        open={isModalUpdateOpen} 
        onOk={() => handleSubmitBtn()}
        onCancel= {() => resetAndCloseModal()}
        maskClosable={false} //phải nhấn nút mới thoát đc
        okText={"SAVE"}
        >
             <div className="input">
             <div>
                <span>Id</span>
                <Input
                value={_id}
                disabled
                />
            </div>
            <div>
                <span>Email</span>
                <Input
                value={email}
                disabled
                />
            </div>
            <div>
                <span>FullName</span>
                <Input 
                value={full_name}
                onChange={(event)=> { setFull_Name (event.target.value)}}
                />
            </div>
            <div>
                <span>Password</span>
                <Input 
            
                onChange={(event)=> { setPassword (event.target.value)}}
                />
            </div>
           
            <div>
                <span>Phone number</span>
                <Input
                value={phone}
                onChange={(event)=> { setPhone(event.target.value)}}
                />
            </div>
            <div>
                <span>Address</span>
                <Input
                value={address}
                onChange={(event)=> { setAddress(event.target.value)}}
                />
            </div>
            </div>
     </Modal>
    )
} 
export default  UpdateUserModal;