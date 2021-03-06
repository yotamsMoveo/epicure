import IconDishComp from "../IconDish/IconDishComp.tsx";
import "../../components/Sinature_Dishs_Icon/signatureDishs.scss";
import IconDishes from '../../mock-data/mock-icon-dish.json';
import { signature_dish_icons } from "../../assets/interfaces/signature_dish_icons";

function SignatureDishsIconComp(signature_dish_icons:signature_dish_icons) {
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
    </div>
  );
}

export default SignatureDishsIconComp;


