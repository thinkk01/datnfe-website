import React from "react";
import "../static/css/style.css";
import logo from "../static/images/logo-sneaker1.jpg";
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
              <NavLink className="nav-link" to="/order" exact>
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
            <i
              class="fa fa-search ml-1"
              aria-hidden="true"
              style={{ fontSize: "24px" }}
            ></i>
          </form>
          <NavLink to="" className="text-dark ml-3">
            <i
              class="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: "24px" }}
            ></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
