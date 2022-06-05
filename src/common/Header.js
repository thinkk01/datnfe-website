import React from "react";
import '../static/css/style.css';
import logo from '../static/images/logo-sneaker1.jpg';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top col-12">
        <div className="navbar-brand">
          <img src={logo} width={50} height={50} alt="" />
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-lg-0">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/" exact>
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store" exact>
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/cart" exact>
                Giỏ hàng
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store-order" exact>
                Đơn hàng
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store-service" exact>
                Dịch vụ
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              aria-label="Search"
            />
            <button className="btn btn-dark my-2 my-sm-0" type="submit">
              Tìm kiếm
            </button>
          </form>
          <NavLink to="" className="btn btn-primary">Đăng nhập</NavLink>
        </div>
      </nav>     
    </div>
  );
};

export default Header;
