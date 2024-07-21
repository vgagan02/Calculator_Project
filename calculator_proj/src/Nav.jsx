import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="topcard">
            <div className="heading"><h1>Calculator Website</h1></div>
            <div className="options">
                <Link className="option" to='/about'>About</Link>
                <Link className="option" to='/calculator'>Calculator</Link>
            </div>
        </div>
    );
}

export default Nav;