import { Component } from "react";
import TicTacToe from './components/TicTacToe/TicTacToe'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
        <TicTacToe />
    </div>
  )
  }
}

export default App;
