// import { Component } from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { getData } from './utils/data.utils';

export type Monster = {
  id:string;
  name:string;
  email: string;
};

const App = () => {
  // const [title, setTitle] = useState('');
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // console.log("rendere");


  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setMonsters(users));

    const fetchUsers = async() => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);  
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => { 
      return monster.name.toLocaleLowerCase().includes(searchField);}
    );
    setFilteredMonsters(newFilteredMonsters);
    // console.log("effect fired");
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const onTitleChange = (event) => {
  //   const titelString = event.target.value.toLocaleLowerCase();
  //   setTitle(titelString);
  // };

  return (
    <div className="App">
      {/* <h1 className='app-title'>{title}</h1> */}
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box' 
        placeholder='search monsters' 
        onChangeHandler={onSearchChange}   
      />      
      <br />
      {/* <SearchBox 
        className='title-search-box' 
        placeholder='new title' 
        onChangeHandler={onTitleChange}   
      />   */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response) => response.json())
//     //  .then((users) => console.log(users));
//      .then((users) => this.setState(() => {return {monsters:users}}
//     //  ,() => {console.log(this.state);}
//      ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {

//     // const { monsters, searchField } = this.state;
//     // const { onSearchChange } = this; 

//     const filteredMonsters = this.state.monsters.filter((monster) => {         
//       //console.log('monster?: ' + monster.id);
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={this.onSearchChange}   />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

// }

export default App;
