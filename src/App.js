import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import {Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect, React } from "react";
import { getAllProducts, getTotalPage } from "./api/ProductApi";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Order from "./components/Order";
import OrderDetail from "./components/OrderDetail";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});

  useEffect(() => {
    getAllProducts(page, 9).then((response) => setProducts(response.data));
    getTotalPage().then((res) => setTotal(res.data));
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home
              products={products}
              page={page}
              total={total}
              onChangePage={onChangePage}
            ></Home>
          </Route>
          <Route path={`/product-detail/:id`} exact>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="/cart" exact>
            <Cart></Cart>
          </Route>
          <Route path="/checkout" exact>
            <Checkout></Checkout>
          </Route>
          <Route path="/order" exact>
            <Order></Order>
          </Route>
          <Route path="/order/detail/:id" exact>
            <OrderDetail></OrderDetail>
          </Route>
        </Switch>
        <Footer></Footer>
        </div>
  );
}

export default App;
