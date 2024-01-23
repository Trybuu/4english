import { configureStore } from '@reduxjs/toolkit'
import wordReducer from '../features/word/wordSlice'

export const store = configureStore({
  reducer: {
    word: wordReducer,
  },
})
