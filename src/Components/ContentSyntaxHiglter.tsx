// import Editor from "react-simple-code-editor";
// // import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-markup";
// import "prismjs/themes/prism.css";
// import "prismjs/themes/prism.css";
// import "prismjs/components/prism-css";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../app/store";
// import {
//   setClickedFileAction,
//   updateOpenFileContent,
// } from "../app/features/fileTreeSlice/fileTreeSlice";

// import type { IFile } from "../interfaces";
// import { setDataUpdate } from "../app/features/fileTreeData/fileTreeData";

// import Prism from "prismjs";


import Editor from "react-simple-code-editor";


import Prism from "prismjs";

import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/themes/prism.css";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  setClickedFileAction,
  updateOpenFileContent,
} from "../app/features/fileTreeSlice/fileTreeSlice";
import type { IFile } from "../interfaces";
import { setDataUpdate } from "../app/features/fileTreeData/fileTreeData";


const ContentSyntax = () => {
  /**1- state */
  const { activeId } = useSelector((state: RootState) => state.fileTree);
  const dispatch = useDispatch();
  const { fileTreeData } = useSelector(
    (state: RootState) => state.fileTreeData
  );
  const { fileContent, fileName } = useSelector(
    (state: RootState) => state.fileTree.clickedFile
  );

  const lineNumbers =
    fileContent &&
    fileContent
      .split("\n")
      .map((_, i) => i + 1)
      .join("\n");


  //*2- handler
  const recursiveFileTreeContent = (
    fileTreeRecursive: IFile,
    content: string
  ): IFile => {
    if (
      !fileTreeRecursive.isFolder &&
      fileTreeRecursive.id == activeId &&
      fileTreeRecursive.content
    ) {
      return {
        ...fileTreeRecursive,
        content,
      };
    }
    if (fileTreeRecursive.isFolder && fileTreeRecursive.children) {
      return {
        ...fileTreeRecursive,
        children: fileTreeRecursive.children.map((child) =>
          recursiveFileTreeContent(child, content)
        ),
      };
    }
    return fileTreeRecursive;
  };
  //*3- render
  return (
    <div className="flex">
      {activeId && (
        <pre
          style={{
            padding: "10px 8px",
            backgroundColor: "transparent",
          }}
        >
          {lineNumbers}
        </pre>
      )}

      <Editor
        value={String(fileContent)}
        onValueChange={(updatedCode) => {
          const updatedTree = recursiveFileTreeContent(
            fileTreeData,
            updatedCode
          );
          dispatch(setDataUpdate(updatedTree));
          dispatch(
            setClickedFileAction({ fileName, fileContent: updatedCode })
          );
          dispatch(
            updateOpenFileContent({ id: activeId, content: updatedCode })
          );
          // recursiveFileTreeContent(fileTree,updatedCode)
          // dispatch(setDataUpdate({name:fileName, isFolder:false ,id: activeId ,content:updatedCode}))
        }}
        //highlight={(code) => highlight(code, languages.markup, "html")}

        highlight={(code) =>
          Prism.highlight(code, Prism.languages.markup, "html")
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          backgroundColor: "transparent",
          width: "100",
          height: "100",
        }}
      />
    </div>
  );
};

export default ContentSyntax;
