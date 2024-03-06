import React from "react";
import{createRoot} from "react-dom/client"
const root =document.getElementById("root")
import "./style.css"

import Header from './comp/Header.jsx'
import Main1 from './comp/Main1.jsx'
import Main2 from './comp/Main2.jsx'


createRoot(root).render(


 <div>

  <Header />
  <Main1 />
  <Main2 />

 </div>

  
  
)
export default App ;
