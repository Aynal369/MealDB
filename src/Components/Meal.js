import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import useMeal from "../Hook/useMeal";

const Meal = () => {
  const { id } = useParams();
  const { dataInMeals } = useMeal(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  console.log(dataInMeals);
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container">
        <div className="row">
          {dataInMeals.map((data) => (
            <div className="col-12 mt-2 pt-3" key={data.idMeal}>
              <div className="card shadow">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url={data.strYoutube}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-body">
                      <h4 className="card-title">{data.strMeal}</h4>
                      <p className="card-text">
                        <small className="fw-bold text-muted">
                          {data.strTags}
                        </small>
                      </p>
                      <div className="d-flex justify-content-between">
                        <p>
                          <span className="text-muted fw-bolder">Area:</span>
                          <span className="text-success ms-2">
                            {data.strArea}
                          </span>
                        </p>
                        <p>
                          <span className="text-muted fw-bolder">
                            Category:
                          </span>
                          <span className="text-success ms-2">
                            {data.strCategory}
                          </span>
                        </p>
                      </div>
                      <div className="bg-light p-3 rounded-3 shadow-sm mb-2">
                        <p className="m-0 fw-bold">Ingredient:</p>
                        <p className="text-muted">
                          <small className="me-2">{data.strIngredient1},</small>
                          <small className="me-2">{data.strIngredient2},</small>
                          <small className="me-2">{data.strIngredient3},</small>
                          <small className="me-2">{data.strIngredient4},</small>
                          <small className="me-2">{data.strIngredient5},</small>
                          <small className="me-2">{data.strIngredient6},</small>
                          <small className="me-2">{data.strIngredient7},</small>
                          <small className="me-2">{data.strIngredient8},</small>
                          <small className="me-2">{data.strIngredient9},</small>
                          <small className="me-2">
                            {data.strIngredient10},
                          </small>
                          <small className="me-2">
                            {data.strIngredient11},
                          </small>
                          <small className="me-2">
                            {data.strIngredient12},
                          </small>
                          <small className="me-2">
                            {data.strIngredient13},
                          </small>
                          <small className="me-2">
                            {data.strIngredient14},
                          </small>
                          <small className="me-2">
                            {data.strIngredient15},
                          </small>
                          <small className="me-2">
                            {data.strIngredient16},
                          </small>
                          <small className="me-2">
                            {data.strIngredient17},
                          </small>
                          <small className="me-2">
                            {data.strIngredient18},
                          </small>
                          <small className="me-2">
                            {data.strIngredient19},
                          </small>
                          <small className="me-2">
                            {data.strIngredient20},
                          </small>
                        </p>
                      </div>
                      <div className="bg-light p-3 rounded-3 shadow-sm">
                        <p className="m-0 fw-bold">Measure:</p>
                        <p className="text-muted">
                          <small className="me-2">{data.strMeasure1},</small>
                          <small className="me-2">{data.strMeasure2},</small>
                          <small className="me-2">{data.strMeasure3},</small>
                          <small className="me-2">{data.strMeasure4},</small>
                          <small className="me-2">{data.strMeasure5},</small>
                          <small className="me-2">{data.strMeasure6},</small>
                          <small className="me-2">{data.strMeasure7},</small>
                          <small className="me-2">{data.strMeasure8},</small>
                          <small className="me-2">{data.strMeasure9},</small>
                          <small className="me-2">{data.strMeasure10},</small>
                          <small className="me-2">{data.strMeasure11},</small>
                          <small className="me-2">{data.strMeasure12},</small>
                          <small className="me-2">{data.strMeasure13},</small>
                          <small className="me-2">{data.strMeasure14},</small>
                          <small className="me-2">{data.strMeasure15},</small>
                          <small className="me-2">{data.strMeasure16},</small>
                          <small className="me-2">{data.strMeasure17},</small>
                          <small className="me-2">{data.strMeasure18},</small>
                          <small className="me-2">{data.strMeasure19},</small>
                          <small className="me-2">{data.strMeasure20},</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted p-3 bg-light m-0">
                      {data.strInstructions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meal;
