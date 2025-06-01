import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "../SVG/CloseIcon";
import RenderFileIcon from "../SVG/RenderFileIcon";
import {  setActiveIdAction, setClickedFileAction,deleteOpenFile } from "../../app/features/fileTreeSlice/fileTreeSlice";
import type { RootState } from "../../app/store";
import type { IFile } from "../../interfaces";

interface IProps{
  file:IFile;
}

const OpenFileBarTap = ({file}:IProps) => {
  //*state
  const {id,name,content}=file;
  const {activeId}=useSelector((state:RootState)=>state.fileTree)
  const dispatch = useDispatch();

  
  //*2- Handler
  const onClickHandler = () =>
  {
    dispatch(setClickedFileAction({fileContent:content,fileName:name}))
    dispatch(setActiveIdAction(id))
   
   
  }
  //*3- render
  return (
    <div
      className="flex items-center space-x-1   p-2 hover:bg-gray-700 cursor-pointer "
      onClick={onClickHandler}
      style={{
        borderTop: id == activeId ? "2px solid #cf6ccf" : "2px solid transparent" ,
      }}
    >
      <span>
        <RenderFileIcon filename={name} isFolder={false} isOpen={false} />
      </span>
      <span>{name} </span>
      <span onClick={(e)=>{e.stopPropagation();  dispatch(deleteOpenFile(id)); }}
    ><CloseIcon/></span>
    </div>
  );
};

export default OpenFileBarTap;
