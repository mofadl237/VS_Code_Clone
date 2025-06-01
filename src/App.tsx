
import { useSelector } from 'react-redux'
import './App.css'
import RecursiveComponent from './Components/RecursiveComponent'

import ResizablePanel from './Components/ResizablePanel'
import type { RootState } from './app/store'
import OpenFileTap from './Components/OpenFileTap'



function App() {
//*1-state
    const {fileTreeData} =useSelector((state:RootState)=>state.fileTreeData)


  return (
    
  

      <ResizablePanel left={<RecursiveComponent fileTree={fileTreeData}/>} right={<OpenFileTap/>}/>
 
  )
}

export default App
