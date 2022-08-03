import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Order from "../components/Order";
import OrderDetail from "../components/OrderDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Product from "../components/Product";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import OutStock from "../components/OutStock";
import Error from "../components/Error";
import Paypal from "../components/Paypal";
import Search from "../components/Search";
import Register from '../authenticate/Register';
import SignIn from '../authenticate/SignIn';
import Blog from "../components/blog/Blog";

const UserLayOut = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [size, setSize] = useState("");
  const [temp, setTemp] = useState([]);
  const [outStock, setOutStock] = useState([]);
  const [buy, setBuy] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [header, setHeader] = useState(1);

  const searchHandler = (keyword) =>{
    setKeyword(keyword);
  }
  const changeHeaderHandler = (value) => {
    setHeader(value);
  }

  const buyHandler = (id) => {
    setBuy([...buy, id]);
  };

  const cancelBuyHandler = (id) => {
    const res = buy.filter((item) => item != id);
    setBuy(res);
  };

  const clearBuyHandler = () => {
    setBuy([]);
  };
  const changeSizeHandler = (event) => {
    const len = event.target.value;
    if(len < 220 || len > 320){
      setSize("Kích thước không hợp lệ.");
    }else{
      if(len >= 200 && len <= 240){
        setSize("Size: 39");
      }else if(len < 280){
        setSize("Size: 40");
      }else{
        setSize("Size: 41");
      }
    }
  };

  const backHandler = (data) => {
    setTemp(data);
  };

  const outStockHandler = (data) => {
    setOutStock(data);
  };
  return (
    <div className="col-10 offset-1">
      <Header header={header} searchHandler={searchHandler}></Header>
      <Switch>
        <Route path="/" exact>
          <Home changeHeaderHandler={changeHeaderHandler}></Home>
        </Route>
        <Route path="/store" exact>
          <Product changeHeaderHandler={changeHeaderHandler}></Product>
        </Route>
        <Route path={`/product-detail/:id`} exact>
          <ProductDetail changeHeaderHandler={changeHeaderHandler}></ProductDetail>
        </Route>
        <Route path="/cart" exact>
          <Cart
            backHandler={backHandler}
            outStockHandler={outStockHandler}
            buyHandler={buyHandler}
            cancelBuyHandler={cancelBuyHandler}
            clearBuyHandler={clearBuyHandler}
            buy={buy}
            changeHeaderHandler={changeHeaderHandler}
          ></Cart>
        </Route>
        <Route path="/checkout" exact>
          <Checkout
            temp={temp}
            buy={buy}
            outStockHandler={outStockHandler}
            changeHeaderHandler={changeHeaderHandler}
          ></Checkout>
        </Route>
        <Route path="/order" exact>
          <Order changeHeaderHandler={changeHeaderHandler}></Order>
        </Route>
        <Route path="/order/detail/:id" exact>
          <OrderDetail changeHeaderHandler={changeHeaderHandler}></OrderDetail>
        </Route>
        <Route path="/out-of-stock" exact>
          <OutStock outStock={outStock} buy={buy} changeHeaderHandler={changeHeaderHandler}></OutStock>
        </Route>
        <Route path="/search-page" exact>
          <Search keyword={keyword}></Search>
        </Route>
        <Route path="/payment-page" exact>
          <Paypal></Paypal>
        </Route>
        <Route path="/error-page" exact>
          <Error></Error>
        </Route>
        <Route path="/register" exact>
          <Register></Register>
        </Route>
        <Route path="/sign-in" exact>
          <SignIn></SignIn>
        </Route>
        <Route path="/blog" exact>
          <Blog changeHeaderHandler={changeHeaderHandler}></Blog>
        </Route>
      </Switch>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      <div id="scroll">
        <Button variant="primary" onClick={handleShow}>
          Hướng dẫn chọn size
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hướng dẫn chọn size</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nhập chiều dài bàn chân(mm)</Form.Label>
                <Form.Control
                  type="number"
                  min={220}
                  max={320}
                  autoFocus
                  onChange={changeSizeHandler}
                />
                {size && <Form.Label className="ml-1 mt-3">{size}</Form.Label>}
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
    </div>
  );
};

export default UserLayOut;
