import React from 'react'
import { Card, Row } from 'react-bootstrap'

const axios = require('axios')

class Tickets extends React.Component {
	constructor() {
		super()
		this.state = {
			tickets: []
		}
	}

	componentDidMount(props) {
		var user = JSON.parse(localStorage.getItem('user'))
		axios({
			method: 'GET',
			url: `http://localhost:3000/tickets/user/${user._id}`
		})
		.then(val => {
			this.setState({ tickets: val.data })
		})
	}

	render() {
		var list = this.state.tickets.map((ele, index)=> {
			return(
				<Row key={index} className="justify-content-md-center">
					<Card style={{ width: '32rem' }}>
						<Card.Body>
					    	<Card.Title>{ele.event.name}</Card.Title>
					    	<Card.Text>
					    		<p>{ele.event.venue}</p>
					    		<p>{new Date(ele.event.startDate).toDateString()}</p>
					    	</Card.Text>
					  </Card.Body>
					</Card>
				</Row>
				)
		})
		return(
			<div className="tickets-list container">	
				{list}
			</div>
			)
	}
}


export default Tickets