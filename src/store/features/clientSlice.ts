import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../types";

const initialClientState: Client = {
  email: "",
  token: "",
  isLogged: false,
  shoppingCart: [],
  orders: [],
};

const clientSlice = createSlice({
  name: "client",
  initialState: initialClientState,
  reducers: {
    loginClient: (currentClientState, action: PayloadAction<Client>) => ({
      ...currentClientState,
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const clientReducer = clientSlice.reducer;
export const { loginClient: loginClientActionCreator } = clientSlice.actions;
