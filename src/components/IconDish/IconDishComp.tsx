import "../../components/IconDish/IconDish.scss";
import SpicyLogo from "../../assets/spicyLogo.png";

// function IconDishComp(props: any) {
//   const iconImg = props.imgUrl;
//   const icondescription = props.description;
//   return (
//     <div>
//       <div className="icon_img">
//         <img className="icon_dish_img">{iconImg}</img>
//         <p className="icon_dish_description">{icondescription}</p>
//       </div>
//     </div>
//   );
// }

const IconDishComp = (props) => (
  <div>
    <div className="icon_img">
      <img className="icon_dish_img" src={props.iconImg}/>
      <p className="icon_dish_description">{props.icondescription}</p>
    </div>
  </div>
);
export default IconDishComp;
