/* version 3 : typescript*/
import './search-box.styles.css';
import { ChangeEvent, ChangeEventHandler } from 'react';

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	// func: ChangeEventHandler;
	onChangeHandler:(event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
	onChangeHandler, 
	placeholder, 
	className
}: SearchBoxProps) => (
	<input 
		className={`search-box ${className}`}
		type='search' 
		placeholder={placeholder} 
		onChange={onChangeHandler} 
	/>
);
export default SearchBox;



/* version 2 */
// import './search-box.styles.css';

// const SearchBox = ({onChangeHandler, placeholder, className}) => (
// 	<input 
// 		className={`search-box ${className}`}
// 		type='search' 
// 		placeholder={placeholder} 
// 		onChange={onChangeHandler} 
// 	/>
// )
// export default SearchBox;



/* version 1 */
// import {Component} from 'react';

// class SearchBox extends Component {
// 	render() {
// 		const {onChangeHandler, placeholder, className} = this.props;
// 		return(
// 			<input 
// 				className={`search-box ${className}`}
// 				type='search' 
// 				placeholder={placeholder} 
// 				onChange={onChangeHandler} 
// 			/>
// 		)
// 	}
// }

// export default SearchBox;