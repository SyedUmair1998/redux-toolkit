import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { changeTextColor } from './themeSlice';


const Theme = () => {
    const dispatch = useDispatch()
    const [color,setColor] = useState("White")
    return (
        <div>
            <input type="text" />
            <button onClick={()=>{dispatch(changeTextColor(color))}}>Change color</button>
        </div>
    )
}

export default Theme
