import React from 'react';
import Quotes from './components/quotes/Quotes';
import QuoteForm from './components/quotes/QuotesForm';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

class App extends React.Component{

  constructor(){

    super()

   this.state={
      quotes: []
    }
  }

   componentDidMount(){
     this.getQuotes();
  }
  
 getQuotes=()=>{
    try {
       fetch('http://localhost:8080/quotes')
      .then(res => res.json())
      .then(res => this.setState({quotes:res.quotes}))

    } catch(error){
      console.log(error)
    }
  }

  
  render(){

    return (
      <div className="App">
        <h1>Insubuy Code Challenges</h1>
        <Switch>
          <Route exact path='/' render={()=>
            <Quotes quotes={this.state.quotes} />
          } />
          <Route exact path='/quoteform' component={QuoteForm}  />
        </Switch>
      </div>
    );
  }
}

export default App;
