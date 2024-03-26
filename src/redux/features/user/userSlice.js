import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "Huskuli",
    email: "huskuli@gmail.com",
    userTasks: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})
export default userSlice.reducer;