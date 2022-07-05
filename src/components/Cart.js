import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getCartItemByAccountId,
  modifyCartItem,
  removeCartItem,
  isEnoughCartItem,
} from "../api/CartApi";
import { toast } from "react-toastify";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState();

  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getCartItemByAccountId(2).then((resp) => {
      setCart(resp.data.map((item) => ({ ...item, checked: false })));
      props.outStockHandler(resp.data);
      const result = resp.data.reduce(
        (price, item) =>
          price + (item.price * item.quantity * (100 - item.discount)) / 100,
        0
      );
      setAmount(result);
    });
    props.clearBuyHandler();
  };

  const modifyCartItemHandler = async (attr, quantity) => {
    const data = {
      accountId: 2,
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
      accountId: 2,
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
    if (props.buy.length === 0) {
      toast.warning("Bạn vẫn chưa chọn sản phẩm nào để mua.");
    } else {
      for (let j = 0; j < props.buy.length; j++) {
        for (let i = 0; i < cart.length; i++) {
          if (props.buy[j] === cart[i].id) {
            isEnoughCartItem(cart[i].id, cart[i].quantity)
              .then()
              .catch(() => history.push("/out-of-stock"));
          }
        }
      }
      history.push("/checkout");
    }
  };

  const buyHandler = (e) => {   
    const id = e.target.value;
    const index = cart.findIndex((item) => item.id == id);
   const flag = cart[index].checked;
   if(flag){
    cart[index] = {
      ...cart[index],
      checked: false
    }
    props.cancelBuyHandler(id);
   }else{
    cart[index] = {
      ...cart[index],
      checked: true
    }
    props.buyHandler(id);
   }
  };

  return (
    <div className="col-12">
       <div className="container-fluid mb-5 mt-5">
          <div>
            <h4 className="text-danger">Giỏ hàng của bạn</h4>
          </div>
          <div className="">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Chọn</th>
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
                      <th>
                        <input
                          className="form-check-input ml-3 mt-5"
                          type="checkbox"
                          value={item.id}
                          id="defaultCheck1"
                          onClick={buyHandler}
                        />
                      </th>
                      <th>
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
                        {item.lastPrice >
                          (item.price * (100 - item.discount)) / 100 && (
                          <h6 className="text-danger">
                            Giá đã giảm{" "}
                            {(
                              item.lastPrice -
                              (item.price * (100 - item.discount)) / 100
                            ).toLocaleString()}{" "}
                            đ
                          </h6>
                        )}
                        {item.lastPrice <
                          (item.price * (100 - item.discount)) / 100 && (
                          <h6 className="text-danger">
                            Giá đã tăng{" "}
                            {(
                              (item.price * (100 - item.discount)) / 100 -
                              item.lastPrice
                            ).toLocaleString()}{" "}
                            đ
                          </h6>
                        )}
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
                        <Link
                          className="border-0 pl-4"
                          // style={{ backgroundColor: "white" }}
                          onClick={() =>
                            removeCartItemHandler(item.id, item.quantity)
                          }
                        >
                          <i
                            className="fa fa-trash-o mt-5 text-danger"
                            style={{ fontSize: "24px" }}
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <hr className="my-4" />
            <div className="row container-fluid">
              <button
                className="btn btn-primary mb-3 btn-lg"
                onClick={checkOutHandler}
              >
                Mua hàng
              </button>
              <div className="row ml-5" style={{ paddingLeft: 700 }}>
                <h4 className="mr-5">Tổng tiền: </h4>
                <h4>{amount?.toLocaleString()}₫</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;
