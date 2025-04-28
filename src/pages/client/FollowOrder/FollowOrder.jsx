import React, { useState, useEffect, useContext } from "react";
import {
  MapPin,
  Package,
  Truck,
  CheckCircle,
  Clock,
  ShoppingBag,
} from "lucide-react";
import "./FollowOrder.css";
import { AuthContext } from "../../../components/context/auth.context";
import {
  deleteOrderAPI,
  getOrderByUserIDAPI,
  getOrderDetailByOrderID,
} from "../../../services/api.service";
import { Button, notification } from "antd";
import LoadingLoginUser from "../../../components/common/client/LoadingLoginUser/LoadingLoginUser";
import { Link, useNavigate } from "react-router-dom";
import OrderPageHeader from "../../../components/common/client/OrderPageComponent/OrderPageHeader/OrderPageHeader";
import OrderInfoBar from "../../../components/common/client/OrderPageComponent/OrderInfoBar/OrderInfoBar";
import OrderCard from "../../../components/common/client/OrderPageComponent/OrderCard/OrderCard";
import OrderTableComponent from "../../../components/common/client/OrderPageComponent/OrderTableComponent/OrderTableComponent";
const FollowOrder = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  useEffect(() => {
    if (orderDetails) {
    }
  }, [orderDetails]);

  const fetchOrderDetails = async (orderId) => {
    try {
      setLoading(true);
      const response = await getOrderDetailByOrderID(orderId);

      if (response && response.data) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setOrderDetails(response.data);
        } else if (typeof response.data === "object" && response.data.product) {
          setOrderDetails([response.data]);
        } else {
          console.log("Không tìm thấy chi tiết đơn hàng.");
          setOrderDetails(null);
        }
      } else {
        console.log("Không có dữ liệu trả về từ API");
        setOrderDetails(null);
      }
    } catch (error) {
      console.error("Lỗi khi tải chi tiết đơn hàng:", error);
      api.error({
        message: `Lỗi`,
        description: "Không thể tải chi tiết đơn hàng",
      });
      setOrderDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const loadOrdersByUser = async () => {
    if (!user || !user._id) {
      api.error({
        message: `Lỗi đăng nhập`,
        description: "Bạn chưa đăng nhập, mời đăng nhập",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await getOrderByUserIDAPI(user._id);

      if (res.data && res.data.length > 0) {
        setOrders(res.data);
        setSelectedOrder(res.data[0]);

        await fetchOrderDetails(res.data[0]._id);
      }
    } catch (error) {
      console.error("Failed to load orders:", error);
      api.error({
        message: `Lỗi`,
        description: "Không thể tải thông tin đơn hàng",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      loadOrdersByUser();
    }, 500);
  }, []);

  const handleOrderChange = async (orderId) => {
    const selected = orders.find((order) => order._id === orderId);
    setSelectedOrder(selected);
    await fetchOrderDetails(orderId);
  };

  if (!user || !user._id) {
    return <LoadingLoginUser />;
  }

  if (orders.length === 0) {
    return (
      <div className="container-emptyOrder">
        {contextHolder}
        <div className="empty-orders">
          <ShoppingBag size={64} className="icon-gray" />
          <h2>Bạn chưa có đơn hàng nào</h2>
          <p>Hãy tiếp tục mua sắm để tạo đơn hàng mới</p>
          <button
            className="btn primary"
            onClick={() => (window.location.href = "/products")}>
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    );
  }

  const getOrderProgress = (status) => {
    switch (status) {
      case "pending":
        return 25;
      case "processing":
        return 50;
      case "shipping":
        return 75;
      case "completed":
        return 100;
      default:
        return 25;
    }
  };

  const trackingSteps = [
    { id: 1, name: "Đã xác nhận", status: "pending" },
    { id: 2, name: "Đang chuẩn bị", status: "processing" },
    { id: 3, name: "Đang vận chuyển", status: "shipping" },
    { id: 4, name: "Đã giao hàng", status: "completed" },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  // Ensure we're safely handling object values before rendering
  const safeRenderText = (text) => {
    if (text === null || text === undefined) return "Chưa cập nhật";
    if (typeof text === "object") return JSON.stringify(text);
    return text;
  };
  const handldeDeleteOrder = async () => {
    try {
      setLoading(true);
      const res = await deleteOrderAPI(selectedOrder._id);
      if (res.data) {
        api.success({
          message: "Thành công",
          description: "Xóa đơn hàng thành công bạn sẽ quay lại trang sản phẩm",
          placement: "topRight",
        });
        setTimeout(() => {
          navigate("/products");
        }, 3000);
      } else {
        api.error({
          message: "Lỗi",
          description: res.message || "Đã có lỗi xảy ra khi xóa đơn hàng",
          placement: "topRight",
        });
      }
    } catch (error) {
      api.error({
        message: "Lỗi",
        description: error.message || "Đã có lỗi xảy ra khi xóa đơn hàng",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container-followOrder">
      {contextHolder}
      <OrderPageHeader
        orders={orders}
        selectedOrder={selectedOrder}
        handleOrderChange={handleOrderChange}
        handldeDeleteOrder={handldeDeleteOrder}
        safeRenderText={safeRenderText}
      />

      {selectedOrder && (
        <>
          <OrderInfoBar
            selectedOrder={selectedOrder}
            safeRenderText={safeRenderText}
          />

          <OrderCard
            selectedOrder={selectedOrder}
            safeRenderText={safeRenderText}
            trackingSteps={trackingSteps}
            getOrderProgress={getOrderProgress}
          />

          <OrderTableComponent
            selectedOrder={selectedOrder}
            safeRenderText={safeRenderText}
            orderDetails={orderDetails}
            formatCurrency={formatCurrency}
          />
        </>
      )}

      <div className="actions">
        <button
          className="btn secondary"
          onClick={() => (window.location.href = "/")}>
          Quay lại trang chủ
        </button>
        <button
          className="btn primary"
          onClick={() => window.alert("Đã liên hệ với bộ phận hỗ trợ!")}>
          Liên hệ hỗ trợ
        </button>
      </div>
    </div>
  );
};

export default FollowOrder;
