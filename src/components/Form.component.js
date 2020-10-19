import React from 'react'

const Form = ({ setInputText, inputText, todos, setToDos, setStatus }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value)
	}
	const submitToDoHandler = (e) => {
		e.preventDefault()
		setToDos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.random() * 1000
			}
		])
		setInputText("")
	}
	const statusHandler = (e) => {
		setStatus(e.target.value)
	}

	return (
		<form>
			<input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
			<button className="todo-button" type="submit" onClick={submitToDoHandler}>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	)
}

export default Form
