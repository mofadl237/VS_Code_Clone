import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import    fileTreeSlice   from './features/fileTreeSlice/fileTreeSlice'
import  fileTreeData  from './features/fileTreeData/fileTreeData'

const store = configureStore({
  reducer: {
    fileTree:fileTreeSlice,
    fileTreeData :fileTreeData,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store