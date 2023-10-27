import React from "react";
import { Link, useHistory } from "react-router-dom";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the #navigation div)
*/
const Navigation = () => {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/settings?someview=sample1");
  //   setTimeout(() => {
  //     history.push("settings?someview=sample1&anotherview=sample2")
  //   }, 2000);
  // }
  
  return (
  <div id="navigation">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/settings">Settings</Link>
    <Link to="/login">Login</Link>
    {/* <button onClick={handleClick} type="button">Redirect me</button> */}

    <div id="launchpad"></div> 
  </div>
  )
};

export default Navigation;
