import addidas from "../static/images/adidas.jpg";
import nike from "../static/images/nike.jpg";
import puma from "../static/images/puma.jpg";
import fila from "../static/images/fila.jpg";
import { NavLink } from "react-router-dom";
import first from '../static/images/slider_1_image.jpg';
import second from '../static/images/slider_2_image.jpg';
import third from '../static/images/slider_4_image.jpg';
import fourth from '../static/images/slider_5_image.jpg'
const Home = (props) => {
  var rows = new Array(props.total).fill(0).map((zero, index) => (
    <li
      className={props.page === index + 1 ? "page-item active" : "page-item"}
      key={index}
    >
      <button
        className="page-link"
        onClick={() => onHandleChangePage(index + 1)}
      >
        {index + 1}
      </button>
    </li>
  ));

  const onHandleChangePage = (page) => {
    props.onChangePage(page);
  };

  return (
    <div>
    {/* Carousel */}
    <div id="slides" className="carousel slide  mb-5" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to={0} className="active" />
          <li data-target="#slides" data-slide-to={1} />
          <li data-target="#slides" data-slide-to={2} />
          <li data-target="#slides" data-slide-to={3} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} alt=""/>
          </div>
          <div className="carousel-item">
            <img src={second} alt=""/>
          </div>
          <div className="carousel-item">
            <img src={third} alt=""/>
          </div>
          <div className="carousel-item">
            <img src={fourth} alt=""/>
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-3 ">
            <img src={addidas} alt="" height={50} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 ">
            <img src={nike} alt="" height={50} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 ">
            <img src={puma} alt="" height={50} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 ">
            <img src={fila} alt="" height={50} />
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <div className="container-fluid padding">
        <div className="row welcome">
          <div className="col-12 text-center">
            <h4 className="title">Mới nhất</h4>
          </div>
        </div>
      </div>
      <div className="container padding">
        <div className="row padding d-flex">
          {props.products &&
            props.products.map((item, index) => (
              <div className="col-4 border-dark mb-5" key={index}>
                <div
                  className="card text-center bg-light"
                  data-toggle="tooltip"
                  title="Alphalava"
                >
                  <div className="card-body">
                    <img
                      className="card-img-top mb-5"
                      src={require(`../static/images/${item.imageLink}`)}
                      alt=""
                    />
                    <h4 className="card-title text-danger">{item.name}</h4>
                    <p className="card-text text-black-50">
                      Lượt xem: {item.view}
                    </p>
                    <h5 className="card-title">{item.price.toLocaleString()}₫</h5>
                    <NavLink
                      to={`/product-detail/${item.id}`}
                      exact
                      className="btn btn-primary"
                    >
                      Mua hàng
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination offset-5">
          <li className={props.page === 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => onHandleChangePage(1)}>
              First
            </button>
          </li>
          {rows}
          <li
            className={
              props.page === props.total ? "page-item disabled" : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() => onHandleChangePage(props.total)}
            >
              Last
            </button>
          </li>
        </ul>
      </nav>
      {/* <div className="container-fluid padding mt-3 mb-3">
        <div className="row welcome">
          <div className="col-12">
            <h4 className="title">Xem nhiều nhất</h4>
          </div>
        </div>
      </div>
      <div className="container padding">
        <div className="row padding d-flex">
          {props.products &&
            props.products.map((item, index) => (
              <div className="col-4 border-dark mb-5  " key={index}>
                <div
                  className="card text-center bg-light"
                  data-toggle="tooltip"
                  title="Alphalava"
                >
                  <div className="card-body">
                    <img className="card-img-top mb-5" src={require(`../static/images/${item.imageLink}`)} alt="" />
                    <h4 className="card-title text-danger">{item.name}</h4>
                    <p className="card-text text-black-50">{item.price}₫</p>
                    <NavLink to="#" className="btn btn-primary">
                      Mua hàng
                    </NavLink>
                  </div>
                </div>
              </div>
            ))} 
        </div>
      </div> */}
    </div>
  );
};

export default Home;
