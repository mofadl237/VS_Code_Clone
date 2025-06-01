import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import type { ReactNode } from "react";

interface IProps{
    left:ReactNode;
    right:ReactNode;
}
const ResizablePanel = ({left,right}:IProps) => {
  return (
   
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize={25}>
        
        {left}
     
      </Panel>
      <PanelResizeHandle className='border-r-gray-500 border-r-[1px]  h-screen' />
      <Panel>
        {right}
        
      </Panel>
      
      
    </PanelGroup>
  );
};

export default ResizablePanel;
