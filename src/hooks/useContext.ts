import { type projectPropsType } from "../context/ContextProvider"
import contextProvider from "../context/ContextProvider"
import { useContext } from "react"
export default function useContextProvider() {
  const provider = useContext<projectPropsType | null>(contextProvider)
  if (provider === null) {
    throw new Error("something went wrong")
  }
  return provider
}
