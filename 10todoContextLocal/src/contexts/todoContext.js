import { createContext , useContext} from "react";

export const todoContext = createContext({
    todo:[
        {
            id:1,
            todo:"Work to done",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : () => {}
})

export const useTodo = () =>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider