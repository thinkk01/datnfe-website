import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import icon from "../static/images/icon_216992.png";
import { modifyCartItem, getCartItemByAccountId } from "../api/CartApi";
import { toast } from "react-toastify";

const OutStock = (props) => {
  const history = useHistory();

  const modifyCartItemHandler = () => {
    for(let i = 0; i < props.outStock.length; i++){
      if(props.outStock[i].quantity > props.outStock[i].stock){
        modifyCartItem(props.outStock[i].id, props.outStock[i].stock - props.outStock[i].quantity)
        .then((res) => console.log(res.data))
        .catch((error) => {
          toast.warning("Xin vui lòng quay lại sau. Sản phẩm không khả dụng.");
          history.push('/');
        })
      }
    }
  };

  return (
    <div>
      <div className="text-center">
        <img
          src={icon}
          class="rounded mx-auto d-block"
          alt="..."
          style={{ width: 200, height: 200 }}
        />
        <p>Quản lý tồn kho - Số lượng một vài sản phẩm đã không đủ</p>
      </div>
      <div className="container-fluid padding mb-1">
        <div className="row welcome mb-5 mt-5">
          <div className="row col-10 offset-1 text mb-2">
            <i
              className="fa fa-refresh text-danger mr-1"
              style={{ fontSize: "24px" }}
              onClick={modifyCartItemHandler}
            />
            <h5>Cập nhật</h5>
          </div>
          <div className="row col-10 offset-1 mb-1">
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
                {props.outStock &&
                  props.outStock.map((item, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutStock;
