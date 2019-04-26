import React from 'react';
import Quotes from './components/quotes/quotes';

import './App.css';

class App extends React.Component{

  constructor(){

    super()

   this.state={
      quotes: []
    }
  }

  async componentDidMount(){
    try {
      const response = await fetch('http://localhost:8080/quotes')
      .then(res => res.json())
      this.setState({quotes:response})

    } catch(error){
      console.log(error)
    }
  }
  
  render(){

    return (
      <div className="App">
        <h1>Insubuy Code Challenges</h1>
        <Quotes quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
