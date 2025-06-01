import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../../interfaces";
interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}
export interface IIinitialState {
  openFiles: IFile[];
  clickedFile: IClickedFile;
  activeId: string;
  tapIdToClose:string;
}

const initialState: IIinitialState = {
  openFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
  activeId: "",
  tapIdToClose:"",
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFile: (state, action: PayloadAction<IFile>) => {
      const alreadyFind = state.openFiles.some(
        (file) => file.id === action.payload.id
      );
      if (!alreadyFind) {
        state.openFiles = [...state.openFiles, action.payload];
      }
    },
    deleteOpenFile: (state, action: PayloadAction<string>) => {
      state.openFiles = state.openFiles.filter(
        (file) => file.id !== action.payload
      );

      const isActive = state.activeId === action.payload;

      if (isActive) {
        if (state.openFiles.length > 0) {
          const lastFile = state.openFiles[state.openFiles.length - 1];
          state.activeId = lastFile.id;
          state.clickedFile = {
            fileContent: lastFile.content,
            fileName: lastFile.name,
          };
        } else {
          state.activeId = "";
          state.clickedFile = { fileContent: "", fileName: "" };
        }
      }
      //حاسس انك الافضل تخزنهم في حاجه بدل array  ==> LinkedList كدا اقدر اوصل للي قبله ة
      //او اعمل preActiveId
      // state.activeId = state.openFiles[state.openFiles.length - 1].id;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.fileContent = action.payload.fileContent;
      state.clickedFile.fileName = action.payload.fileName;
    },

    setActiveIdAction: (state, action: PayloadAction<string>) => {
      state.activeId = action.payload;
    },
    updateOpenFileContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      state.openFiles = state.openFiles.map((file) =>
        file.id === action.payload.id
          ? { ...file, content: action.payload.content }
          : file
      );
    },
    closeAllOpenFiles:(state)=>{
      state.openFiles=[]
      
    },
    setTapIDToCloseAction:(state,action:PayloadAction<string>)=>{
      state.tapIdToClose=action.payload
    },
  },
});
export const {
  setOpenFile,
  setClickedFileAction,
  setActiveIdAction,
  updateOpenFileContent,
  deleteOpenFile,
  closeAllOpenFiles,
  setTapIDToCloseAction,
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
