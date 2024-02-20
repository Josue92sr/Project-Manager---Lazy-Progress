import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux"
import { type dispatchStore, type selectorStore } from "../store/index"

type dispatchType = () => dispatchStore
export const dispatchApp: dispatchType = useDispatch

export const selectorApp: TypedUseSelectorHook<selectorStore> = useSelector
