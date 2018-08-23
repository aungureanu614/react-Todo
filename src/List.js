import React from 'react';

const List = props => (
  <ul>
    {{ props }.items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

export default List;
