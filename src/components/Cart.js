import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  getCartItemByAccountId,
  modifyCartItem,
  removeCartItem,
  isEnoughCartItem,
} from "../api/CartApi";
import { cacheAttribute } from "../api/AttributeApi";
import { toast } from "react-toastify";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState();

  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getCartItemByAccountId(1).then((resp) => {
      setCart(resp.data);
      props.outStockHandler(resp.data);
      const result = resp.data.reduce(
        (price, item) =>
          price + (item.price * item.quantity * (100 - item.discount)) / 100,
        0
      );
      setAmount(result);
    });
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
      toast.warning(error.response.data.Errors);
    }
  };

  const removeCartItemHandler = async (attr, quantity) => {
    const data = {
      accountId: 1,
      attributeId: attr,
      quantity: quantity,
    };
    try {
      await removeCartItem(data).then((res) => onLoad());
    } catch (error) {
      toast.warning(error.response.data.Errors);
    }
  };

  const checkOutHandler = () => {
    for (let i = 0; i < cart.length; i++) {
      isEnoughCartItem(cart[i].id, cart[i].quantity)
        .then()
        .catch(() => history.push("/out-of-stock"));
    }
    history.push("/checkout");
  };

  return (
    <div>
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
                        {item.lastPrice > item.price * (100 - item.discount)/100 && <h6 className="text-danger">Giá đã giảm {(item.lastPrice -item.price * (100 - item.discount)/100).toLocaleString()} đ</h6>}
                        {item.lastPrice < item.price * (100 - item.discount)/100 && <h6 className="text-danger">Giá đã tăng {(item.price * (100 - item.discount)/100 - item.lastPrice).toLocaleString()} đ</h6>}
                        <h6 className="card-title mt-5 bolder">
                          {(
                            (item.price * (100 - item.discount)) /
                            100
                          ).toLocaleString()}{" "}
                          đ
                        </h6>
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
                            name="quantity"
                            style={{ width: "40px" }}
                            value={item.quantity}
                            onChange={(e) =>
                              modifyCartItemHandler(
                                item.id,
                                e.target.value - item.quantity
                              )
                            }
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
                          {(
                            item.quantity *
                            ((item.price * (100 - item.discount)) / 100)
                          ).toLocaleString()}{" "}
                          đ
                        </h6>
                      </td>
                      <td>
                        <button
                          className="border-0 rounded-circle"
                          style={{ backgroundColor: "white" }}
                          onClick={() =>
                            removeCartItemHandler(item.id, item.quantity)
                          }
                        >
                          <i
                            className="fa fa-trash-o mt-5 text-danger"
                            style={{ fontSize: "24px" }}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <hr className="my-4" />
            <div className="row container-fluid ml-5">
              <NavLink
                to="/"
                className="btn btn-primary mb-3 btn-lg mr-3"
                exact
              >
                Tiếp tục mua hàng
              </NavLink>
              <button
                // to="/checkout"
                className="btn btn-primary mb-3 btn-lg"
                disabled={cart.length === 0 ? "disabled" : ""}
                onClick={checkOutHandler}
                // exact
              >
                Tiến hành thanh toán
              </button>
              <div className="row ml-5">
                <h4 className="mr-5">Tổng tiền: </h4>
                <h4>{amount?.toLocaleString()}₫</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
