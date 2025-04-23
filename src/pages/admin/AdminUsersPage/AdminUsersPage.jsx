import { Popconfirm, Space, Table, Tag, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import React from 'react';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from '../../../components/common/admin/AdminUsers/UserUpdate/AdminUpdate';
import DeleteUserModal from '../../../components/common/admin/AdminUsers/UserDelete/AdminDelete';
import UserCreate from '../../../components/common/admin/AdminUsers/UserCreate/UserCreate';
import { fetchUsertAPI } from '../../../services/api.service';

const AdminUsersPage = (props) => {
  const { current, pageSize, setCurrent, setPageSize, total } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDelete, setDataDelete] = useState(null);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dataUsers, setDataUsers] = useState([]);

  const onChange = (pagination) => {
    if (pagination?.current && +pagination.current !== +current) {
      setCurrent(+pagination.current);
    }
    if (pagination?.pageSize && +pagination.pageSize !== +pageSize) {
      setPageSize(+pagination.pageSize);
    }
  };

  const loadUser = async () => {
    const res = await fetchUsertAPI();
    console.log("test api ", res.data);
    setDataUsers(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const filteredUsers = dataUsers.filter((user) => {
    const keyword = searchTerm.toLowerCase();
    return (
      (user?.full_name || "").toLowerCase().includes(keyword)
    );
  });

  const columns = [
    {
      title: 'Id',
      key: '_id',
      render: (_, record) => <a href="#">{record._id}</a>,
    },
    {
      title: 'Tên đăng nhập',
      key: 'full_name',
      dataIndex: 'full_name',
    },
    {
      title: 'Địa chỉ',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Quyền',
      key: 'Quyền',
      render: (_, record) => <div>{record?.role?.name}</div>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <Tooltip title="Cập nhật">
            <EditOutlined
              onClick={() => {
                setDataUpdate(record);
                setIsModalUpdateOpen(true);
              }}
              style={{ cursor: 'pointer', color: "blue" }}
            />
          </Tooltip>
          <Tooltip title="Xóa dữ liệu">
            <DeleteOutlined
              onClick={() => {
                setDataDelete(record);
                setIsModalDeleteOpen(true);
              }}
              style={{ cursor: 'pointer', color: "red" }}
            />
          </Tooltip>
        </div>
      ),
    }
  ];

  return (
    <>
      <UserCreate
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        loadUser={loadUser}
        dataupload={selectedUser}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey="_id"
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => (
            <div>{range[0]}-{range[1]} trên {total} rows</div>
          ),
        }}
        onChange={onChange}
      />

      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />

      <DeleteUserModal
        isModalDeleteOpen={isModalDeleteOpen}
        setIsModalDeleteOpen={setIsModalDeleteOpen}
        dataDelete={dataDelete}
        setDataDelete={setDataDelete}
        loadUser={loadUser}
      />
    </>
  );
};

export default AdminUsersPage;