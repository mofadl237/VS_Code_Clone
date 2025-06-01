import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";
export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "bin",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
             content:`\n`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "ui",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "style.css",
              isFolder: false,
              content: `body,html {
    background: #000;
    color:#fff;
}
svg{
    width:25px;
    height:25px;
}`,
            },
            { id: uuid(), name: "1.css", isFolder: false, content:  `body,html {
    background: #000;
    color:#fff;
}
svg{
    width:25px;
    height:25px;
}`},
            {
              id: uuid(),
              name: "react.html",
              isFolder: false,
              content: `<html>
              <head></head>
              <body><h1>Hello </h1>
              </body>
              </html>`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "data",
      isFolder: true,
      children: [{ id: uuid(), name: "index.tsx", isFolder: false ,content:`\n`}],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "Components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "HomePage",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "HomePage.tsx",
                  isFolder: false,
                  content: ``,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "interface",
      isFolder: true,
      children: [{ id: uuid(), name: "index.tsx", isFolder: false ,content:`\n`}],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
    },
    {
      id: uuid(),
      name: "App.jsx",
      isFolder: false,
      content: `import './App.css'
import OpenFileTap from './Components/openFileTap'
import RecursiveComponent from './Components/RecursiveComponent'
import { fileTree } from './data/fileTree'


function App() {

  return (
    <div className='flex h-screen border-b-[1px] border-b-white'>
      <div className='border-r-white border-r-[1px]  w-60 py-3 '>
        <RecursiveComponent fileTree={fileTree}/>
      </div>
      <OpenFileTap/>
    </div>
  )
}

export default App
`,
    },
    {
      id: uuid(),
      name: "main.tsx",
      isFolder: false,
      content: `
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  store  from './app/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App/>
    </Provider>,
)
`,
    },
  ],
};
