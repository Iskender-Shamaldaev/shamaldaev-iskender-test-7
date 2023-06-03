import React, {useState} from 'react';
import foodImage from './assets/food.png';
import drinkImage from './assets/drinks.png';
import './App.css';
import {nanoid} from "nanoid";

const App = () => {

const [products, setProducts] = useState([
    { id: nanoid(),name: 'Hamburger', price: 80, image: foodImage },
    { id: nanoid(), name: 'Cheeseburger', price: 90, image:foodImage },
    { id: nanoid(), name: 'Fries', price: 45, image: foodImage },
    { id:nanoid(),name: 'Coffee', price: 70, image: drinkImage },
    { id:nanoid(),name: 'Tea', price: 50, image: drinkImage  },
    { id:nanoid(),name: 'Cola', price: 40, image: drinkImage  },
]);

const [order, setOrder] = useState('Order is empty');




  return (
      <div className="App">
          <div className="left">
              {order}
          </div>
          <div style={{border: "1px solid black"}}>
              {
                  products.map(item => (
                      <div style={{display: "flex", alignItems: "center", border:"1px solid black"}}>
                          <button style={{width: "100%"}}>
                              <img style={{width: "75px"}} src={item.image} alt={item.name}/>
                              <div>
                                  <strong>{item.name}</strong>
                                  <p>
                                      Price:{item.price}KGS
                                  </p>
                              </div>
                          </button>
                      </div>
                  ))
              }
          </div>
      </div>
  );
};

export default App;
