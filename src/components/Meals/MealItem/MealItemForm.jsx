import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import classes from './mealItemForm.module.css';

const MealItemForm = (props) => {
  const { id } = props;

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amounts${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit"> + Add</button>
    </form>
  );
};
MealItemForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MealItemForm;
