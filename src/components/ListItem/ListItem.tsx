import { ToDo } from "../../modules/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {

    return (

        <a
            className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            target="_blank"
            href={`/list/${todo.id}`}>
            {todo.text}</a>

    )
}
