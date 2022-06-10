import React, { useState, useEffect } from "react";
import { getAllProvince } from "../api/ProvinceApi";
import { getCartItemByAccountId } from "../api/CartApi";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [amount, setAmount] = useState();
  const [cart, setCart] = useState([]);
  const [info, setInfo] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();

  const {
    register,
    handleSubmit,
    formState: {errors}
} = useForm();

  useEffect(() => {
    onLoad();
  }, []);
  

  const onLoad = () => {
    getAllProvince().then((resp) => setInfo(resp.data));
    getCartItemByAccountId(1).then((resp) => {
      setCart(resp.data);
      const result = resp.data.reduce(
        (price, item) => price + item.price * item.quantity,
        0
      );
      setAmount(result);
    });
  };

  const onLoadDistrictHandler = (id) => {
    const resp = info.filter((item) => item.name === id);
    setDistrict(resp[0].districts);
  };

  const onLoadWardHandler = (id) => {
    const resp = district.filter((item) => item.name === id);
    setWard(resp[0].wards);
  };

  const onSubmitHandler = async (data) =>{
    const order = {
      fullname: data.name,
      phone: data.phone,
      address: `${data.address}, ${data.ward}, ${data.district}, ${data.province}`,
      total: amount,
      note: data.note,
      isPending: data.payment,
      orderStatus: 1,
      account: 1
    }
    
    console.log(order);
  }
  return (
    <div className=" pb-3">
      <div className="py-3 col-10 offset-1 text-center">
        <h2 className="text-danger">Thông tin mua hàng</h2>
      </div>
      <div className="row col-10 offset-1 g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-dark">Giỏ hàng của bạn</span>
            <span className="badge bg-primary rounded-pill">{cart.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {cart &&
              cart.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between lh-sm"
                  key={index}
                >
                  <div>
                    <h6 className="my-0">
                      {item.name} - {item.size}
                    </h6>
                    <small className="text-muted">{`${item.price.toLocaleString()} x ${
                      item.quantity
                    }`}</small>
                  </div>
                  <strong>
                    {(item.price * item.quantity).toLocaleString()}
                  </strong>
                </li>
              ))}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-2">Mã giảm giá</h6>
                <input className="form-control my-2" type="text" />
                <button type="button" className="btn btn-primary">
                  Áp dụng
                </button>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Tổng tiền (VND)</span>
              <strong>{amount && amount.toLocaleString()}</strong>
            </li>
          </ul>
          
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Địa chỉ nhận hàng</h4>
          <form className="needs-validation" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Tỉnh Thành
                </label>
                <select
                  className="form-control"                 
                  {...register("province", {required: true})}
                  onChange={(e) => onLoadDistrictHandler(e.target.value)}
                >
                  <option defaultValue="" selected disabled hidden>
                    Choose here
                  </option>
                  {info &&
                    info.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Quận Huyện
                </label>
                <select
                  className="form-control"              
                  {...register("district", {required: true})}
                  onChange={(e) => onLoadWardHandler(e.target.value)}
                >
                  <option defaultValue="" selected disabled hidden>
                    Choose here
                  </option>
                  {district &&
                    district.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Phường Xã
                </label>
                <select className="form-control" 
                {...register("ward", {required: true})}
                >
                  <option defaultValue="" selected disabled hidden>
                    Choose here
                  </option>
                  {ward &&
                    ward.map((item, index) => (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="address" className="form-label">
                  Địa chỉ
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  {...register("address", {required: true})}
                />
                {errors.address && <div className="invalid-feedback">
                  Không để trống địa chỉ.
                </div>}
              </div>
              
              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Họ tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"                 
                  {...register("name", {required: true})}
                />
                 {errors.name && <div className="invalid-feedback">
                  Không để trống tên người nhận.
                </div>}
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  {...register("phone", {required: true})}
                />
                 {errors.phone && <div className="invalid-feedback">
                  Không để trống số điện thoại.
                </div>}
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="lastName" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  {...register("email", {required: true})}
                />
                 {errors.address && <div className="invalid-feedback">
                  Không để trống email.
                </div>}
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
                  {...register("note", {required: false})}
                />
              </div>
            </div>
            <label htmlFor="lastName" className="form-label mt-3">
              Phương thức thanh toán
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                checked
                value="false"
                {...register("payment", {required: true})}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Thanh toán khi giao hàng(COD) <br />
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="true"
                {...register("payment", {required: true})}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Chuyển khoản qua ngân hàng <br />
                Vietcombank-Số tài khoản: 9366202468
                <br />
                Chi nhánh: Sở giao dịch (HN) <br />
                Chủ TK: Vu Xuan Tan <br />
              </label>
            </div>
            <button
            className="w-100 btn btn-primary btn-lg mt-5  mb-5"
            type="submit"
          >
            Đặt hàng
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
