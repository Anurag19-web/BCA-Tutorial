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
          element:<Categories theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/signup",
          element:<Signup theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/login",
          element:<Login theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/Sem1/subject",
          element:<SemOneSubject theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/Sem2/subject",
          element:<SemTwoSubject theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/Sem3/subject",
          element:<SemThreeSubject theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/html/topic",
          element:<HtmlTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/css/topic",
          element:<CssTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/code/topic",
          element:<CodeTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/javascript/topic",
          element:<JavascriptTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/c/topic",
          element:<CTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/dbms/topic",
          element:<DbmsTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/cpp/topic",
          element:<CppTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/java/topic",
          element:<JavaTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/python/topic",
          element:<PythonTopic theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/videos",
          element:<Videos theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/about",
          element:<AboutUs theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/help",
          element:<Help theme={theme} setTheme={setTheme}/>
        },
        {
          path:"/contact",
          element:<Contact theme={theme} setTheme={setTheme}/>
        },
      ]
    }
  ])
 
 return (
 <>
 <RouterProvider router={router} theme={theme}  />
 </>  
 )
}