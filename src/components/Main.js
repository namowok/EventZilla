import React, {Component} from 'react';
import Event from './create_event/Event';
import ProfileMenu from './ProfileMenu/ProfileMenu'
import HomePage from './homepage/HomePage'
import { Switch, Route, Redirect, withRouter, useParams,Router } from 'react-router-dom';
import SingleEvent from './SingleEvent'
import {baseUrl} from '../public/baseUrl'

class Main extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
		}
	}

	async componentDidMount(){
		const response=await fetch(baseUrl + '/event/all')
      	const json=await response.json();
      	this.setState({ data: json });
	}
	
	render(){
		const EventId = ({match}) => {
      return(
        <SingleEvent event={match.params.Id} />
      );
    }
 
			return(
			<div>
			<Switch>
           	<Route exact path="/event" component={() => <Event />} />
           	<Route path="/homepage" component={()=> <HomePage /> } />
           	<Route path="/event/:Id" component={EventId} />
           	<PrivateRoute path="/profile">
           		<div>
           			<ProfileMenu />
           		</div>
           	</PrivateRoute>

           	</Switch>
           
			</div>
		)
	}
}

function PrivateRoute({ children, ...rest}) {
	return(
		<Route
			{...rest}
			render = { ({location}) => {
				if (localStorage.getItem('user')) {
					return children
				} else {
					return (<Redirect to={{ pathname:"/homepage", state:{ from:location} }}/>)
				}
			}}
		/>
		)
}



export default Main;