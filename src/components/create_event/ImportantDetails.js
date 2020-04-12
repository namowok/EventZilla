import React from "react";
import DatePicker from "react-datepicker";
import { Control,LocalForm} from 'react-redux-form';
import {Label, Col, Row } from 'reactstrap';
import TimePicker from 'react-time-picker';
import Footer from './Footer';
import "react-datepicker/dist/react-datepicker.css";
const axios = require("axios");


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ImportantDetails extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    startDate: new Date(),
    endDate:new Date(),
    time: '10:00',
    price:''
  };
  this.handleChange=this.handleChange.bind(this);
  this.handlestartDate=this.handlestartDate.bind(this);
  this.handleendDate=this.handleendDate.bind(this);
  this.handleTime=this.handleTime.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}
  handlestartDate=date =>{
    this.setState({startDate: date});
  }
  handleendDate=date =>{
    this.setState({endDate: date});
  }
  handleTime=time=>{
  	this.setState({time:time})
  }
  handleChange(event){
    const target=event.target;
    const value=target.type==='file'?target.files[0]:target.value;
    const name=target.name;
    this.setState({
      [name]:value
    })
    console.log(this.state)
  }
  handleSubmit(event){
  	this.props.updateImportantDetails(this.state.startDate,this.state.endDate,this.state.time,this.state.price,this.state.myImage,this.props.currentStep,this.props.percentage+17);
  }


  render() {
    return (
    	<div className="container">
    	<div className="row">
    	<div className="col-3">
    	</div>
    	<div className="col-6">
    	<h1 style={{fontWeight:"bold"}}> Please fill up these details </h1>
    	</div>
    	</div> 
      <LocalForm  onSubmit={(event) => this.handleSubmit(event)}>
      <Row className="form-group">
      <Col md={12}>
      <Label htmlFor="firstname">Start Date:</Label>
      <DatePicker selected={this.state.startDate} onChange={this.handlestartDate} dateFormat="yyyy-MM-d" />
      </Col>
      </Row>

      <Row className="form-group">
      <Col md={12}>
      <Label htmlFor="firstname">End Date:</Label>
      <DatePicker selected={this.state.endDate} onChange={this.handleendDate} dateFormat="yyyy-MM-d"/>
      </Col>
      </Row>

      <Row className="form-group">
      <Col md={12}>
      <Label htmlFor="time">Time: </Label>
      <TimePicker onChange={this.handleTime} value={this.state.time} amPmAriaLabel="Select AM/PM" />
      </Col>
      </Row>

      <Row className="form-group">
      <Col>
      <Label htmlFor="Price">Price: </Label>
      <input type="text" name="price" price={this.state.price} onChange={this.handleChange} />
      </Col>
      </Row>
      <Row className="form-group">
      <Col>
      <Label htmlFor="Price">Upload one image to display </Label>
      <input type="file" name="myImage" onChange={this.handleChange} />
      </Col>
      </Row>
      <Footer goBack={this.props.goBack} currentStep={this.props.currentStep} percentage={this.props.percentage}/>
      </LocalForm>
      
      </div>
    );
  }
}




export default ImportantDetails;