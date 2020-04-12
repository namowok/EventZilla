import React, {Component} from  'react';
import Progress from 'react-progressbar';
import Footer from './Footer';
import { Control, LocalForm} from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';

class About extends Component{
	constructor(props){
		super(props);
		this.state={
			about:'',
		}
	}
	handleChange(event) {
    	this.setState({about: event.target.value});
  	}
  	handleSubmit(event) {
    	this.props.updateAbout(this.state.about,this.props.currentStep+1,this.props.percentage+17)
  	}

	render(){
		return(
			<div className="container">
			<div className="row">
			<div className="col">
			<h1 style={{fontWeight:"bold"}}>Now describe what your event will be about</h1>
			<h5>People will see this when we promote your group, but you’ll be able to add to it later, too.</h5>
			<h6 className="justify-content-left">1.What's the purpose of the group?</h6>
			<h6>2.Who should join?</h6>
			<h6>3.What will you do at your events?</h6>
			<LocalForm onSubmit={(e) => this.handleSubmit(e)} >
          	<Row className="form-group">
            <Col>
             <Control.textarea type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} model=".about" id="about" rows="12" className="form-control" />
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

export default About;