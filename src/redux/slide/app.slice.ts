import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
export interface IAppState {
  token: string | null | undefined;
  lang: string | null | undefined;
  darkMode: boolean;
  saveLoginInfo: any | null | undefined;
  saveLogin: boolean;
  activeModal: boolean | null | undefined;
  cookies: string | null | undefined;
}
const initialState: IAppState = {
  token: null,
  lang: 'vi',
  darkMode: false,
  saveLogin: false,
  saveLoginInfo: null,
  activeModal: false,
  cookies: '',
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCookies: (state, action: PayloadAction<string>) => {
      state.cookies = action.payload;
    },

    resetLogin: state => {
      state.token = null;
      state.cookies = null;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLogout: state => {
      return {
        ...initialState,
        saveLoginInfo: state.saveLoginInfo,
      };
    },
    setSaveLogin: (state, action: PayloadAction<any | undefined | null>) => {
      state.saveLogin = action.payload.isSave;
      state.saveLoginInfo = action.payload.saveLoginInfo;
    },
    setActiveModal: (
      state,
      action: PayloadAction<boolean | null | undefined>,
    ) => {
      state.activeModal = action.payload;
    },
    resetAccount: state => {
      return initialState;
    },
  },
});
export const appBackGroundSlice = createSlice({
  name: 'appBackGround',
  initialState: {
    isBackGround: false,
  },
  reducers: {
    setIsBackGround: (state, action: PayloadAction<boolean>) => {
      state.isBackGround = action.payload;
    },
  },
});

export const {
  resetLogin,
  setToken,
  setSaveLogin,
  setActiveModal,
  setLogout,
  resetAccount,
  setCookies,
} = appSlice.actions;
export const getCookiesState = (state: RootState) =>
  state.persistedReducer.app.cookies;
export const getTokenState = (state: RootState) =>
  state.persistedReducer.app.token;
export const saveLoginState = (state: RootState) =>
  state.persistedReducer.app.saveLogin;
export const getSaveLoginInfo = (state: RootState) =>
  state.persistedReducer.app.saveLoginInfo;
export default appSlice.reducer;
