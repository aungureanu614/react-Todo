import React, { Component } from 'react';
import List from './List';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      items: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

  removeItem(target) {
    const { items, inputVal } = this.state;
    console.log(this.state)
    const filtered = items.filter(item => item !== target);
    this.setState({
      inputVal: '',
      items: [...filtered, inputVal],
    });
  }

  render() {
    const { inputVal, items } = this.state;
    return (
      <div className="todoListMain">
        <header className="header">
          <form onSubmit={this.onSubmit}>
            <input value={inputVal} onChange={this.onChange} />
            <button type="submit">add</button>
          </form>
        </header>
        <List onRemove={this.removeItem} items={items} />
      </div>
    );
  }
}

export default TodoList;
