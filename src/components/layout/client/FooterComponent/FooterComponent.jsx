import "./FooterComponent.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="footer-column">
          <li>
            <a href="">Exclusive</a>
            <ul className="footer-column-1">
              <li>
                <a href="">Subscribe</a>
              </li>
              <li>
                <a href="">Get 10% off your first order</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Support</a>
            <ul className="footer-column-2">
              <li>
                <a href="">111 Phucdeptrai, Dhaka</a>
              </li>
              <li>
                <a href="">Exclusive@gmail.com</a>
              </li>
              <li>
                <a href="">Number: 88015-88888-9999</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Account</a>
            <ul className="footer-column-3">
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="/login">Login / Register</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Quick Link</a>
            <ul className="footer-column-4">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Download App</a>
            <ul className="footer-column-5">
              <li>
                <a href="">Save $3 With App User Only</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
