import IconDishComp from "../IconDish/IconDishComp.tsx";
import "../../components/Sinature_Dishs_Icon/signatureDishs.scss";
import IconDishes from '../../mock-data/mock-icon-dish.json';

function SignatureDishsIconComp() {
  return (
    <div className="signatureDishs_body">
      <div className="signatureDishs_title">Signature Dish Of:</div>
      <div>
        {
          IconDishes.map((item)=>{
            return <IconDishComp iconImg={item.img} icondescription={item.title} key={item.title}/>
          })
        }
      </div>
      {/* <IconDishComp iconImg={SpicyLogo} icondescription='Spicy'/>
      <IconDishComp iconImg={VegitarianLogo} icondescription='Vegitarian'/>
      <IconDishComp iconImg={veganLogo} icondescription='Vegan'/> */}
    </div>
  );
}

export default SignatureDishsIconComp;
function List<T>(arg0: number) {
  throw new Error("Function not implemented.");
}

