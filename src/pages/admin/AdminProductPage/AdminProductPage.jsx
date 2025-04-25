import React, { useEffect, useState } from "react";
import {
  Space,
  Table,
  Tag,
  Tooltip,
  Button,
  Input,
  Card,
  Typography,
  Breadcrumb,
  Row,
  Col,
  Badge,
  Statistic,
  Divider,
  Flex,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FileImageOutlined,
  SearchOutlined,
  PlusOutlined,
  ReloadOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { fetchProductManagementAPI } from "../../../services/api.service";
import ProductCreate from "../../../components/common/admin/AdminProduct/ProductCreate/ProductCreate";
import UploadImg from "../../../components/common/admin/AdminProduct/uploadImg/Img";
import DeleteProduct from "../../../components/common/admin/AdminProduct/ProductDelete/ProductDelete";
import ProductUpdate from "../../../components/common/admin/AdminProduct/ProductUpdate/ProductUpdate";
import "./AdminProductPage.css";

const { Title } = Typography;
const { Search } = Input;

const AdminProductPage = (props) => {
  const { current, pageSize, setCurrent, setPageSize, total } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
  const [uploadImg, setUploadImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dataProduct, setDataProduct] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [current, pageSize]);

  const loadProduct = async () => {
    setIsLoading(true);
    setTableLoading(true);
    try {
      const res = await fetchProductManagementAPI();
      setDataProduct(res.data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setIsLoading(false);
      setTableLoading(false);
    }
  };

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

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredProducts = dataProduct.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusTag = (quantity) => {
    if (quantity <= 0) {
      return <Tag color="red">Out of Stock</Tag>;
    } else if (quantity < 10) {
      return <Tag color="orange">Low Stock</Tag>;
    } else {
      return <Tag color="green">In Stock</Tag>;
    }
  };

  const columns = [
    {
      title: "ID",
      key: "_id",
      render: (_, record) => (
        <Typography.Text copyable ellipsis={{ tooltip: record._id }}>
          {record._id.substring(0, 8)}...
        </Typography.Text>
      ),
    },
    {
      title: "Product Name",
      key: "name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (price) => {
        const usdToVnd = 23500; // Tỷ giá USD sang VND, có thể thay đổi theo tỷ giá thực tế
        const priceInVND = parseFloat(price);
        return `${priceInVND.toLocaleString("vi-VN")} VND`;
        // {product.price.toLocaleString()}₫ // Hiển thị giá trị bằng VND
      },
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
      render: (quantity) => (
        <Space>
          {quantity}
          {getStatusTag(quantity)}
        </Space>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => {
        const { quantity } = record;
        return (
          <Badge
            status={
              quantity > 10 ? "success" : quantity > 0 ? "warning" : "error"
            }
            text={
              quantity > 10 ? "Active" : quantity > 0 ? "Limited" : "Inactive"
            }
          />
        );
      },
    },
    {
      title: "Actions",
      key: "action",
      width: 160,
      render: (record) => (
        <Flex gap="small">
          <Button
            icon={<FileImageOutlined />}
            type="primary"
            ghost
            onClick={() => {
              setSelectedProduct(record);
              setIsModalUploadOpen(true);
            }}
            size="small"
          />

          <Button
            icon={<EditOutlined />}
            type="primary"
            onClick={() => {
              setSelectedProduct(record);
              setIsModalUpdateOpen(true);
            }}
            size="small"
          />

          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => {
              setSelectedProduct(record);
              setIsModalDeleteOpen(true);
            }}
            size="small"
          />
        </Flex>
      ),
    },
  ];

  const summaryStats = [
    {
      title: "Total Products",
      value: dataProduct.length,
      prefix: <AppstoreOutlined />,
    },
    {
      title: "In Stock",
      value: dataProduct.filter((p) => p.quantity > 0).length,
      prefix: <Tag color="green">Active</Tag>,
    },
    {
      title: "Out of Stock",
      value: dataProduct.filter((p) => p.quantity <= 0).length,
      prefix: <Tag color="red">Inactive</Tag>,
    },
  ];

  return (
    <div className="admin-product-container">
      <Breadcrumb
        items={[
          {
            title: (
              <>
                <HomeOutlined /> Home
              </>
            ),
          },
          {
            title: (
              <>
                <DashboardOutlined /> Dashboard
              </>
            ),
          },
          { title: "Product Management" },
        ]}
        className="admin-breadcrumb"
      />

      <Card className="admin-content-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Flex justify="space-between" align="center">
              <Title level={2}>Product Management</Title>

              <Space>
                <Button
                  icon={<ReloadOutlined />}
                  onClick={loadProduct}
                  loading={isLoading}>
                  Refresh
                </Button>

                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setIsModalOpen(true)}>
                  Add Product
                </Button>
              </Space>
            </Flex>
          </Col>

          {/* Stats Row */}
          <Col span={24}>
            <Row gutter={16}>
              {summaryStats.map((stat, index) => (
                <Col xs={24} sm={8} key={index}>
                  <Card>
                    <Statistic
                      title={stat.title}
                      value={stat.value}
                      prefix={stat.prefix}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Search & Filter Bar */}
          <Col span={24}>
            <Card className="filter-card">
              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Search
                    placeholder="Search by product name"
                    allowClear
                    enterButton={<SearchOutlined />}
                    size="large"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSearch={handleSearch}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Data Table */}
          <Col span={24}>
            <Card className="table-card">
              <Table
                columns={columns}
                dataSource={filteredProducts}
                rowKey="_id"
                loading={tableLoading}
                pagination={{
                  current: current,
                  pageSize: pageSize,
                  showSizeChanger: true,
                  total: total || filteredProducts.length,
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`,
                  pageSizeOptions: ["10", "20", "50", "100"],
                }}
                onChange={onChange}
                scroll={{ x: "max-content" }}
                expandable={{
                  expandedRowRender: (record) => (
                    <div style={{ margin: 0 }}>
                      <p>
                        <strong>Description:</strong>{" "}
                        {record.description || "No description available"}
                      </p>
                      <p>
                        <strong>Factory:</strong> {record.factory || "N/A"}
                      </p>
                      <p>
                        <strong>Category:</strong>{" "}
                        {record.category || "Uncategorized"}
                      </p>
                    </div>
                  ),
                }}
              />
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Modals */}
      <ProductCreate
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        loadProduct={loadProduct}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
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
    </div>
  );
};

export default AdminProductPage;
