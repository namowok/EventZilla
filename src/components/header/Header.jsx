import React from 'react'
import {baseUrl} from '../../public/baseUrl'
import {Button} from 'reactstrap'
import {Modal} from 'react-bootstrap'
import {Row,Col,Label} from 'reactstrap'
import { Link } from 'react-router-dom';
import ModalComponent from '../ModalComponent'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,CardImgOverlay} from 'reactstrap';

const axios=require('axios')
class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			prevState:false,
			loggedin:false
			}
	}

	toggle=()=>{
		this.setState({
			prevState: !this.state.prevState
		})
	}
    
    componentDidMount(){
    	if(localStorage.getItem('user')){
    		this.setState({
    			loggedin:!this.state.loggedin
    		})
    	}
    }

    alerts =() =>{
    	alert("Please log in to continue")
    }


	render() {
		return(
			<div className="row buttonrow" >
			<div className="eventzilla-header">
				<div className="header-logo">
					<img src={baseUrl+`/image/logo.png`} />
				</div>
					
					<div className="col-2 header-action">
					<Button outline color="secondary" size="lg" block><Link to="/homepage">Home</Link></Button>
					</div>
					{this.state.loggedin?
					<div className="col-2 header-action" >
					<Button outline color="secondary" size="lg" block><Link to="/profile">MyProfile</Link></Button>
					</div>
					:
					<div className="col-2 header-action" >
					<Button outline color="secondary" onClick={()=>this.alerts()} size="lg" block>MyProfile</Button>
					</div>
					}	
					<div className="header-action">
					<Dropdown outline color="secondary" isOpen={this.state.prevState} toggle={this.toggle} size="lg">
					<DropdownToggle caret>
					What do you want to attend
					</DropdownToggle>
					<DropdownMenu>
					<DropdownItem>Movies</DropdownItem>
					<DropdownItem>GameShows</DropdownItem>
					<DropdownItem>Amusement Parks</DropdownItem>
					<DropdownItem>Monuments</DropdownItem>
					</DropdownMenu>
					</Dropdown>
					</div>
					
					<div className="header-search header-action">
					 <img src={baseUrl+ '/image/search.png'}/> 
					</div>
					<div className="col-1 header-action header-search">
					<ModalComponent />
					</div>
					</div>
					</div>
					
			)
	}
}

export default Header