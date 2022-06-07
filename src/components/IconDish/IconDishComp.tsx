import "../../components/IconDish/IconDish.scss";

function IconDishComp(props:any){
    const iconImg=props.imgUrl;
    const icondescription=props.description;
    return(
    <div className="icon_img">
        <img className='icon_dish_img' src={props.imgUrl}/>
        <p className="icon_dish_description">{props.description}</p>
    </div>);

}
export default IconDishComp;