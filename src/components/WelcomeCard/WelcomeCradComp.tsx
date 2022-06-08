import "../WelcomeCard/welcomeCard.scss";
import TextFieldComp from '../TextField/TextFieldComp.tsx';

function WelcomeCardComp() {
  return (
    <div className="WelcomeCardComp_welcom">
      <div className="WelcomeCardComp_card">
        <h1 className="WelcomeCardComp_card_title">
          Epicure works with the top chef restaurants in Tel Aviv
        </h1>
        <div className="WelcomeCardComp_searchField">
          <TextFieldComp text="Search for restaurant cuisine, chef" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeCardComp;
