import React from 'react';
import { useSelector } from 'react-redux';

const Coin = () => {
    const themeTextColor = useSelector((state)=>state.theme.color);
    
const count = useSelector(state => state.counter.count);
    return (
        <div>
            <h1 style={{color:themeTextColor}}>Coin : {count}</h1>
        </div>
    )
}

export default Coin
