import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 4,
      items: [
        {id: 1, text: 'Visit https://www.sean-lan.com/'},
        {id: 2, text: 'Pin it to your the bookmarks'},
        {id: 3, text: 'Say hello to Sean @StupidSeanLan'}
      ]};

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(item) {
    const newItems = this.state.items.filter((_item) => _item !== item);
    this.setState({...this.state, items: newItems});
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      if (this.input.value === '') return;
      const newItem = {id: this.state.nextId, text: this.input.value};
      this.input.value = '';
      this.setState({nextId: this.state.nextId + 1, items: [...this.state.items, newItem]});
    }
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <li key={item.id} onDoubleClick={() => {this.handleRemove(item);}}>
        {item.text}
      </li>
    ));

    return (
      <div className='todo-container'>
        <input
          className='todo-input'
          placeholder='please input a todo item.'
          ref={(input) => {this.input = input;}}
          onKeyPress={this.handleKeyPress}/>
        <p className='todo-desc'>Press Enter key to add; double-click item to remove</p>
        <ul className='todo-list'>
          <ReactCSSTransitionGroup
            transitionName='item'
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} >
            {items}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default TodoList;
