import { useState } from "react";
import RightArrow from "./SVG/RightArrow";
import type { IFile } from "../interfaces";
import BottomArrow from "./SVG/BottomArrow";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { useDispatch } from "react-redux";
import { setActiveIdAction, setClickedFileAction, setOpenFile } from "../app/features/fileTreeSlice/fileTreeSlice";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  /**1- state  */
  const {id,name,content} =fileTree ;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch =useDispatch();
  /**2- Handler */
  const onDispatchHandler =()=>{
    dispatch(setActiveIdAction(id));
    dispatch(setClickedFileAction({fileName:name , fileContent:content }))
    dispatch(setOpenFile(fileTree))
  }
  const Close_Open_Folder = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="ml-2 ">
      <div
        className="flex items-center mb-2 cursor-pointer"
        
        onClick={()=>{ Close_Open_Folder()}}
      >
        {fileTree.isFolder ? (
          <span className="flex items-center">
            {isOpen ? (
              <span className=" flex items-center">
               
                <BottomArrow /> 
              </span>
            ) : (
              <span className=" flex items-center">
                <RightArrow /> 
              </span>
            )}
            <RenderFileIcon isFolder={fileTree.isFolder} isOpen={isOpen} filename={fileTree.name}/>
            <span className="ml-2">{name}</span>
          </span>
          
        ) : (
          
          
          <span className="space-x-2 flex item-center" onClick={onDispatchHandler}>
           <RenderFileIcon isFolder={fileTree.isFolder} isOpen={isOpen} filename={name}/>
          <span className="">{name}</span>
          </span>
          
        )}
        
      </div>

      {fileTree.children && isOpen &&
        fileTree.children.map((file, i) => (
          <RecursiveComponent key={i} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
