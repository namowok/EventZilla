import React, { Component } from 'react';
import {Button} from 'reactstrap'


class Footer extends Component{
	constructor(props){
		super(props);
		this.createBreaks=this.createBreaks.bind(this);
		this.createButtons=this.createButtons.bind(this);
		this.goBack=this.goBack.bind(this);
	}
	
	createBreaks = () => {
    	let division = []
    	for (let i = 0; i <17; i++) 
    	{
      		division.push(<br></br>)
    	}
    	return division;
  		};

 	goBack = () =>{
 		this.props.goBack(this.props.currentStep-1,this.props.percentage-17);
 	}

 	createButtons = () => {
 		if(this.props.currentStep==1){
 			return(
 				<div className="row footer justify-content-right" >
 				<div className="col">
 				</div>
 				<div className="col">
 				</div>
				<div className="col justify-content-right">
 					<Button type="submit" outline color="danger" size="lg">Next</Button>
 				</div>
 				</div>
 				)
 			}
 		else if(this.props.currentStep==6) {
 				return(
 				<div className="row footer">
				<div className="col justify-content-left">
 					<Button onClick={this.goBack}  outline color="secondary" size="lg">Back</Button>
 				</div>
 				<div className="col">
 				</div>
 				<div className="col justify-content-right">
 					<Button type="submit" outline color="danger" size="lg">Submit</Button>
 				</div>
 				</div>
 				)
 			}
 		else  {
 				return(
 				<div className="row footer">
				<div className="col justify-content-left">
 					<Button onClick={this.goBack}  outline color="secondary" size="lg">Back</Button>
 				</div>
 				<div className="col">
 				</div>
 				<div className="col justify-content-right">
 					<Button type="submit" outline color="danger" size="lg">Next</Button>
 				</div>
 				</div>
 				)
 			}
 		};

 	render(){
		return (
			<div>
			{this.createBreaks()}
 			{this.createButtons()}                
        	</div>
        	)
    	}
	}

export default Footer;