import { Checkbox } from './base'
import { timeAgo } from '../util'

export default function List ({ todos = [], update }) {
  return (
    <ul class='p-0 md:p-6 space-y-4'>
      { todos.map((todo, index) => <Todo key={index} todo={todo} />) }
    </ul>
  )
}

function Todo ({ todo }) {
  return (
    <li class='space-x-4'>
      <Checkbox on={todo.done} />
      { 
        todo.link
          ? <a href={todo.link} class='border-b' target='_blank' rel='noopener noreferrer'>{todo.title}</a>
          : <span>{todo.title}</span> }
      <span class='float-right text-gray-400 mt-4'>{timeAgo(todo.createdAt)}</span>
    </li>
  )
}