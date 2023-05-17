import React from 'react'
import shortid from 'shortid'

export default class TodoForm extends React.Component {
    state = {
      text: "",
      todo: [{ "id": shortid.generate(), "todo": "first", "count": 1 }]
    };
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      for (let todo of this.state.todo) {
        if (todo.todo === this.state.text) {
  
  
  
          this.setState({
            todo: this.state.todo.map(record => {
              if (record.todo === this.state.text) {
                return {
                  id: record.id,
                  todo: record.todo,
                  count: record.count + 1
                };
              } else {
                return record;
              }
            }),
            text: ""
          });
          return;
        }
      }
      this.setState({
        todo: [...this.state.todo, { "id": shortid.generate(), "todo": this.state.text, "count": 1 }],
        text: ""
      });
    };
  
    handleDone = id => {
      this.setState({
        todo: this.state.todo.map(record => {
          if (record.id === id) {
            return { ...record, count: record.count === 0 ? 0 : record.count - 1 };
          } else {
            return record;
          }
  
        })
      })
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Add todo"
            />
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
          {this.state.todo.map(todo => (
            <div key={todo.id} style={{textDecoration: todo.count === 0 ? "line-through" : ""}} onClick={() => this.handleDone(todo.id)}>
              {todo.id}: {todo.todo} - {todo.count}
            </div>
          ))}
        </div>
      );
    }
  }