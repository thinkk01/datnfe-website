import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllOrder, cancelOrder } from "../api/OrderApi";
import { getAllOrderStatus } from "../api/OrderStatusApi";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Order = (props) => {
  const [order, setOrder] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [status, setStatus] = useState(0);
  const [show, setShow] = useState(false);
  const [obj, setObj] = useState({});

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

    props.changeHeaderHandler(4);
  };

  const handleClose = () => setShow(false);
  const handleShow = (orderId) => {
    setShow(true);
    setObj({
      orderId: orderId,
    });
  };

  const cancelHandler = (id) => {
    handleShow(id);
  };
  const confirmCancelHandler = () => {
    cancelOrder(obj.orderId)
      .then(() => {
        onLoad();
        toast.success("Hủy đơn hàng thành công.");
      })
      .catch((error) => toast.error(error.response.data.Errors));
    setShow(false);
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
          <div className="col-10 offset-1 text mini-card">
            <p className="text-danger text-center" style={{ fontSize: "34px" }}>
              Đơn hàng của bạn
            </p>
          </div>
          <div className="row col-12 mb-5">
            <div className="col-12 mb-3 mt-3 mini-card">
              <div className="form-check form-check-inline mr-5">
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
                  <div
                    className="form-check form-check-inline mr-5 ml-5"
                    key={index}
                  >
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
            <table className="table table-striped table-bordered mt-2 text-center">
              <thead>
                <tr>
                  <th scope="col">Đơn hàng</th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col">Tình trạng thanh toán</th>
                  <th scope="col">Tình trạng vận chuyển</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col">Hủy</th>
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
                          <h6 className="card-title mt-2 bolder text-success">
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
                        <button
                          className="btn btn-light"
                          onClick={() => cancelHandler(item.id)}
                        >
                          <i
                            className="fa fa-ban text-danger"
                            aria-hidden="true"
                          ></i>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận hủy đơn hàng?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Modal.Footer>
              <Button variant="danger" onClick={confirmCancelHandler}>
                Xác nhận
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Order;
