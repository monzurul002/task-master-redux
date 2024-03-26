import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/tasksSlice"
import userSlice from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        userSlice: userSlice
    }
})
export default store