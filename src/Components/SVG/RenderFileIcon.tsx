import File from "./File";

interface IProps {
  filename: string;
  isFolder: boolean;
  isOpen: boolean;
}

const pathIcon: Record<string, string> = {
  jsx: "/Icons/react",
  tsx: "/Icons/react_ts",
  js: "/Icons/javascript",
  ts: "/Icons/ts",
  html: "/Icons/html",
  css: "/Icons/css",

  //Folder
  node_modules: "/Icons/folder-node",
  src: "/Icons/folder-src",
  
  components: "/Icons/folder-components",
  Components: "/Icons/folder-components",
  public: "/Icons/folder-public",
  data: "/Icons/folder-database",
  UI: "/Icons/folder-ui",
  ui: "/Icons/folder-ui",
  interface: "/Icons/folder-interface",
};
//Default Search In Public
const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  //**2- Handler */
  const ext = filename.split(".").pop();
  if (ext && Object.prototype.hasOwnProperty.call(pathIcon, ext)) {
    const isPath = isFolder
      ? isOpen
        ? `${pathIcon[ext]}-open.svg`
        : `${`${pathIcon[ext]}.svg`}`
      : `${pathIcon[ext]}.svg`;
    return <img src={isPath} className="w-5 " />;
  }
  if (isFolder && isOpen)
    return <img src="/Icons/folder-base-open.svg" className="w-5 " />;
  if (isFolder && !isOpen)
    return <img src="/Icons/folder-base.svg" className="w-5 " />;

  return <File/>
};

export default RenderFileIcon;
