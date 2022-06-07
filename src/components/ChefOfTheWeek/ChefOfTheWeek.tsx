import "../../components/ChefOfTheWeek/chefOfTheWeek.scss";
import mockChef from "../../mock-data/mock-chefs.json";
import CardComp from "../Card/CardComp.tsx";

function ChefOfTheWeek() {
  var img = mockChef;
  return (
    <div className="ChefOfTheWeek_body">
      <h1 className="ChefOfTheWeek_tilte">Chef of the week:</h1>
      { mockChef.map((chef) => {
        var restaurantNames=chef.restaurants;
        return(
        <div key={chef.name}>
          <img className="ChefOfTheWeek_img" src={chef.image}  />
          <p className="ChefOfTheWeek_layout">{chef.name}</p>
          <p className="ChefOfTheWeek_description">{chef.description}</p>
          {
            restaurantNames.map((item)=>{
              return(<CardComp img={item.image} title={item.name} key={item.name} classNameProp='CardComp_small'/>)
            })
          }
      
        </div>
        )
        }
        )
      }
      
    </div>
  );
}

export default ChefOfTheWeek;
