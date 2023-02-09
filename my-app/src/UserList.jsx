import React from 'react'

import { useSelector , useDispatch} from "react-redux";
import { removeUser } from './features/counterSlice';
export const UserList = () => {


    const dispatch = useDispatch()


    const data =  useSelector((state)=>{
        return state.users;
    })
    console.log("data :",data);


    const deleteUser = (id) =>{
        dispatch(removeUser(id))
    }

    
    return(
        <>
        {
            data.map((item,id)=>
                <p key={id}>{item}
                &emsp;
                <button className='btn btn-delete' style={{"backgroundColor":'red','color':'white','borderRadius':'2px','border':'none'}} onClick={()=>deleteUser(id)} >
                    {/* <MdDeleteForever className="delete-icon" style={{"height":"12x"}}/> */}
                    remove
                </button>
                </p>
             )
        }
        </>
    )
}