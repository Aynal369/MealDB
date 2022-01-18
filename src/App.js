import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Categories from "./Components/Categories";
import Meal from "./Components/Meal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:name" element={<Categories />} />
          <Route path="/categories/meal/:id" element={<Meal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
