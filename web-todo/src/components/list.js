export default function List ({ todos = [] }) {
  return (
    <ul class='p-0 md:p-6 space-y-4'>
      { todos.map((todo, index) => <Todo todo={todo} />) }
    </ul>
  )
}

function Todo ({ todo }) {
  return (
    <li>
      {todo.link ? 
        <a href={todo.link} class='border-b' target='_blank' rel='noopener noreferrer'>{todo.title}</a> :
        todo.title }
    </li>
  )
}