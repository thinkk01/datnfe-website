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
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="col-10 offset-1">
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
