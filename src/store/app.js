import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'Coffee Shop App',
  initialState: {
    coffeeShopList: [],
    locality: '',
    homeScrollPos: 0,
  },
  reducers: {
    setCoffeeShopList: (state, action) => {
      const { coffeeShopList, append } = action.payload;
      if (append) {
        state.coffeeShopList = [...state.coffeeShopList, ...coffeeShopList];
      } else {
        state.coffeeShopList = coffeeShopList;
      }
    },
    setLocality: (state, action) => {
      state.locality = action.payload;
    },
    setHomeScrollPos: (state, action) => {
      state.homeScrollPos = action.payload;
    },
  },
});

export const { setCoffeeShopList, setLocality, setHomeScrollPos } =
  appSlice.actions;

export default appSlice.reducer;
