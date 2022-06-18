// import {Component} from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => (
	<div className='card-list' >
			{ 
				monsters.map(monsters => {
				return <Card monsters={monsters} key={monsters.id}/>;
			})}
	</div>
);

// class CardList extends Component {
// 		render(){
// 				// console.log(this.props);
// 				const { monsters } = this.props;
// 				return (
// 						<div className='card-list'>
// 								{ monsters.map(monsters => {
// 									return(
// 										<Card monsters={monsters}/>
// 									)
// 								})}
// 						</div>
// 				);
// 		}
// }

export default CardList;