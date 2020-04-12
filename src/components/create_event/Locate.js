import React, {Component} from 'react';
import Progress from 'react-progressbar';
import Footer from './Footer';
import { Control, LocalForm} from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class Locate extends Component{
  constructor(props){
    super(props);
    this.state = {
      venue: '',
      region:'',
      country:'India'
  };
  }

  selectRegion (val) {
    this.setState({ region: val });
  }
  
  handleChange(event) {
    this.setState({venue: event.target.value});
  }
  handleSubmit(event) {
    this.props.updateLocation(this.state.venue,this.state.region,this.props.currentStep+1,this.props.percentage+17)
  }
    render(){
      return(
        <div>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col">
        <br></br>
        <h1 style={{fontWeight:"bold"}}>First, submit your events location.</h1>
        <h5>Paste the exact Google location of your event in the box below, thus saving time in finding directions</h5>
        <LocalForm onSubmit={(e) => this.handleSubmit(e)} >
          <Row className="form-group">
            <Col>
        <RegionDropdown country={this.state.country} value={this.state.region} onChange={(val) => this.selectRegion(val)} />
            </Col>
          </Row>

          <Row className="form-group">
            <Col>
              <Control.text type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} model=".location" id="location" rows="2" className="form-control" />
            </Col>
          </Row>

        <Footer currentStep={this.props.currentStep} percentage={this.props.percentage} />
        </LocalForm>
        </div>
        </div>
        </div>
        </div>
        )
    }
  }
    
export default Locate;