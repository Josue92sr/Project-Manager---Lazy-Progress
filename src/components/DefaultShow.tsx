// import { showFormScreen } from "../store/index"
import image from "../assets/no-projects.png"
import useContextProvider from "../hooks/useContext"
function DefaultShow() {
  const { pageToShow, startForm } = useContextProvider()
  const handleNewForm = () => {
    startForm()
  }
  return (
    <div className="mt-auto mb-auto flex flex-col items-center">
      <img src={image} alt="note icon" className=" w-[10%] h-auto " />
      <h1 className="my-8 text-center text-4xl font-bold  ">
        No Project Selected
      </h1>
      <p>Select a project or get started with a new one</p>
      <button
        className="mt-10 border border-stone-300 p-3 rounded-xl bg-stone-600 hover:bg-stone-700 text-stone-300"
        onClick={handleNewForm}
      >
        Create a new project
      </button>
    </div>
  )
}

export default DefaultShow
