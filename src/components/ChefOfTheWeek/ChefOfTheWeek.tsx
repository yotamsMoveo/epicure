import "../../components/ChefOfTheWeek/chefOfTheWeek.scss";
import mockChef from "../../mock-data/mock-chefs.json";
import CardComp from "../Card/CardComp.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/settings/slider_settings.tsx";

function ChefOfTheWeek() {
  var restaurantNames = mockChef.restaurants;
  return (
    <div className="ChefOfTheWeek_body">
      <h1 className="ChefOfTheWeek_tilte">Chef of the week:</h1>
      <div className="parent">
        <img
          src={mockChef.image}
          alt="chef of the month"
          className="half-fade-image"
        ></img>
        <div className="opacity_div">Yossi Shitrit</div>
      </div>
      <p className="ChefOfTheWeek_description">{mockChef.description}</p>
      <div className="ChefOfTheWeek_slider">
        <Slider {...settings}>
          {restaurantNames.map((resturant) => (
            <CardComp
              img={resturant.image}
              title={resturant.name}
              key={resturant.name}
              classNameProp="CardComp_small"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ChefOfTheWeek;
