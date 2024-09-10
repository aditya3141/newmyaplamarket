import Layout from "../Components/Layout/AllLayout.js";
import React from "react";
import useCategory from "../hooks/useCategory.js";
import { NavLink } from "react-router-dom";

const AllCategory = () => {
  const categories = useCategory();

  return (
    <Layout>
      {/* Categories section start */}

      <section style={{ overflowX: "hidden" }}>
        <div className="row mt-1 mb-4">
          <NavLink to={"/"} className="col-5">
            <span className="product-back">
              <i className="iconsax back-btn" data-icon="arrow-left">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57141 18.8211C9.38141 18.8211 9.19141 18.7511 9.04141 18.6011L2.97141 12.5311C2.68141 12.2411 2.68141 11.7611 2.97141 11.4711L9.04141 5.40109C9.33141 5.11109 9.81141 5.11109 10.1014 5.40109C10.3914 5.69109 10.3914 6.17109 10.1014 6.46109L4.56141 12.0011L10.1014 17.5411C10.3914 17.8311 10.3914 18.3111 10.1014 18.6011C9.96141 18.7511 9.76141 18.8211 9.57141 18.8211Z"
                    fill="#292D32"
                  />
                  <path
                    d="M20.5019 12.75H3.67188C3.26188 12.75 2.92188 12.41 2.92188 12C2.92188 11.59 3.26188 11.25 3.67188 11.25H20.5019C20.9119 11.25 21.2519 11.59 21.2519 12C21.2519 12.41 20.9119 12.75 20.5019 12.75Z"
                    fill="#292D32"
                  />
                </svg>
              </i>
            </span>
          </NavLink>
          <h2 className="col-6">Category</h2>
        </div>
        <div className="custom-container">
          {categories?.map((c) => (
            <ul className="categories-list" key={c._id}>
              <li className="mt-0 mb-3 p-1">
                <NavLink
                  to={`/category/${c.slug}`}
                  className="d-flex align-items-center"
                >
                  <div className="p-2 ">
                    <h2>{c.name}</h2>
                    <h4 className="mt-1">{">>>>>>>"}</h4>
                  </div>
                  <div className="categories-img"></div>
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AllCategory;
