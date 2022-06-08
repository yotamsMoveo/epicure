import { ContentCutOutlined, PropaneSharp } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import "../Card/Card.scss";

function CardComp(props) {
  return (
    <div >
      <Card className={props.classNameProp}>
        <CardContent >
          <img className="CardComp_img" src={props.img}></img>
          <p className="CardComp_title">{props.title}</p>
          <p className="CardComp_description">{props.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardComp;
