import React , {Component} from 'react';

class App extends Component {
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
        />
        <input 
        className="form-control"
        type="datetime-local"
        />
        <button className="btn btn-primary btn-block">Add Reminder</button>
        <button className="btn btn-danger btn-block">Delete Reminder</button>
    </div>
  );
}
}

export default App;
