import useContextProvider from "../hooks/useContext"

function ProjectDetails() {
  // const data = useSelector((state) => {
  //     return state.project.data;
  // });
  // const dispatch = useDispatch();
  // const selectedId = useSelector((state) => {
  //     return state.project.selectedId;
  // });
  const state = useContextProvider()
  const data = state.project
  const project = data?.[0]

  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(project.date))

  // event listener
  // const handleDeleteProject = () => {
  //     dispatch(deleteProject(selectedId));
  // };

  return (
    <div className="w-full  text-stone-800   max-h-screen h-screen">
      <div className="px-5 ml-5 mr-20 mt-10">
        <div className="flex justify-between ">
          <h1 className="text-3xl  font-semibold sm:mt-10">{project.title}</h1>
          <button
            className="sm:mt-10 p-2"
            // onClick={handleDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mt-3 text-stone-400">{formattedDate}</p>
        <p className="mt-5">{project.description}</p>
        {/* div separator */}
        <div className="h-[2px] w-full bg-stone-400"></div>
        {/* <TaskList /> */}
      </div>
    </div>
  )
}

export default ProjectDetails
