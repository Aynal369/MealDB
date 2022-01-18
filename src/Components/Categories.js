import React from "react";
import { Link, useParams } from "react-router-dom";
import useMeal from "../Hook/useMeal";
import Loading from "./Loading";

const Categories = () => {
  const { name } = useParams();
  const { dataInMeals, loading } = useMeal(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  console.log(dataInMeals);
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container">
        <h3 className="pt-5">
          All meals:-
          <small className="text-muted"> {dataInMeals.length}</small>
        </h3>
        <hr />
        <div className="row g-4">
          {dataInMeals.map((data) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={data.idMeal}
            >
              <div className="card shadow rounded h-100">
                <img
                  src={data.strMealThumb}
                  className="card-img-top bg-dark"
                  alt={data.strMeal}
                />

                <div className="card-body">
                  <Link
                    to={`/categories/meal/${data.idMeal}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h5 className="py-2">{data.strMeal}</h5>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
