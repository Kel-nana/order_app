import React from 'react';
import PropTypes from 'prop-types';
import classes from './input.module.css';

const Input = (props) => {
  const { label, input } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input
        id={input.id}
        type={input.type}
        min={input.min}
        max={input.max}
        step={input.step}
        defaultValue={input.defaultValue}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
    defaultValue: PropTypes.string,
  }).isRequired,
};

export default Input;
