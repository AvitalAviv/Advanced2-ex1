import React from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.png';

function about(){
    return (
        <div className="wrapper">
                <div className="logo"> <img src={logo} alt=""></img> </div>
                <div className="text-center mt-4 name"> TalkToMe </div>
                <div>
                    Advanced programming 2 project <br></br>
                    built by Omer Aplatony and Avital Aviv
                    <br></br>
                    We hope you enjoyed the App!
                    <br></br>
                    Please press "Back to sign in" button.

                </div>
                <Link to = "/home" class="btn mt-3" >Back to sign in</Link>
                <br></br>
            </div >   
    )
}
export default about;