import aboutLogo from "../../assets/about-logo.png";
function AboutUsComp() {
  return (
    <div className="AboutUsComp_about_us">
      <div className="AboutUsComp_aboutLogo">
      <img  src={aboutLogo}/>
      </div>
      <div>
        <button>google play</button>
        <button>app store</button>
      </div>
      <div>
        <h1 className="AboutUsComp_title">ABOUT US:</h1>
        <p className="AboutUsComp_parograph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum.
        </p>
      </div>
    </div>
  );
}
export default AboutUsComp;
