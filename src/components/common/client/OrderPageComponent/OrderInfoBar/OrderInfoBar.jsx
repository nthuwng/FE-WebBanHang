import { MapPin } from "lucide-react";
import React from "react";

const OrderInfoBar = (props) => {
  const { selectedOrder, safeRenderText } = props;
  return (
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
    </>
  );
};

export default OrderInfoBar;
