import React, {Component} from 'react';
import { Col } from "../Grid/grid";
import "./cards.css";

class Cards extends Component{
	render(props){
		return(
			<Col size="lg-3">
			<div className="card-content">
				<div className="album-div">
					<img  
					className="album-cover"
					src={this.props.image}
					alt={this.props.name}
					name={this.props.name}
					onClick={() => this.props.onClick(this.props.name)}
					/>
				</div>
			</div>
			</Col>
		)
	}
}
		


export default Cards;