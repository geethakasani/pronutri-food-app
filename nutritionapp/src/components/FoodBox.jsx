import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css'

function FoodBox(props) {
  const [quantity, setQuantity] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    
  };

  const handleAddClick = () => {
    const calories = quantity * props.food.cal;
    setTotalCalories(calories);
    props.onAdd(props.food, quantity, calories);
  };
  const handleResetClick = () => {
    setQuantity(0);
    setTotalCalories(0);
  };
  

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.img} alt={props.food.name} width="40" height="40" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
        
              <strong>{props.food.name}</strong>
               <br />
              <small>{props.food.cal} cal</small>
        
          </div>
        </div>
        <div className="merightdia-">
          <div className="field has-addons">
            <div className="control">
              <input 
              className="input" 
              type="number"
               value={quantity} 
               onChange={handleQuantityChange}
               min='0' 
               />
            
            <button className="button is-info" onClick={handleAddClick}> +</button>
             
            <p>{quantity} {props.food.name} = {totalCalories} cal</p>

              <button className="reset" onClick={handleResetClick}>Reset</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

FoodBox.propTypes = {
  food: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired
};

export default FoodBox;
