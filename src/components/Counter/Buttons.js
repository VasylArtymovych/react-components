import React from "react";
import s from './Counter.module.css'

function Buttons({onIncrement, onDecrement}){
    return (
    <div>
    <button type="button" className={s.incBtn} onClick={onIncrement}>add</button>
    <button type="button" className={s.decBtn} onClick={onDecrement}>remove</button>
    </div>
        
    )
};

export default Buttons;