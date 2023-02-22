import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6 text-end ">
              <p className="text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+84 123456789">
                  +84 123456789
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl ">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="mb-0">
                <Link className="text-white">Digitic</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
