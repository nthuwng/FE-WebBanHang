import React, { useEffect, useState } from "react";
import { 
  Modal, 
  notification, 
  Upload, 
  Button, 
  Typography, 
  Spin, 
  Empty, 
  Space,
  Image
} from "antd";
import { 
  UploadOutlined, 
  InboxOutlined, 
  EyeOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { handleUploadFile } from "../../../../../services/api.service";

const { Dragger } = Upload;
const { Title, Text } = Typography;

const UploadImg = (props) => {
  const { isModalUploadOpen, setIsModalUploadOpen, dataupload, loadProduct, setUploadImg } = props;
  
  const [_id, setId] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (dataupload) {
      setId(dataupload._id);
      setProductName(dataupload.name || "Product");
    }
  }, [dataupload]);

  const handleFileChange = (info) => {
    if (info.file.status === 'removed') {
      setFile(null);
      setPreview(null);
      return;
    }

    const selectedFile = info.file.originFileObj;
    if (!selectedFile) return;
    
    setFile(selectedFile);

    // Generate preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      notification.error({
        message: "Upload Failed",
        description: "Please select an image before uploading.",
        placement: "topRight"
      });
      return;
    }

    setLoading(true);

    try {
      const resUpload = await handleUploadFile(file, "product", _id);
      console.log("resUpload", resUpload);
      if (resUpload?.data?.file) {
        notification.success({
          message: "Upload Successful",
          description: "The product image has been updated successfully.",
          placement: "topRight"
        });
        resetAndCloseModal();
        await loadProduct();
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      notification.error({
        message: "Upload Error",
        description: error.message || "An error occurred while uploading the image.",
        placement: "topRight"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUploadOpen(false);
    setFile(null);
    setPreview(null);
    setUploadImg(null);
  };

  const uploadProps = {
    name: 'file',
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        notification.error({
          message: 'Invalid File',
          description: 'You can only upload image files!',
        });
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        notification.error({
          message: 'File too large',
          description: 'Image must be smaller than 2MB!',
        });
      }
      return isImage && isLt2M ? false : Upload.LIST_IGNORE;
    },
    onChange: handleFileChange,
    showUploadList: false,
  };

  return (
    <Modal
      title={<Title level={4}>Upload Image for "{productName}"</Title>}
      open={isModalUploadOpen}
      onCancel={resetAndCloseModal}
      maskClosable={false}
      width={600}
      footer={[
        <Button key="cancel" onClick={resetAndCloseModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
          disabled={!file}
          icon={<UploadOutlined />}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </Button>
      ]}
    >
      <Spin spinning={loading}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Dragger {...uploadProps} style={{ padding: '20px 0' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag image to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single image upload. Please use images less than 2MB.
            </p>
          </Dragger>
          
          {preview ? (
            <div style={{ textAlign: 'center' }}>
              <Title level={5}>Preview</Title>
              <Image
                src={preview}
                alt="Preview"
                style={{ maxHeight: 200, maxWidth: '100%' }}
              />
              <div style={{ marginTop: 10 }}>
                <Button 
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          ) : (
            <Empty 
              description="No image selected" 
              image={Empty.PRESENTED_IMAGE_SIMPLE} 
            />
          )}
        </Space>
      </Spin>
    </Modal>
  );
};

export default UploadImg;