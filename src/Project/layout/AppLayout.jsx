import { Outlet } from "react-router-dom"
import { Footer } from "../FooterPart"
import { Header } from "../HeaderPart"


export const AppLayout = () =>{
    return (
        <>
        <Header/>
        <br/>
        <br/>
        <Outlet/>
        <br/>
        <Footer/>
        </>
    )
}