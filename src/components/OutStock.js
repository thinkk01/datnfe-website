import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import icon from "../static/images/icon_216992.png";
import { reloadCartItem, getCartItemByAccountId } from "../api/CartApi";
import { toast } from "react-toastify";

const OutStock = (props) => {
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getCartItemByAccountId(2).then((resp) => {
      setCart(resp.data);
    });
  };

  const reloadCartItemHandler = () => {
    reloadCartItem(2)
      .then((resp) => {
        toast.success(resp.data);
        onLoad();
      })
      .catch((error) => toast.warning(error.response.data.Errors));
    
  };

  return (
    <div>
      <div className="text-center">
        <img
          src={icon}
          className="rounded mx-auto d-block"
          alt="..."
          style={{ width: 200, height: 200 }}
        />
        <p>Tồn kho - Số lượng một vài sản phẩm đã không đủ</p>
      </div>
      <div className="container-fluid padding mb-1">
        <div className="col-12 mb-5 mt-5">
          <div className="row col-10 offset-1 text mb-2">
            <button className="btn btn-primary" onClick={reloadCartItemHandler}>
              Cập nhật <i className="fa fa-refresh" />
            </button>
          </div>
          <div className="row col-12 mb-1">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ảnh</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Size</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Trạng thái</th>
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
                        {item.quantity > item.stock && (
                          <div className="mt-5 row">
                            <h6 className="card-title bolder mr-3">
                              {item.quantity}
                            </h6>
                            <i class="fa fa-arrow-right mr-3"></i>
                            <h6 className="card-title bolder">{item.stock}</h6>
                          </div>
                        )}
                        {item.quantity <= item.stock && (
                          <div className="mt-5 row">
                            <h6 className="card-title bolder mr-3">
                              {item.quantity}
                            </h6>
                          </div>
                        )}
                      </td>
                      <td>
                        <h6
                          className={
                            item.quantity > item.stock
                              ? "card-title mt-5 font-weight-bold text-danger"
                              : "card-title font-weight-bold mt-5"
                          }
                        >
                          {item.quantity > item.stock
                            ? "Vượt tồn kho"
                            : "Sẵn sàng"}
                        </h6>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <hr className="my-4" />
            <NavLink
              to="/cart"
              className={cart.length === 0 ? "mb-2 mr-5 disabled" : "mb-2 mr-5"}
              exact
            >
              Quay về giỏ hàng
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutStock;
