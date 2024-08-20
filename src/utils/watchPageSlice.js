import { createSlice } from '@reduxjs/toolkit';

const watchSlice = createSlice({
  name: 'watchSlice',
  initialState: {
    videoId: '',
    videoInfo: {},
  },

  reducers: {
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },

    clearVideoId: (state) => {
      state.videoId = '';
    },

    setVideoInfo: (state, action) => {
      state.videoInfo = action.payload;
    },

    clearVideoInfo: (state) => {
      state.videoInfo = undefined;
    },
  },
});

export const { setVideoId, clearVideoId, setVideoInfo, clearVideoInfo } =
watchSlice.actions;

export default watchSlice.reducer;
