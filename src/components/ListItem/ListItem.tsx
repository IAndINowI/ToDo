import { ToDo } from "../../modules/todo-item"
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
