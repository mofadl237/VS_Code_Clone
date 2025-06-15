import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenFileBarTap from "./UI/OpenFileBarTap";
import ContentSyntax from "./ContentSyntaxHiglter";
import ContextMenue from "./UI/ContextMenue";
import { useState } from "react";

const OpenFileTap = () => {
  /**1- state */
  const { openFiles } = useSelector((state: RootState) => state.fileTree);
  const [contextMenue,setContextMenue]=useState({x:0,y:0})
  const [showMenue,setShowMenue]=useState(false)
  //const {fileTreeData} =useSelector((state:RootState)=>state.fileTreeData)
  //*2- Handler

  //*3- Render
  return (openFiles.length ? (
    
    <div className="w-full "
    
    >
      <div className="flex  items-start relative"
      onContextMenu={(e)=>{
      e.preventDefault();
      setContextMenue({x:e.clientX , y:e.clientY});
      setShowMenue(true)
    }}
      >
        
        {openFiles.map((file) => (
          <OpenFileBarTap key={file.id} file={file} />
        ))}
      </div>
      <ContentSyntax />
      {showMenue && <ContextMenue position={contextMenue} setShowMenu={setShowMenue}/>}
      
    </div>
  ) : (
    <div className="flex items-center justify-center h-full "><img className="w-1/3 " src="/Icons/vscode.svg"/></div>
  )
  
)
};

export default OpenFileTap;

/**
 * import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenFileBarTap from "./UI/OpenFileBarTap";
import ContentSyntax from "./ContentSyntaxHiglter";
import { useState } from 'react';




const OpenFileTap = () => {

  const { openFiles } = useSelector((state: RootState) => state.fileTree);
//const {fileTreeData} =useSelector((state:RootState)=>state.fileTreeData)
  //*2- Handler

  //*3- Render

  return (
   {
    
   }
    <div className="w-full">
        <div className="flex  items-start">
      {openFiles.map((file) => (
        <OpenFileBarTap key={file.id} file={file} />
      ))}
      
    </div  >
    <ContentSyntax/>
    </div>
  );
  
};

export default OpenFileTap;

 */
