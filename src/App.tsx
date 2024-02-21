import { useState } from "react"
import ProjectList from "./components/ProjectList"
import ProjectShow from "./components/ProjectShow"
let firstRender = 0
function App() {
  const [isOpen, setIsOpen] = useState(false)

  function handleShowDetails(param: boolean) {
    setIsOpen(param)
  }
  firstRender++
  return (
    <div className=" sm:flex w-screen h-screen p-0 m-0 overflow-hidden max-sm:relative ">
      <ProjectList
        onShow={handleShowDetails}
        open={isOpen}
        firstRender={firstRender}
      />
      <ProjectShow
        onShow={handleShowDetails}
        open={isOpen}
        firstRender={firstRender}
      />
    </div>
  )
}

export default App
