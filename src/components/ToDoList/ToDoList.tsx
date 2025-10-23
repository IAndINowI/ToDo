import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
// import './ToDoList.scss'
import { ToDo } from "../../modules/todo-item"
import { ToDoListContainer, ToDoListTasks } from "./ToDoList.styled"


export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {

    const checkedList = () => {
        return                     props.todos
        .filter((item) => !item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem 
                    toDoItem={item} 
                    key={idx}  
                    updateToDo ={props.updateToDo} 
                    deleteToDo={props.deleteToDo}
                />
            )
        })
    }
    const uncheckedList = () => {
         return props.todos
        .filter((item) => item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem 
                    toDoItem={item} 
                    key={idx} 
                    updateToDo ={props.updateToDo}
                    deleteToDo={props.deleteToDo}
                />
            )
        })
    }
    return (
        <ToDoListContainer>
            <>
            <ToDoListTasks>
                { checkedList() }
            </ToDoListTasks>
            <ToDoListTasks>
                { uncheckedList() }
            </ToDoListTasks>
            </>
        </ToDoListContainer>
    )
}