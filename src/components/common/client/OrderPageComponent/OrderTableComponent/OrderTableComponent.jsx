import { MapPin } from "lucide-react";
import React from "react";

const OrderTableComponent = (props) => {
  const { formatCurrency, selectedOrder, safeRenderText, orderDetails } = props;
  return (
    <>
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
                    {safeRenderText(orderDetail.product?.name) || "Sản phẩm"}
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
                : safeRenderText(selectedOrder.total_price) || "Chưa cập nhật"}
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
  );
};

export default OrderTableComponent;
