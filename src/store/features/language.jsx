import { createSlice } from '@reduxjs/toolkit';

export const languageSlice =  createSlice({
    name: 'language',
    initialState: false,
    reducers: {
        setLanguage: (state, action) => {
            const inputValue = action.payload;
            return inputValue;
        }
    }
})

export const { setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
