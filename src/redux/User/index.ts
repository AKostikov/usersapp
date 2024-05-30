import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User, Statistics } from './type';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';


interface UsersState {
  users: User[];
  pageNumber : number,
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  stat: Statistics;
}

let initStat: Statistics = {
  count : 0,
  count11to20 : 0,
  count21to30 : 0,
  count31to40 : 0,
  count41to50 : 0,
  count51 : 0,
  countMale : 0,
  countFemale : 0,
};

const initialState: UsersState = {
  users: [],
  pageNumber : 0,
  status: 'idle',
  error: null,
  stat: initStat,
};

export const setPageNumber = createAction<number>('setPageNumber');

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setPageNumber, (state, action: PayloadAction<number>) => {
        state.pageNumber = action.payload;
      })
      .addCase(get.fulfilled, (state, action) => {
        state.pageNumber += 1;
        if(state.pageNumber == 1){
          state.users = action.payload
        }
        else{
          state.users = [...state.users,...action.payload];
        }
        state.stat.count = 0;
        state.stat.count11to20 = 0;
        state.stat.count21to30 = 0;
        state.stat.count31to40 = 0;
        state.stat.count41to50 = 0;
        state.stat.count51 = 0;
        state.stat.countFemale = 0;
        state.stat.countMale = 0;
        state.users.forEach(u => {
        state.stat.count += 1;
        if(u.dob.age >=11 && u.dob.age <= 20){
            state.stat.count11to20 += 1;
          }
          if(u.dob.age >=21 && u.dob.age <= 30){
            state.stat.count21to30 += 1;
          }
          if(u.dob.age >=31 && u.dob.age <= 40){
            state.stat.count31to40 += 1;
          }
          if(u.dob.age >=41 && u.dob.age <= 50){
            state.stat.count41to50 += 1;
          }
          if(u.dob.age >=51){
            state.stat.count51 += 1;
          }
          if(u.gender === "female"){
            state.stat.countFemale += 1;
          }
          if(u.gender === "male"){
            state.stat.countMale += 1;
          }
      })
        
      })
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

export const get = createAsyncThunk('https://randomuser.me/', async (pageNumber : number): Promise<User[]> => {
  const users = (await axios.get(`https://randomuser.me/api/?page=${pageNumber+1}&results=50`)).data.results;
  console.log(users);
  return users;
});


