import { Button } from "antd";
import React from "react";

const OrderPageHeader = (props) => {
  const {
    orders,
    selectedOrder,
    handleOrderChange,
    handldeDeleteOrder,
    safeRenderText,
  } = props;
  return (
    <>
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
    </>
  );
};

export default OrderPageHeader;
