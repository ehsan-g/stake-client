import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicApi } from "../../apis/base";

export interface dataState {
  data: object[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

export interface Config {
  headers: {
    "Content-Type": "application/json";
  };
}

const initialState: dataState = {
  data: [],
  status: "idle",
  error: "",
};

export const fetchData = createAsyncThunk("Get/Postgres", async () => {
  const config: Config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await publicApi.get(
    `/bigQuery/transaction/db/fetch`,
    config
  );
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
        state.data = [];
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const loadeddata = action.payload.map((data: any) => {
          return data;
        });
        state.status = "succeeded";

        // Add any fetched data to the array
        state.data = state.data.concat(loadeddata);
        localStorage.setItem("localTransactions", JSON.stringify(state.data));
      })
      .addCase(fetchData.rejected, (state, action) => {
        const localTransactions = localStorage.getItem("localTransactions")
          ? JSON.parse(localStorage.getItem("localTransactions") || "")
          : null;
        if (localTransactions) {
          state.error = "You are loading from Local Storage";
          state.data = localTransactions;
        } else {
          state.status = "failed";
          state.error = action.error.message;
        }
      });
  },
});

export default dataSlice.reducer;
