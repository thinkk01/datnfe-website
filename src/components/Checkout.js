import React from 'react'

const Checkout = () => {
  return (
    <div className=" pb-3">
        <div className="py-3 col-10 offset-1 text-center">
          <h2 className="text-danger">Thông tin mua hàng</h2>
        </div>
        <div className="row col-10 offset-1 g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-dark">Giỏ hàng của bạn</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-2">Mã giảm giá</h6>
                  <input className="form-control my-2" type="text" />
                  <button type="button" className="btn btn-primary">Áp dụng</button>
                </div>         
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng tiền (VND)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <button className="w-100 btn btn-primary btn-lg mt-5  mb-5" type="submit">Đặt hàng</button>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Địa chỉ nhận hàng</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">Tỉnh Thành</label>
                  <select className="form-control" name id>
                    <option value>Hà Nội</option>
                    <option value>TP.HCM</option>
                    <option value>Đà Nẵng</option>
                    <option value>Hải Phòng</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Quận Huyện</label>
                  <select className="form-control" name id>
                    <option value>Hà Nội</option>
                    <option value>TP.HCM</option>
                    <option value>Đà Nẵng</option>
                    <option value>Hải Phòng</option>
                  </select>
                </div>
                <div className="col-sm-6 mt-2">
                  <label htmlFor="lastName" className="form-label">Phường Xã</label>
                  <select className="form-control" name id>
                    <option value>Hà Nội</option>
                    <option value>TP.HCM</option>
                    <option value>Đà Nẵng</option>
                    <option value>Hải Phòng</option>
                  </select>
                </div>
                <div className="col-12 mt-2">
                  <label htmlFor="address" className="form-label">Địa chỉ</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-sm-6 mt-2">
                  <label htmlFor="lastName" className="form-label">Họ tên</label>
                  <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-sm-6 mt-2">
                  <label htmlFor="lastName" className="form-label">Số điện thoại</label>
                  <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-sm-6 mt-2">
                  <label htmlFor="lastName" className="form-label">Email</label>
                  <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <label htmlFor="lastName" className="form-label mt-3">Phương thức thanh toán</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Thanh toán khi giao hàng(COD) <br />
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Chuyển khoản qua ngân hàng <br />
                  Vietcombank-Số tài khoản: 9366202468<br />
                  Chi nhánh: Sở giao dịch (HN) <br />
                  Chủ TK: Vu Xuan Tan <br />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Checkout