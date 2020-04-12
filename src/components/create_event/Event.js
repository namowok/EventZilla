import React, { Component } from 'react';
import { Navbar} from 'reactstrap';
import Locate from './Locate';
import Progress from 'react-progressbar';
import PropTypes from 'prop-types';
import { Switch,Link,Route, NavLink, useRouteMatch, useParams } from 'react-router-dom';
import {Button} from 'reactstrap';
import Type from './Type';
import HeaderProgress from './Header';
import AboutEvent from './AboutEvent';
import About from './About';
import AboutOrganizer from './AboutOrganizer';
import ImportantDetails from './ImportantDetails';
import {baseUrl} from '../../public/baseUrl'
import Footer from '../Footer'
const axios = require('axios')

class Event extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state={
            name:'',
            currentStep:1,
            formValues:{
                venue:'',
                city:'',
                category:'',
                name:'',
                description:'',
                aboutOrganizer:'',
                startDate:'',
                endDate:'',
                time:'',
                price:'',
                iconUrl:''
            },
            percentage:16
            
        };
        this.updateLocation=this.updateLocation.bind(this);
        this.updateType=this.updateType.bind(this);
        this.updateName=this.updateName.bind(this); 
        this.updateAbout=this.updateAbout.bind(this);
        this.updateOrganizer=this.updateOrganizer.bind(this);
        this.updateImportantDetails=this.updateImportantDetails.bind(this);
        this.goBack=this.goBack.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }
   

    updateLocation(venue,city,nextStep,percentage) {
       var formValues=this.state.formValues;
       formValues.venue=venue;
       formValues.city=city;
       this.setState({currentStep: nextStep, formValues:formValues,percentage:percentage});
       console.log(this.state.formValues)
    }
    updateType(formData,nextStep,percentage) {
       var formValues=this.state.formValues;
       formValues.category=formData;
       this.setState({currentStep: nextStep, formValues:formValues,percentage:percentage});
       console.log(this.state.formValues)
    }

    updateName(formData,nextStep,percentage){
        var formValues=this.state.formValues;
        formValues.name=formData;
        this.setState({currentStep:nextStep,formValues:formValues,percentage:percentage});
               console.log(this.state.formValues)

    }
    updateAbout(formData,nextStep,percentage){
        var formValues=this.state.formValues;
        formValues.description=formData;
        this.setState({currentStep:nextStep,formValues:formValues,percentage:percentage});
               console.log(this.state.formValues)

    }
    updateOrganizer(formData,nextStep,percentage){
        var formValues=this.state.formValues;
        formValues.aboutOrganizer=formData;
        this.setState({currentStep:nextStep,formValues:formValues,percentage:percentage});
        console.log(this.state.formValues)

    }
    updateImportantDetails(startDate,endDate,time,price,imageURl,nextStep,percentage){
        var formValues=this.state.formValues;
        formValues.startDate=startDate;
        formValues.endDate=endDate;
        formValues.time=time;
        formValues.price=price;

        var fd = new FormData()
        fd.append('iconUrl', imageURl)

        Object.keys(formValues)
            .forEach((key) => {
                fd.append(key, formValues[key])
            })
            
        axios({
            url: baseUrl+"/event",
            method: 'post',
            data: fd,
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
        this.setState({currentStep:nextStep,formValues:formValues,percentage:percentage})

    }
    
    goBack(step,percentage){
        this.setState({
            currentStep: step,
            percentage:percentage
        });
        console.log(this.state.formValues)
    }
    
    render(){
        switch (this.state.currentStep) {
            case 1:
                return (
                <div>
                <HeaderProgress completed={this.state.percentage} currentStep={this.state.currentStep}/>
                <Locate updateLocation={this.updateLocation} currentStep={this.state.currentStep} percentage={this.state.percentage}/>
                <Footer/>
                </div>
                )
            case 2:
                return (
                    <div>
                    <HeaderProgress completed={this.state.percentage} currentStep={this.state.currentStep}/>
                    <Type goBack={this.goBack} updateType={this.updateType} currentStep={this.state.currentStep} percentage={this.state.percentage} />
                     <Footer/>
                    </div>
                    )
            case 3:
                return(
                    <div>
                    <HeaderProgress completed={this.state.percentage} currentStep={this.state.currentStep}/>
                    <AboutEvent goBack={this.goBack} updateName={this.updateName} currentStep={this.state.currentStep} percentage={this.state.percentage}/>
                     <Footer/>
                    </div>
                    )
            case 4:
                return(
                    <div>
                    <HeaderProgress completed={this.state.percentage} currentStep={this.state.currentStep}/>
                    <About goBack={this.goBack} updateAbout={this.updateAbout} currentStep={this.state.currentStep} percentage={this.state.percentage}/>
                     <Footer/>
                    </div>
                    ) 
            case 5:
                return(
                    <div>
                    <HeaderProgress completed={this.state.percentage} currentStep={this.state.currentStep}/>
                    <AboutOrganizer goBack={this.goBack} updateOrganizer={this.updateOrganizer} currentStep={this.state.currentStep} percentage={this.state.percentage}/>
                     <Footer/>
                    </div>
                    )
            case 6:
                return(
                    <div>
                    <HeaderProgress completed={this.state.percentage} currentStep={this.state.currentStep}/>
                    <ImportantDetails goBack={this.goBack} updateImportantDetails={this.updateImportantDetails} currentStep={this.state.currentStep} percentage={this.state.percentage}/>
                     <Footer/>
                    </div>
                )  
            case 7:
                return(
                    <div>
                    Thanks
                    </div>
                    )                                          
    }
}

}
export default Event;