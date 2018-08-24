import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const List = (props) => {
//   const { items } = props;
//   console.log(items)
//   return (
//     <ul className="theList">
//       {items.map((item, i) => <li key={i}>{item}</li>)}
//     </ul>
//   );
// };
// List.propTypes = {
//   items: PropTypes.instanceOf(Array).isRequired,
// };

// export default List;

export default class List extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { items } = this.props;

    return (
      <ul className="theList">
        {items.map((item, i) => <li onClick={() => this.props.onRemove(item)} key={i}>{item}</li>)}
      </ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};
