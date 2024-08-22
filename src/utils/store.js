import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../utils/appSlice';
import watchSlice from '../utils/watchPageSlice';
import searchSuggestionSlice from '../utils/searchSuggestionSlice';
import LiveChatSlice from '../utils/LivechatSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    watch: watchSlice,
    searchSuggestions: searchSuggestionSlice,
    livechat: LiveChatSlice,
  },
});

export default store;
