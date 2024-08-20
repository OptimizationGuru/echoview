import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../utils/appSlice';
import watchSlice from '../utils/watchPageSlice';
import searchSuggestionSlice from '../utils/searchSuggestionSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    watch: watchSlice,
    searchSuggestions: searchSuggestionSlice,
  },
});

export default store;
