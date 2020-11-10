import React, { Component } from 'react'
import Animi from './animi'
import { Trail } from 'react-spring/renderprops'

export class Animate extends Component {
	render() {
		return (
			<div>
				<Animi />
				{/* <Trail
					items={Animi}
					keys={ani => ani.id}
					from={{  opacity: 0.5 }}
					to={{  opacity: 1 }}>
					{ani => props => (
					<div style={props} >
						{ani}
					</div>
					)}
      			</Trail> */}
			</div>
			
		)
	}
}

export default Animate