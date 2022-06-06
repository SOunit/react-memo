import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

// export const fetchTweets = (keyword, maxResults) => async (dispatch) => {
//     try{
//         dispatch(isLoadingTweets())
//         const tweets = await findTweets(keyword, maxResults)
//         dispatch(loadingTweetsSuccess(tweets))
//     }catch(error){
//         const errorMsg = error.toString()
//         dispatch(loadingTweetsFailure(errorMsg))
//     }
// }

const FETCH_TWEETS = "FETCH_TWEETS";

export const fetchTweetsThunk = createAsyncThunk(
  FETCH_TWEETS,
  async (params, thunkAPI) => {
    return await findTweets(params.searchValue, params.maxResults);
  }
);

const initialState = { tweets: [], isLoading: false, error: null };

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  // reducers: {
  //     loadingTweetsSuccess(state, { payload }){
  //         state.tweets = payload
  //         state.isLoading = false
  //         state.error = null
  //     },
  //     loadingTweetsFailure(state, payload){
  //         state.isLoading = false
  //         state.error = payload
  //     },
  //     isLoadingTweets(state){
  //         console.log("before is loading: ", current(state))
  //         state.isLoading = true
  //         console.log("after is loading: ", current(state))
  //     }
  // },
  extraReducers: {
    [fetchTweetsThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTweetsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.tweets = payload;
      state.error = null;
    },
    [fetchTweetsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = "Unable to fetch tweets. Please try again later.";
    },
  },
});

export const { loadingTweetsSuccess, isLoadingTweets, loadingTweetsFailure } =
  tweetsSlice.actions;
export default tweetsSlice.reducer;
