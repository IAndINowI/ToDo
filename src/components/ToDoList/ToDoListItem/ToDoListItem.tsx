import { ToDo } from '../../../modules/todo-item'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled'

import trashIcon from '../../../assets/images/trash.png'
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    return (
        <ToDoItem>
            <ToDoItemText> {props.toDoItem.text} </ToDoItemText>
            < ToDoItemControls >
                <ToDoItemControl
                    className="btn-trash"
                    icon = {trashIcon}
                    onClick={() => props.deleteToDo(props.toDoItem)}
                ></ToDoItemControl>
                <ToDoItemControl
                    icon = {props.toDoItem.isDone ? checkIcon : uncheckIcon}
                    onClick={() => props.updateToDo(props.toDoItem)}
                ></ToDoItemControl>
            </ ToDoItemControls >
        </ToDoItem>

    )
}