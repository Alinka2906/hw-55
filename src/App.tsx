import React, {ButtonHTMLAttributes, useState} from 'react';
import Burger from "./Burger/Burger";
import meatImage from './assets/image/meatImage.png';
import baconImage from './assets/image/baconImage.png';
import cheeseImage from './assets/image/cheeseImage.png';
import saladImage from './assets/image/saladImage.png';
import './App.css';

interface Props {
  onClick: HTMLButtonElement;
}


function App() {
  const INGRIDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage, id: 1},
    {name: 'Bacon', price: 60, image: baconImage, id: 2},
    {name: 'Cheese', price: 50, image: cheeseImage, id: 3},
    {name: 'Salad', price: 10, image: saladImage, id: 4},
  ];

  const [structure, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
  ]);

  const total = structure.reduce((acc, item) => {
    return acc + item.count+1;
  }, 0);





  return (
    <div className="App">
      <div className="orders">
        <div className="ingredients"><strong>Ingredients:</strong>
          {INGRIDIENTS.map(item => (
            <div className="list" key={item.name}>
              <div className="names">{item.name}</div>
              <img className="names" src={item.image}/>
              <div className="names">{total}</div>
              <div className="btn">
                <button>{item.name}</button>
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
