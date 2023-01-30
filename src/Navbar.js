import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  let cartStore = useSelector((store) => store.cartStore);
  let cartLength = cartStore.cart_items.length;

  return (
    <div>
      <div className="d-flex justify-content-evenly bg-primary-subtle m">
        <Link to="/" className="text-decoration-none">
          <div className="py-3 px-5 h2 text-success">Home</div>
        </Link>
        <Link to="/cart" className="text-decoration-none">
          {" "}
          <div className="py-3 px-5 h2 text-success position-relative">
            Cart
            <span className="position-absolute px-2 py-1 top-25 start-75 translate-middle badge rounded-pill bg-danger">
            {cartLength}
            </span>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
