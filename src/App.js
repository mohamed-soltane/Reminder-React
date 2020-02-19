import React , {Component} from 'react';
import { add_Reminder } from './actions';
import {connect} from 'react-redux';

class App extends Component {
  state = {
    text: '',
    date: new Date()
  }
  render(){
  return (
    <div className="App">
        <img src="" />
      <div className="reminder-title">
        <h2>What Should You Do ?</h2>
      </div>
      <input 
        className="form-control"
        type="text"
        placeholder="Enter What U think ...?"
        onChange={(e) => this.setState({text: e.target.value})}
        />
        <input 
        className="form-control"
        type="datetime-local"
        onChange={(e) => this.setState({date: e.target.value})}
        />
        <button 
            onClick= { () => add_Reminder(this.state.text, this.state.date)}
            className="btn btn-primary btn-block"
        >
          Add Reminder
        </button>
        <button
            className="btn btn-danger btn-block"
         >
           Delete Reminder
        </button>
    </div>
  );
}
}
export default connect(null , {add_Reminder})(App);
