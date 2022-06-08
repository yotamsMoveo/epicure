import * as React from "react";
import "../HomePage/HomePage.scss";
import AboutUsComp from "../../components/Aboutus/AboutUsComp.tsx";
import SignatureDishsIconComp from "../../components/Sinature_Dishs_Icon/SignatureDishsIconComp.tsx";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek.tsx";
import BestRestaurantsComp from "../../components/BestRestaurants/BestRestaurantsComp.tsx";
import BestdishesComp from "../../components/BestDishes/BestDishesComp.tsx";
import WelcomeCardComp from "../../components/WelcomeCard/WelcomeCradComp.tsx";

function HomePage() {
  return (
    <div className="HomePage_body">
      <WelcomeCardComp />
      <BestRestaurantsComp />
      <BestdishesComp />
      <SignatureDishsIconComp />
      <ChefOfTheWeek />
      <AboutUsComp />
    </div>
  );
}
export default HomePage;
