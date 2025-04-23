import { Input, notification, Modal, Button } from "antd";
import { useEffect, useState } from "react";
import { handleUploadFile } from "../../../../../services/api.service";



const UploadImg = (props) => {
    const { isModalUploadOpen, setIsModalUploadOpen, dataupload, loadProduct,setUploadImg } = props;
    
    const [_id, setId] = useState("");
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (dataupload) {
            setId(dataupload._id);
        }
    }, [dataupload]);

    const handleOnChangeFile = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            setFile(null);
            setPreview(null);
            return;
        }
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleSubmitBtn = async () => {
        if (!file) {
            notification.error({
                message: "Lỗi tải ảnh",
                description: "Vui lòng chọn ảnh trước khi tải lên."
            });
            return;
        }

        setLoading(true);

        try {
            const resUpload = await handleUploadFile(file, "product", _id);
            if (resUpload?.data?.file) {
                notification.success({
                    message: "Upload thành công",
                    description: "Ảnh đã được cập nhật."
                });
                resetAndCloseModal();
                await loadProduct();
            } else {
                throw new Error("Upload thất bại");
            }
        } catch (error) {
            notification.error({
                message: "Lỗi tải ảnh",
                description: error.message || "Có lỗi xảy ra khi tải ảnh lên."
            });
        } finally {
            setLoading(false);
            resetAndCloseModal();
        }
    };

    const resetAndCloseModal = () => {
        setIsModalUploadOpen(false);
        setId("");
        setUploadImg(null);
        setFile(null);
        setPreview(null);
    };

    return (
        <Modal 
            title="Cập nhật product" 
            open={isModalUploadOpen} 
            onOk={handleSubmitBtn}
            onCancel={resetAndCloseModal}
            maskClosable={false}
            okText={loading ? "Uploading..." : "Upload"}
            confirmLoading={loading}
        >
        <div className="input">
            <div>
                <div>Image</div>
                <div>
                    <label htmlFor="btnUpload" className="image">Upload</label>
                    <input
                        type="file"
                        hidden
                        id="btnUpload"
                        onChange={handleOnChangeFile}
                        onClick={(e) => (e.target.value = null)}
                    />
                </div>
                {preview && (
                    <div style={{ marginTop: "10px", marginBottom: "15px", height: "100px", width: "150px" }}>
                        <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={preview} alt="Preview" />
                    </div>
                )}
            </div>
        </div>
        </Modal>
    );
};

export default UploadImg;