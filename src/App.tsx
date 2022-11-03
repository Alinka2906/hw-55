import React, {useState} from 'react';
import Burger from "./Burger/Burger";
import baconImage from './assets/image/baconImage.png';
import cheeseImage from './assets/image/cheeseImage.png';
import saladImage from './assets/image/saladImage.png';
import './App.css';


function App() {
  const meatImage = 'https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png';
  const [items, setItems] = useState<Types[]>([
    {name: 'Meat', price: 80, image: meatImage, id: 1, count: 0},
    {name: 'Bacon', price: 80, image: baconImage, id: 2, count: 0},
    {name: 'Cheese', price: 80, image: cheeseImage, id: 3, count: 0},
    {name: 'Salad', price: 10, image: saladImage, id: 4, count: 0},
  ]);
  console.log(items)
  return (
    <div className="App">
      <div className="orders">
        <div className="ingredients"> Ingredients:
          {items.map(item => (
            <div className="list" key={item.id}>
              <div className="names">{item.name}</div>
              <img className="names" src={item.image}/>
              <div className="names">{item.count}</div>
              <div className="btn">
                <button>Add</button>
              </div>
              <div className="btn">
                <button>X</button>
              </div>
            </div>

          ))}

        </div>
        <div className="burger">
          <div className="Burger">
            <div className="BreadTop">
            </div>
            <div className="Salad"></div>
            <div className="Cheese"></div>
            <div className="Meat"></div>
            <div className="BreadBottom"></div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
