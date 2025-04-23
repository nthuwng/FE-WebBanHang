import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { AuthContext } from "../../../components/context/auth.context";
import { CartContext } from "../../../components/context/cart.context";
import {
  deleteCart_details,
  getCartByUserIDServices,
  getCart_details_ByUserId,
  putUpdateCart_detailsServices,
} from "../../../services/api.service";
import { Button, InputNumber, notification } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ShoppingCartOutlined } from "@ant-design/icons";

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
      <div className="login-container_cartPage">
        <div className="login-content_cartPage">
          <div className="login-icon_cartPage">
            <svg
              width="64"
              height="64"
              fill="none"
              stroke="#6b7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m0 0v2m0-2h2m-2 0H8m10-6a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h2 className="login-title_cartPage">Bạn chưa đăng nhập</h2>
          <p className="login-message_cartPage">
            Vui lòng đăng nhập để xem giỏ hàng của bạn
          </p>
        </div>
        <div className="login-actions_cartPage">
          <Link to="/login" className="login-link_cartPage">
            <Button type="primary" className="login-button_cartPage">
              <span className="login-button_cartPage-icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              Đăng nhập
            </Button>
          </Link>
          <Link to="/" className="home-link_cartPage">
            <Button className="home-button_cartPage">Quay lại trang chủ</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h2 className="empty-cart-title">Chưa có sản phẩm trong giỏ hàng</h2>
        <p className="empty-cart-message">
          Hãy thêm một vài sản phẩm vào giỏ hàng của bạn và quay lại đây.
        </p>
        <Link to="/products">
          <Button type="primary" className="continue-shopping-button">
            <ShoppingCartOutlined />
            Tiếp tục mua sắm
          </Button>
        </Link>
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
      <div className="cart-summary-container">
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

          <p className="summary-row">
            <span className="summary-label">Subtotal:</span>
            <span className="summary-value">{subtotal.toLocaleString()}₫</span>
          </p>

          <p className="summary-row">
            <span className="summary-label">Shipping:</span>
            <span className="summary-value">Free</span>
          </p>

          <div className="total-Totalmoney">
            <span className="total-label">Total:</span>
            <span className="total-value">{subtotal.toLocaleString()}₫</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <button className="checkout-button">
              <span className="checkout-text">Proceed to checkout</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
