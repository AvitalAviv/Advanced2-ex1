import React from "react";
import { Link } from 'react-router-dom';
import logo from '../logo.png';

/**
 * the function return about page.
 * @returns about page
 */
function about() {
    return (
        <div className="wrapper wrapper-about">
            <div className="logo"> <img src={logo} alt=""></img> </div>
            <div className="text-center mt-4 name"> TalkToMe </div>
            <div> <center><h3>Advanced programming 2</h3><br></br>
                By Omer Aplatony and Avital Aviv
                <br></br><br></br>
                We hope you enjoyed the App!
                <br></br>
                Press "sign in" button<br></br><br></br></center>
            </div>
            <div className="btn"><center><Link to="/home" >sign in</Link></center></div>

            <br></br>
        </div >
    )
}
export default about;