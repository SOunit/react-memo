import React from "react";
import PropTypes from "prop-types";

const Component = ({ name, age, element, as, array, person }) => {
  return (
    <div>
      {`${name} is ${age} years old.`}
      {element}
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string.isRequired]),
  age: PropTypes.number.isRequired,
  element: PropTypes.element,
  as: PropTypes.elementType,
  array: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  book: PropTypes.exact({
    name: PropTypes.string,
  }),
};

export default Component;
