import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => {
            state.value+=1
        },
        decrement: state => {
            state.value-=1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

const increment = counterSlice.actions.increment;
const decrement = counterSlice.actions.decrement;
const incrementByAmount = counterSlice.actions.incrementByAmount;

// Action creators are generated for each case reducer function
export { increment, decrement, incrementByAmount };

export default counterSlice.reducer

