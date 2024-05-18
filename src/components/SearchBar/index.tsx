import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import User, { get } from '../../redux/User';
import UserCard from '../UserCard';
import './style.scss';

interface SearchProps {
  onTextChange: (text: string) => void;
}

const SearchBar: React.FC<SearchProps>  = ({ onTextChange }) => {

  const [searchText, setSearchText] = useState("Search");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onTextChange(event.target.value);
  };

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setSearchText("");
    onTextChange("");
  };

  return (
    <div className="search-bar">
      <input type="text" id="search" 
        name="search" 
        className='search-input' 
        value={searchText}
        onClick={onClick}
        onChange={onChange}
      />
      <div className='refresh-button'>Refresh Users</div>
    </div>
  );
};

export default SearchBar;
