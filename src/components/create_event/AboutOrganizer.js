import React, {Component} from  'react';
import Progress from 'react-progressbar';
import Footer from './Footer';
import { Control, LocalForm} from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';

class AboutOrganizer extends Component{
	constructor(props){
		super(props);
		this.state={
			aboutOrganizer:'',
		}
	}
	handleChange(event) {
    	this.setState({aboutOrganizer: event.target.value});
  	}
  	handleSubmit(event) {
    	this.props.updateOrganizer(this.state.aboutOrganizer,this.props.currentStep+1,this.props.percentage+17)
  	}

	render(){
		return(
			<div className="container">
			<div className="row">
			<div className="col">
			<h1 style={{fontWeight:"bold"}}>Write a few words about yourself!</h1>
			<h5>People will see this when we promote your group, this will build a sense of trust between you and them. </h5>
			<LocalForm onSubmit={(e) => this.handleSubmit(e)} >
          	<Row className="form-group">
            <Col>
             <Control.textarea type="text" value={this.state.aboutOrganizer} onChange={(e)=>this.handleChange(e)} model=".organizer" id="organizer" rows="12" className="form-control" />
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

export default AboutOrganizer;