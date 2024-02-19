import Input from '../../UI/Input';
import classes from './mealItemForm.module.css';

const MealItemForm = () => (
  <form className={classes.form}>
    <Input
      label="Amount"
      input={{
        id: 'amount',
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

export default MealItemForm;
