import React from 'react'
import { NavLink } from 'react-router-dom'

const Order = () => {
  return (
    <div>
      <div className="container-fluid padding mb-5">
        <div className="row welcome mb-5 mt-5">
          <div className="col-10 offset-1 text ">
            <p className="text-danger" style={{ fontSize: "34px" }}>
              Đơn hàng của bạn
            </p>
          </div>
          <div className="row col-10 offset-1 mb-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Đơn hàng</th>
                  <th scope="col">Ngày</th>
                  <th scope="col">Tình trạng thanh toán</th>
                  <th scope="col">Tình trạng vận chuyển</th>
                  <th scope="col">Tổng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                  <h5 className="card-title mt-5 bolder"><NavLink to="/order/detail/1" exact>#100001</NavLink></h5>
                  </th>
                  <td>
                    <h5 className="card-title mt-5 bolder">05/15/2022 07:51:44</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-5 bolder">Pending</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-5 bolder">Not fulfilled</h5>
                  </td>
                 
                  <td>
                    <h5 className="card-title mt-5 bolder">3.490.000₫</h5>
                  </td>                 
                </tr>
                <tr>
                  <th scope="row">
                  <h5 className="card-title mt-5 bolder"><NavLink to="/order/detail/1" exact>#100001</NavLink></h5>
                  </th>
                  <td>
                    <h5 className="card-title mt-5 bolder">05/15/2022 07:51:44</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-5 bolder">Pending</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-5 bolder">Not fulfilled</h5>
                  </td>
                 
                  <td>
                    <h5 className="card-title mt-5 bolder">3.490.000₫</h5>
                  </td>                 
                </tr>
                <tr>
                  <th scope="row">
                  <h5 className="card-title mt-5 bolder"><NavLink to="/order/detail/1" exact>#100001</NavLink></h5>
                  </th>
                  <td>
                    <h5 className="card-title mt-5 bolder">05/15/2022 07:51:44</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-5 bolder">Pending</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-5 bolder">Not fulfilled</h5>
                  </td>
                 
                  <td>
                    <h5 className="card-title mt-5 bolder">3.490.000₫</h5>
                  </td>                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order