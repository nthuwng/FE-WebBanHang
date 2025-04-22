import { Space, Table, Tag, Tooltip } from 'antd';

import { useEffect, useState } from 'react';
import React from "react";

import {
  DeleteOutlined,
  EditOutlined,
  FileImageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { fetchProductManagementAPI  } from '../../../services/api.service';
import ProductCreate from '../../../components/common/admin/AdminProduct/ProductCreate/ProductCreate';
import UploadImg from '../../../components/common/admin/AdminProduct/uploadImg/Img';
import DeleteProduct from '../../../components/common/admin/AdminProduct/ProductDelete/ProductDelete';
import ProductUpdate from '../../../components/common/admin/AdminProduct/ProductUpdate/ProductUpdate';
import ProductHeader from '../../../components/common/admin/AdminProduct/ProductHeader/ProductHeader';




const AdminProductPage = (props) => {
  const { current, pageSize, setCurrent, setPageSize, total } = props;

  const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
  const [uploadImg, setUploadImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [dataProduct, setDataProduct] = useState([]);
   
  useEffect(() => {
    loadProduct();
  }, []);

  const onChange = (pagination) => {
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };

  const columns = [
    {
      title: 'Id',
      key: '_id',
      render: (_, record) => <a href="#">{record._id}</a>,
    },
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <Tooltip title="Thêm hình ảnh">
            <FileImageOutlined
              onClick={() => {
                setSelectedProduct(record); 
          
                setIsModalUploadOpen(true); 
              }}
              style={{ cursor: 'pointer', color:"green" }}
            />
          </Tooltip>

          <Tooltip title="Cập nhật sản phẩm">
            <EditOutlined
              onClick={() => {
                setSelectedProduct(record); 
                setIsModalUpdateOpen(true);
              }}
              style={{ cursor: 'pointer', color: "blue" }}
            />
          </Tooltip>

          <Tooltip title="Xoá sản phẩm">
            <DeleteOutlined
              onClick={() => {
                setSelectedProduct(record); 
                setIsModalDeleteOpen(true);
              }}
              style={{ cursor: 'pointer', color: "red" }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const loadProduct = async () => {
    const res = await fetchProductManagementAPI();
    setDataProduct(res.data);
  };

  return (
    <>

      <ProductCreate
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        loadProduct={loadProduct}
        dataupload={selectedProduct}
      />

      <Table
        columns={columns}
        dataSource={dataProduct}
        rowKey="_id"
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (<div>{range[0]}-{range[1]} trên {total} rows</div>);
          }
        }}
        onChange={onChange}
      />

      <UploadImg
        isModalUploadOpen={isModalUploadOpen}
        setIsModalUploadOpen={setIsModalUploadOpen}
        setUploadImg={setUploadImg}
        uploadImg={uploadImg}
        loadProduct={loadProduct} 
        dataupload={selectedProduct}
      />
      <ProductUpdate
      setIsModalUpdateOpen={setIsModalUpdateOpen}
      isModalUpdateOpen={isModalUpdateOpen}
      dataupload={selectedProduct}
      loadProduct={loadProduct} 
  />
      <DeleteProduct
      isModalDeleteOpen={isModalDeleteOpen}
      setIsModalDeleteOpen={setIsModalDeleteOpen}
      dataupload={selectedProduct}
      loadProduct={loadProduct} 
     
      />
    </>
  );
};

export default AdminProductPage;
