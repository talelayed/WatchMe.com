import { moviesData } from './../data';
import CardItem from './card';

function CardList() {

    return (
      <>
      {
moviesData.map(product => 
    (<CardItem id={product.id} src={product.image} rating={product.rating} name={product.name} 
    date={product.date} type={product.type} desc={product.description} />
  ))
      }
      </>
    );
  }
  
  export default CardList;