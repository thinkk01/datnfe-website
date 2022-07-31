import React from "react";
import "../static/css/style.css";
import logo from "../static/images/logo-sneaker1.jpg";
import { NavLink, useHistory } from "react-router-dom";
import user_image from '../assets/images/tan.jpg';
import Dropdown from "../admin/dropdown/Dropdown";

const user_menu = [
  {
      "icon": "bx bx-user",
      "content": "Profile"
  },
  {
      "icon": "bx bx-wallet-alt",
      "content": "My Wallet"
  },
  {
      "icon": "bx bx-cog",
      "content": "Settings"
  },
  {
      "icon": "bx bx-log-out-circle bx-rotate-180",
      "content": "Logout"
  }
]
const renderUserToggle = (user) => (
  <div className="topnav__right-user">
      <div className="topnav__right-user__image">
          <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">
          {user.display_name}
      </div>
  </div>
)

const renderUserMenu =(item, index) => (
  <NavLink to='/' key={index}>
      <div className="notification-item">
          <i className={item.icon}></i>
          <span>{item.content}</span>
      </div>
  </NavLink>
)

const curr_user = {
  display_name: 'Xuan Tan',
  image: user_image
}
const Header = (props) => { 
  const history = useHistory();

  const submitHandler = (e) =>{
    e.preventDefault();
    props.searchHandler(e.target.keyword.value);
    history.push('/search-page')
  }

  return (
    <div className="mini-card">
      {/* Navigation */}
      <nav className="navbar navbar-expand-md col-12 mini-nav">
        <div className="navbar-brand ml-5">
          <img src={logo} width={50} height={50} alt="" />
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-lg-0 mini-ul">
            <li className={props.header == 1 ? "nav-item mr-4  mini-item active" : "nav-item mr-4  mini-item"}>
              <NavLink className="nav-link" to="/" exact>
                Trang chủ
              </NavLink>
            </li>
            <li className={props.header == 2 ? "nav-item mr-4  mini-item active" : "nav-item mr-4  mini-item"}>
              <NavLink className="nav-link" to="/store" exact>
                Sản phẩm
              </NavLink>
            </li>
            <li className={props.header == 3 ? "nav-item mr-4  mini-item active" : "nav-item mr-4  mini-item"}>
              <NavLink className="nav-link" to="/cart" exact>
                Giỏ hàng
              </NavLink>
            </li>
            <li className={props.header == 4 ? "nav-item mr-4  mini-item active" : "nav-item mr-4  mini-item"}>
              <NavLink className="nav-link" to="/order" exact>
                Đơn hàng
              </NavLink>
            </li>
            <li className={props.header == 5 ? "nav-item mr-4  mini-item active" : "nav-item mr-4  mini-item"}>
              <NavLink className="nav-link" to="/store-service" exact>
                Blog
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 mr-3" onSubmit={(e) => submitHandler(e)}>
            <input
              className="form-control mr-sm-2"
              type="search"
              aria-label="Search"
              name="keyword"
            />
            <button>
            <i
              className="fa fa-search ml-1"
              aria-hidden="true"
              style={{ fontSize: "24px" }}
            ></i>
            </button>
          </form>
          <Dropdown
                customToggle={() => renderUserToggle(curr_user)}
                contentData={user_menu}
                renderItems={(item, index) => renderUserMenu(item, index)}
            />
          {/* <NavLink to="/sign-in" className="text-dark ml-3 mr-5">
            <i
              className="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: "24px" }}
            ></i>
          </NavLink> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
