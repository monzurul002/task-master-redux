import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [{
        id: 1,
        status: 'pending',
        title: 'Remove Button',
        description:
            'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
        date: '2023-08-28',
        assignedTo: 'Mir Hussain',
        priority: 'high',
    }]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.task.length === 0) {
                state.task.push({ id: 1, status: "pending", ...payload })
            }
            else {
                const lastElement = state.task.at(-1);
                state.task.push({ id: lastElement.id + 1, status: "pending", ...payload })
            }
        },
        removeTask: (state, { payload }) => {
            state.task = state.task.filter(item => item.id !== payload)
        },
        updateStatus: (state, { payload }) => {

            const targetItem = state.task.find(item => item.id === payload.id);
            console.log(targetItem);
            targetItem.status = payload.status
        }

    }
})

export const { addTask, removeTask, updateStatus } = taskSlice.actions
export default taskSlice.reducer;