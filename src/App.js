import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Order from "./components/Order";
import OrderDetail from "./components/OrderDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Product from "./components/Product";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import OutStock from "./components/OutStock";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [size, setSize] = useState("");
  const [temp, setTemp] = useState([]);
  const [outStock, setOutStock] = useState([]);

  const changeSizeHandler = (event) => {
    setSize(event.target.value/10);
  };

  const backHandler = (data) =>{
    setTemp(data);
  }

  const outStockHandler = (data) =>{
    setOutStock(data);
  }
  return (
    <div className="col-10 offset-1">
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/store" exact>
          <Product></Product>
        </Route>
        <Route path={`/product-detail/:id`} exact>
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="/cart" exact>
          <Cart backHandler={backHandler} outStockHandler={outStockHandler}></Cart>
        </Route>
        <Route path="/checkout" exact>
          <Checkout temp={temp}></Checkout>
        </Route>
        <Route path="/order" exact>
          <Order></Order>
        </Route>
        <Route path="/order/detail/:id" exact>
          <OrderDetail></OrderDetail>
        </Route>
        <Route path="/out-of-stock" exact>
          <OutStock outStock={outStock} setOutStock={setOutStock}></OutStock>
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
                <Form.Control type="number" min={220} max={320} autoFocus onChange={changeSizeHandler}/>
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
}

export default App;
