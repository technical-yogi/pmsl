import React from 'react'
import history from "../history";

const Signout = ()=> {
    return (
        <div>
        {localStorage.removeItem("token")}
        {history.push("/")}
        </div>
        
    )
}
export default Signout;