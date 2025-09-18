import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Categories } from "./Categories";
import { AppLayout } from "./layout/AppLayout";
import { Home } from "./Home";
import { Signup } from "./Account/Signup";
import { Login } from "./Account/Login";
import { SemOneSubject } from "./Sem/SemOneSubject";
import { SemTwoSubject } from "./Sem/SemTwoSubject";
import { SemThreeSubject } from "./Sem/SemThreeSubject";
import { Topic } from "./Topic/Topic";
import { HtmlTopic } from "./Topic/HtmlTopic";
import { CssTopic } from "./Topic/CssTopic";
import { CodeTopic } from "./Topic/CodeTopic";
import { JavascriptTopic } from "./Topic/JavascriptTopic";
import { CTopic } from "./Topic/CTopic";
import { DbmsTopic } from "./Topic/DbmsTopic";
import { CppTopic } from "./Topic/cppTopic";
import { JavaTopic } from "./Topic/JavaTopic";
import { PythonTopic } from "./Topic/PythonTopic";
import { Videos } from "./Videos";
import { AboutUs } from "./Footers/AboutUs";
import { Help } from "./Footers/Help";
import { Contact } from "./Footers/Contact";
import { useEffect, useState } from "react";

export const ProjectMain = () =>{

  const body=document.querySelector('body')

  const [theme,setTheme] = useState("light");
  useEffect(()=>{
    const matchMedia = window.matchMedia("(prefers-color-scheme : dark)");

    const setInitialTheme = () =>{
      setTheme(matchMedia.matches ? "dark" : "light");
    }
    
    setInitialTheme();
    const themeChangeListener = (e) =>{
      setTheme(e.matches ? "dark" : "light");
    }

    matchMedia.addEventListener("change", themeChangeListener)
    

    return()=>{
      matchMedia.removeEventListener("change", themeChangeListener);
    }
  },[])

  if(theme==="dark"){
    body.style.backgroundColor="black"
    body.style.color="white";
  }
  else if(theme === "light"){
    body.style.backgroundColor="white"
    body.style.color="black";
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/categories",
          element:<Categories/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/Sem1/subject",
          element:<SemOneSubject/>
        },
        {
          path:"/Sem2/subject",
          element:<SemTwoSubject/>
        },
        {
          path:"/Sem3/subject",
          element:<SemThreeSubject/>
        },
        {
          path:"/topic",
          element:<Topic/>
        },
        {
          path:"/html/topic",
          element:<HtmlTopic/>
        },
        {
          path:"/css/topic",
          element:<CssTopic/>
        },
        {
          path:"/code/topic",
          element:<CodeTopic/>
        },
        {
          path:"/javascript/topic",
          element:<JavascriptTopic/>
        },
        {
          path:"/c/topic",
          element:<CTopic/>
        },
        {
          path:"/dbms/topic",
          element:<DbmsTopic/>
        },
        {
          path:"/cpp/topic",
          element:<CppTopic/>
        },
        {
          path:"/java/topic",
          element:<JavaTopic/>
        },
        {
          path:"/python/topic",
          element:<PythonTopic/>
        },
        {
          path:"/videos",
          element:<Videos/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/help",
          element:<Help/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        // {
        //   path: "/post",
        //   element: <Posts/>
        // } 
      ]
    }
  ])
 
 return (
 <>
 <RouterProvider router={router} theme={theme}  />
 </>  
 )
}