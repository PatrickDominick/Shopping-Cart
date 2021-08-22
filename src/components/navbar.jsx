import React from "react";

export default NavBar;

const NavBar = ({ totalCounters }) => {
    return (
        <div className = "navbar ">
            <div className="navbar-brand">
                <i className= "fa fa-shopping-cart fa-lg m-2"/>
                <span className = "badge badge-pill badge-info m-2" style = {{ width: 50 }}>
                    {totalCounters}
                </span>
            </div>
        </div>
    )
}