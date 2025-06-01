import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenFileBarTap from "./UI/OpenFileBarTap";
import ContentSyntax from "./ContentSyntaxHiglter";

const OpenFileTap = () => {
  /**1- state */
  const { openFiles } = useSelector((state: RootState) => state.fileTree);
  //const {fileTreeData} =useSelector((state:RootState)=>state.fileTreeData)
  //*2- Handler

  //*3- Render
console.log(openFiles)
  return (openFiles.length ? (
    
    <div className="w-full">
      <div className="flex  items-start">
        {openFiles.map((file) => (
          <OpenFileBarTap key={file.id} file={file} />
        ))}
      </div>
      <ContentSyntax />
    </div>
  ) : (
    <div className="flex items-center justify-center h-full">Not Founded  Welcome Tap</div>
  )
  
)
};

export default OpenFileTap;

//Copy

/**
 * import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenFileBarTap from "./UI/OpenFileBarTap";
import ContentSyntax from "./ContentSyntaxHiglter";




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
