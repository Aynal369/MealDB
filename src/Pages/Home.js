import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import useMeal from "../Hook/useMeal";

const Home = () => {
  const { dataInCategories } = useMeal(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container">
        <h3 className="pt-5">
          All Categories:-
          <small className="text-muted"> {dataInCategories.length}</small>
        </h3>
        <hr />
        <div className="row g-4">
          {dataInCategories.map((data) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={data.idCategory}
            >
              <div className="card bg-light shadow rounded h-100">
                <img
                  src={data.strCategoryThumb}
                  className="card-img-top bg-white"
                  alt={data.strCategory}
                />
                <div className="card-body">
                  <Link
                    to={`/categories/${data.strCategory}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h5 className="py-2">{data.strCategory}</h5>
                  </Link>
                  <p className="text-muted">
                    {data.strCategoryDescription.slice(0, 110)}
                    <Link
                      to={`/categories/${data.strCategory}`}
                      style={{ textDecoration: "none" }}
                    >
                      [ ... ]
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
