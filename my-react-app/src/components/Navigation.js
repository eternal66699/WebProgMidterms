import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li><span><Link to="/contact">Contact</Link></span></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/">Homepage</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;