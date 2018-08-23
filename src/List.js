import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const { items } = props;
  return (
    <ul className="theList">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
};
List.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default List;
