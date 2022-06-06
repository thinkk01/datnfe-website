import React from 'react'
import product from "../static/images/cate.jpg";
const OrderDetail = () => {
  return (
    
    <div className="container-fluid row padding mb-5">
    <div className="col-8 welcome mb-5 mt-5">
      <div className="col-10 offset-1 text ">
        <p className="display-4" style={{fontSize: '34px'}}>Đơn hàng #103049</p>   
      </div>
      <div className="col-10 offset-1 mb-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Mã sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img
                      className="img-fluid"
                      style={{ width: "100px", height: "100px" }}
                      src={product}
                      alt=""
                    /></th>
              <td>G28861-280</td>
              <td>1,200,000₫</td>
              <td>1</td>
              <td>1,200,000₫</td>
            </tr>
            <tr>
              <th scope="row"><img
                      className="img-fluid"
                      style={{ width: "100px", height: "100px" }}
                      src={product}
                      alt=""
                    /></th>
              <td>G28861-280</td>
              <td>1,200,000₫</td>
              <td>1</td>
              <td>1,200,000₫</td>
            </tr>
            <tr>
              <th scope="row"><img
                      className="img-fluid"
                      style={{ width: "100px", height: "100px" }}
                      src={product}
                      alt=""
                    /></th>
              <td>G28861-280</td>
              <td>1,200,000₫</td>
              <td>1</td>
              <td>1,200,000₫</td>
            </tr>
          </tbody>
        </table>
        <div className="row mb-5">
          <hr className="my-4" />
          <div className="col-sm-8">
            <h3 className="card-title bolder">Tổng tiền: 3.600.000₫</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="col-4 welcome mb-5 mt-5">
      <div className="col-10 offset-1 text ">
        <p className="display-4" style={{fontSize: '34px'}}>Thông tin mua hàng</p>
        <p>Ngày tạo: 05/15/2022 07:51:44</p>     
        <p>Nguyễn Công Minh</p>  
        <p>minhncph13186@gmail.com</p>        
      </div>
      <div className="col-10 offset-1 text ">
        <p className="display-4" style={{fontSize: '34px'}}>Địa chỉ nhận hàng</p>
        <p>0987654321</p>
        <p>xã Ngọc Thụy, huyện Long Biên, tỉnh Hà Nội</p>
      </div>
    </div>
  </div>
  )
}

export default OrderDetail