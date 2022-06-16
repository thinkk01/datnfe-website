import React, { useState, useEffect } from "react";
import { getAllProducts, getTotalPage } from "../api/ProductApi";
import { NavLink } from "react-router-dom";
const Product = () => {
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
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };
  return (
    <div>
        <div class="container mt-5">
		<div class="row">
			<div class="col-3">
				<div class="col">
					<h4 class="text-danger fw-bolder">Sản phẩm</h4>
					<NavLink to="/" class="dropdown-item active">Giày Nam</NavLink>
					<NavLink to="/" class="dropdown-item" >Giày Nữ</NavLink>
					<NavLink to="/" class="dropdown-item" >Giày Bóng Đá</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Giày Bóng Rổ</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Giày Chạy Bộ</NavLink>
				</div>
				<div class="col mt-5">
					<h4 class="text-danger fw-bolder">Chất liệu</h4>
					<NavLink to="/" class="dropdown-item active">Polyester</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Cotton</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Suede | Da lộn</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Leather | Da</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Flannel</NavLink>
				</div>
				<div class="col mt-5">
					<h4 class="text-danger fw-bolder">Giá</h4>
					<NavLink to="/" class="dropdown-item active" href="#"> Dưới 1 triệu</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">1 triệu - 2 triệu</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">2 triệu - 3 triệu</NavLink>
					<NavLink to="/" class="dropdown-item" href="#">Trên 3 triệu</NavLink>
				</div>
			</div>
			<div class="col">
				<div class="row padding">
                {products &&
            products.map((item, index) => (
              <div class="col-md-4 mb-3" key={index}>
                <div class="card h-100">
                  <div class="d-flex justify-content-between position-absolute w-100">
                    <div class="label-new">
                      <span class="text-white bg-success small d-flex align-items-center px-2 py-1">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span class="ml-1">New</span>
                      </span>
                    </div>
                    <div class="label-sale">
                      <span class="text-white bg-primary small d-flex align-items-center px-2 py-1">
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <span class="ml-1">Sale</span>
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
                  <div class="card-body px-2 pb-2 pt-1">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="h4 text-primary">
                          {item.price.toLocaleString()} Đ
                        </p>
                      </div>
                    </div>
                    <p class="text-warning d-flex align-items-center mb-2">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <p class="mb-0">
                      <strong>
                        <NavLink to={`/product-detail/${item.id}`} class="text-secondary">
                          {item.name}
                        </NavLink>
                      </strong>
                    </p>
                    <p class="mb-1">
                      <small>
                        <NavLink to="#" class="text-secondary">
                          {item.brand}
                        </NavLink>
                      </small>
                    </p>
                    <div class="d-flex mb-3 justify-content-between">
                      <div>
                        <p class="mb-0 small">
                          <b>Yêu thích: </b> {item.view} lượt
                        </p>
                        <p class="mb-0 small">
                          <b>Giá gốc: </b> {item.price.toLocaleString()} Đ
                        </p>
                        <p class="mb-0 small text-danger">
                          <span class="font-weight-bold">Tiết kiệm: </span> 0 đ (0%)
                        </p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <div class="col px-0">
                        <NavLink
                          to={`/product-detail/${item.id}`}
                          exact
                          class="btn btn-outline-primary btn-block"
                        >
                          Thêm vào giỏ
                          <i
                            class="fa fa-shopping-basket"
                            aria-hidden="true"
                          ></i>
                        </NavLink>
                      </div>
                      <div class="ml-2">
                        <NavLink
                          to="#"
                          class="btn btn-outline-success"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Wishlist"
                        >
                          <i class="fa fa-heart" aria-hidden="true"></i>
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

	<div class="d-flex justify-content-center mt-5">
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
  )
}

export default Product