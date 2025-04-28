import { Button, InputNumber } from "antd";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPageItems = (props) => {
  const { cart, updateQuantity, handleDelete } = props;
  return (
    <>
      <div className="cart-page-items">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{item.product.name}</td>
                <td>{item.product.price.toLocaleString()}₫</td>
                <td>
                  <InputNumber
                    value={item.quantity}
                    onChange={(value) => updateQuantity(item._id, value)}
                    min={1}
                    step={1}
                    formatter={(value) => `${value}`}
                    parser={(value) => parseInt(value.replace(/\D/g, ""), 10)}
                  />
                </td>
                <td>
                  {(item.product.price * item.quantity).toLocaleString()}₫
                </td>
                <td>
                  <Button onClick={() => handleDelete(item._id)}>
                    <RiDeleteBin6Line fontSize={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartPageItems;
