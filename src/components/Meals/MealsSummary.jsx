import classes from './mealsSummary.module.css';

const summaryData = {
  header: 'Delicious Food, Delivered to you',
  introOne: 'Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch of dinner at home.',
  introTwo: 'All our meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs',
};

const MealsSummary = () => (
  <section className={classes.summary}>
    <h2>{summaryData.header}</h2>
    <p>
      {summaryData.introOne}
    </p>
    <p>
      {summaryData.introTwo}
    </p>
  </section>
);

export default MealsSummary;
