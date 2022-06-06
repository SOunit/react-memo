import { createSlice } from '@reduxjs/toolkit'

const maxResultsSlice = createSlice({
    name: "maxResults",
    initialState: "5",
    reducers: {
        setMaxResult(state, action){
            return action.payload
        },
    }
})

export const { setMaxResult } = maxResultsSlice.actions
export default maxResultsSlice.reducer