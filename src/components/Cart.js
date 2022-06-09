import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCartItemByAccountId, modifyCartItem } from "../api/CartApi";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getCartItemByAccountId(1).then((resp) => setCart(resp.data));
  };

  const modifyCartItemHandler = async (attr, quantity) => {
    const data = {
      accountId: 1,
      attributeId: attr,
      quantity: quantity,
    };
    try {
      await modifyCartItem(data).then((res) => onLoad());
    } catch (error) {
      toast.error(error.response.data.Errors);
    }
  };

  return (
    <div>
      <div className="container-fluid padding mb-5">
        <div className="row welcome mb-5 mt-5">
          <div className="col-10 offset-1 text ">
            <p className="text-danger" style={{ fontSize: "34px" }}>
              Giỏ hàng của bạn
            </p>
          </div>
          <div className="row col-10 offset-1 mb-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ảnh</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Size</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Thành tiền</th>
                  <th scope="col">Xoá</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <img
                          className="img-fluid"
                          style={{ width: "100px", height: "100px" }}
                          src={require(`../static/images/${item.image}`)}
                          alt=""
                        />
                      </th>
                      <td>
                        <h6 className="card-title mt-5 bolder">{item.name}</h6>
                      </td>
                      <td>
                        <h6 className="card-title mt-5 bolder">{item.size}</h6>
                      </td>
                      <td>
                        <h6 className="card-title mt-5 bolder">{item.price.toLocaleString()}</h6>
                      </td>
                      <td>
                        <div className="mt-5">
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => modifyCartItemHandler(item.id, 1)}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            style={{ width: "40px" }}
                            value={item.quantity}
                            name="quantity"
                            max={100}
                            min={1}
                          />
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => modifyCartItemHandler(item.id, -1)}
                          >
                            -
                          </button>                       
                        </div>
                      </td>
                      <td>
                        <h6 className="card-title mt-5 bolder">
                          {(item.quantity * item.price).toLocaleString()}
                        </h6>
                      </td>
                      <td>
                        <NavLink to="">
                          <i
                            className="fa fa-trash-o mt-5 text-danger"
                            style={{ fontSize: "24px" }}
                          />
                        </NavLink>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <hr className="my-4" />
            <div className="row ml-5">
              <div className="row">
                <NavLink to="button" className="btn btn-secondary mr-2">
                  Tiếp tục mua hàng
                </NavLink>
                <NavLink
                  to="/checkout"
                  className="btn btn-secondary mr-5"
                  exact
                >
                  Tiến hành thanh toán
                </NavLink>
                <h5 className="ml-5">Tổng tiền:</h5>
              </div>
              <div style={{ marginLeft: "150px" }}>
                <h4>3.490.000₫</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
