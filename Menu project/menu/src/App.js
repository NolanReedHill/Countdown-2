import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={() => ShowVegatarian()} >Show Vegetarian</button>

      <MenuSection name= "breakfast"/>
      <MenuSection name= "lunch"/>
      <MenuSection name= "dinner"/>
    </div>
  );
}

function ShowVegatarian() {
  const [value] = useState(0);
}

function MenuSection({name= "unnamed"}) {
  const thisSection = menuItems[name];
  return (
    <>
    <h3>{name}</h3>

    </>
  );
};

const menuItems = {
  "breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ],
  "lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
    {"food": "hamburger", "price": 8.00, "vegetarian": false}
  ],
  "dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
    {"food": "chili", "price": 8.00, "vegetarian": false}
  ]
}

export default App;
