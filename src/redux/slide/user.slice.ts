import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {TypeInformationUser} from '../../type/typeUser';

const initialState: TypeInformationUser = {
  id: '',
  name: '',
  email: '',
  gender: '',
  birthOfDay: '',
  phoneNumber: '',
  address: '',
  avatar: '',
  isVerified: false,
  createdAt: '',
  updatedAt: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TypeInformationUser>) => {
      return action.payload; // Trả về state mới
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const {setUser, setAvatar, setPhoneNumber, setEmail} = userSlice.actions;

export const getUserInfoState = (state: RootState) =>
  state.persistedUserReducer.user;
export default userSlice.reducer;
