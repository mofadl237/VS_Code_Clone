import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";
import { fileTree } from "../../../data/fileTree";

export interface IIinitialState {
  fileTreeData: IFile;
}

const initialState: IIinitialState = {
  fileTreeData: fileTree,
  
};

export const fileTreeData = createSlice({
  name: "fileTreeData",
  initialState,
  reducers: {
    setDataUpdate:(state,action:PayloadAction<IFile>)=>{
        state.fileTreeData=action.payload
        
    }
  },
});
export const {setDataUpdate} = fileTreeData.actions;
export default fileTreeData.reducer;
