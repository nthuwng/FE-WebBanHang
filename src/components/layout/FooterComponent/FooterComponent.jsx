import "./FooterComponent.css";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="footer-column">
          <li><a href="">Exclusive</a>
            <ul className="footer-column-1">
              <li><a href="">Subscribe</a></li>
              <li><a href="">Get 10% off your first order</a></li>
            </ul>
          </li>
          <li><a href="">Support</a>
            <ul className="footer-column-2">
              <li><a href="">111 Phucdeptrai, Dhaka</a></li>
              <li><a href="">Exclusive@gmail.com</a></li>
              <li><a href="">Number: 88015-88888-9999</a></li>
            </ul>
          </li>
          <li><a href="">Account</a>
            <ul className="footer-column-3">
              <li><a href="">My Account</a></li>
              <li><a href="/login">Login / Register</a></li>
              <li><a href="">Cart</a></li>
              <li><a href="">Wishlist</a></li>
              <li><a href="">Shop</a></li>
            </ul>
          </li>
          <li><a href="">Quick Link</a>
            <ul className="footer-column-4">
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms Of Use</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </li>
          <li><a href="">Download App</a>
            <ul className="footer-column-5">
              <li><a href="">Save $3 With App User Only</a></li>
            </ul>
          </li>

        </ul>
      </div>



      {/* <ul className="footer">
      <div className="footer-column-1" >
        <div> <a href="">Exclusive</a> </div>
        <div> <a href="">Subscribe</a> </div>
        <div> <a href="">Get 10% off your first order</a> </div>
        <div> <input class="footer-input" type="text" placeholder="Enter your email"></input> </div>
      </div>
      <div className="footer-column-2">
        <div> <a href="">Support</a> </div>
        <div> <a href="">111 Bijoy sarani, Dhaka</a> </div>
        <div> <a href="">exclusive@gmail.com</a> </div>
        <div> <a href="">+88015-88888-9999</a> </div>
      </div>
      <div className="footer-column-3">
        <div> <a href="">Account</a> </div>
        <div> <a href="">My Account</a> </div>
        <div> <a href="">Login / Register</a> </div>
        <div> <a href="">Cart</a> </div>
        <div> <a href="">Wishlist</a> </div>
        <div> <a href="">Shop</a> </div>
      </div>
      <div className="footer-column-4">
        <div> <a href="">Quick Link</a> </div>
        <div> <a href="">Privacy Policy</a> </div>
        <div> <a href="">Terms Of Use</a> </div>
        <div> <a href="">FAQ</a> </div>
        <div> <a href="">Contact</a> </div>
      </div>
    </ul> */}
    </>
  );
};

export default Footer;
