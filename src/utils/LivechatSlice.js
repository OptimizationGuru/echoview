import { createSlice } from '@reduxjs/toolkit';

export const LiveChatSlice = createSlice({
  name: 'LiveChat',
  initialState: {
    comments: [],
    showComments: false,
  },
  reducers: {
    addNewComment: (state, action) => {
      const { user, comment } = action.payload;
      const newObj = {
        userName: user,
        userComment: comment,
      };

      state.comments = [...state.comments, newObj];

      if (state.comments.length > 100) {
        const latestComments = state.comments.slice(-100);
        state.comments = latestComments;
      }
    },

    clearComments: function (state) {
      state.comments = [];
    },

    toggleComments: (state, action) => {
      state.showComments = action.payload;
    },
  },
});

export const { addNewComment, clearComments, toggleComments } =
  LiveChatSlice.actions;
export default LiveChatSlice.reducer;
