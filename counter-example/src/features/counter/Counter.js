import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function Counter(){
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const handleIncrement = () => dispatch(increment());
    const handleDeccrement = () => dispatch(decrement());
    return(
        <div style={{display:"flex", justifyContent: "space-between", width: '150px'}}>
            <button onClick={handleIncrement}>+</button>
            <span>{count}</span>
            <button onClick={handleDeccrement}>-</button>
        </div>
    );
}