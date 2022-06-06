import { PropaneSharp } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import "../Card/Card.scss";

function CardComp(props) {
  const img = props.img;
  const title = props.title;
  const subtitle = props.subtitle;
  const classNameProp = props.classNameProp;
  return (
    <div className={classNameProp}>
      <Card>
        <CardContent>
          <img>{img}</img>
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardComp;
