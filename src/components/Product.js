import React, { useState, useEffect } from "react";
import { getAllProducts, getTotalPage } from "../api/ProductApi";
import { NavLink } from "react-router-dom";
const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});

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
    getAllProducts(page, 9).then((response) => setProducts(response.data));
    getTotalPage().then((res) => setTotal(res.data));
    props.changeHeaderHandler(2);
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };
  return (
    <div>
      <div className="mt-5">
        <div className="row">
          <div className="col-2">
            <div className="col mini-card">
              <h4 className="text-danger fw-bolder">Sản phẩm</h4>
              <ul className="list-group">
                <li class="list-group-item active" aria-current="true">
                  Giày nam
                </li>
                <li className="list-group-item">Giày nữ</li>
                <li className="list-group-item">Giày chạy bộ</li>
                <li className="list-group-item">Giày bóng rổ</li>
                <li className="list-group-item">Giày bóng đá</li>
              </ul>
            </div>

            <div className="col mt-3 mini-card">
              <h4 className="text-danger fw-bolder">Giá</h4>
              <ul className="list-group">
                <li className="list-group-item active" aria-current="true">
                 Dưới 1 triệu
                </li>
                <li className="list-group-item">1.000.000 - 2.000.000 đ</li>
                <li className="list-group-item">2.000.000 - 3.000.000 đ</li>
                <li className="list-group-item">3.000.000 - 4.000.000 đ</li>
                <li className="list-group-item">Trên 4 triệu</li>
              </ul>
            </div>
          </div>
          <div className="col">
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
                          src={require(`../static/images/${item.imageLink}`)}
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
                              <i className="fa fa-heart" aria-hidden="true"></i>
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
            <li className={page === total ? "page-item disabled" : "page-item"}>
              <button className="page-link" onClick={() => onChangePage(total)}>
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Product;
