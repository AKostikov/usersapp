import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import StatPanel from '../../components/StatPanel';
import UserCardsPanel from '../../components/UserCardsPanel';
import './style.scss';
//@ts-ignore
import deleteIcon from './delete.svg';

const Main = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <div className="main">
                {/* <img height={100} src={deleteIcon} alt="" /> */}
                <SearchBar onTextChange={handleSearchTextChange} value={searchText}></SearchBar>
                <div className="main-users">
                    <UserCardsPanel searchText={searchText}></UserCardsPanel>
                    <StatPanel />
                </div>
            </div>
        </>
    );
};
  
  export default Main;