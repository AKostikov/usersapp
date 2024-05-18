import './style.scss';
import { User } from '../../redux/User/type';
//import DeleteIcon from './delete.png'

interface Props {
  user: User;
  onDelete: (id: string) => void;
}

const UserCard = ({ user, onDelete }: Props) => {
  return (
    <div className='usercard'>
      <div className="delete-box">
        <div className='delete-icon'></div>        
      </div> 
      <div className='usercard__header'>
        <div className='usercard__avatar'>
          <img className='usercard_avatar-image' src={user.picture.medium}></img>
        </div>
        <div className='usercard__header-text'>
          <span className='usercard__header-text-main'>{user.name.first} {user.name.last}</span>
          <span className='usercard__header-text-add'>{user.email}</span>
        </div>
      </div>
      <div className='usercard__row'>
        <span className='usercard__row__title'>Phone No</span>
        <span className='usercard__row__value'>{user.phone}</span>
      </div>
      <div className='usercard__row'>
        <span className='usercard__row__title'>Birthday</span>
        <span className='usercard__row__value'>{user.dob.date}</span>
      </div>
      <div className='usercard__row'>
        <span className='usercard__row__title'>Address</span>
        <span className='usercard__row__value'>{user.location.city}, {user.location.street.name}, {user.location.street.number}</span>
      </div>
    </div>
  );
};

export default UserCard;
