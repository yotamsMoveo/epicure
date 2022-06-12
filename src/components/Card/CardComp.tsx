import { ContentCutOutlined, PropaneSharp } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import "../Card/Card.scss";

function CardComp(props) {
  if (props.classNameProp.localeCompare("CardComp_big") == 0) {
    return (
      <div>
        <Card className="CardComp_body">
          <CardContent className={props.classNameProp}>
            <img className="CardComp_img" src={props.img}></img>
            <p className="CardComp_title">{props.title}</p>
            <p className="CardComp_description">{props.description}</p>
            <img className="CardComp_type" src={props.type}></img>
            <p className="CardComp_type">{props.price}</p>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <Card className="CardComp_body">
          <CardContent className={props.classNameProp}>
            <img className="CardComp_img" src={props.img}></img>
            <p className="CardComp_title">{props.title}</p>
            <p className="CardComp_description">{props.description}</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CardComp;
