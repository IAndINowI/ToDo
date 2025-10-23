import { ToDo } from "../../modules/todo-item"
// import classes from './ListItem.module.scss'
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {

    return (

        <ListItemLink
            className={todo.isDone ? 'done' : 'notDone'}
            target="_blank"
            rel='noreferrer'
            href={`/list/${todo.id}`}>
            {todo.text}</ListItemLink>

    )
}
