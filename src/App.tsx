import "./App.scss";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.tsx";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePageComp.tsx";
import Restaurants from "./pages/Resraurans/RestaurantsComp.tsx";
import Orders from "./pages/Orders/OrdersComp.tsx";
import Layout from "./pages/layout";
import api_service from "./services/api_service.tsx";
import FooterPage from "./components/Footer/FoterComp.tsx";

function App(props) {
  return (
    <div>
      {props.children}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<HomePage/>}
            />
            <Route path="orders" element={<Orders />} />
            <Route path="restaurants" element={<Restaurants />} />
          </Route>
        </Routes>
      </Router>
      <FooterPage />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;


