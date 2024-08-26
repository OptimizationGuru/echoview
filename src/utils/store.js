import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../utils/appSlice';
import watchSlice from '../utils/watchPageSlice';
import searchSuggestionSlice from '../utils/searchSuggestionSlice';
import liveChatSlice from '../utils/LivechatSlice';
import throttle from 'lodash/throttle';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Failed to load state from local storage:', err);
    return undefined;
  }
};

const saveState = throttle((state) => {
  try {
    const serializedState = JSON.stringify({
      app: state.app,
      watch: state.watch,
    });
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Failed to save state to local storage:', err);
  }
}, 1000);

const store = configureStore({
  reducer: {
    app: appSlice,
    watch: watchSlice,
    searchSuggestions: searchSuggestionSlice,
    livechat: liveChatSlice,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
