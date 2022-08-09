import React, { useState, useEffect } from "react";
import {
  getAllProducts,
  getTotalPage,
  searchByKeyword,
} from "../api/ProductApi";
import { NavLink } from "react-router-dom";
import "./sidebar/sidebar.css";

const categories = [
  {
    display_name: "Giày nam",
    value: "1",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Giày nữ",
    value: "2",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Giày trẻ em",
    value: "3",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Giày đá bóng",
    value: "4",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Giày thời trang",
    value: "5",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Giày bóng rổ",
    value: "6",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Giày chạy bộ",
    value: "7",
    icon: "bx bx-category-alt",
  },
];

const prices = [
  {
    display_name: "Dưới 1 triệu",
    value: "1",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "1.000.000 - 2.000.000",
    value: "2",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "2.000.000 - 3.000.000",
    value: "3",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "3.000.000 - 4.000.000",
    value: "4",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Trên 4 triệu",
    value: "5",
    icon: "bx bx-category-alt",
  },
];

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});
  const [category, setCategory] = useState([1]);
  const [price, setPrice] = useState([]);

  var rows = new Array(total).fill(0).map((zero, index) => (
    <li
      className={page === index + 1 ? "page-item active" : "page-item"}
      key={index}
    >
      <button className="page-link" onClick={() => onChangePage(index + 1)}>
        {index + 1}
      </button>
    </li>
  ));

  useEffect(() => {
    getAllProducts(page, 9, true).then((response) =>
      setProducts(response.data.content)
    );
    // console.log(category.includes(1))
    getTotalPage().then((res) => setTotal(res.data));
    props.changeHeaderHandler(2);
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  const clickHandler = (value) =>
    setCategory((prevState) => [...prevState, value]);

  return (
    <div>
      <div className="mt-5">
        <div className="row">
          <div className="col-2.5">
            <div className="col mini-card">
              <h4 className="text-danger fw-bolder">Sản phẩm</h4>
              <ul className="list-group">
                {categories.map((item, index) => (
                  <div className="sidebar__item" key={index}>
                    <div
                      className={
                        category.includes(item.value)
                          ? `sidebar__item-inner active`
                          : `sidebar__item-inner`
                      }
                    >
                      <i className={item.icon}></i>
                      <span>{item.display_name}</span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            <div className="col mt-3 mini-card">
              <h4 className="text-danger fw-bolder">Giá</h4>
              <ul className="list-group">
                {prices.map((item, index) => (
                  <div className="sidebar__item" key={index}>
                    <div
                      className={
                        category.includes(item.value)
                          ? `sidebar__item-inner active`
                          : `sidebar__item-inner`
                      }
                    >
                      <i className={item.icon}></i>
                      <span>{item.display_name}</span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="container-fluid padding">
              {category.length > 0 && (
                <div className="container-fluid padding">
                  <div className="row welcome mini-card">
                    <div className="text-danger">
                      <h4 className="title">Mới nhất</h4>
                    </div>
                  </div>
                </div>
              )}
              <div className="row padding">
                {products &&
                  products.map((item, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                      <div className="card h-100">
                        <div className="d-flex justify-content-between position-absolute w-100">
                          <div className="label-new">
                            <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <span className="ml-1">New</span>
                            </span>
                          </div>
                        </div>
                        <NavLink to={`/product-detail/${item.id}`}>
                          <img
                            src={require(`../static/images/${item.image}`)}
                            style={{ width: 150, height: 150 }}
                            alt="Product"
                          />
                        </NavLink>
                        <div className="card-body px-2 pb-2 pt-1">
                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="h4 text-primary">
                                {item.price.toLocaleString()} Đ
                              </p>
                            </div>
                          </div>
                          <p className="text-warning d-flex align-items-center mb-2">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </p>
                          <p className="mb-0">
                            <strong>
                              <NavLink
                                to={`/product-detail/${item.id}`}
                                className="text-secondary"
                              >
                                {item.name}
                              </NavLink>
                            </strong>
                          </p>
                          <p className="mb-1">
                            <small>
                              <NavLink to="#" className="text-secondary">
                                {item.brand}
                              </NavLink>
                            </small>
                          </p>
                          <div className="d-flex mb-3 justify-content-between">
                            <div>
                              <p className="mb-0 small">
                                <b>Yêu thích: </b> {item.view} lượt
                              </p>
                              <p className="mb-0 small">
                                <b>Giá gốc: </b> {item.price.toLocaleString()} Đ
                              </p>
                              <p className="mb-0 small text-danger">
                                <span className="font-weight-bold">
                                  Tiết kiệm:{" "}
                                </span>{" "}
                                0 đ (0%)
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="col px-0">
                              <NavLink
                                to={`/product-detail/${item.id}`}
                                exact
                                className="btn btn-outline-primary btn-block"
                              >
                                Thêm vào giỏ
                                <i
                                  className="fa fa-shopping-basket"
                                  aria-hidden="true"
                                ></i>
                              </NavLink>
                            </div>
                            <div className="ml-2">
                              <NavLink
                                to="#"
                                className="btn btn-outline-success"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Add to Wishlist"
                              >
                                <i
                                  className="fa fa-heart"
                                  aria-hidden="true"
                                ></i>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination offset-5">
              <li className={page === 1 ? "page-item disabled" : "page-item"}>
                <button className="page-link" onClick={() => onChangePage(1)}>
                  First
                </button>
              </li>
              {rows}
              <li
                className={page === total ? "page-item disabled" : "page-item"}
              >
                <button
                  className="page-link"
                  onClick={() => onChangePage(total)}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Product;
