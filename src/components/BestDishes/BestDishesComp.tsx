import "../BestDishes/bestDishes.scss";
import bestDishesMock from "../../mock-data/mock-dishes.json";
import CardComp from "../Card/CardComp.tsx";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/settings/slider_settings.tsx";
import { dishes } from "../../assets/interfaces/dishes";

function BestdishesComp(bestDishes:dishes) {
  function navigateToDishes() {
    console.log("navigate");
  }
  return (
    <div className="BestdishesComp_body">
      <p className="BestdishesComp_title">Signature Dish Of:</p>
      <div className="BestdishesComp_slider">
        <Slider {...settings}>
          {bestDishesMock.map((dish) => (
            <CardComp
              img={dish.image}
              title={dish.name}
              description={dish.description}
              type={dish.type}
              price={dish.price}
              key={dish.name}
              classNameProp="CardComp_big"
            />
          ))}
        </Slider>
        </div>
        <br/>
      <p className="BestRestaurantsComp_button" onClick={navigateToDishes}>
        All Restaurants
      </p>
    </div>
  );
}

// function BestdishesComp(bestDishes:dishes) {
//     function navigateToDishes() {
//       console.log("navigate");
//     }
//     return (
//       <div className="BestdishesComp_body">
//         <p className="BestdishesComp_title">Signature Dish Of:</p>
//         <div className="BestdishesComp_slider">
//           <Slider {...settings}>
//             {bestDishes.dishes.map((dish) => (
//               <CardComp
//                 img={dish.image}
//                 title={dish.name}
//                 description={dish.description}
//                 type={dish.type}
//                 price={dish.price}
//                 key={dish.name}
//                 classNameProp="CardComp_big"
//               />
//             ))}
//           </Slider>
//           </div>
//           <br/>
//         <p className="BestRestaurantsComp_button" onClick={navigateToDishes}>
//           All Restaurants
//         </p>
//       </div>
//     );
//   }
export default BestdishesComp;
