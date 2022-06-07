import "../../components/IconDish/IconDish.scss";
import SpicyLogo from '../../assets/spicyLogo.png';

function IconDishComp(props){
    const iconImg=props.imgUrl;
    const icondescription=props.description;
    return(
    <div className="icon_img">
        <img className='icon_dish_img' src={SpicyLogo}/>
        <p className="icon_dish_description">Spicy</p>
    </div>);

}
export default IconDishComp;