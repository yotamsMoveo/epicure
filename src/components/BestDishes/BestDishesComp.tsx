import "../BestDishes/bestDishes.scss";
import bestDishes from "../../mock-data/mock-dishes.json";
import CardComp from "../Card/CardComp.tsx";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/settings/slider_settings.tsx";

function BestdishesComp() {
    function navigateToDishes(){
        console.log('navigate');
    }
  return (
    <>
      <p className="BestdishesComp_title">Signature Dish Of:</p>
      <div>
        <Slider {...settings}>
          {bestDishes.map((dish) => (
            <CardComp
              img={dish.image}
              title={dish.name}
              description={dish.description}
              key={dish.name}
              classNameProp="CardComp_big"
            />
          ))}
        </Slider>
      </div>
      <br/>
      <p className="BestRestaurantsComp_button" onClick={navigateToDishes}>All Restaurants</p>
    </>
  );
}
export default BestdishesComp;
