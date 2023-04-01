const Footer = () => {
  return (
    <footer>
      {/* Logo */}
      <img src="/Logo.svg" alt="" />
      {/* Doormat Navigation */}
      <ul>
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
        <li>Adress</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>
      {/* Social Media Links */}
      <ul>
        <h3>Social Media Links</h3>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
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
    </footer>
  );
};

export default Footer;
