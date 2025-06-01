import File from "./File";

interface IProps {
  filename: string;
  isFolder: boolean;
  isOpen: boolean;
}

const pathIcon: Record<string, string> = {
  jsx: "/public/Icons/react",
  tsx: "/public/Icons/react_ts",
  js: "/public/Icons/javascript",
  ts: "/public/Icons/ts",
  html: "/public/Icons/html",
  css: "/public/Icons/css",

  //Folder
  node_modules: "/public/Icons/folder-node",
  src: "/public/Icons/folder-src",
  
  components: "/public/Icons/folder-components",
  Components: "/public/Icons/folder-components",
  public: "/public/Icons/folder-public",
  data: "/public/Icons/folder-database",
  UI: "/public/Icons/folder-ui",
  ui: "/public/Icons/folder-ui",
  interface: "/public/Icons/folder-interface",
};

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
    return <img src="/public/Icons/folder-base-open.svg" className="w-5 " />;
  if (isFolder && !isOpen)
    return <img src="/public/Icons/folder-base.svg" className="w-5 " />;

  return <File/>
};

export default RenderFileIcon;
