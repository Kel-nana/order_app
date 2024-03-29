import React from 'react';
import PropTypes from 'prop-types';
import MealItemForm from './MealItemForm';
import classes from './mealItem.module.css';

const MealItem = (props) => {
  const {
    name, description, price, id,
  } = props;
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div><MealItemForm id={id} /></div>
    </li>
  );
};

MealItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default MealItem;
