import { useState } from 'react';
import FoodBox from './components/FoodBox';
import foodData from './components/FoodData';
import './App.css'

const App = () => {
  const [foods, setFoods] = useState(foodData());
  const [searchTerm, setSearchTerm] = useState('');
  const [addedFoods, setAddedFoods] = useState({});

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredFoods = foodData().filter((food) => food.name.toLowerCase().includes(searchTerm));
    setFoods(filteredFoods);
  };

  const handleAddFood = (food, quantity) => {
    const count = addedFoods[food.name] ? addedFoods[food.name].count + quantity : quantity;
    const calories = count * food.cal;
    setAddedFoods((prevAddedFoods) => ({ ...prevAddedFoods, [food.name]: { count, calories } }));
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search food" />
      </div>
      <div className="food-container">
        {foods.map((food) => (
          <FoodBox
            key={food.id}
            food={food}
            onAdd={(quantity) => handleAddFood(food, quantity)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;