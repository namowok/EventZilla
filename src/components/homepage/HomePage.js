import React, { Component, useState } from 'react';
import Header from '../header/Header';
import { Slide } from 'react-slideshow-image';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import {baseUrl} from '../../public/baseUrl'
import {Button,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,CardImgOverlay} from 'reactstrap';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import {IoMdTime } from 'react-icons/io';
import {GoPlus } from 'react-icons/go';

import {FaLocationArrow } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { IconContext } from "react-icons";
import Footer from '../Footer'

function RenderEvents({ event }) {
		var imageurl=baseUrl+"/image/"+event["iconUrl"]
        return(
            <Card className="paddingTop" >
                    <CardImg className="paddingTop" src={imageurl} alt={event.name} />
                    <CardImgOverlay>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    

                    <CardText style={{color:"#000000" , fontfamily:"Comic Sans"}} className="col-example text-left"><b><h3>{event.name}</h3></b></CardText>
                    </CardImgOverlay>
                    <CardText className="p-2 col-example text-left"><GoCalendar/> {new Date(event.startDate).toDateString()} | <IoMdTime/> {event.time}        <br/>             <FaLocationArrow/>  {event.venue} , {event.city} </CardText>
  
           	<div className="row">
           	<div className="col-4">
           	<Link to={`/event/${event._id}`}>
           	<Button color="danger" >Book Tickets
           	</Button>
           	</Link>
           	</div >
           	<div className="offset-6">
           	<IconContext.Provider value={{ size:"2em" }}>
			<MdFavoriteBorder/>
			</IconContext.Provider>
			</div>
           	</div>
           	<br/>

            </Card>
        );
    }
class HomePage extends Component{
	constructor(props){
		super(props);
		this.state={
			prevState:false,
			data:[],
			activeItemIndex:0,
			setActiveItemIndex:0,
			loggedin:false
		}
	}

	toggle=()=>{
		this.setState({
			prevState: !this.state.prevState
		})
	}

	async componentDidMount(){
		const response=await fetch(baseUrl + '/event/all')
      	const json=await response.json();
      	this.setState({ data: json });

      	

	}


	alerts = () =>{
		if(localStorage.getItem('user')){
    		this.setState({
    			loggedin:!this.state.loggedin
    		})
    	}
		alert("Kindly login to continue")

	}



	render(){
		var activeItemIndex = this.state.activeItemIndex 
		var setActiveItemIndex = this.state.setActiveItemIndex
  		const chevronWidth = 40;
		const properties = {
  			duration: 2000,
  			transitionDuration: 500,
  			infinite: true,
  			indicators: true,
  			arrows: true,
		}
		const leftChevron=()=>{
			return (
				<Button color="danger"> <b>{'<'}</b> </Button>
				)
		}
		const rightChevron=()=>{
			return (
				<Button color="danger"> <b> {'>'} </b> </Button>
				)
		}
		
		return(
			<div>
			<Header />
			{this.state.loggedin?
			 <Link to="/event"><div className="row offset-10 no-gutters" style={{color:"red"}}><h4><b>Create Your Event</b></h4></div></Link>
			:
			<div className="row offset-10 no-gutters" onClick={()=>this.alerts()} style={{color:"red"}}><h4><b><a href="#">Create Your Event</a></b></h4></div>
			
			}

				<div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image1})`}}>
          		<h1><b>Explore</b></h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image2})`}}>
              <h1><b>Meet</b></h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${image3})`}}>
              <h1><b>Live</b></h1>
            </div>
          </div>
        </Slide>
      </div>
      <div className="row justify-content-center">
      <h1> Upcoming events in the selected city</h1>
      </div>

	<div style={{ padding: `0 ${chevronWidth}px` }}>
				  <ItemsCarousel
				infiniteLoop={false}
				gutter={12}
				activePosition={'center'}
				chevronWidth={60}
				disableSwipe={false}
				alwaysShowChevrons={false}
				numberOfCards={3}
				slidesToScroll={2}
				outsideChevron={true}
				showSlither={false}
				firstAndLastGutter={false}
				activeItemIndex={this.state.activeItemIndex}
				requestToChangeActive={value => this.setState({ activeItemIndex: value })}
				rightChevron={rightChevron()}
				leftChevron={leftChevron()}
				  >
				{this.state.data.map((data)=>
					<div key={data._id}>
					<RenderEvents event={data} />
					</div>
					)}

				</ItemsCarousel>
      </div>
      <br />
      <Footer />
      </div>

			)
	}
}

export default HomePage;
