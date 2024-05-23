import React from "react";
import "../static/css/style.css";
import logo from "../static/images/logo/logo-dark-removebg-preview.png";
import { NavLink, useHistory } from "react-router-dom";
import user_image from "../static/images/default.png";
import Dropdown from "../admin/dropdown/Dropdown";
import { toast } from "react-toastify";

const user_menu = [
  {
    icon: "bx bx-user",
    content: "Tài khoản",
    url: "/profile",
  },
  {
    icon: "bx bx-log-out-circle bx-rotate-180",
    content: "Đăng xuất",
    url: "/",
  },
];

const not_menu = [
  {
    icon: "bx bx-user",
    content: "Đăng nhập",
    url: "/sign-in",
  },
  {
    icon: "bx bx-cog",
    content: "Đăng kí",
    url: "/register",
  },
];

const Header = (props) => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    props.searchHandler(e.target.keyword.value);
    history.push("/search-page");
  };

  const curr_user = {
    display_name: props.user ? props.user.fullName : "Tài khoản",
    image: user_image,
  };

  const renderUserToggle = (user) => (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">{user.display_name}</div>
    </div>
  );

  const renderUserMenu = (item, index) => (
    <NavLink
      to={item.url}
      key={index}
      exact
      onClick={item.url === "/" ? signOutHandler : ""}
    >
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </NavLink>
  );

  const signOutHandler = () => {
    props.refresh(false);
    toast.success("Tài khoản đã được đăng xuất.");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    props.userHandler(null);
  };

  return (
    <div className="mini-card">
      {/* Navigation */}
      <nav className="navbar navbar-expand-md col-12 z-100">
        <div className="navbar-brand ml-1 col">
          <img src={logo} width={80} height={80} alt="" />
        </div>
        <div className="collapse navbar-collapse col justify-between">
          <ul className="navbar-nav mini-ul">
            <li
              className={
                props.header === 1
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/" exact>
                Trang chủ
              </NavLink>
            </li>
            <li
              className={
                props.header === 2
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/store" exact>
                Sản phẩm
              </NavLink>
            </li>
            <li
              className={
                props.header === 3
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/cart" exact>
                Giỏ hàng
              </NavLink>
            </li>
            {props.user && (
              <li
                className={
                  props.header === 5
                    ? "nav-item mr-2  mini-item active"
                    : "nav-item mr-2  mini-item"
                }
              >
                <NavLink className="nav-link text-white" to="/order" exact>
                  Đơn hàng
                </NavLink>
              </li>
            )}
            <li
              className={
                props.header === 4
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/blog" exact>
                Chính sách
              </NavLink>
            </li>
            {props.user && (
              <li
                className={
                  props.header === 6
                    ? "nav-item mr-2  mini-item active"
                    : "nav-item mr-2  mini-item"
                }
              >
                <NavLink className="nav-link" to="/chat" exact>
                  Hỏi đáp
                </NavLink>
              </li>
            )}
          </ul>
          <form
            className="form-inline my-2 my-lg-0 mr-3"
            onSubmit={(e) => submitHandler(e)}
          >
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
          {props.user && (
            <Dropdown
              customToggle={() => renderUserToggle(curr_user)}
              contentData={user_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />
          )}
          {!props.user && (
            <Dropdown
              customToggle={() => renderUserToggle(curr_user)}
              contentData={not_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />
          )}
          {/* {props.user ?  <Dropdown
              customToggle={() => renderUserToggle(curr_user)}
              contentData={user_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            /> :  <Dropdown
              customToggle={() => renderUserToggle(curr_user)}
              contentData={not_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />} */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
