import { createSlice } from '@reduxjs/toolkit'
import { Word } from '../../helpers/getRandomWord'

const initialState = {
  word: null as Word[] | null,
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    increment: (state, action) => {
      const word = action.payload
      state.word = word
      console.log(word)
    },
  },
})

export const { increment } = wordSlice.actions

export default wordSlice.reducer
