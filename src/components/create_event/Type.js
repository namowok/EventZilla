import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';
import Footer from './Footer';
import { Control, LocalForm} from 'react-redux-form';

export default class Type extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      enabled:false,
      value:'',
      category:[
      "Mountaineering",
      "Trekking",
      "Hiking",
      "Theatre",
      "Movies",
      "Games",
      "Food",
      "Sports",
      "Bicycling",
      "Philosophy",
      "Outdoors",
      "LGBTQ",
      "Happy Hours",
      "Live Music",
      "Dining Out",
      "Religious",
      "Animal Rescue",
      "Book Writing"
      ]
    };
    this.handleEnable = this.handleEnable.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.handleInput=this.handleInput.bind(this);
  }
  handleInput(e) {
    console.log(e.target.value);
    this.setState(
    {
      value: e.target.value,
      enabled:true
    })
    console.log(this.state.value);
  }
  handleEnable(e){
    this.setState({
      enabled:false,
      value: ''
    })
  }
  onSubmit(e){
    this.props.updateType(this.state.value,this.props.currentStep+1,this.props.percentage+17);
  }

  render(){
    const val=this.state.value;
    return(
      <div className="container">
      <div className="row">
      <div className="col">
      <br></br>
      <h1 style={{fontWeight:"bold"}}>Choose a topic that describes your event</h1>
      <h5>Be specific! This will help us promote your group to the right people.</h5>
      </div>
      </div>
      <div className="row">
      <div className="col-3">
      </div>
      <div className="col-6">
      <h4>Your selection is : {val} <Button color="danger" onClick={e => this.handleEnable(e)}>Cancel selection</Button></h4>
      </div>
      </div>
      <div >
      <LocalForm onSubmit={e=>this.onSubmit(e)}>
      <div className="row">
      <div className="col-3">
      </div>
      <div className="col-6" onClick={e => this.handleInput(e)}>
      {this.state.category.map(item =>(
          <Button outline color="primary" value={item} disabled={this.state.enabled} >{item}</Button>
        ))}
      </div>
     <div className="col-3">
     </div>
     </div>
      <Footer goBack={this.props.goBack} currentStep={this.props.currentStep} percentage={this.props.percentage}/>
       </LocalForm>
      </div>
      </div>
    )
  }
}
