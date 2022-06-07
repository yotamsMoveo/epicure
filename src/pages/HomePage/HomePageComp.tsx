import * as React from "react";
import "../HomePage/HomePage.scss";
import Box from "@mui/material/Box";
import TextFieldComp from "../../components/TextField/TextFieldComp.tsx";
import CardComp from "../../components/Card/CardComp.tsx";
import { Carousel } from "react-responsive-carousel";
import AboutUsComp from "../../components/Aboutus/AboutUsComp.tsx";
import SignatureDishsIconComp from "../../components/Sinature_Dishs_Icon/SignatureDishsIconComp.tsx";

function HomePage(props: any) {
  const bestResturants = props.bestResturants;

  const selectByItem = ["Chef", "Restaurant"];
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div
      className="HomePage_body
    "
    >
      <div className="HomePage_welcom">
        <div className="HomePage_card">
          <h1 className="HomePage_card_title">
            Epicure works with the top chef restaurants in Tel Aviv
          </h1>
          <div className="HomePage_searchField">
            <TextFieldComp text="Search for restaurant cuisine, chef" />
          </div>
        </div>
      </div>

     
      <div>
        <SignatureDishsIconComp/>
      </div>

      <div>
        <AboutUsComp />
      </div>
    </div>
  );
}
export default HomePage;
