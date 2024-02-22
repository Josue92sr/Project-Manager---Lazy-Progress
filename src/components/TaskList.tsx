import { dispatchApp, selectorApp } from "../hooks/useDispatchSelector"

import { createTask, deleteTask } from "../store/index"
import { ChangeEvent, FormEvent, useState } from "react"
import { useEffect } from "react"
function TaskList() {
  const dispatch = dispatchApp()
  const { tasks } = selectorApp(state => {
    return state.project.data.find(project => {
      return project.id === state.project.selectedId
    })
  })!
  const { selectedId } = selectorApp(state => state.project)!
  const [isSubmit, setIsSubmit] = useState(false)
  const [taskDescription, setTaskDescription] = useState("")

  // this effect deletes the input value once that the project selected changes
  useEffect(() => {
    setTaskDescription("")
  }, [selectedId])

  // event listeners
  const handleAddTask = () => {
    setIsSubmit(true)
    if (taskDescription) {
      dispatch(createTask(taskDescription))
      setIsSubmit(false)
      setTaskDescription("")
    }
  }
  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value)
    setIsSubmit(false)
  }
  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id))
  }

  const renderTasks = tasks.map((task, index) => {
    return (
      <li key={index}>
        <div className="flex justify-between">
          {task}
          <button
            onClick={() => {
              handleDeleteTask(index)
            }}
          >
            clear
          </button>
        </div>
      </li>
    )
  })
  return (
    <div className=" ">
      <h1 className="text-3xl  font-semibold sm:mt-10">Tasks</h1>
      <input
        className={`m-5 ml-0  w-[50vw] sm:w-[30vw] h-8 p-5 min-w-80 focus:border-stone-700 focus:outline-none bg-stone-200 focus:border-b-2 ${
          taskDescription || !isSubmit ? "" : "border-red-600 border-2"
        }`}
        value={taskDescription}
        onChange={handleTaskChange}
        onKeyDown={e => {
          if (e.key === "Enter") handleAddTask()
        }}
        type="text"
      />

      <button onClick={handleAddTask}>Add Task</button>

      {tasks.length ? (
        <div className="p-10 bg-stone-200 rounded-[10px] pr-0 py-0">
          <div className="max-h-56 overflow-y-scroll  pr-2 py-2">
            <ul className="list-disc ">{renderTasks}</ul>
          </div>
        </div>
      ) : (
        <p>This project doesn't have any tasks yet</p>
      )}
    </div>
  )
}

export default TaskList
