import {Component} from 'react';
import './App.css';
import ContactList from './ContactList.js'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render() {
    return (

      <div className="App">
        <ContactList/>
      </div>
    );
  }
  
}

export default App;
