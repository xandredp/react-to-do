import React from 'react'
import ToDo from './ToDo.component'

const ToDoList = ({ filteredToDos, setToDos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
			{
				filteredToDos.map(todo => (
					<ToDo todos={filteredToDos} todo={todo} setToDos={setToDos} text={todo.text} key={todo.id}/>
				))
			}
			</ul>
		</div>
	)
}

export default ToDoList
