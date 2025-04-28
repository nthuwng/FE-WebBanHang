import { CheckCircle, Clock, Package, Truck } from "lucide-react";
import React from "react";

const OrderCard = (props) => {
  const { selectedOrder, safeRenderText, trackingSteps, getOrderProgress } =
    props;
  return (
    <>
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
                    className={`step-icon ${isCompleted ? "completed" : ""}`}>
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
    </>
  );
};

export default OrderCard;
