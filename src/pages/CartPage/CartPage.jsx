import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { AuthContext } from "../../components/context/auth.context";
import { getCart_details_ByUserId } from "../../services/api.service";

const CartPage = () => {
  const { user } = useContext(AuthContext); // Lấy user từ context
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy cart details khi component được render
  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const response = await getCart_details_ByUserId(user._id);
        console.log("Cart details:", response);
        setCart(response.data); // Lưu dữ liệu giỏ hàng vào state
      } catch (error) {
        console.error("Error fetching cart details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCartDetails(); // Gọi API khi có user
    }
  }, [user]);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-page">
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
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="product-image"
                  />
                  {item.product.name}
                </td>
                <td>${item.product.price}</td>
                <td>
                  <input
                    className="Quantity-number"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item._id, parseInt(e.target.value))
                    }
                    min="1"
                  />
                </td>
                <td>${item.product.price * item.quantity}</td>
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
        <button className="Update-Cart">Update Cart</button>
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
