import PropTypes from 'prop-types';
import classes from './card.module.css';

const Card = (props) => {
  const { children } = props;

  return <div className={classes.card}>{children }</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Card;
