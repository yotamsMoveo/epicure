import "./bestrestaurants.scss";
import bestResturantsMock from "../../mock-data/mock-restaurants.json";
import CardComp from "../Card/CardComp.tsx";
import * as React from "react";
import "../BestDishes/bestDishes.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from "../../assets/settings/slider_settings.tsx";
import { restaurants } from "../../assets/interfaces/restaurants";


function BestRestaurantsComp() {
  function navigateToRestaurants(){
      console.log('navigate');
  }
  return (
    <div className="BestResturantsComp">
      <p className="BestResturantsComp_title">popular restaurant in epicure:</p>
      <div className="BestResturantsComp_slider">
      <Slider {...settings}>
          {bestResturantsMock.map((resturant) => (
              <CardComp
                img={resturant.image}
                title={resturant.name}
                description={resturant.chef}
                key={resturant.name}
                classNameProp="CardComp_small"
              />
          ))}
        </Slider>
      </div>
      <br/>
      <p className="BestRestaurantsComp_button" onClick={navigateToRestaurants}>All Restaurants</p>
    </div>
  );
}
// function BestRestaurantsComp(bestRestaurants:restaurants) {
//   function navigateToRestaurants(){
//       console.log('navigate');
//   }
//   return (
//     <div className="BestResturantsComp">
//       <p className="BestResturantsComp_title">popular restaurant in epicure:</p>
//       <div className="BestResturantsComp_slider">
//       <Slider {...settings}>
//           {bestRestaurants.resturants.map((resturant) => (
//               <CardComp
//                 img={resturant.image}
//                 title={resturant.name}
//                 description={resturant.chef}
//                 key={resturant.name}
//                 classNameProp="CardComp_small"
//               />
//           ))}
//         </Slider>
//       </div>
//       <br/>
//       <p className="BestRestaurantsComp_button" onClick={navigateToRestaurants}>All Restaurants</p>
//     </div>
//   );
// }
export default BestRestaurantsComp;
