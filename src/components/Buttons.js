import React from 'react';
import {ButtonToolbar,MenuItem,DropdownButton} from 'react-bootstrap';

class Buttons extends React.Component{

	handleSelect=(evt)=>{
		this.props.gridSize(evt);
	}

	render(){
		return(
			<div className="center">
				<ButtonToolbar>
					<button className="btn btn-default" onClick={this.props.playButton}>
						Play
					</button>
					&nbsp;
					<button className="btn btn-default" onClick={this.props.pauseButton}>
					  Pause
					</button>
					&nbsp;
					<button className="btn btn-default" onClick={this.props.clear}>
					  Clear
					</button>
					&nbsp;
					<button className="btn btn-default" onClick={this.props.slow}>
					  Slow
					</button>
					&nbsp;
					<button className="btn btn-default" onClick={this.props.fast}>
					  Fast
					</button>
					&nbsp;
					<button className="btn btn-default" onClick={this.props.seed}>
					  Seed
					</button>
					&nbsp;
					<DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<MenuItem eventKey="1">20x10</MenuItem>
						<MenuItem eventKey="2">50x30</MenuItem>
						<MenuItem eventKey="3">70x50</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
			</div>
		);
	}
}

export default Buttons;