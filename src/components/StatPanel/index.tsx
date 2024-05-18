import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import User, { get } from '../../redux/User';
import './style.scss';
import { Statistics }  from '../../redux/User/type';

interface StatisticsProps {
  searchText: string;
}


const StatPanel = () => {

  const { stat  } = useSelector((state: RootState) => state.User);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(get());
   
 
  }, []);

  return (
    <div className="stat-panel">
      <div className='stat-main'>{stat.count} Users</div>
      
      <div className='stat-hr'><hr></hr></div>
      
      <div className='stat-sub-main'>Age groups</div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>11 to 20</span>
        <span className='stat-sub-value'>{stat.count11to20} users</span>
      </div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>21 to 30</span>
        <span className='stat-sub-value'>{stat.count21to30} users</span>
      </div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>31 to 40</span>
        <span className='stat-sub-value'>{stat.count31to40} users</span>
      </div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>41 to 50</span>
        <span className='stat-sub-value'>{stat.count41to50} users</span>
      </div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>51+</span>
        <span className='stat-sub-value'>{stat.count51} users</span>
      </div>
      
      <div className='stat-hr'><hr></hr></div>
      
      <div className='stat-sub-main'>Gender groups</div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>Male</span>
        <span className='stat-sub-value'>{stat.countMale} users</span>
      </div>
      <div className='stat-sub-row'>
        <span className='stat-sub-label'>Female</span>
        <span className='stat-sub-value'>{stat.countFemale} users</span>
      </div>
    </div>
  );
};

export default StatPanel;
