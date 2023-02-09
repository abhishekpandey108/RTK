import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addOne } from './features/counterSlice';
export const Counter = () => {
 const dispatch = useDispatch();

 const data = useSelector((state)=>{
    return state.counter.count
 })

 const changeNum=(num)=>{
    dispatch(addOne(num))
 }

const[value,setValue] = useState(0);

const onChangeHandler = (e) =>{
    let a = e.target.value;
    a = Number(a) || 0;
    setValue(a);
    
}

function add(){
    dispatch(addOne(value))
}
    return (
        <>
            <p>{data}</p>
            <br/>
            <div>
                <button onClick={()=>{changeNum(1)}} >+</button>
                &emsp;
                <button onClick={()=>{changeNum(-1)}} >-</button>
            </div>
            
            <label>Enter num to add</label> &emsp;
            <input type="number" onChange={(e)=>{onChangeHandler(e)}}  />
            <button onClick={add}>Add</button>
        </>
    )
}