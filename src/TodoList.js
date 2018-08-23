import React, { Component } from 'react';
import List from './List';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      items: [],
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { items, inputVal } = this.state;
    this.setState({
      inputVal: '',
      items: [...items, inputVal],
    });
  }

  onChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  render() {
    const { inputVal, items } = this.state;
    return (
      <div className="todoListMain">
        <form onSubmit={e => this.onSubmit(e)}>
          <input value={inputVal} onChange={e => this.onChange(e)} />
          <button type="submit">add</button>
        </form>
        <List items={items} />
      </div>
    );
  }
}

export default TodoList;
