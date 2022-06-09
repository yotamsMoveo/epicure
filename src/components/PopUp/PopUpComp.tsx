import "../PopUp/popUp.scss";

function PopUpComp(selectedPopUp: any) {
  var selected = 0;
  if ("menu".localeCompare(selectedPopUp.selectedPopUp) == 0) {
    selected = 1;
  } else if ("search".localeCompare(selectedPopUp.selectedPopUp) == 0) {
    selected = 2;
  } else if ("conact".localeCompare(selectedPopUp.selectedPopUp) == 0) {
    selected = 3;
  } else if ("bag".localeCompare(selectedPopUp.selectedPopUp) == 0) {
    selected = 4;
  }

  switch (selected) {
    case 1:
      return (
        <div className="popUp_body">
          <ul className="popUp_ul">
            <li className="popUp_li">
              <a href="#home">Restaurants</a>
            </li>
            <li className="popUp_li">
              <a href="#news">Chefs</a>
            </li>
            <li className="popUp_li">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="popUp_li">
              <a href="#about">Term of Use</a>
            </li>
            <li className="popUp_li">
              <a href="#about">Privacy Policy</a>
            </li>
          </ul>
        </div>
      );
    case 2:
      return <div className="popUp_body">search</div>;
    case 3:
      return <div className="popUp_body">conact</div>;
    case 4:
      return <div className="popUp_body">bag</div>;
  }
}

export default PopUpComp;
