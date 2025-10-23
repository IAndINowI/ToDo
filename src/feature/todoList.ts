import { ToDo } from '../modules/todo-item'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
        const newToDo: ToDo = {
            id: state.todos.length,
            text: action.payload,
            isDone: false
        }
        state.todos = [...state.todos, newToDo]
        // setTodos([...todos, newToDo])

    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
        const newTodos = state.todos.map((todo)=>{
            if(todo.id === action.payload.id){
                todo.isDone = !todo.isDone
            }
            return todo
        })
        state.todos = newTodos
 
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
        const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
        state.todos = newTodos
    },
  },
})

export const {createAction, updateAction,deleteAction} = todoSlice.actions

export default todoSlice.reducer