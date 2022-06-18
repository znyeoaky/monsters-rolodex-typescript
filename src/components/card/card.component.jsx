// import {Component} from 'react';
import './card.styles.css';

const Card = ({monsters}) => {
	const { name, id, username } = monsters;
	return(
		<div className='card-container' key={id}>
			<img 
				alt={`monster ${name}`} 
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
				<h2> {name}	</h2>
				<p> {username} </p>
		</div>
	);
};

// class Card extends Component {
// 	render(){
// 		const { name, id, username } = this.props.monsters;
// 		return(
// 			<div className='card-container' key={id}>
// 				<img 
// 					alt={`monster ${name}`} 
// 					src={`https://robohash.org/${id}?set=set4&size=180x180`}
// 				/>
// 					<h2> {name}	</h2>
// 					<p> {username} </p>
// 			</div>
// 		);
// 	}
// }

export default Card;