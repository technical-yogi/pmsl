import React from "react";
import history from "../history"
import Navbar from "./Navbar";



const Dashboard = () => {
    React.useEffect(()=>{
        if (!localStorage.getItem("token")) {
            history.push("/");
          }
    },[])
  return(
      <div>
          <Navbar/>
      </div>
  );
};
export default Dashboard;
