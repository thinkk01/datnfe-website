import React from "react";
import '../static/css/style.css';
import logo from '../static/images/logo-sneaker1.jpg';
import first from '../static/images/slider_1_image.jpg';
import second from '../static/images/slider_2_image.jpg';
import third from '../static/images/slider_4_image.jpg';
import fourth from '../static/images/slider_5_image.jpg'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top col-12">
        <a className="navbar-brand" href>
          <img src={logo} width={50} height={50} alt="" />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-lg-0">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store-product">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store-cart">
                Giỏ hàng
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store-order">
                Đơn hàng
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/store-service">
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
      {/* Carousel */}
      <div id="slides" className="carousel slide  mb-5" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to={0} className="active" />
          <li data-target="#slides" data-slide-to={1} />
          <li data-target="#slides" data-slide-to={2} />
          <li data-target="#slides" data-slide-to={3} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} alt=""/>
          </div>
          <div className="carousel-item">
            <img src={second} alt=""/>
          </div>
          <div className="carousel-item">
            <img src={third} alt=""/>
          </div>
          <div className="carousel-item">
            <img src={fourth} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
