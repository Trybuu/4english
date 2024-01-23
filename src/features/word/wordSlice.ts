import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    increment: (state, action) => {
      const word = action.payload
      console.log('Hello from Slice, count is: ' + state.count)
      console.log(word)
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

export const { increment, decrement } = wordSlice.actions

export default wordSlice.reducer
