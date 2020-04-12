import React from 'react'
import Tickets from './Tickets.jsx'

class ProfileMenu extends React.Component {
	constructor() {
		super()
		this.state = {
			nav: "Tickets"
		}
	}

	renderProfileView() {
		switch(this.state.nav) {
			case 'Tickets':
				return(<Tickets />)
				break
			case 'Favourites':
				return(<div>Favourites</div>)
				break
			case 'Edit': 
				return(<div>Edit Profile</div>)
				break
		}
	}

	render() {
		return(
			<React.Fragment>
				<div id="profile-nav">
					<ul>
						<li onClick={() => this.setState({ nav: "Tickets"})} 
							className={this.state.nav === "Tickets" ? 'active' : null} >
							<a>Tickets</a>
						</li>
						<li onClick={() => this.setState({ nav: "Favourites"})} 
							className={this.state.nav === "Favourites" ? 'active' : null}>
							<a>Favourites</a>
						</li>
						<li onClick={() => this.setState({ nav: "Edit"})} 
							className={this.state.nav === "Edit" ? 'active' : null}>
							<a>Edit Profile</a>
						</li>
					</ul>
				</div>
				<div>
					{ this.renderProfileView() }
				</div>
			</React.Fragment>
		)
	}
}

export default ProfileMenu