import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="first-page-container">
            <h1 className="first-page-h1"><Link to="/" id="asos-brand">asos</Link></h1>
            <div className="first-page-images-container">
                <Link to="/men/category"><img title="Men" className="first-page-image" src="https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="man-model"></img></Link>
                <Link to="/women/category"><img title="Women" className="first-page-image" src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="women-model"></img></Link>
            </div>
        </div>
    )
}

export default Header;