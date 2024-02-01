import { createSlice } from '@reduxjs/toolkit'
import { Word } from '../../helpers/getRandomWord'

const initialState = {
  word: { wordData: null as Word[] | null },
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word.wordData = action.payload
      console.log(action.payload)
    },
  },
})

export const { setWord } = wordSlice.actions

export default wordSlice.reducer
