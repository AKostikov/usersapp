import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import StatPanel from '../../components/StatPanel';
import UserCardsPanel from '../../components/UserCardsPanel';
import './style.scss';



const Main = () => {

  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (newText: string) => {
    setSearchText(newText);
  };

    return (
      <>
      <div className='main'>
        <SearchBar onTextChange={handleSearchTextChange}></SearchBar>
      <div className='main-users'>
        <UserCardsPanel searchText={searchText}></UserCardsPanel>
        <StatPanel></StatPanel>
      </div>
      </div>
      </>
    );
  };
  
  export default Main;