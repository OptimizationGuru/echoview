import { createSlice } from '@reduxjs/toolkit';

export const searchSuggestionSlice = createSlice({
  name: 'searchSuggestion',
  initialState: {
    suggestions: {},
  },
  reducers: {
    addSuggestion: (state, action) => {
      const { searchQuery, searchSuggestions } = action.payload;
      state.suggestions[searchQuery] = searchSuggestions;
    },
    removeSuggestion: (state, action) => {
      state = state.filter((suggestion) => suggestion !== action.payload);
    },
  },
});

export const { addSuggestion, removeSuggestion } =
  searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;
