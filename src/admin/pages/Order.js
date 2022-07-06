import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllOrderAndPagination,
  updateOrderWithStatus,
} from "../../api/OrderApi";
import "../table/table.css";
import Badge from "../badge/Badge";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const orderStatus = {
  "Đang xử lí": "primary",
  "Đang vận chuyển": "warning",
  "Đã giao": "success",
  "Đã hủy": "danger",
};

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getAllOrderAndPagination(1, 8)
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  };

  const updateStatusHandler = (orderId, statusId) => {
    handleShow();
    updateOrderWithStatus(orderId, statusId)
      .then(() => {
        onLoad();
        toast.success("Cập nhật thành công.");
      })
      .catch((error) => toast.warning(error.response.data.Errors));
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card__header">
          <h3>Đơn hàng</h3>
        </div>
        <div className="card__body">
          {orders && (
            <div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Mã đơn hàng</th>
                      <th scope="col">Ngày mua</th>
                      <th scope="col">Thanh toán</th>
                      <th scope="col">Tổng tiền</th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đang xử lí"]}
                          content={"Đang xử lí"}
                        />
                      </th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đang vận chuyển"]}
                          content={"Đang vận chuyển"}
                        />
                      </th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đã giao"]}
                          content={"Đã giao"}
                        />
                      </th>
                      <th scope="col">
                        <Badge
                          type={orderStatus["Đã hủy"]}
                          content={"Đã hủy"}
                        />
                      </th>
                      <th scope="col">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">OD{item.id}</th>
                          <th>{item.modifyDate}</th>
                          <th>
                            {item.isPending
                              ? "Đã thanh toán"
                              : "Chưa thanh toán"}
                          </th>
                          <th> {item.total.toLocaleString()} ₫</th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 1}
                                value="1"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 2}
                                value="2"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 3}
                                value="3"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name={index}
                                checked={item.orderStatus.id === 4}
                                value="4"
                                onChange={(e) =>
                                  updateStatusHandler(item.id, e.target.value)
                                }
                              />
                            </div>
                          </th>
                          <th>
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="table__pagination">
                <div className="table__pagination-item">First</div>
                <div className="table__pagination-item active">1</div>
                <div className="table__pagination-item">Last</div>
              </div>
            </div>
          )}
        </div>
        <div className="card__footer">
          <Link to="/">view all</Link>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hướng dẫn chọn size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Xác nhận cập nhật?</Form.Label>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
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
