import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler } from 'reactstrap';
import Progress from 'react-progressbar';
import Image from 'react-bootstrap/Image';
import Header from '../header/Header';
class HeaderProgress extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
            <Header/>
            <Progress completed={this.props.completed} color="red"/>
            <div className="row">
            <div className="col">
            </div>
            <div className="col" style={{color:"grey" , fontWeight:'bold'}}>
            Step {this.props.currentStep} of 6 
            </div>
            <div className="col">
            </div>
            </div>
            </div>

            )
        }
         	}

export default HeaderProgress;