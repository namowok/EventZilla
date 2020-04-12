import React, {Component} from  'react';
import Progress from 'react-progressbar';
import Footer from './Footer';
import { Control, LocalForm} from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';

class AboutEvent extends Component{
	constructor(props){
		super(props);
		this.state={
			name:''
		}
	}
	handleChange(event) {
    	this.setState({name: event.target.value});
  	}
  	handleSubmit(event) {
    	this.props.updateName(this.state.name,this.props.currentStep+1,this.props.percentage+17)
  	}

	render(){
		return(
			<div className="container">
			<div className="row justify-content-center">
			<div className="col">
			<h1 style={{fontWeight:"bold"}}>What will your event’s name be?</h1>
			<h5>Choose a name that will give people a clear idea of what the event is about.</h5>
			<LocalForm onSubmit={(e) => this.handleSubmit(e)} >
          	<Row className="form-group">
            <Col>
             <Control.text type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} model=".name" id="name" rows="1" className="form-control" />
            </Col>
          	</Row>
      	    <Footer goBack={this.props.goBack} currentStep={this.props.currentStep} percentage={this.props.percentage}/>
        	</LocalForm>
        	</div>
        	</div>
        	</div>
		)
	}
}

export default AboutEvent;