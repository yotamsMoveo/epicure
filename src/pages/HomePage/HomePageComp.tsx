import React, { useState, useEffect } from "react";
import "../HomePage/HomePage.scss";
import AboutUsComp from "../../components/Aboutus/AboutUsComp.tsx";
import SignatureDishsIconComp from "../../components/Sinature_Dishs_Icon/SignatureDishsIconComp.tsx";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek.tsx";
import BestRestaurantsComp from "../../components/BestRestaurants/BestRestaurantsComp.tsx";
import BestdishesComp from "../../components/BestDishes/BestDishesComp.tsx";
import WelcomeCardComp from "../../components/WelcomeCard/WelcomeCradComp.tsx";
import {
  getBestDishesData,
  getBestResturantsData,
  getChefOfTheWeekData,
} from "../../services/api_service.tsx";
import axios from "axios";

function HomePage() {
  const [chefOfTheWeekData, setChefOfTheWeekData] = useState({});
  const [bestDishesData, setBestDishesData] = useState("");
  const [bestResturantsData, setBestResturantsData] = useState('');

  useEffect(() => {
    const data = getChefOfTheWeekData().then((response)=>
       setChefOfTheWeekData(response)
    );
  }, []);
  useEffect(() => {
    const data = getBestResturantsData().then((response)=>
    setBestResturantsData(response)
    );
  }, []);

  useEffect(() => {
    const data = getBestDishesData().then((response)=>
    setBestDishesData(response))
  }, [])

  return (
    <div className="HomePage_body">
      <WelcomeCardComp />
      <BestRestaurantsComp data={bestResturantsData}/>
      <BestdishesComp data={bestDishesData}/>
      <SignatureDishsIconComp />
      <ChefOfTheWeek data={chefOfTheWeekData}/>
      <AboutUsComp />
    </div>
  );
}
export default HomePage;
