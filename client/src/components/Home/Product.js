import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../lib/state/actions";

const Product = ({ _id, description, name, price, imageUrl, inStock, category }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => ({ ...state.cart }));
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const addToCartAction = () => {
    dispatch(addToCart({ _id, name, price, imageUrl }));
  };

  return (
    <div className="col-sm-4 col-6">
      <div className="card card-product-grid">
        <a href="#" className="img-wrap">
          <img src={imageUrl} />
        </a>
        <figcaption className="info-wrap">
          <ul className="rating-stars mb-1">
            <li style={{ width: "80%" }} className="stars-active">
              <img src="images/icons/stars-active.svg" alt="" />
            </li>
            <li>
              <img src="images/icons/starts-disable.svg" alt="" />
            </li>
          </ul>
          <div>
            <a href="#" className="text-muted">
              {category}
            </a>
            <br />
            <a href="#" className="title">
              {name}
            </a>
          </div>
          <div className="price h5 mt-2">{price}€</div>
          <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
            <label className="btn btn-warning active">
              <input
                onChange={(x) => console.log(x)}
                type="radio"
                name="options"
                id="option1"
                checked
              />
              <i className="fas fa-heart"></i>
            </label>
            <label className="btn btn-success">
              <input onClick={addToCartAction} type="radio" name="options" id="option3" />
              <i className="fas fa-shopping-cart"></i>
            </label>
          </div>
        </figcaption>
      </div>
    </div>
  );
};
export default Product;
