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
      } else {
        api.info({
          message: `Thông báo`,
          description: "Bạn chưa có đơn hàng nào",
          placement: "top",
        });
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
    <div className="container-fllowOrder">
      {contextHolder}
      <div className="header">
        <h1 className="title">Theo Dõi Đơn Hàng</h1>

        {orders.length > 1 && (
          <div className="order-selector">
            <label htmlFor="orderSelect">Chọn đơn hàng:</label>
            <select
              id="orderSelect"
              className="order-select"
              value={selectedOrder?._id || ""}
              onChange={(e) => handleOrderChange(e.target.value)}>
              {orders.map((order) => (
                <option key={order._id} value={order._id}>
                  {order._id.substring(0, 8)}... -{" "}
                  {safeRenderText(order.create_at)}
                </option>
              ))}
            </select>
          </div>
        )}
        <Button onClick={handldeDeleteOrder}>Xóa đơn hàng</Button>
      </div>

      {selectedOrder && (
        <>
          <div className="order-info-bar">
            <div className="order-id">
              <MapPin size={20} className="icon purple" />
              <span className="order-number">Mã đơn: {selectedOrder._id}</span>
            </div>
            <span className="order-date">
              Ngày đặt: {safeRenderText(selectedOrder.create_at)}
            </span>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="section-title">Trạng thái đơn hàng</h2>
              <span className={`status-badge ${selectedOrder.status}`}>
                {selectedOrder.status === "pending" && "Chờ xác nhận"}
                {selectedOrder.status === "processing" && "Đang xử lý"}
                {selectedOrder.status === "shipping" && "Đang vận chuyển"}
                {selectedOrder.status === "completed" && "Đã giao hàng"}
                {!["pending", "processing", "shipping", "completed"].includes(
                  selectedOrder.status
                ) && safeRenderText(selectedOrder.status)}
              </span>
            </div>

            <div className="tracking-container">
              <div className="tracking-steps">
                {trackingSteps.map((step, index) => {
                  const orderStatuses = [
                    "pending",
                    "processing",
                    "shipping",
                    "completed",
                  ];
                  const currentStatusIndex = orderStatuses.indexOf(
                    selectedOrder.status
                  );
                  const stepIndex = orderStatuses.indexOf(step.status);
                  const isCompleted = stepIndex <= currentStatusIndex;

                  return (
                    <div key={step.id} className="tracking-step">
                      <div
                        className={`step-icon ${
                          isCompleted ? "completed" : ""
                        }`}>
                        {index === 0 && (
                          <CheckCircle
                            size={24}
                            className={isCompleted ? "icon-white" : "icon-gray"}
                          />
                        )}
                        {index === 1 && (
                          <Package
                            size={24}
                            className={isCompleted ? "icon-white" : "icon-gray"}
                          />
                        )}
                        {index === 2 && (
                          <Truck
                            size={24}
                            className={isCompleted ? "icon-white" : "icon-gray"}
                          />
                        )}
                        {index === 3 && (
                          <CheckCircle
                            size={24}
                            className={isCompleted ? "icon-white" : "icon-gray"}
                          />
                        )}
                      </div>
                      <p className="step-name">{step.name}</p>
                      {isCompleted && (
                        <span className="step-date">
                          {safeRenderText(
                            selectedOrder.update_at || selectedOrder.create_at
                          )}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="progress-line">
                <div
                  className="progress-completed"
                  style={{
                    width: `${getOrderProgress(selectedOrder.status)}%`,
                  }}></div>
              </div>
            </div>

            <div className="delivery-estimate">
              <Clock size={18} className="icon-small" />
              <p>
                Dự kiến giao hàng:{" "}
                <span className="bold">
                  {safeRenderText(selectedOrder.expected_delivery_date)}
                </span>
              </p>
            </div>
          </div>

          <div className="two-columns">
            <div className="card">
              <h2 className="section-title">Chi tiết đơn hàng</h2>
              <div className="order-details">
                <div className="detail-row">
                  <span className="detail-label">Ngày đặt hàng:</span>
                  <span>{safeRenderText(selectedOrder.create_at)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Phương thức thanh toán:</span>
                  <span>
                    {safeRenderText(selectedOrder.payment_method.name) ||
                      "Tiền mặt"}
                  </span>
                </div>
              </div>

              <h3 className="subsection-title">Sản phẩm</h3>
              {orderDetails &&
              Array.isArray(orderDetails) &&
              orderDetails.length > 0 ? (
                orderDetails.map((orderDetail, index) => (
                  <div key={index} className="product-item">
                    <div>
                      <p className="product-name">
                        {safeRenderText(orderDetail.product?.name) ||
                          "Sản phẩm"}
                      </p>
                      <p className="product-quantity">
                        Số lượng: {orderDetail.quantity || 1}
                      </p>
                    </div>
                    <p className="product-price">
                      {orderDetail.product?.price
                        ? formatCurrency(orderDetail.product.price)
                        : "Chưa cập nhật"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="product-item">
                  <div>
                    <p className="product-name">
                      Đơn hàng #{selectedOrder._id.substring(0, 8)}
                    </p>
                    <p className="product-quantity">
                      Chi tiết sản phẩm chưa được cập nhật
                    </p>
                  </div>
                </div>
              )}

              <div className="order-total">
                <span>Tổng cộng:</span>
                <span>
                  {orderDetails &&
                  Array.isArray(orderDetails) &&
                  orderDetails.length > 0
                    ? formatCurrency(
                        orderDetails.reduce((total, orderDetail) => {
                          return (
                            total +
                            (orderDetail.product?.price || 0) *
                              (orderDetail.quantity || 1)
                          );
                        }, 0)
                      )
                    : safeRenderText(selectedOrder.total_price) ||
                      "Chưa cập nhật"}
                </span>
              </div>
            </div>

            <div className="card">
              <h2 className="section-title">Thông tin giao hàng</h2>
              <div className="shipping-info">
                <div className="info-group">
                  <h3 className="info-label">Họ tên:</h3>
                  <p>
                    {selectedOrder.user && selectedOrder.user.full_name
                      ? safeRenderText(selectedOrder.user.full_name)
                      : user && user.fullname
                      ? safeRenderText(user.fullname)
                      : "Chưa cập nhật"}
                  </p>
                </div>
                <div className="info-group">
                  <h3 className="info-label">Email:</h3>
                  <p>
                    {selectedOrder.user && selectedOrder.user.email
                      ? safeRenderText(selectedOrder.user.email)
                      : user && user.email
                      ? safeRenderText(user.email)
                      : "Chưa cập nhật"}
                  </p>
                </div>
                <div className="info-group">
                  <h3 className="info-label">Địa chỉ giao hàng:</h3>
                  <p>
                    {selectedOrder.shipping_address &&
                    selectedOrder.shipping_address.address
                      ? safeRenderText(selectedOrder.shipping_address.address)
                      : "Chưa cập nhật"}
                  </p>
                </div>
                <div className="info-group">
                  <h3 className="info-label">Số điện thoại:</h3>
                  <p>
                    {selectedOrder.shipping_address &&
                    selectedOrder.shipping_address.phone
                      ? safeRenderText(selectedOrder.shipping_address.phone)
                      : user && user.phone
                      ? safeRenderText(user.phone)
                      : "Chưa cập nhật"}
                  </p>
                </div>
              </div>

              <div className="map-link">
                <a href="#" className="link">
                  <MapPin size={18} className="icon-small purple" />
                  Xem vị trí giao hàng
                </a>
              </div>
            </div>
          </div>
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
