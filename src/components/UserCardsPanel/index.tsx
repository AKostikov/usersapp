import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import User, { get } from '../../redux/User';
import UserCard from '../UserCard';
import './style.scss';

interface StatisticsProps {
  searchText: string;
}

const UserCardsPanel : React.FC<StatisticsProps> = ({ searchText })  => { 
  // searchText - почему всегда актуальное?
  const { users  } = useSelector((state: RootState) => state.User);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(get());
  }, []);


  const handleDelete = (id: string) => {
    
  };

  return (
    <div className="usercards-panel">

      {users
        .filter(
          (userFilter) =>
            (userFilter.name.first + userFilter.name.last).includes(searchText) ||
              userFilter.email.includes(searchText) ||
              userFilter.phone.includes(searchText) ||
              (userFilter.location.city+userFilter.location.street.name+
                userFilter.location.street.number).includes(searchText)
            )
        .map((user) => (
          <UserCard onDelete={handleDelete} user={user} key={user.login.uuid} />
        ))}
    </div>
  );
};

export default UserCardsPanel;
