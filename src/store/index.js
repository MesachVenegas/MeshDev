import { configureStore } from '@reduxjs/toolkit';
import languageSlice from './features/language';
import themeSlice from './features/theme';

export default configureStore({
    reducer: {
        language: languageSlice,
        theme: themeSlice
    }
})

