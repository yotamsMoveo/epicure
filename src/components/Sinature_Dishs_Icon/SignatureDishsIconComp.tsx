import IconDishComp from "../IconDish/IconDishComp.tsx";
import SpicyLogo from '../../assets/spicyLogo.png';
import "../../components/Sinature_Dishs_Icon/signatureDishs.scss";

function SignatureDishsIconComp(props: any) {
  return (
    <div className="signatureDishs_body">
      <div className="signatureDishs_title">Signature Dish Of:</div>
      <div className="IconList"><IconDishComp iconImg='../../assets/spicyLogo.png' icondescription='Spicy'/></div>
    </div>
  );
}

export default SignatureDishsIconComp;
