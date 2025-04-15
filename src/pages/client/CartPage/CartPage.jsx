import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { AuthContext } from "../../../components/context/auth.context";
import {
  deleteCart_details,
  getCartByUserIDServices,
  getCart_details_ByUserId,
  putUpdateCart_detailsServices,
} from "../../../services/api.service";
import { Button, InputNumber, notification } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../../../components/context/cart.context";

const CartPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);
  const [api, contextHolder] = notification.useNotification(); // dùng để hiển thị thông báo

  // const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy cart details khi component được render
  useEffect(() => {
    if (user && user._id) {
      fetchCartDetails();
    } else {
      setCart([]);
    }
  }, [user]);
  const fetchCartDetails = async () => {
    if (!user || !user._id) {
      console.warn("No user or user ID, skipping fetchCartDetails");
      return;
    }
    try {
      const response = await getCart_details_ByUserId(user._id);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart details:", error);
    } finally {
      setLoading(false);
    }
  };
  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div
        className="loading_CartPage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "400px",
        }}>
        <div>
          <p style={{ fontSize: "25px", marginBottom: "10px" }}>
            Bạn chưa đăng nhập mời đăng nhập
          </p>
        </div>
        <div>
          <Link to="/login" className="login-link">
            <Button type="primary" className="loading_CartPage_button_navigate">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleUpdateCartDetail = async () => {
    try {
      // Duyệt qua tất cả các mục trong giỏ hàng và gọi API để cập nhật từng mục
      for (const item of cart) {
        const res = await putUpdateCart_detailsServices(
          item._id,
          item.product._id,
          item.quantity
        );
        console.log("Update response:", res);
      }
      // Sau khi cập nhật, có thể tải lại giỏ hàng hoặc cập nhật lại state (nếu cần)
      fetchCartDetails(); // Gọi lại để đảm bảo dữ liệu mới nhất
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleDelete = async (item) => {
    try {
      const res = await deleteCart_details(item, user._id);

      //gọi API để lấy lại giỏ hàng mới
      const cartRes = await getCartByUserIDServices(user._id);
      setUser((prevUser) => ({
        ...prevUser,
        cart: cartRes.data, // Dữ liệu giỏ hàng mới từ API
      }));

      if (res.errorCode === 0) {
        api.success({
          message: `Xóa sản phẩm thành công`,
          description: "Bạn vừa xóa sản phẩm",
          placement: "top",
        });
        await fetchCartDetails();
      } else {
        console.warn("Không xoá được sản phẩm:", res.data);
      }
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  };

  return (
    <div className="cart-page">
      {contextHolder}
      <div className="cart-page-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/carts">Cart</Link>
        <div className="cart-summary">
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-coupon">Apply Coupon</button>
          </div>
        </div>
      </div>
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
                <td>${item.product.price}</td>
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
                <td>${item.product.price * item.quantity}</td>
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
      <div className="Home-and-Update">
        <button className="Return-To-Home">
          <Link to="/" className="Return-To-Home-text">
            Return To Home
          </Link>
        </button>
        <button
          className="Update-Cart"
          onClick={() => {
            handleUpdateCartDetail();
          }}>
          Update Cart
        </button>
      </div>
      <div className="total">
        <div className="Cart-Total">Cart Total</div>
        <p>
          <span>Subtotal:</span> <span>${subtotal}</span>
        </p>
        <p>
          <span>Shipping:</span> <span>Free</span>
        </p>
        <div className="total-Totalmoney">
          <span>Total:</span> <span>${subtotal}</span>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
