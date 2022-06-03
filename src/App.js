import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect, React } from "react";
import { getAllProducts, getTotalPage } from "./api/ProductApi";

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
    <div className="App">
      <Router>
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
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
