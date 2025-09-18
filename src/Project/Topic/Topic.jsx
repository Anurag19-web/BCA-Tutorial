import { NavLink } from "react-router-dom"

export const Topic = () =>{
    return (
        <>
        <div className="Chapter-head-div">
            <h1 className="Chapter-head">Select your chapter</h1>
            <p className="Chapter-para">Select a chapter to start studying</p>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">chapter 1</h1>
            <p className="Chapter-div-para">Learn the basics of this Chapter.</p>
            <div className="Chapter-div-btn-div">
            <NavLink to="/videos" className="Chapter-div-btn">start Learning</NavLink>
            </div>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">chapter 2</h1>
            <p className="Chapter-div-para">Learn the basics of this Chapter.</p>
            <div className="Chapter-div-btn-div">
            <NavLink to="/videos" className="Chapter-div-btn">start Learning</NavLink>
            </div>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">chapter 3</h1>
            <p className="Chapter-div-para">Learn the basics of this Chapter 3</p>
            <div className="Chapter-div-btn-div">
            <NavLink to="/videos" className="Chapter-div-btn">start Learning</NavLink>
            </div>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">chapter 4</h1>
            <p className="Chapter-div-para">Learn the basics of this Chapter 4</p>
            <div className="Chapter-div-btn-div">
            <NavLink to="/videos" className="Chapter-div-btn">start Learning</NavLink>
            </div>
        </div>
        </>
    )
}