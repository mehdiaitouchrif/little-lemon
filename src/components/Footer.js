const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="/Logo-white.png" alt="" />
        </div>
        {/* Doormat Navigation */}
        <ul>
          <h3>NAVIGATION</h3>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        {/* Contact */}
        <ul>
          <h3>Contact Us</h3>
          <li>123 Main Street, Anytown, USA 12345</li>
          <li>(555) 123-4567</li>
          <li>contact@littlelemonrestaurant.com</li>
        </ul>
        {/* Social Media Links */}
        <ul>
          <h3>Follow Us</h3>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
