import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name  : 'user',
    initialState : [],
    reducers : {

        addUser : (state,action)=>{
            state.push(action.payload);
        },
        removeUser : (state,action)=>{
            state.splice(action.payload,1)
        },
        deleteAll : (state)=>{
            return state = []
        }

    }
});



export const counterSlice = createSlice({
    name  : 'count',
    initialState : {
        count : 0
    },
    reducers : {

        addOne : (state,action)=>{
            state.count+=action.payload;
        }

    }
});



export const {addUser, removeUser, deleteAll} = userSlice.actions;

export const {addOne} = counterSlice.actions;
