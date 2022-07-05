import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllOrder } from "../api/OrderApi";
import { getAllOrderStatus } from "../api/OrderStatusApi";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getAllOrder(2, status)
      .then((res) => setOrder(res.data))
      .catch((error) => console.log(error.response.data.Errors));

    getAllOrderStatus()
      .then((resp) => setOrderStatus(resp.data))
      .catch((error) => console.log(error.response.data.Errors));
  };

  const getAllOrderByStatus = (value) => {
    setStatus(value);
    getAllOrder(2, value)
      .then((res) => setOrder(res.data))
      .catch((error) => console.log(error.response.data.Errors));
  };
  return (
    <div>
      <div className="col-12">
        <div className="container-fluid welcome mb-5 mt-2">
          <div className="col-10 offset-1 text ">
            <p className="text-danger text-center" style={{ fontSize: "34px" }}>
              Đơn hàng của bạn
            </p>
          </div>
          <div className="row col-12 mb-5">
            <div className="mb-3 mt-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="0"
                  onChange={(event) => getAllOrderByStatus(event.target.value)}
                  checked={status == 0}
                />
                <label className="form-check-label">Tất cả</label>
              </div>
              {orderStatus &&
                orderStatus.map((item, index) => (
                  <div className="form-check form-check-inline" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value={item.id}
                      onChange={(event) =>
                        getAllOrderByStatus(event.target.value)
                      }
                      checked={status == item.id}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      {item.name}
                    </label>
                  </div>
                ))}
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Đơn hàng</th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col">Tình trạng thanh toán</th>
                  <th scope="col">Tình trạng vận chuyển</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <h6 className="card-title mt-2 bolder">
                          <NavLink to={`/order/detail/${item.id}`} exact>
                            #{item.id}
                          </NavLink>
                        </h6>
                      </th>
                      <td>
                        <h6 className="card-title mt-2 bolder">
                          {item.modifyDate}
                        </h6>
                      </td>
                      <td>
                        {item.isPending ? (
                          <h6 className="card-title mt-2 bolder text-primary">
                            Đã thanh toán
                          </h6>
                        ) : (
                          <h6 className="card-title mt-2 bolder text-danger">
                            Chưa thanh toán
                          </h6>
                        )}
                      </td>
                      <td>
                        <h6 className="card-title mt-2 bolder">
                          {item.orderStatus.name}
                        </h6>
                      </td>
                      <td>
                        <h6 className="card-title mt-2 bolder">
                          {item.total.toLocaleString()} ₫
                        </h6>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Hủy đơn
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <nav aria-label="navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <button className="page-link">First</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item disabled">
                  <button className="page-link">Last</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
