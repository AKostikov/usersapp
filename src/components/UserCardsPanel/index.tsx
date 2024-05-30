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

  const { users, pageNumber } = useSelector((state: RootState) => state.User);
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    if(fetching){
      setFetching(false);
      dispatch(get(pageNumber));
      console.log("test1");
      setFetching(false);
    }
  }, [fetching]);


  const handleDelete = (id: string) => {
    
  };

  const handleScroll = (e : any) => {
    const { scrollHeight, clientHeight, scrollTop } = e.currentTarget;
    const scrolledToBottom = scrollHeight - clientHeight === scrollTop;
    if (scrolledToBottom) {
      //console.log('test'); // Выводит "test", когда прокрутили до конца
      setFetching(true);
    }
  };

  return (
    <div className="usercards-panel" onScroll={handleScroll}>

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
