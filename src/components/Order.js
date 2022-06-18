import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {getAllOrder} from '../api/OrderApi'
const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () =>{
    getAllOrder(1)
    .then((res) => setOrder(res.data))
    .catch((error) => console.log(error.response.data.Errors))
  }
  return (
    <div>
      <div className="container-fluid padding mb-5">
        <div className="row welcome mb-5 mt-2">
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
                {order && order.map((item, index) => (
                  <tr key={index}>
                  <th scope="row">
                  <h5 className="card-title mt-2 bolder"><NavLink to={`/order/detail/${item.id}`} exact>#{item.id}</NavLink></h5>
                  </th>
                  <td>
                    <h5 className="card-title mt-2 bolder">{item.modifyDate}</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-2 bolder">{item.isPending ? 'Đã thanh toán' : 'Chưa thanh toán'}</h5>
                  </td>
                  <td>
                    <h5 className="card-title mt-2 bolder">{item.orderStatus.name}</h5>
                  </td>
                 
                  <td>
                    <h5 className="card-title mt-2 bolder">{item.total.toLocaleString()} ₫</h5>
                  </td>                 
                </tr>  
                ))}              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order