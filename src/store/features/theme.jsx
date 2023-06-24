import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: false,
    reducers: {
        setTheme: (state, action) => {
            const value = action.payload;
            return value;
        }
    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
