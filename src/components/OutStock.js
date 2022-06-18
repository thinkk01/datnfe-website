import React from "react";
import product from "../static/images/cate.jpg";
import { NavLink } from "react-router-dom";
import icon from "../static/images/icon_216992.png";
const OutStock = () => {
  return (
    <div>
      <div className="text-center">
        <img src={icon} class="rounded mx-auto d-block" alt="..." style={{width: 200, height: 200}}/>
        <p>Quản lý tồn kho - Số lượng một vài sản phẩm đã không đủ</p>
      </div>
      <div className="container-fluid padding mb-5">
        <div className="row welcome mb-5 mt-5">
          <div className="row col-10 offset-1 text ">
            <h4 className="text-danger">Giỏ hàng của bạn</h4>
          </div>
          <div className="row col-10 offset-1 mb-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ảnh</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Size</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Cập nhật</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <img
                      className="img-fluid"
                      style={{ width: "100px", height: "100px" }}
                      src={product}
                      alt=""
                    />
                  </th>
                  <td>
                    <h6 className="card-title mt-5 bolder">Adidas</h6>
                  </td>
                  <td>
                    <h6 className="card-title mt-5 bolder">39</h6>
                  </td>
                  <td>
                    <div className="mt-5">
                      <h6 className="card-title mt-5 bolder">1</h6>
                    </div>
                  </td>
                  <td>
                    <h6 className="card-title mt-5 bolder">Vượt tồn kho</h6>
                  </td>
                  <td>
                    <button
                      className="border-0 rounded-circle"
                      style={{ backgroundColor: "white" }}
                    >
                      <i
                        className="fa fa-refresh mt-5"
                        style={{ fontSize: "24px" }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutStock;
