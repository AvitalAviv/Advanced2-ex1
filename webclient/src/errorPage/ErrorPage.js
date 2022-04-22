import React from "react";
import {Link} from 'react-router-dom';

function ErrorPage(){
    return (
        <div>
            <div>Error, Page not found.</div>
            <Link to = "/">Go to sign in</Link>
        </div>
    )
}
export default ErrorPage;