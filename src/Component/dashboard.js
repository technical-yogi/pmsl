import React from "react";
import history from "../history"
import Navbar from "./Navbar";
import vote from "../images/vote.jpg";


const Dashboard = () => {
    const imgurl = "https://www.ubisecure.com/wp-content/uploads/2019/12/General-Election-piece.png"
    React.useEffect(()=>{
        if (!localStorage.getItem("token")) {
            history.push("/");
          }
    },[])
  return(
      <div>
          <Navbar/>
          <img src={imgurl} alt="voting image" width="100%">

          </img>
      </div>
  );
};
export default Dashboard;
