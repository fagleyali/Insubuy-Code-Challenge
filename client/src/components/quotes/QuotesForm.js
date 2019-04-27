import React from 'react';
import {Link} from 'react-router-dom';


class QuoteForm extends React.Component{
    constructor (props){
        super(props);
        this.state=this.reset()
    }

    reset=()=>{
        return {
            
                startDate:'',
                endDate:'',
                policyMax:'',
                citizenship:'',
                age: '',
                mailingState:''
            
        }
    }

    handleChange=e=>{
        console.log(e.target.name)
    }

    isFormInvalid() {
        return !(this.state.startDate && this.state.endDate && this.state.policyMax && this.state.citizenship && this.state.age && this.state.mailingState);
      }

    render(){
        return(
            <div>
                <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="date" id="start" className="form-control" value={this.state.startDate} name="startDate" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="date" id="end" className="form-control" value={this.state.endDate} name="endDate" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <select className="form-control" value={this.state.policyMax} name="policyMax" onChange={this.handleChange}>
                <option value='50'>50,000</option>
                <option value='100'>100,000</option>
                <option value='250'>250,000</option>
                <option value='500'>500,000</option>
            </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Citizenship" value={this.state.citizenship} name="citizenship" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" value={this.state.age}  name="age" onChange={this.handleChange}/>
            </div>
            <div className="col-sm-12">
              <input type="text" className="form-control" value={this.state.mailingState}  name="mailingState" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
              
            </div>
          </div>
        </form>
      </div>
            </div>
        )
    }
}

export default QuoteForm;