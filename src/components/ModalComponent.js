import React from 'react'
import {baseUrl} from '../public/baseUrl'
import {Button} from 'reactstrap'
import {Modal} from 'react-bootstrap'
import {Row,Col,Label} from 'reactstrap'
import { Link } from 'react-router-dom';

const axios=require('axios')
class ModalComponent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isNavOpen:false,
			name:'',
			email:'',
			mobile:'',
			password:'',
			isLoginopen:true,
			nameDisplayed:'',
			loggedin:false
		}
		this.toggleNav=this.toggleNav.bind(this);
	}

	toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    componentDidMount(){
    	if(localStorage.getItem('user')){
    		this.setState({
    			loggedin:!this.state.loggedin
    		})
    	}
    }

    handleLogin=(event)=> {
        event.preventDefault();
	}

    handleLogout() {
        this.props.logoutUser();
    }
    handleChange=(e)=>{
    	this.setState({
    		[e.target.name]:e.target.value
    	})
    }
    onSubmit=(e)=>{
    	e.preventDefault()
    	axios({
    		"method":"POST",
    		"data":{
    			name:this.state.name,
    			email:this.state.email,
    			password:this.state.password,
    			mobile:this.state.mobile
    		},
    		"url":baseUrl+"/signup"
    	})
    	.then(res=>{
    		if (res.data.msg)
    			alert(res.data.msg)
    		else {
    			localStorage.setItem("user",JSON.stringify(res.data))
    			this.setState({ 
    				isNavOpen: false, 
    				loggedin: true,
    				isLoginopen: !this.state.isLoginopen,
    				name:'',
					email:'',
					mobile:'',
					password:'' 
				})
    		}
    			
    	})
    	.catch((err)=>{
    		console.log(err)
    	})
    }
    showLogin=()=>{
    	this.setState({
    		isLoginopen: !this.state.isLoginopen
    	})
    }
    onSubmitLogin=(e)=>{
    	e.preventDefault()
    	axios({
    		method:"POST",
    		data:{
    			email:this.state.email,
    			password:this.state.password,
    			
    		},
    		url:baseUrl+"/login"
    	})
    	.then(res=>{
    		if (res.data.msg)
    			alert(res.data.msg)
    		else {
    			localStorage.setItem('user', JSON.stringify(res.data))
    			this.setState({ 
    				loggedin: true, 
    				isNavOpen: false, 
    				email:'',
    				password:''
    			})
    			console.log(JSON.parse(localStorage.getItem('user')).name)
    		}
    	})
    	.catch((err)=>{
    		console.log(err)
    	})
    }

    logoutUser=()=>{
    	this.setState({
    		loggedin:!this.state.loggedin
    	})
    	localStorage.clear()
    }
    
	render() {
		return(
				<div>
					{!this.state.loggedin?
					<div className="header-account" onClick={this.toggleNav}>
						<img src={baseUrl+'/image/account.png'}/>
						</div>
						:
						<div style={{ color: "white"}}>
							<Link to='/profile'>{JSON.parse(localStorage.getItem('user')).name}</Link>
							<Button onClick={this.logoutUser}>Logout</Button>
						</div>
						}
						<Modal show={this.state.isNavOpen} onHide={this.toggleNav} >
						<Modal.Header closeButton>Signup or Login
						</Modal.Header>
						<Modal.Body>
						<div className="row">
						<div className="col-1">
						</div>
						<div className="col-10">
						<h6>Sign up to purchase tickets, unlock exclusive content</h6>
						</div>
						<div className="col-1">
						</div>
						</div>
						</Modal.Body>
						{this.state.isLoginopen ? 
						<div>
						<form>
						<div className="row justify-content-center">
						<div className="col-3"></div>
						<div className="col-7">
						<input size="30" type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} block></input>
						</div>
						<div className="col-2"></div>
						</div>

						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>

						<div className="row justify-content-center">
						<div className="col-3"></div>
						<div className="col-7">
						<input size="30" type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} block></input>
						</div>
						<div className="col-2"></div>
						</div>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<Button color="primary" size="md" type="submit"  block onClick={this.onSubmitLogin}>Login</Button>{'  '}
						</div>
						<div className="col-4">
						</div>
						</div>
						</form>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>
						<form>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<Button color="primary"size="md" onClick={this.showLogin} block>Signup</Button>
						</div>
						<div className="col-4">
						</div>
						</div>
						</form>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>
						</div>
						:
						<div>
						<form>
						<div className="row justify-content-center">
						<div className="col-3"></div>
						<div className="col-7">
						<input size="30" type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} block></input>
						</div>
						<div className="col-2"></div>
						</div>

						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>


						<div className="row justify-content-center">
						<div className="col-3"></div>
						<div className="col-7">
						<input size="30" type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} block></input>
						</div>
						<div className="col-2"></div>
						</div>

						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>

						<div className="row justify-content-center">
						<div className="col-3"></div>
						<div className="col-7">
						<input size="30" type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} block></input>
						</div>
						<div className="col-2"></div>
						</div>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>

						<div className="row justify-content-center">
						<div className="col-3"></div>
						<div className="col-7">
						<input size="30" type="text" name="mobile" value={this.state.mobile} placeholder="Mobile Number" onChange={this.handleChange} block></input>
						</div>
						<div className="col-2"></div>
						</div>

						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>

						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<Button color="primary" size="md" type="submit"  block onClick={this.onSubmit}>Signup</Button>{'  '}
						</div>
						<div className="col-4">
						</div>
						</div>
						</form>
						<div className="row">
						<div className="col-4">
						</div>
						<div className="col-4">
						<p></p>
						</div>
						<div className="col-4">
						</div>
						</div>
						</div>
						}
						</Modal>
			</div>			
			)
	}
}

export default ModalComponent