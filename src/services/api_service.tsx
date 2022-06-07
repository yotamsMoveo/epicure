import CardComp from "../components/Card/CardComp.tsx";
import IconDishComp from "../components/IconDish/IconDishComp.tsx";

function api_service(props: any) {
  let list: Array<CardComp> = new Array<typeof CardComp>();

  ///return the best resturants
  function GetBestResturants() {
    
    list.forEach(element => {
      console.log(element);
    });
    return list;
  }

  ///return the icon dish
  function GetListOfIconDish(){
    let iconDishArr:Array<IconDishComp>=new Array<typeof IconDishComp>();
  }
  switch (props) {
    case "getBestResturants": {
      GetBestResturants();
    }
    case "getListOfIconDish":{
      GetListOfIconDish();
    }
  }
}

export default api_service;
