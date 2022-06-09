import "../../components/IconDish/IconDish.scss";

const IconDishComp = (props) => (
  <div>
    <div >
      <img className="icon_dish_img" src={props.iconImg}/>
      <p className="icon_dish_description">{props.icondescription}</p>
    </div>
  </div>
);
export default IconDishComp;
