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

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      inputVal: '',
      items: [...this.state.items, this.state.inputVal]
    })
  }

  onChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.inputVal} onChange={this.onChange} />
          <button type="submit">add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default TodoList;
