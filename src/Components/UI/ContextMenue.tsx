import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { closeAllOpenFiles, deleteOpenFile } from "../../app/features/fileTreeSlice/fileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps{
    setShowMenu:(val:boolean)=>void;
    position:{
        x:number,
        y:number,
    }
}
const ContextMenue = ({position ,setShowMenu}:IProps) => {
    const menuRef =useRef<HTMLDivElement>(null);
    const dispatch=useDispatch();
    const {tapIdToClose}=useSelector((state:RootState)=>state.fileTree)
   //useEffect
   useEffect(()=>{
   
    const handleClickCloseContext =(e:MouseEvent)=>{
         if(menuRef && !menuRef.current?.contains(e.target as Node)){

             setShowMenu(false)
         }
    }
    window.addEventListener("click",handleClickCloseContext);

    return ()=> {removeEventListener("click",handleClickCloseContext)}

   },[setShowMenu])
  return (
    <div
    ref={menuRef}
      className="bg-white absolute text-black w-fit px-7 py-3 rounded-md shadow-md z-50"
      style={{
       
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <ul>
        <li className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer"
        onClick={()=>{dispatch(deleteOpenFile(tapIdToClose)); setShowMenu(false)}}
        >Close</li>
        <li className="hover:bg-gray-200 px-2 py-1 rounded cursor-pointer"
        onClick={()=>{dispatch(closeAllOpenFiles()) ; setShowMenu(false)}}>Close All</li>
      </ul>
    </div>
  )
}

export default ContextMenue