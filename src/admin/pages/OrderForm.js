import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { NavLink, useHistory, useParams } from "react-router-dom";

const orderStatus = ["Đang xử lí", "Đang vận chuyển", "Đã giao", "Đã hủy"];

const OrderForm = () => {
  const id = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {};

  const onSubmitHandler = async (data) => {};
  return (
    <div className="pb-3 container-fluid card">
      <div className="py-3 col-10 offset-1 text-center">
        <h2 className="text-danger">Đơn hàng {id.id}</h2>
      </div>
      <div className="row">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-5">
            <span className="text-dark">Chi tiết đơn hàng</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Adidas</h6>
                <small className="text-muted">1.000.000</small>
              </div>
              <strong>1.000.000</strong>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Tổng tiền (VND)</span>
              <strong>1000000</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Địa chỉ nhận hàng</h4>
          <form
            className="needs-validation"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="row g-3">
              <div className="col-12 mt-2">
                <label htmlFor="address" className="form-label">
                  Địa chỉ
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  {...register("address", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
                {errors.address && (
                  <div className="alert alert-danger" role="alert">
                    Địa chỉ không hợp lệ!
                  </div>
                )}
              </div>

              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Họ tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  {...register("name", {
                    required: true,
                    pattern: /^\s*\S+.*/,
                  })}
                />
                {errors.name && (
                  <div className="alert alert-danger" role="alert">
                    Họ tên không hợp lệ!
                  </div>
                )}
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  {...register("phone", {
                    required: true,
                    pattern: /^0[0-9]{9}$/,
                  })}
                />
                {errors.phone && (
                  <div className="alert alert-danger" role="alert">
                    Số điện thoại không hợp lệ!
                  </div>
                )}
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <div className="alert alert-danger" role="alert">
                    Email không hợp lệ!
                  </div>
                )}
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="address" className="form-label">
                  Ghi chú
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  {...register("note", { required: false })}
                />
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="firstName" className="form-label">
                  Trạng thái đơn hàng
                </label>
                <select
                  className="form-control"
                  {...register("province", { required: true })}
                  required
                >
                  <option selected disabled hidden></option>
                  {orderStatus.map((item, index) => (
                    <option key={index} value={index + 1}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5 ml-5">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Đã thanh toán
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    Chưa thanh toán
                  </label>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg mt-5 mb-5"
              type="submit"
              style={{ marginLeft: 680 }}
            >
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
