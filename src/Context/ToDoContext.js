import {createContext, useContext} from 'react'

export const ToDoContext = createContext({
    todos:[{
        todo:"todos",
        id:1,
        completed:false,
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const useTodo=()=>{
    return useContext(ToDoContext);
}

export const TodoProvider=ToDoContext.Provider