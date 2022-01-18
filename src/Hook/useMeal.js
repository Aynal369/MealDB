import { useEffect, useState } from "react";
import axios from "axios";

const useMeal = (url) => {
  const [dataInCategories, setDataInCategories] = useState([]);
  const [dataInMeals, setDataInMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setDataInMeals(response.data.meals);
        setDataInCategories(response.data.categories);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    dataInCategories,
    dataInMeals,
    loading,
    error,
  };
};

export default useMeal;
