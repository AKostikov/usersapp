import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import User, { get, setPageNumber } from '../../redux/User';
import UserCard from '../UserCard';
import './style.scss';

interface SearchProps {
    onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}


const SearchBar: React.FC<SearchProps> = ({ onTextChange, value }) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleButtonClick = () => {
        dispatch(setPageNumber(0));
        dispatch(get(0));
      };
    return (
        <div className="search-bar">
            <input placeholder='Search' type="text" id="search" name="search" className="search-input" value={value} onChange={onTextChange} />
            <div className="refresh-button" onClick={handleButtonClick}>Refresh Users</div>
        </div>
    );
};

export default SearchBar;
