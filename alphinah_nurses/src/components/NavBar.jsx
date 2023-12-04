import { Link } from "react-router-dom";

import React, {useState} from "react";  

const NavBar = () =>{

    const [isSmall,setIsSmall]= useState(false);
    return(
        <nav>
            <ul className={isSmall? "nav-links-small" : "nav-links"}
            onClick={()=>setIsSmall(false)}
            >
                <li>
                    <Link className="home" to="/">HomePage</Link>
                </li>
                <li>
                    <Link className="Submit-Timesheet" to="/Submit-Timesheet">Submit Timesheet</Link>                   
                </li>
                <li>
                    <Link className="Approve-Timesheet" to="/Approve-Timesheets">Approve TimeSheet</Link>
                </li>
                <li>
                    <Link className="Send-Invoices" to="/Send-Invoices">Send Invoices</Link>
                </li>
                <li>
                    <Link className="contactPage" to="/contactPage">Contact Us</Link>
                </li>

            </ul>
                  <button className="small-menu-icon"
                  onClick={()=>setIsSmall(!isSmall)}
                  >
            {isSmall? <i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}<p>menu</p>
        </button>

        

        </nav>

    )
}
export default NavBar;