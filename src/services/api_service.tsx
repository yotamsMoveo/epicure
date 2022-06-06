import CardComp from "../components/Card/CardComp.tsx";

function api_service(props: any) {
  let list: Array<typeof CardComp> = new Array<typeof CardComp>();
  function GetBestResturants() {
    console.log("hello");
    list.push(
      <CardComp title="fofo" subtitle="yoyo" classNameProp="restaurantCard" />
    );
    return list;
  }
  switch (props) {
    case "getBestResturants": {
      GetBestResturants();
    }
  }
}

export default api_service;
