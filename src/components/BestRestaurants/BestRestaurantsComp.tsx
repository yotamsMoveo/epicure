import "./bestrestaurants.scss";
import bestResturants from "../../mock-data/mock-restaurants.json";
import CardComp from "../Card/CardComp.tsx";
function BestRestaurantsComp() {
  return (
    <div className="BestResturantsComp">
      <p className="BestResturantsComp_title">popular restaurant in epicure:</p>
      <div>
        {bestResturants.map((resturant) => (
         <CardComp img={resturant.image} title={resturant.name} description={resturant.chef} key={resturant.name} classNameProp='CardComp_small'/>)
        )}
      </div>
      <button>All Restaurants</button>
    </div>
  );
}
export default BestRestaurantsComp;
