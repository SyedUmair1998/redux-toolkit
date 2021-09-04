import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from './counterSlice';
const Counter = () => {
    
const num = useSelector((state)=>state.counter.count);
const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <h1>{num}</h1>
            
            <button  onClick={()=>dispatch(increment())}>+</button>
            <button  onClick={()=>dispatch(incrementByAmount(10))}>Inc</button>
        </div>
    )
}

export default Counter
