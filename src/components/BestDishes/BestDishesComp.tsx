import '../BestDishes/bestDishes.scss';
import bestDishes from '../../mock-data/mock-dishes.json';
import CardComp from '../Card/CardComp.tsx';

function BestdishesComp(){
    return (
        <div className='BestdishesComp_body'>
          <p className="BestdishesComp_title">Signature Dish Of:</p>
          <div>
            {bestDishes.map((dish) => {
              return <CardComp img={dish.image} title={dish.name} description={dish.description} key={dish.name} classNameProp='CardComp_big'/>;
            })}
          </div>
          <button>All Dishes</button>
        </div>
      );
}
export default BestdishesComp;