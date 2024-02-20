// import section

import { dispatchApp, selectorApp } from "../hooks/useDispatchSelector"
import {
  setTitle,
  setDescription,
  setDate,
  cancelForm,
  createProject,
} from "../store/index"
import { ChangeEvent, FormEvent, useState } from "react"

//Style Constants
const LABEL_CLASSES = " text-2xl font-bold"
const INPUT_CLASSES =
  "w-[80vw] sm:w-[50vw] h-8 p-5 focus:border-stone-700 focus:outline-none bg-stone-300 focus:border-b-2  "
const BUTTON_CLASSES =
  "w-20 px-3 py-1 mr-3 rounded-xl border border-stone-800 hover:border-1"

// main function component
function ProjectForm() {
  const dispatch = dispatchApp()
  const { title, description, date } = selectorApp(state => {
    return state.openForm
  })
  const [isSubmit, setIsSubmit] = useState(false)

  // eventliseners

  const handleSaveForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() //defaultPrevent

    setIsSubmit(true)
    if (date && description && title) {
      setIsSubmit(false)
      dispatch(
        createProject({
          title,
          description,
          date,
        }),
      )
    }
  }
  const handleCancelForm = () => {
    dispatch(cancelForm())
  }
  // Form inputs controllers
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(event.target.value))
    setIsSubmit(false)
  }
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(event.target.value))
    setIsSubmit(false)
  }
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDate(event.target.value))
    setIsSubmit(false)
  }

  return (
    <div className="mt-auto mb-auto flex flex-col items-center">
      <form onSubmit={handleSaveForm} className="flex flex-col gap-3">
        <div className="self-end">
          <button
            onClick={handleCancelForm}
            type="button"
            className={BUTTON_CLASSES + " hover:bg-stone-400 "}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={
              BUTTON_CLASSES +
              "ml-3 text-stone-200 bg-stone-600 hover:bg-stone-900"
            }
          >
            Save
          </button>
        </div>
        <label className={LABEL_CLASSES} htmlFor="">
          Title
        </label>
        <input
          value={title}
          onChange={handleTitleChange}
          className={`${
            (date && description && title) || !isSubmit
              ? INPUT_CLASSES
              : INPUT_CLASSES + "border-red-600 border-2"
          }`}
          type="text"
        />
        <label className={LABEL_CLASSES} htmlFor="">
          Description
        </label>
        <input
          onChange={handleDescriptionChange}
          value={description}
          className={`${
            (date && description && title) || !isSubmit
              ? INPUT_CLASSES
              : INPUT_CLASSES + "border-red-600 border-2"
          }`}
          type="text"
        />
        <label className={LABEL_CLASSES} htmlFor="">
          Due Date
        </label>
        <input
          onChange={handleDateChange}
          value={date}
          className={`${
            (date && description && title) || !isSubmit
              ? INPUT_CLASSES
              : INPUT_CLASSES + "border-red-600 border-2"
          }`}
          type="date"
          name=""
          id=""
        />
      </form>
    </div>
  )
}

export default ProjectForm
